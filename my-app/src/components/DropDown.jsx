import React, { Component } from "react";
import {FormControl, Select, MenuItem,} from "@material-ui/core";



function DropDown({ classes, label, required }) {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(10);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const onChange = (event) => {

        setIndex(event.target.value);
       
    };
  
    return (
      
        <FormControl fullWidth>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={onChange}
            value={index}
          >
            <MenuItem value={10}>Automatyczny Bufor Linia Homag</MenuItem>
            
          </Select>
        </FormControl>
     
    );
  }

  
  export default DropDown;