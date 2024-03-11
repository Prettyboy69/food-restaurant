import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="social">
        <div className="container text-center">
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://img.icons8.com/fluent/50/000000/facebook-new.png"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://img.icons8.com/fluent/48/000000/twitter.png"
                  alt="Twitter"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- social Section Ends Here --> */}

      {/* <!-- footer Section Starts Here --> */}
      <section className="footer">
        <div className="container text-center">
          <p>
            All rights reserved. Designed By <a href="#">lordpretty</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
