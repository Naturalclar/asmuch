import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// links
import { Link } from "react-router-dom";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle";
import TeamMember from "./TeamMember";
import team1 from "assets/img/faces/jesse.jpg";
import team2 from "assets/img/faces/farid.jpg";
import team3 from "assets/img/faces/dai.jpg";
import team4 from "assets/img/faces/oussama.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.section}>
          <h2 className={classes.title}>Here is our team</h2>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <TeamMember
                  teamImage={team1}
                  title="Jesse Katsumata"
                  altTeamImage="Jesse"
                  titleName="Admin"
                  descriptionText="Full Stack developer based in Tokyo. Strong believer in
                      the power of javascript. Tech Stack: React, React-Native,
                      Node, Electron, Mongo, Express"
                  twitter="https://twitter.com/natural_clar"
                  github="https://github.com/Naturalclar"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Link to="/farid">
                  <TeamMember
                    teamImage={team2}
                    altTeamImage="Farid"
                    title="Farid Hammouten"
                    titleName="CEO & ADMIN"
                    descriptionText="JavaScript Engineer based in Osaka. Big Dreamer and love
                      to exchange knowledge. Tech Stack: JavaScript, Node,
                      React, MongoDB, PHP and Rails"
                    twitter="https://twitter.com/Faridh212"
                    github="https://github.com/farid212"
                    medium="https://medium.com/@farid212"
                  />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <TeamMember
                  teamImage={team3}
                  title="Dai Phan Tran"
                  altTeamImage="Dai"
                  titleName="Moderator"
                  descriptionText="Open mind Web Designer based in France, love challenges
                      and meeting new people, believe that image is better than
                      word to express things."
                  twitter="http://www.twitter.com/dai_webdesign"
                  facebook="http://www.facebook.com/dai.webdesign"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <TeamMember
                  teamImage={team4}
                  altTeamImage="Oussama"
                  title="Oussama Ladhari"
                  titleName="Moderator"
                  descriptionText="Junior full stack web developer based in Nara Japan.
                  Father of 2 lovely daughters.
                  Tech Stack: React, Python, Ruby, Django, Rails"
                  linkedin="https://www.linkedin.com/in/oussama-ladhari/"
                  github="https://github.com/oladhari"
                  facebook="https://www.facebook.com/oussama.ladhari.9"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(teamStyle)(TeamSection);
