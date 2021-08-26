import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div>
          <div>
            <div>
              <h5>Footer Content</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum.
              </p>
            </div>

            <hr />

            <div>
              <h5>About</h5>

              <ul>
                <li>
                  <p>
                    <a>PROJECTS</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a>ABOUT US</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a>BLOG</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a>AWARDS</a>
                  </p>
                </li>
              </ul>
            </div>

            <hr />

            <div>
              <h5>Address</h5>

              <ul>
                <li>
                  <p>New York, NY 10012, US</p>
                </li>
                <li>
                  <p>info@example.com</p>
                </li>
                <li>
                  <p>+ 01 234 567 88</p>
                </li>
                <li>
                  <p>+ 01 234 567 89</p>
                </li>
              </ul>
            </div>

            <hr />

            <div>
              <h5>Follow Us</h5>
            </div>
          </div>
        </div>

        <div>
          © 2020 Copyright:
          <a> Where Dreams Connect</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
