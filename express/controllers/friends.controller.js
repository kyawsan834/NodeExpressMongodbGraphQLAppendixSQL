const model = require("../models/friends.model");

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendIds = Number(req.params.friendId);
  const friend = model[friendIds];
  if (model) {
    res.status(200).json(friend);
    // console.log(model.length);
  } else if (friendIds !== Number()) {
    res.status(404).json({
      error: "id should be number",
    });
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }

  console.log(friendIds);

  console.log("hay this is code ", friend);
}

function postNewFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Friend name is missing",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  model.push(newFriend);

  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriend,
  postNewFriend,
};
