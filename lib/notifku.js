// myNotificationLibrary.js
const axios = require("axios");

async function sendNotification(message) {
  const data = JSON.stringify({
    number: "555",
    type: "chat",
    to: "6285255646434@s.whatsapp.net",
    message: message,
  });

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://notifku.my.id/send",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

module.exports = sendNotification;
