import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div class="col-lg-4">
        <div class="team-member">
          <img
            class="mx-auto rounded-circle"
            src="assets/img/team/1.jpg"
            alt="..."
          />
          <h4>Parveen Anand</h4>
          <p class="text-muted">Lead Designer</p>
          <a class="btn btn-dark btn-social mx-2" href="#!">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="btn btn-dark btn-social mx-2" href="#!">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="btn btn-dark btn-social mx-2" href="#!">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default TeamMember;
