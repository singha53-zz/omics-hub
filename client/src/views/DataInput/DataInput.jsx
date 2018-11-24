import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

    return (
    <FormComp onSubmit={data => {
      submitDataForm(data, history)
    }} />
    )
}

export default connect(null, actions)(withRouter(withStyles(styles)(DataInput)));