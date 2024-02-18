const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const sendNotification = require("./lib/notifku");

app.get("/", async (req, res) => {
  await sendNotification("message");
  res.send("Home");
});

app.post("/webhook", async (req, res) => {
  const data = req.body;
  console.log(data);
  const message = `*Donasi Baru Diterima 🎉*\n\n*ID*: ${data.id}\n*Tipe*: ${data.type}\n*Jumlah*: Rp ${data.amount_raw}\n*Potongan*: Rp ${data.cut}\n*Nama*: ${data.donator_name}\n*Pesan*: ${data.message}`;

  await sendNotification();
  await sendNotification(message)
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((error) => {
      console.error(error);
    });

  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
