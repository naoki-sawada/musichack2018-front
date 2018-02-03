import axios from 'axios';
const SpotifyWebApi = require('spotify-web-api-node');

const TOKEN = "BQCkNUmIycf1htMp-zTRPLo6YZM6J4IIRfkByt7nR7HNkqb9WSeZDarTkzRMHK4Iw0q8p_Pq_PdnU5SEVReOgrQUbhsfwynphLm2mB-fmZfrYOY8zQFkHlI1SNxx93O4lyVWCirRVDQY_8P0jO0";

export default class Spotify {
  constructor() {
    this.spotify = new SpotifyWebApi({
      clientId : 'be50c52540294304a7e56575f14f3fee',
      clientSecret : '53390f264f8047fe9507a8e269b10d1f',
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

