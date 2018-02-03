import axios from 'axios';

export default class DB {
  constructor() {
  }

  getPostList(callback) {
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

  addPost({ message, image, id }) {
    const ax2 = axios.create({
      method: 'POST',
      baseURL: 'http://13.115.254.67/Contribution/submit',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        message,
        image,
        id,
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

