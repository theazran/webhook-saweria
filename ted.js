// yourMainApp.js


// Example usage
notificationClient
  .sendNotification("1234567890", "chat", "6285255646434", "hello")
  .then((result) => {
    console.log(JSON.stringify(result));
  })
  .catch((error) => {
    console.error(error);
  });
