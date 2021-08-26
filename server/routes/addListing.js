const router = require("express").Router();
let Listing = require("../models/listing.model");

router.route("/").post((req, res) => {
  const newListing = new Listing({
    ProjectTitle: req.body.ProjectTitle,
    ProjectTagline: req.body.ProjectTagline,
    Category: req.Category,
    Description: req.Description,
    TagsOrKeywords: req.TagsOrKeywords,
    AreasLookingForHelpFrom: req.AreasLookingForHelpFrom,
    LookingFor: req.LookingFor,
    TypeOfProject: req.TypeOfProject,
    City: req.City,
    Website: req.Website,
    ProjectVideo: req.ProjectVideo,
    AdditionalVideo: req.AdditionalVideo,
  });

  newListing
    .save()
    .then(() => res.send("added"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
