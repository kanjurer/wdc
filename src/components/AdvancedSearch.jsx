import React, { Component } from "react";
import MultiSelectDeleteField from "./MultiSelectDeleteField";

class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }
  state = {
    lookingFor: [
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
    badgesLookingFor: [],
  };

  getData(childData) {
    this.setState({ getData: childData });
  }

  render() {
    return (
      <div>
        <span className="display-4 text-center">Advanced Search</span>
        <MultiSelectDeleteField
          fieldName="Category"
          array1={this.state.lookingFor}
          array2={this.state.badgesLookingFor}
          getData={this.getData}
        />
      </div>
    );
  }
}

export default AdvancedSearch;
