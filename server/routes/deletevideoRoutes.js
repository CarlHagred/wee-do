import open from "open"; 

import { google } from "googleapis";

const service = google.youtube('v3');

const OAuth2 = google.auth.OAuth2;

//import { gapi } from 'gapi';

//const gapi = require('gapi');

import pkg from 'gapi';
const { gapi } = pkg;


  /**
   * Sample JavaScript code for youtube.videos.delete
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  const authenticate = () => {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  const loadClient = () => {
    gapi.client.setApiKey("AIzaSyCCp8P3NT_n7Vmi99R8bH3MzsIjymKiSjc");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  export const execute = videoId => {
    authenticate().then(loadClient);
    return gapi.client.youtube.videos.delete({
      "id": videoId
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "531318798239-9e97hc1poeikk0e1anabmotmcehn9eq8.apps.googleusercontent.com"});
  });

