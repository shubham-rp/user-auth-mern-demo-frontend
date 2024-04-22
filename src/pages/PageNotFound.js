import React from "react";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { Button, Box, Stack, Typography } from "@mui/material";

const useStyles = makeStyles()(() => {
  return {
    box: {
      height: "100vh",
      backgroundColor: "#667bf2",
      backgroundImage: `url(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f0b608' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e6d710' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e7af05' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e7d808' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8a408' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23f1e213' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f0b607' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e4d506' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23eab822' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e8da14' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e8b008' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23edde14' points='943 900 1210 900 971 687'/%3E%3C/svg%3E"
      )`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    },
    stack: {
      paddingTop: "128px",
    },
    text: {
      color: "whitesmoke",
    },
    button: {
      backgroundColor: "teal",
      width: "196px",
    },
    spannedText: {
      textShadow: "-13px 0 0 rgb(102 123 242)",
    },
  };
});
function PageNotFound() {
  const { classes } = useStyles();
  return (
    <Box className={classes.box}>
      <Stack spacing={4} alignItems="center" className={classes.stack}>
        <Typography variant="h1" className={classes.text}>
          <span className={classes.spannedText}>4</span>
          <span className={classes.spannedText}>0</span>
          <span className={classes.spannedText}>4</span>
        </Typography>
        <Typography variant="h4" className={classes.text}>
          Oops ! Page Not Found !!
        </Typography>
        <Typography variant="h5" className={classes.text}>
          We are sorry, but the page you requested could not be found.
        </Typography>
        <Link to="/">
          <Button variant="contained" className={classes.button}>
            Go To Home
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default PageNotFound;
