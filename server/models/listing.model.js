const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  ProjectTitle: {
    type: String,
    required: true,
    minlength: 5,
  },
  ProjectTagline: {
    type: String,
  },
  Category: { type: String },
  Description: { type: String },
  TagsOrKeywords: { type: String },
  AreasLookingForHelpFrom: { type: String },
  LookingFor: { type: Array },
  TypeOfProject: { type: String },
  City: { type: String },
  Website: { type: String },
  ProjectVideo: { type: String },
  AdditionalVideo: { type: String },
  FrequentlyAskedQuestions: { type: Array },
  SocialMedia: { type: Array },
  ResourceList: { type: String },
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
