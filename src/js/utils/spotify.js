import axios from 'axios';
const SpotifyWebApi = require('spotify-web-api-node');

const TOKEN = "BQBe_NXCrD4qmMqrP6e65j8cWcNxvuZNwiatYEWXi7WDvumv0LLjJP88Yk-1WqOzZ74t5-nc_oN8taALsMJofIvKsXy60pgdsyk0GG7u4nDAUcW-6TrtZ5GPT8t0HTbgQRmle5WFeYv2khvXm8hzd_sOo8C2AKTrYdrQpEFgdb9EaNG7EYDQ1tchvlV-y2Vd_Tp-XnQlZK5jEDUq-jFjSDoej5NBFG4NO8ZG-mrvfzD6tjFDhehBJRhRZnYaTx2rmvIuAgf6Css";

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
}

