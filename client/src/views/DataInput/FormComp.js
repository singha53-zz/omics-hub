import React from 'react';
import { Field, reduxForm } from 'redux-form';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import GridItem from 'components/Dashboard/Grid/GridItem.jsx';
import GridContainer from 'components/Dashboard/Grid/GridContainer.jsx';
import Button from 'components/Dashboard/CustomButtons/Button.jsx';
import Card from 'components/Dashboard/Card/Card.jsx';
import CardHeader from 'components/Dashboard/Card/CardHeader.jsx';
import CardAvatar from 'components/Dashboard/Card/CardAvatar.jsx';
import CardBody from 'components/Dashboard/Card/CardBody.jsx';
import CardFooter from 'components/Dashboard/Card/CardFooter.jsx';

import avatar from 'assets/img/faces/marc.jpg';
import Csv from 'views/DataInput/CSVinput';

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
const renderField = (field) => (
    <div className="input-row">
      <input {...field.input} type="text"/>
      {field.meta.touched && field.meta.error && 
       <span className="error" style={{color: 'red'}}>{field.meta.error}</span>}
    </div>
  )

  const { classes, handleSubmit } = props;
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
                    <Field name="study" component={renderField} />
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <label htmlFor="disease">Disease</label>
                    <Field name="disease" component={renderField}  />
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <label htmlFor="tech">Technology</label>
                    <Field name="tech" component={renderField} />
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <label htmlFor="tiss">Tissue</label>
                    <Field name="tiss" component={renderField} />
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
      </GridContainer>
    </form>
  );
}

function validate(values) {
  const errors = {};

  ['study','disease','tech','tiss','exp','res'].forEach( ( name ) => {
    if( !values[name] ){
      errors[name] = `You must provide a ${name}`
    }
  });

  return errors;
}

export default reduxForm({
  form: 'datainput',
  validate,
  destroyOnUnmount: false
})(withStyles(styles)(UserProfile));
