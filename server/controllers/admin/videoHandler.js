import open from "open"; 

import { google } from "googleapis";

import multer from "multer"

import { v4 as uuid } from "uuid";

import { readFile } from "fs/promises"; 

import fs from "fs";

import Videos from "../../models/videos.js";

import dotenv from "dotenv";

import axios from "axios"; 
import { response } from "express";

const service = google.youtube('v3');

const OAuth2 = google.auth.OAuth2;


/**
 * @type {{
 *  web: {
 client_secret: string;
 client_id: string;
 redirect_uris: [string];
*  }
* }}
*/
const credentials = JSON.parse((await readFile('../server/credentials.json')).toString());

export const authorize = () => {
    
    const clientSecret = credentials.web.client_secret;
    
    const clientId = credentials.web.client_id;
    
    const redirectUrl = credentials.web.redirect_uris[0];
    
    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

    return oauth2Client;
};

export const redirectToLogin = async (oauth2Client, { filename, title, description }) => {

    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline', 
        scope: 'https://www.googleapis.com/auth/youtube.upload',
        state: JSON.stringify({
            filename, title, description
        })
    });

    open(authUrl);
};

export const uploadVideo = async (auth, { title, description, file }) => {

    await service.videos.insert({
        auth: auth,
        part: 'snippet,contentDetails,status',
        resource: {
            snippet: {
                title,
                description,
            },
            status: {
                privacyStatus: 'private'
            }
        },
        media: {
            body: file
        }
    });
    // Update the mongo after each upload.
    //UpdateDatabase(req, res); 
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './videos')
    },
    filename: function (req, file, cb) {

        cb(null, `${uuid()}_${file.originalname}`)
    }
});
export const fileToServer = () => {

    const uploader =  multer({ storage });

    return uploader.single('videoFile'); 

} 

export const verifyUser = async (request) => {
    const { file } = request;    

    if (file) {

        const { filename } = file;

        const { title, description } = request.body; 
        
        const oauth = authorize();

        await redirectToLogin(oauth, { filename, title, description });
    }
}

export const uploadAndCallback = async (request, response) => {

    const { code, state } = request.query;

    const { filename, title, description } = JSON.parse(state); 

    const oauth = authorize();

    const { tokens } = await oauth.getToken(code);

    oauth.setCredentials(tokens);

    await uploadVideo(oauth, {
        title,
        description,
        file: fs.createReadStream(`videos/${filename}`)
    })

    response.redirect("http://localhost:3000/success");
}

dotenv.config();

const url = process.env.FetchVidUrl;

export const UpdateDatabase = async (req, res) => {

    try 
    {
        const data = await axios.get(url);

        for (let i in data.data.items) 
        {
            const video = new Videos(
                {
                    videoId: data.data.items[i].contentDetails.videoId,
                    videoTitle: data.data.items[i].snippet.title,
                    description: data.data.items[i].snippet.description,
                    thumbnail: data.data.items[i].snippet.thumbnails.high.url,
                }
            );

            Videos.findOne({ videoId: video.videoId }, function (err, existingVideo) 
                {
                    if (existingVideo == null) video.save();
                }
            );
        }
        console.log('updated db from client side'); 
    } catch (error) 
    {
        res.send('Error occured while updating the db due to: ' + error.message);
    }
};

export const deleteFromYoutubePlaylist = async (req, res, videoId) => {
    const auth = authorize();

    const authUrl = auth.generateAuthUrl({
        scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
    });
    open(authUrl);

    //check req.query
    console.log('query printed: ' + req.query); 

    const { code } = req.query;
    
    //check code from the req.query 
    console.log('code printed: '+ code); // Can not find code from the req.query bcuz it is empty object

    //const { tokens } = await auth.getToken(code);

    //auth.setCredentials();

    // vars from .env will be used once the code succeeds 
    const PId = "PL8BorJT0TyU0-QbsIexh4INUkdcZ3r4QL";
    const part = "snippet"; 
    const key = "AIzaSyCCp8P3NT_n7Vmi99R8bH3MzsIjymKiSjc";

    const response = await service.playlistItems.list({part: part, playlistId: PId, key: key});
    
    //console.log(response.data.items); 
    let item;

    for(let i = 0; i < response.data.items.length; i++) {

        if(videoId == response.data.items[i].snippet.resourceId.videoId) {
                item = response.data.items[i]
        }
        }
        //console.log(item); 
        (item !== null) ? service.playlistItems.delete(auth, {id: item.snippet.resourceId.videoId }) : console.log('Not deleted'); 


//  Gapi google client browser side library for signing in and authentication 
//     return gapi.auth2.getAuthInstance()
//     .signIn({
//         scope: "https://www.googleapis.com/auth/youtube.force-ssl"
//     }).then(() =>
//     {
//         console.log("Sign-in successfull"); 
//         loadClientAndDeleteVideo(videoId); 

//     }, error => {
//         console.log("Error signing in due to: ", error);
//     })
// }
// const loadClientAndDeleteVideo = videoId => {
//     const api_key = process.env.API_KEY; 
//     gapi.client.setApiKey(api_key); 

//     const clientId = credentials.web.client_id;
//     gapi.load("client:auth2", () => {
//         gapi.auth2.init({
//             client_id: {clientId} 
//         })
//     }); 
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//     .then( () => {
//         console.log("Gapi client loaded"); 
//         return gapi.client.youtube.videos.delete({
//             "id": {videoId}
//         }).then( response => {
//             console.log("Video deleting response ", response.result); 
//         }, then( error => {
//             console.error("Executing the video deleting method error ", error); 
//         }))
//     }, error => {
//         console.log("Error loading GAPI client for API: ", error); 
//     })
}
