import React, { Component } from "react";
import Header from '../common/Header';
import  image  from "../assets/img/header-bg.jpg";

class About extends Component {
  render() {
    return (
      <div>
      <div>
         <Header
          title="About us"
          subtitle="It's a really great story!"
         
          showButton={false}
          image = {image}
          
        />
      </div>
           
           
           <div>
              <section id="about">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h2 className="section-heading text-uppercase">About</h2>
                      <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet
                      </h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="timeline">
                        <li>
                          <div className="timeline-image">
                            <img
                              class="rounded-circle img-fluid"
                              src="img/about/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h4>2009-2011</h4>
                              <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body">
                              <p className="text-muted">
                                Lorem ipsum dolor sit amet , consectetur{" "}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-inverted">
                          <div className="timeline-image">
                            <img
                              class="rounded-circle img-fluid"
                              src="img/about/2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h4>March 2011</h4>
                              <h4 className="subheading">An agency was born</h4>
                            </div>
                            <div className="timeline-body">
                              <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-image">
                            <img
                              class="rounded-circle img-fluid"
                              src="img/about/3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h4>December 2012</h4>
                              <h4 className="subheading">
                                Transition to full service
                              </h4>
                            </div>
                            <div className="timeline-body">
                              <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-inverted">
                          <div className="timeline-image">
                            <img
                              class="rounded-circle img-fluid"
                              src="img/about/4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h4>July 2014</h4>
                              <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body">
                              <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="timeline-inverted">
                          <div class="timeline-image">
                            <h4>
                              Be <br /> Part
                              <br /> Of Our <br />
                              Journey
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
        </section>
      </div>
      </div>
    );
  }
}

export default About;
