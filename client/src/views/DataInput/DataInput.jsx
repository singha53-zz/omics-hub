import React, {Component} from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form'
import * as actions from 'actions';
import withStyles from '@material-ui/core/styles/withStyles';

import FormComp from 'views/DataInput/FormComp'

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

const DataInput = ({ submitDataForm, history }) => {

  const submit = values => {
    console.log(values)
  }

    return (
    <FormComp onSubmit={data => {
      submitDataForm(data, history)
    }} />
    )
}


function mapStateToProps(state) {
  if(state.form.datainput !== undefined){
      console.log(state.form.datainput.values)
  }
  // shows up as props
  // return {
  //   formValues: state.form.datainput.values 
  // }
}

export default connect(null, actions)(withRouter(DataInput));