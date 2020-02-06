import React from "react";
import "../Styles/Testimonials.css";
import client1 from "../Images/client1.jpg";
import client2 from "../Images/client2.jpg";
import client3 from "../Images/client3.jpg";

class Testimonials extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="testimonial-section" >

          <div className="testimonials">
          <h1>Testimonials</h1>
          </div>          


          <div className="card-columns testimonial-cards">
            <div className="card">
              <img
                src={client1}
                className="card-img-top client-image"
                alt="Our client"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Card title that wraps to a new line
                </h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card">
              <img
                src={client2}
                className="card-img-top client-image"
                alt="Our client"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card bg-primary text-white text-center p-3">
              <blockquote className="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat.
                </p>
                <footer className="blockquote-footer text-white">
                  <small>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has a regular title and short paragraphy of text
                  below it.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={client3}
                className="card-img-top client-image"
                alt="Our client"
              />
            </div>
            <div className="card p-3 text-right">
              <blockquote className="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is another card with title and supporting text below.
                  This card has some additional content to make it slightly
                  taller overall.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,0L40,26.7C80,53,160,107,240,149.3C320,192,400,224,480,229.3C560,235,640,213,720,192C800,171,880,149,960,144C1040,139,1120,149,1200,170.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </React.Fragment>
    );
  }
}

export default Testimonials;
