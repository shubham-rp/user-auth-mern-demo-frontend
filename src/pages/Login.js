import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CssBaseline,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    loginContainer: {
      backgroundColor: "#cfe8fc",
      height: "100vh",
    },
    signUpLink: {
      height: "5vh",
      textAlign: "right",
    },
    signUpButton: {
      marginTop: "8px",
      width: "196px",
      backgroundColor: "teal",
      textDecoration: "none",
      color: "white",
    },
    loginBox: {
      height: "95vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    loginHeading: {
      fontSize: "32px",
      color: "teal",
    },
    loginTextField: {
      width: "512px",
    },
    loginButton: {
      width: "128px",
      backgroundColor: "teal",
    },
    helperText: {
      color: "tomato",
    },
  };
});

function Login() {
  const { classes } = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.loginContainer}>
        <Box className={classes.signUpLink}>
          <Link to="/signup">
            <Button variant="contained" className={classes.signUpButton}>
              Go To Sign Up
            </Button>
          </Link>
        </Box>
        <Box className={classes.loginBox}>
          <Stack spacing={4} alignItems="center">
            <Typography className={classes.loginHeading}>
              {" "}
              USER AUTH DEMO LOGIN{" "}
            </Typography>
            <Divider flexItem />
            <TextField
              className={classes.loginTextField}
              variant="outlined"
              label="Email"
              helperText="Some important text"
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
            <TextField
              className={classes.loginTextField}
              variant="outlined"
              label="Password"
              type="password"
              helperText="Some important text"
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
            <Button variant="contained" className={classes.loginButton}>
              Sign In
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Login;
