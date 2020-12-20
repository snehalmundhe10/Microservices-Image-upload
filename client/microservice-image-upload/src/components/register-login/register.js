import React,{Component} from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import '../../App.css';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import { Redirect } from 'react-router-dom';
//import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" style={{fontSize:'12px'}}>
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const classes = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.info.dark
    },
  }));
  
  class Register extends Component {
    constructor(props) {
      super(props);
     this.state = {
        name: '', 
        email: '',
        password:''
        };
        this.findInput= this.findInput.bind(this);
        this.routeChange.bind(this)
      };
  
      findInput(event){
        this.setState({
          [event.target.name]: event.target.value
        });
      }
  
      routeChange() {
        let path = `/signin`;
        this.props.history.push(path);
      }
  
      registerSubmit() {
              fetch('http://localhost:4000/api/user/register', {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: this.state.name, 
                  email: this.state.email,
                  password: this.state.password
                })
              })
              .then(response=>{
                console.log(response);
                console.log(response.status)
                if(response.status===200){
                  this.routeChange();
                }
              })
          }
        
    
      onEnterPressRegister = e => {
        if (e.key === 'Enter') {
        this.registerSubmit();
        }
      }
    
  render(){
    return (
      <div style={{marginTop: 100}} id="signinDiv">
        <div id="requiredAlert" class="alert alert-warning" style={{display:'none'}}>
          <strong>Alert!</strong> The email, password and name fields are required!!
        </div>
        <div id="wrongFormatEmail" class="alert alert-warning" style={{display:'none'}}>
          <strong>Alert!</strong> The email should be in format "xyz@xyz.com"
        </div>
        <div id="wrongLengthPassword" class="alert alert-warning" style={{display:'none'}}>
          <strong>Alert!</strong> The password shoud be atleast 6 character long
        </div>
        <div id="wrongFormatPassword" class="alert alert-warning" style={{display:'none'}}>
          <strong>Alert!</strong> The password should contain atleast 1 digit and atleast one capital letter
        </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
         
          <br/>
          <Typography component="h3" variant="h2">
            Sign up
          </Typography>
          <br/>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  style = {{height : 50, width: 330}}
                  onInput={this.findInput}
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  style = {{height : 50, width: 330}}
                  onInput={this.findInput}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  style = {{height : 50, width: 330}}
                  onInput={this.findInput}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <br/> 
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              style ={ {height : 50, borderRadius: 50, width :380  }}
              onClick={this.registerSubmit.bind(this)}
              className={classes.submit}
              id= "signInButt"
            >
              Sign Up
            </Button>
            <br/><br/>
            <Grid container justify="flex-end" style={{textAlign:'center'}}>
              <Grid item>
                <a href="/signin" variant="body2">
                  Already have an account? Sign in
                </a>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      </div>
    );
   }
}
  export default withRouter(Register)