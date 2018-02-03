import axios from 'axios';
const SpotifyWebApi = require('spotify-web-api-node');

const TOKEN = "BQDAtn44xqrd5eXg6Rq-GUk1OeaFzSf3pCQAm8z4o6oh2A13wECE7O8UTRiQZ4HtahoOynUSUWGpKTsoMNruL_Q-6VFkpifNhI_vu8uIcYMBFMH_gTowPa4cdto_F-Yc2dw6MWt5J3vo07NRhCOM1AU";

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

