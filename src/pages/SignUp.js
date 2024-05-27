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
  };
});

function SignUp() {
  const { classes } = useStyles();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { register, handleSubmit, getValues, formState, watch } = form;
  const { errors } = formState;

  const onSubmit = () => {
    console.log(getValues());
  };

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
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={4} alignItems="center">
              <Typography className={classes.signUpHeading}>
                {" "}
                USER AUTHENTICATION DEMO SIGNUP{" "}
              </Typography>
              <Divider flexItem />
              <TextField
                className={classes.signUpTextField}
                variant="outlined"
                label="Full Name"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-z ,.'-]+$/i,
                    message: "Please enter a valid name",
                    // regex pattern for to work on international names
                    // message: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                className={classes.signUpTextField}
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
                className={classes.signUpTextField}
                variant="outlined"
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },

                  // pattern: {
                  //   value:
                  //     /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                  //   message:
                  //     "Password must be at least 8 characters long & contain one special character, one lowercase letter, one uppercase letter, one digit from 1 to 9 & no space",
                  // },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <TextField
                className={classes.signUpTextField}
                variant="outlined"
                label="Confirm Password"
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.signUpButton}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
