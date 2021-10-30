/**
 * Denna js fil består av routes som laddar upp en ny övning till
 * weedos youtube kanal, och sparar övningen även i server lokalmappen. 
 * Längst ner postrequsten besvarar klienten om den vill ta till weedo databas
 * info (videoId, videoTitel, videoBeskrivning, bild) om den senaste inlagd övningen
 */

import express, { json } from 'express';
import { readFile } from "fs/promises"; 
import fs from "fs"; 
import multer from "multer"
import { v4 as uuid } from "uuid";  
import postVideoToDb from '../controllers/admin/RetrieveLastVideo.js';
import {
  authorize,
  redirectToLogin,
  uploadVideo
} from '../controllers/admin/UploadVideo.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './videos')
    },
    filename: function (req, file, cb) {

        cb(null, `${uuid()}_${file.originalname}`)
    }
});
const uploader = multer({ storage });

/**
 * @type {{
 *  web: {
 client_secret: string;
 client_id: string;
 redirect_uris: [string];
*  }
* }}
*/
const credentials = JSON.parse((await readFile("../server/credentials.json")).toString());

//post route to upload a video from the weedo front-end
router.post('/upload', uploader.single('videoFile'), async (req, res) => {

    const { file } = req;    

    if (file) {

        const { filename } = file;

        const { title, description } = req.body; 
        
        const oauth = authorize(credentials);

        await redirectToLogin(oauth, { filename, title, description });
    }
});

router.get('/oauth2callback?', async (req, res) =>{
    
    res.redirect("http://localhost:3000/success");

    const { code, state } = req.query;

    const { filename, title, description } = JSON.parse(state); 

    const oauth = authorize(credentials);

    const { tokens } = await oauth.getToken(code);

    oauth.setCredentials(tokens);

    await uploadVideo(oauth, {
        title,
        description,
        file: fs.createReadStream(`videos/${filename}`)
    })
});

router.post('/uploadDatabase', ()=>{
    postVideoToDb(); 
})
export default router; 