import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/header-bg.jpg";

//reusable components
import Services from "../common/Services";
import Portfolio from "../common/Portfolio";
class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="It's Nice To Meet You"
          buttonText="TELL ME MORE"
          Link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
      </div>
    );
  }
}
export default Home;
