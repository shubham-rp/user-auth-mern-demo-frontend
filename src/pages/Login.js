import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  };
});

function Login() {
  const { classes } = useStyles();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, getValues, formState } = form;
  const { errors } = formState;

  const onSubmit = () => {
    console.log(getValues());
  };
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
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                className={classes.loginTextField}
                variant="outlined"
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.loginButton}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Login;
