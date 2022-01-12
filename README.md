# WeeDo

WeeDo is a collaboration between the Mobile Hospital Team and Malmö University.</br>

## General Information

WeeDo is a web application developed by a group of System developer and Information Architecture students in the combined Degree Project course ( [DA385A](https://utbildningsinfo.mau.se/kurs/da385a/kursplan/20212) and [DA392A](https://utbildningsinfo.mau.se/kurs/da392a/kursplan/20212) ). The purpose of the web application is to encourage patients to perform exercises from home with the help of video instructions and statistics while staff can monitor the patients' progress.
</br>

If you want to know more about Malmö University and about the two programs, follow
the links below:
</br>

- [Malmö University](https://mau.se/)
- [Information architecture](https://mau.se/sok-utbildning/program/tgiaa/)
- [System development](https://mau.se/sok-utbildning/program/tgsya/)

## Technologies used

This project was created with [React](https://reactjs.org) and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Database

- [MongoDB](http://www.mongodb.com)

### Third party API used

- [YouTube Data API API v3]

### Libraries

- [Axios](https://github.com/axios/axios) (for AJAX requests)
- [React Router](https://reactrouter.com) (Routing library for page navigation)
- [Styled Components](https://styled-components.com) (styled-components is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript.)

### Dependencies

        "@reonomy/react-confetti-explosion": "^1.0.3",
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "axios": "^0.22.0",
        "chart.js": "^3.3.0",
        "destyle.css": "^3.0.0",
        "hamburger-react": "^2.4.1",
        "moment": "^2.29.1",
        "react": "^17.0.2",
        "react-animations": "^1.0.0",
        "react-calendar": "^3.5.0",
        "react-chartjs-2": "^3.0.3",
        "react-dom": "^17.0.2",
        "react-hook-form": "^7.19.5",
        "react-icons": "^4.3.1",
        "react-player": "^2.9.0",
        "react-qr-code": "^2.0.2",
        "react-router-dom": "^5.3.0",
        "react-router-hash-link": "^2.4.3",
        "react-scripts": "4.0.3",
        "react-select": "^5.2.1",
        "react-st-modal": "^1.1.3",
        "react-tooltip": "^4.2.21",
        "react-web-qr-reader": "^1.0.4",
        "styled-components": "^5.3.1",

## Features

The web application features two different interfaces</br>

### Admin

#### Login

#### User Guide

#### Help

#### About WeeDo

#### Register a new patient

#### Search patients

#### Show patient statistics

- Current exercises
- Calendar view
- Diagram
- Toggle patient active/unactive
- Add new exercises

#### Upload a new exercise

#### Search exercise

#### View exercise

- Print card with exercise + QR-code
- Delete exercise

### Patient

#### Login

#### Help

#### About WeeDo

#### My exercises

- Choose exercise
- Scan new exercise with QR-code

#### View exercise

- Watch video
- View sets, reps and amount of times of the exercise
- Mark exercise as completed - Confetti explosion for encouragement!

#### Statistics

- View statistics for completed exercises

## DEMO

- [Admin](https://weedo-v1.herokuapp.com/admin)
- [Client](https://weedo-v1.herokuapp.com)

## Setup

### Installing

```
$ git clone https://github.com/CarlHagred/wee-do
$ npm ci
```

#### Executing Program - Server

```
$ npm run dev
```

#### Executing Program - Client

```
$ cd client
$ npm start
```
