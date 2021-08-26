const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").post((req, res) => {
  const user = new User({
    EmailAddress: req.body.EmailAddress,
    Password: req.body.Password,
  });

  user
    .save()
    .then(() => res.send("signedUp"))
    .catch((err) => res.status(400).json(err));
});
module.exports = router;
