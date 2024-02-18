const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const MyNotificationLibrary = require("./lib/notifku");

const notificationApiUrl = "https://notifku.my.id/send";
const notificationClient = new MyNotificationLibrary(notificationApiUrl);

app.get("/", (req, res) => {
  res.send("Webhook running...");
});

app.post("/webhook", (req, res) => {
  const data = req.body;
  console.log(data);
  const message = `*Donasi Baru Diterima 🎉*\n\n*ID*: ${data.id}\n*Tipe*: ${data.type}\n*Jumlah*: Rp ${data.amount_raw}\n*Potongan*: Rp ${data.cut}\n*Nama*: ${data.donator_name}\n*Pesan*: ${data.message}`;

  async function sendNotification() {
  try {
    const result = await notificationClient.sendNotification(
      "1234567890",
      "chat",
      "6285255646434",
      message
    );
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
sendNotification();

  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
