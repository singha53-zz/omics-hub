import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import Papa from 'papaparse';

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
        parserOptions={{
          header: true
        }}
        onError={this.err}
        inputId="exp"
        inputStyle={{ color: 'red' }}
      />
    );
  }
}

export default Csv;
