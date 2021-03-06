import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{`Let's talk About this concept`}</h2>
            <h5 className={classes.description}>
              {`As much 何とか mean As much something...`}
              <br />
              {`Because we all start as junior, sometimes we get block and give up. 
                So we decide to create this concept where beginners could get help in real chat and even get mentorised by other people who have more experience.
              `}
              <br />
              {`As much you give,`}
              <br />
              {`as much you will receive!`}
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Free Chat"
                description="Slack is a place where you can collaborate, exchange informations, knowledge with the right people and maybe find new collaborator based on real skills."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified Users"
                description="To prevent spam accounts, we often exchange with people just to verify that a user is human. We don't need to verify their identity as long the moderators approved the answers."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Fingerprint"
                description="Doing what you love, Spread happiness, Encourage others, Love the worlds, Share your words are 5 mains ways that you can leave your fingerprint on web, so let's start your story by our side."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(productStyle)(ProductSection);
