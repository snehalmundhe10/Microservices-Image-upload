import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import '../../App.css';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//  import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import userEvent from '@testing-library/user-event';
// import ImageMain from '../image-upload/image-main'

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
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.info.main
  },
}));

export default class SignIn extends Component{
  constructor(props) {
    super(props);
   this.state = {
      email: '', 
      password: ''
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
      console.log();
      let path = `/api/uploads`;
      this.props.history.push({
        pathname: path
      });
    }

    loginSubmit() {
        const obj = {
            email: this.state.email,
            password: this.state.password
        }
       fetch('http://localhost:4000/api/user/login', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify(obj)
            })
            // .then((response) => response.json())
            .then((response) => response.text())
            .then((text) => console.log(text))
            .then(res =>{ 
              this.props.history.push("/api/uploads")
            })
          }
  
    onEnterPress = e => {
      if (e.key === 'Enter') {
      this.loginSubmit();
      }
    };
 
  render(){
  return (
   <div style={{marginTop: 100}} id="signinDiv">
     <div id="requiredAlert" class="alert alert-warning" style={{display:'none'}}>
        <strong>Alert!</strong> The email and password fields are required!!
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
      <div id="wrongEmail" class="alert alert-warning" style={{display:'none'}}>
        <strong>Alert!</strong> The email doesn't exist!!
      </div>
      <div id="wrongPassword" class="alert alert-warning" style={{display:'none'}}>
        <strong>Alert!</strong> The password you entered is wrong!!
      </div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <br/>
        <Typography component="h3" variant="h2">
          Sign in
        </Typography>
        <br/>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            ref={ref => this.textField = ref} 
            onInput={this.findInput}
            style = {{height : 50, width: 330}}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // eslint-disable-next-line react/jsx-no-duplicate-props
            id="field1"
          />
          <TextField
            margin="normal"
            ref={ref => this.textField = ref} 
            onInput={this.findInput}
            style = {{height : 50, width: 330, fontSize:20}}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            id="field2"
          />
          <br/><br/>
          <Button 
            type="button"
            fullWidth
            variant="contained"
             color = "primary"
            style ={ {height : 50 , borderRadius: 50, width : 380}}
            className={classes.submit}
            onClick={this.loginSubmit.bind(this)}
            id= "signInButt"
          >
             Sign In
          </Button>
          <br/><br/>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{fontSize:'14px'}}>
                Forgot password?
              </Link>
            </Grid>
           
            <Grid item>
              <a href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </a>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  </div>
  );
}
}