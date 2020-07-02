import React, { Component,Fragment } from "react";
import ReactDOM from "react-dom";
//import '../../css/form.css';
//import '../../scss/form.scss';

const styles = {
  heading: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 250,
    heading: 250,
    objectFit: 'cover',
  },
};

const Form = ({ imgPath }) => {
  return (
    <Fragment>
      <h1 style={styles.heading}>
        Welcome To Form
      </h1>
     
    </Fragment>
  );
};


export default Form;