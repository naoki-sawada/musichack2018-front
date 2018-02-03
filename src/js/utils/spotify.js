import axios from 'axios';
const SpotifyWebApi = require('spotify-web-api-node');

const TOKEN = "BQDEKC7fU5yKYJxZ9i_NBYPcV2O2m_X4yjHOUvTAmzTp6qgaJfRvXM6S-e5Dt0U_I3zwErsnCmO2xdbLvFsOtWD0aJI6zSjf7MLLTh8EebcYcs1VZ29rkP2EklphSDgKcCSAgeuisjpIGs5L3RKUwHOh4AgOqzyocP1UnE_8apD_bJIJrUXvp2mt5ai8DQRCYsyw1B0U717w0xXUN1D0rAYujkfcomGhfxgqLFdcFNJlPR2ihViyVjJU1Vs8RyQKAHs_5Ist-Us";

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
    const ax2 = axios.create({
      method: 'PUT',
      baseURL: 'https://api.spotify.com/v1/me/player/play',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: {
        "context_uri": context_uri,
      },
    });

    ax2.put('/', {})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

