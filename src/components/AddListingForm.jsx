import React, { Component } from "react";
import { Form, Container, Button, Badge, Col } from "react-bootstrap";
import axios from "axios";

import Sections from "./Sections";

import MultiSelectDeleteField from "./MultiSelectDeleteField";

class AddListingForm extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.classicDataHandler = this.classicDataHandler.bind(this);
  }
  state = {
    projectTitle: "",
    projectTagline: "",
    category: "",
    description: "",
    tags: "",
    AreasLookingForHelpFrom: "",
    getData: "",
    type: "",
    city: "",
    website: "",
    video1: "",
    video2: "",
    sections: [
      "Info",
      "More Info",
      "Project Details",
      "Primary Listing Details",
      "Media",
      "Frequently Asked Questions",
      "Social Media",
      "Wish Lists",
    ],
    projectCategory: [
      "Arts & Entertainment",
      "Education & Training",
      "Faith & Spirituality",
      "Family/Children",
      "Finance & Legal",
      "Food & Beverage",
      "Health & Beauty",
      "Internet & Marketing",
      "Non-Profit",
      "Pets & Animals",
      "Real Estate & Accommodations",
      "Services & Shopping",
      "Travel & Tourism",
      "Others",
    ],
    areasLookingForHelpFrom: ["Locally", "Same Country", "Anywhere"],
    lookingFor: [
      "Leaders",
      "Experts",
      "Volunteers",
      "Ambassadors",
      "Financial",
      "Legal",
      "Technical",
      "Mentors",
      "Other Resources",
    ],
    badgesLookingFor: [],
    typeOfProject: ["Personal", "Professional", "Non-Profit"],
    socialMedia: ["Facebook", "Instagram", "LinkedIn", "Twitter", "Youtube"],
    wishList: [],
  };

  getData(childData) {
    this.setState({ getData: childData });
  }

  classicDataHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const details = {
      ProjectTitle: this.state.projectTitle,
      ProjectTagline: this.state.projectTagline,
      Category: this.state.category,
      Description: this.state.description,
      TagsOrKeywords: this.state.tags,
      AreasLookingForHelpFrom: this.state.areasLookingForHelpFrom,
      LookingFor: this.state.getData,
      TypeOfProject: this.state.type,
      City: this.state.city,
      Website: this.state.website,
      ProjectVideo: this.state.video1,
      AdditionalVideo: this.state.video2,
    };
    axios
      .post("http://localhost:5000/addListing", details)
      .then((res) => console.log(res.data, details));
    console.log(details);
  }
  render() {
    return (
      <Container>
        <div className="container col-5">
          <Form onSubmit={this.onSubmit}>
            <Sections sectionName={this.state.sections[0]}>
              <Form.Group>
                <Form.Group controlId="projectTitle">
                  <Form.Label>
                    <b>Project Title</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="projectTitle"
                    value={this.state.projectTitle}
                    onChange={this.classicDataHandler}
                  />
                </Form.Group>
                <Form.Group controlId="projectTagline">
                  <Form.Label>
                    <b>Project Tagline</b>
                  </Form.Label>
                  <Form.Control
                    name="projectTagline"
                    type="text"
                    value={this.state.projectTagline}
                    onChange={this.classicDataHandler}
                  />
                </Form.Group>{" "}
                <Form.Group controlId="category">
                  <Form.Label>
                    <b>Category</b>
                  </Form.Label>
                  <Form.Group>
                    <Form.Control
                      size="sm"
                      as="select"
                      name="category"
                      value={this.state.category}
                      onChange={this.classicDataHandler}
                    >
                      {this.state.projectCategory.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Group>
              </Form.Group>
            </Sections>

            <Sections sectionName={this.state.sections[1]}>
              <Form.Group controlId="description">
                <Form.Label>
                  <b>Description</b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="description"
                  value={this.state.description}
                  onChange={this.classicDataHandler}
                />
              </Form.Group>
              <Form.Group controlId="tagsOrKeywords">
                <Form.Label>
                  <b>Tags Or Keywords</b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="tags"
                  value={this.state.tags}
                  onChange={this.classicDataHandler}
                />
              </Form.Group>
            </Sections>

            <Sections sectionName={this.state.sections[2]}>
              <Form.Group>
                <Form.Label>
                  <b>Areas Looking For Help From</b>
                </Form.Label>
                <Form.Control
                  size="sm"
                  as="select"
                  name="AreasLookingForHelpFrom"
                  value={this.state.AreasLookingForHelpFrom}
                  onChange={this.classicDataHandler}
                >
                  {this.state.areasLookingForHelpFrom.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <MultiSelectDeleteField
                fieldName="Looking For"
                array1={this.state.lookingFor}
                array2={this.state.badgesLookingFor}
                getData={this.getData}
              />

              <Form.Group controlId="typeOfProject">
                <Form.Label>
                  <b>Type Of Project</b>
                </Form.Label>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    as="select"
                    name="type"
                    value={this.state.type}
                    onChange={this.classicDataHandler}
                  >
                    {this.state.typeOfProject.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form.Group>
            </Sections>
            <Sections sectionName={this.state.sections[3]}>
              <Form.Group controlId="City">
                <Form.Label>
                  <b>City</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.classicDataHandler}
                />
              </Form.Group>
              <Form.Group controlId="website">
                <Form.Label>
                  <b>Website</b>
                </Form.Label>
                <Form.Control
                  type="url"
                  name="website"
                  value={this.state.website}
                  onChange={this.classicDataHandler}
                />
              </Form.Group>
            </Sections>
            <Sections sectionName={this.state.sections[4]}>
              <Form.Group>
                <Form.Row controlId="video">
                  <Col>
                    <Form.Label>
                      <b>Project Video</b>
                    </Form.Label>
                    <Form.Control
                      type="url"
                      name="video1"
                      value={this.state.video1}
                      onChange={this.classicDataHandler}
                    />
                  </Col>{" "}
                  <Col>
                    <Form.Label>
                      <b>Additional Video</b>
                    </Form.Label>
                    <Form.Control
                      type="url"
                      name="video2"
                      value={this.state.video2}
                      onChange={this.classicDataHandler}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Sections>
            <Sections sectionName={this.state.sections[5]}>
              <Form.Group>
                <Form.Label>
                  <b>Frequently Asked Questions</b>
                </Form.Label>
                <Form.Group controlId="frequentlyAskedQuestion">
                  <Form.Control type="text" placeholder="Question" />
                </Form.Group>
                <Form.Group controlId="answer">
                  <Form.Control type="text" placeholder="Answer" />
                </Form.Group>{" "}
                <Form.Group>
                  {" "}
                  <Button variant="primary">
                    <Badge variant="primary">Click to Add</Badge>{" "}
                  </Button>{" "}
                </Form.Group>
              </Form.Group>
            </Sections>
            <Sections sectionName={this.state.sections[6]}>
              <Form.Group>
                <Form.Group>
                  <Form.Label>
                    <b>Social Media</b>
                  </Form.Label>
                  <Form.Group>
                    <Form.Control size="sm" as="select">
                      {this.state.socialMedia.map((type) => (
                        <option>{type}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Control type="text" placeholder="Social Media" />
                  <Button variant="primary">
                    <Badge variant="primary">Add</Badge>{" "}
                  </Button>{" "}
                </Form.Group>
              </Form.Group>
            </Sections>
            <Sections sectionName={this.state.sections[7]}>
              <Form.Group>
                <Form.Label>
                  <b>Resource List</b>
                </Form.Label>

                <Form.Group>
                  <Form.Group>
                    <Form.Control type="text" />
                    <Button>-</Button>
                  </Form.Group>
                  <Button type="submit">+ Wishlist</Button>
                </Form.Group>
              </Form.Group>
            </Sections>

            <button type="submit">Submit</button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default AddListingForm;
