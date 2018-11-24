import React from 'react';
import { connect } from 'react-redux'
import { FileUpload } from 'redux-file-upload';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import * as actions from 'actions';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
// core components
import GridItem from 'components/Dashboard/Grid/GridItem.jsx';
import GridContainer from 'components/Dashboard/Grid/GridContainer.jsx';
import CustomInput from 'components/Dashboard/CustomInput/CustomInput.jsx';
import Button from 'components/Dashboard/CustomButtons/Button.jsx';
import Card from 'components/Dashboard/Card/Card.jsx';
import CardHeader from 'components/Dashboard/Card/CardHeader.jsx';
import CardAvatar from 'components/Dashboard/Card/CardAvatar.jsx';
import CardBody from 'components/Dashboard/Card/CardBody.jsx';
import CardFooter from 'components/Dashboard/Card/CardFooter.jsx';

import avatar from 'assets/img/faces/marc.jpg';
import Csv from 'views/DataInput/CSVinput';
import MyCustomInput from 'views/DataInput/MyCustomInput';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  }
};

function UserProfile(props) {
  const { classes, handleSubmit } = props;
  console.log(props)
  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}> Data Input</h4>
              <p className={classes.cardCategoryWhite}>
                input study descriptors and upload data
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <label htmlFor="study">Study</label>
                    <Field name="study" component="input" type="text" />
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <label htmlFor="disease">Disease</label>
                    <Field name="disease" component="input" type="text" />
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <label htmlFor="tech">Technology</label>
                    <Field name="tech" component="input" type="text" />
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <label htmlFor="tiss">Tissue</label>
                    <Field name="tiss" component="input" type="text" />
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <label htmlFor="exp">Input explanatory data:</label>
                  <Field name="exp" component={Csv} value={[]} type="text" />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <label htmlFor="labels">Input response variable:</label>
                  <Field name="labels" component={Csv} value={[]} type="text" />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button type="submit" color="primary">
                Start Analysis
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button type="submit" color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </form>
  );
}

function validate(values) {
  const errors = {}
}

export default reduxForm({
  form: 'datainput',
  validate,
  destroyOnUnmount: false
})(withStyles(styles)(UserProfile));
