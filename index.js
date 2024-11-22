const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const {sendMessage} = require("./lib/notifku");

app.get("/", async (req, res) => {
  await sendMessage("6285255646434@s.whatsapp.net", "message");
  res.send("Home");
});

app.post("/webhook", async (req, res) => {
  const data = req.body; // Extracting data from the request body

  try {
    const result = await sendMessage("6285255646434@s.whatsapp.net", `*Donasi Baru Diterima 🎉*\n\n*ID*: ${data.id}\n*Tipe*: ${data.type}\n*Jumlah*: Rp ${data.amount_raw}\n*Potongan*: Rp ${data.cut}\n*Nama*: ${data.donator_name}\n*Pesan*: ${data.message}`);
    console.log(JSON.stringify(result)); // Log the successful result
  } catch (error) {
    console.error(error); // Log any errors that occur during sending the message
  }

  res.send("OK"); // Respond with "OK" to acknowledge receipt of the webhook
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
