import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
    const auth=localStorage.getItem('user');
    const navigate=useNavigate()

    const logoutHandle=()=>{
        // console.log('logout click');
        localStorage.clear();
        navigate('/signup');
    }
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          MapWeatherApp
        </Typography>
          <div className={classes.navlinks}>
            
            <Link to="/" className={classes.link}>
            Welcome {JSON.parse(auth).name}
            </Link>
            <Link to='/signup' onClick={logoutHandle} className={classes.link}>
              Logout
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
