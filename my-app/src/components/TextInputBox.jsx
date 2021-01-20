import React, { Component } from "react";
import "./TextInputBox.css"
import {FormControl, Input} from "@material-ui/core";



function TextInputBox({ placeholder, type }) {

  
    return (
      
        <FormControl fullWidth>
        <Input
          required={true}
          type={type}
          multiline={false}
          placeholder={placeholder}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
     
    );
  }

  
  export default TextInputBox;