import open from "open"; 

import { google } from "googleapis";

import multer from "multer"

import { v4 as uuid } from "uuid";

import { readFile } from "fs/promises"; 

import fs from "fs";

import Videos from "../../models/videos.js";

import dotenv from "dotenv";

dotenv.config();

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

export const uploadVideo = async (auth, { title, description, file }, response) => {
    try {
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
    } catch (error) {
        process.on('unhandledRejection', (reason, promise) => {
            // do something
        });
        response.redirect("http://localhost:3000/error");
    }
    
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
    }, response)

    response.redirect("http://localhost:3000/success");  

    
}

export const UpdateDatabase = async (req, res) => {

    try 
    {
        service.playlistItems.list({part: "snippet", playlistId: process.env.playlistId, key: process.env.API_KEY, maxResults: 50}).then(res => 
        {
             
            for(let i in res.data.items) 
            {
                let vid = res.data.items[i].snippet.resourceId.videoId;
                let url = `http://img.youtube.com/vi/${vid}/mqdefault.jpg`;
                const video = new Videos({
                    videoId: vid, 
                    videoTitle: res.data.items[i].snippet.title, 
                    description: res.data.items[i].snippet.description,
                    thumbnail: url
                });
                Videos.findOne({ videoId: video.videoId }, function (err, existingVideo) 
                {
                    if(existingVideo === null) video.save(); 
                });
            }
        })   
    } catch (error) 
    {
        res.send('Error occured while updating the db due to: ' + error.message);
    }
};