import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp=()=> {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]=useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    // e.preventDefault();
    if(!email || !name || !password){
      setError(true);
      return false;
    }else{

    console.log(email, name, password);
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    setName("");
    setEmail("");
    setPassword("");
    //user local storage for data store
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </Grid>
            {error && !name && <span className="error">Enter valid name</span>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
               {error && !email && <span className="error">Enter valid email</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {error && !password && <span className="error">Enter valid password</span>}
            
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={collectData}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        All Copy right reserved by <Link target="_blank" to="https://www.linkedin.com/in/qamarali205/">Qamar Ali</Link>
      </Box> */}
    </Container>
  );
}


export default SignUp;
