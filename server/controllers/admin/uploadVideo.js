import open from "open"; 

import { google } from "googleapis";

import updateDb from './updateDatabase.js';

const service = google.youtube('v3');

const OAuth2 = google.auth.OAuth2;
 

export const authorize = credentials => {
    
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
    updateDb(); 
}

