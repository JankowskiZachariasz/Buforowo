import React, { Component } from "react";
import PopUpWindow from "../PopUpWindow";
import DropDown from "../DropDown";
import InlineForm from "../InlineForm";
import TextInputBox from "../TextInputBox";
import ArrowButton from "../ArrowButton";
import logo from "../../graphics/logo_dark.png";
import Layout from "../Layout";
import "./Login.css";

import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
} from "@material-ui/core";


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      
    }
  
    render() {
      return <Layout>
       
        <PopUpWindow>

            <div className="loginWindowDividor">
            <div className="logoSection"><img src={logo} className="App-logo" alt="logo" height="42" /></div>
            
            <div className="formInput">
                  <InlineForm text="Projekt">
                  <DropDown></DropDown>
                  </InlineForm>
                  
                  <InlineForm text="Użytkownik">
                  <TextInputBox type="email" placeholder=""></TextInputBox>
                  </InlineForm>

                  <InlineForm text="Hasło">
                  <TextInputBox type="password" placeholder=""></TextInputBox>
                  </InlineForm>
            </div>
            

            <div className="buttonSection"><div className="buttonFloatRight"><ArrowButton  enabled text="ZALOGUJ"></ArrowButton></div></div>

            </div>

        </PopUpWindow>
        </Layout>;
    }
  }
  
 
  






  export default Login;
  