import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import axios from 'axios';


const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},
}); //api와 통신하는 baseURL

const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>

    <App youtube = {youtube}/>

  </React.StrictMode>,
  document.getElementById('root')
);

