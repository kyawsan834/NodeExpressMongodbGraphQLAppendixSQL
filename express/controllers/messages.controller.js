const path = require("path");

function getMessages(req, res) {
  const imgPath = path.join(__dirname, "..", "public", "skimountain.jpg");
  console.log(imgPath);
  res.sendFile(imgPath);
}

function postMessages(req, res) {
  res.send("update messages . . . ");
}

module.exports = {
  getMessages,
  postMessages,
};
