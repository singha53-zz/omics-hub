import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/team/ubc.jpg";
import team2 from "assets/img/team/proof.png";
import team3 from "assets/img/team/hli.jpeg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Affiliations</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <a href ='https://www.ubc.ca/' target='_blank' rel="noopener noreferrer">
                    <img src={team1} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  University of British Columbia
                  <br />
                  <small className={classes.smallTitle}>Vancouver</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Among the top 20 public universities in the world. Motto: Tuum Est (It is yours)
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a href='https://twitter.com/UBC' target='_black'>
                      <i className={classes.socials + " fab fa-twitter"} />
                    </a>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a href='https://www.instagram.com/universityofbc/?hl=en' target='_black'>
                      <i className={classes.socials + " fab fa-instagram"} />
                    </a>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a href='https://www.facebook.com/universityofbc/' target='_black'>
                      <i className={classes.socials + " fab fa-facebook"} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <a href ='http://www.proofcentre.ca/' target='_blank' rel="noopener noreferrer">
                    <img src={team2} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  PROOF Centre of Excellence
                  <br />
                  <small className={classes.smallTitle}>Vancouver</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    The PRevention Of Organ Failure (PROOF) Centre is a not-for-profit that develops blood tests using "omics" technologies for kidney, heart and lung disease. 
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a href='https://twitter.com/proofcentre' target='_black'>
                      <i className={classes.socials + " fab fa-twitter"} />
                    </a>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a href='https://www.linkedin.com/company/proof-centre/?originalSubdomain=ca' target='_black'>
                      <i className={classes.socials + " fab fa-linkedin"} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <a href ='https://www.hli.ubc.ca/' target='_blank' rel="noopener noreferrer">
                    <img src={team3} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Centre of Heart Lung Innovation
                  <br />
                  <small className={classes.smallTitle}>Vancouver</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    HLI is a translational research centre where multidisciplinary reserach is conducted for various human diseases.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a href='https://twitter.com/hlistpauls?lang=en' target='_black'>
                      <i className={classes.socials + " fab fa-twitter"} />
                    </a>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a href='https://www.facebook.com/HeartLungInnovation/' target='_black'>
                      <i className={classes.socials + " fab fa-facebook"} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
