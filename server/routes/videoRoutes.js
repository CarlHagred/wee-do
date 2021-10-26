import express, { json } from 'express';
import { readFile } from "fs/promises"; 
import fs from "fs"; 
import multer from "multer"
import { v4 as uuid } from "uuid";  

import {
  authorize,
  redirectToLogin,
  uploadVideo
} from '../controllers/admin/uploadNewVideo.js';

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
export default router; 