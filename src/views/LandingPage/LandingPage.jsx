import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import HiddenSection from "./Sections/HiddenSection.jsx";
// import HiddenConsole from "./Sections/HiddenConsole.jsx";

// Section Mobile UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "assets/jss/material-kit-react/views/componentsSections/theme";


const muiTheme = createMuiTheme(theme);
const dashboardRoutes = [];

class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: flase
    }
  }

  handleClose = () =>{
    this.setState({
      open: false
    })
  }

  render() {
    const { classes, ...rest } = this.props;
    let user_keys = [];
    let konamiCode = "38,38,40,40,37,39,37,39,66,65";
    let hiddencnsl = "67,79,78,83,79,76,69,13";
    var styleNice = [
      "%cSecret open",
      "color: #fff; background: #245060; padding:10px ;font-size: 1.5em; line-height: 2.2em;"
    ];
    document.onkeydown = event => {
      user_keys.push(event.keyCode);
      if (user_keys.toString().indexOf(konamiCode || hiddencnsl) >= 0 ) {
        window.console.log.apply(console, styleNice);
        return this.setState({
          open: true
        });
      }
    };


    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="As much 何とか"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />
          <Parallax filter image={require("assets/img/bg8.jpg")}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <h1 className={classes.title}>
                    Asmuch, commitment through JavaScript community.
                  </h1>
                  <h2 className={classes.subtitle}>
                    A rare place to find rare people, who are willing to do hard
                    thinking, to work and to learn together.
                  </h2>
                </GridItem>
                <GridItem
                  xs={8}
                  sm={8}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    color="info"
                    href="https://join.slack.com/t/asmuchnantoka/shared_invite/enQtNDk3OTMyMjY1MzkzLTA2YTc0Y2YzZWE5NGZlMmQyODJkMjEzY2ZjYzZiZmY2NTdmNDg2ODQzMDdlYWEyNDRiOGI4OWM1MjY2ZWI5YWU"
                    target="_blank"
                    size="lg"
                  >
                    Direct connect to Slack Community
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <ProductSection />
              <HiddenSection />
              <HiddenConsole />
              <TeamSection />
              <WorkSection />
            </div>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(landingPageStyle)(LandingPage);
