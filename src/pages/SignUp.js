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
    signUpContainer: {
      backgroundColor: "#cfe8fc",
      height: "100vh",
    },
    loginLink: {
      height: "5vh",
      textAlign: "right",
    },
    loginButton: {
      marginTop: "8px",
      width: "196px",
      backgroundColor: "teal",
      textDecoration: "none",
      color: "white",
    },
    signUpBox: {
      height: "95vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    signUpHeading: {
      fontSize: "32px",
      color: "teal",
    },
    signUpTextField: {
      width: "512px",
    },
    signUpButton: {
      width: "128px",
      backgroundColor: "teal",
    },
    helperText: {
      color: "tomato",
    },
  };
});

function SignUp() {
  const { classes } = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.signUpContainer}>
        <Box className={classes.loginLink}>
          <Link to="/login">
            <Button variant="contained" className={classes.loginButton}>
              Go To Login
            </Button>
          </Link>
        </Box>
        <Box className={classes.signUpBox}>
          <Stack spacing={4} alignItems="center">
            <Typography className={classes.signUpHeading}>
              {" "}
              USER AUTH DEMO SIGNUP{" "}
            </Typography>
            <Divider flexItem />
            <TextField
              className={classes.signUpTextField}
              variant="outlined"
              label="Full Name"
              helperText="Some important text"
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
            <TextField
              className={classes.signUpTextField}
              variant="outlined"
              label="Email"
              helperText="Some important text"
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
            <TextField
              className={classes.signUpTextField}
              variant="outlined"
              label="Password"
              type="password"
              helperText="Some important text"
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
            <TextField
              className={classes.signUpTextField}
              variant="outlined"
              label="Confirm Password"
              type="password"
              helperText="Some important text"
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
            <Button variant="contained" className={classes.signUpButton}>
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
