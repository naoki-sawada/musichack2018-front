import axios from 'axios';
const SpotifyWebApi = require('spotify-web-api-node');

const TOKEN = "BQCpXqoieOrSfu4spk2RcsoefpLuumhmy0XgTmSv5_SalTHc4KJme0SYh1RL3c72bZE_i9rTAfK1HdTa-goOi7uMS5ExIed7LxszRNFB6CsJnn7DIGLYFn_1iD3TwyNNQ9OtASYZFaughbKVRYf-JtQ";

export default class Spotify {
  constructor() {
    this.spotify = new SpotifyWebApi({
      clientId : 'be50c52540294304a7e56575f14f3fee',
      clientSecret : '53390f264f8047fe9507a8e269b10d1f',
    });
  }

  getNowPlay(callback) {
    const ax2 = axios.create({
      method: 'GET',
      baseURL: 'https://api.spotify.com/v1/me/player',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    ax2.get('/', {})
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  play(context_uri) {
    // const ax2 = axios.create({
    //   method: 'PUT',
    //   baseURL: 'https://api.spotify.com/v1/me/player/play',
    //   headers: {
    //     'Authorization': `Bearer ${TOKEN}`,
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   },
    //   data: {
    //     "context_uri": context_uri,
    //   },
    // });

    // ax2.put('/', {})
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    const ax2 = axios.create({
      method: 'POST',
      baseURL: 'http://localhost:3080/message',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: {
        "context_uri": context_uri,
      },
    });

    ax2.post('/', {})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  voice(text, callback) {
    const ax2 = axios.create({
      method: 'POST',
      baseURL: 'http://localhost:3080/voice',
      data: {
        text,
      },
    });

    ax2.post('/', {})
    .then(function (response) {
      console.log(response);
      callback();
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

