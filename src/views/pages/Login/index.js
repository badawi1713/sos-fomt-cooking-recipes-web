import React, { useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import LoginForm from "../../components/LoginForm";
import LoginHeader from "../../components/LoginHeader";

import "./style.css";

const Login = () => {
  const [forgotPasswordActive, setForgotPasswordActive] = useState(false);

  const forgotPasswordActiveHandler = (e) => {
    setForgotPasswordActive(!forgotPasswordActive);
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={0}>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Box marginTop={10} padding={3}>
            {forgotPasswordActive ? (
              <LoginHeader
                header="Forgot your password?"
                subHeader="Please enter your email to reset the password"
              />
            ) : (
              <LoginHeader
                header="Welcome,"
                subHeader="Please log in to continue"
              />
            )}
            <LoginForm
              forgotPasswordActive={forgotPasswordActive}
              forgotPasswordActiveHandler={forgotPasswordActiveHandler}
            />
          </Box>
        </Grid>
        <Grid
          className="login-image"
          item
          lg={8}
          md={false}
          sm={false}
          xs={false}
        />
      </Grid>
    </Container>
  );
};

export default Login;
