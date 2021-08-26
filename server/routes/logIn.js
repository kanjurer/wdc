const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").post((req, res) => {
  const user = new User({
    EmailAddress: req.body.EmailAddress,
    Password: req.body.Password,
  });

  user
    .find()
    .then((userFound) => {
      if (!userFound) {
        return res.status(404).end();
      }
      return res.status(200).json(userFound);
    })
    .catch((err) => res.status(400).json(err));
});
module.exports = router;
