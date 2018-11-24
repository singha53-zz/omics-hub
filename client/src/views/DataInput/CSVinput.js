import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';

class Csv extends Component {
  err = e => {
    console.log(e);
  };

  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <CSVReader
        cssClass="csv-input"
        onFileLoaded={e => {
          onChange(value.concat(JSON.stringify(e)));
        }}
        onError={this.err}
        inputId="exp"
        inputStyle={{ color: 'red' }}
      />
    );
  }
}

export default Csv;
