// myNotificationLibrary.js
const axios = require('axios');

class MyNotificationLibrary {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  sendNotification(number, type, to, message) {
    const data = JSON.stringify({
      "number": number,
      "type": type,
      "to": to,
      "message": message
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.apiUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    return axios.request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}

module.exports = MyNotificationLibrary;
