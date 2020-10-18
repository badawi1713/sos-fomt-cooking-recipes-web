import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button, Fade } from "@material-ui/core";
const LoginForm = ({ forgotPasswordActive, forgotPasswordActiveHandler }) => {
  return forgotPasswordActive ? (
    <form>
      <Box display="flex" flexDirection="column">
        <Fade in={true} style={{ transitionDelay: "200ms" }}>
          <Box marginBottom={8}>
            <TextField fullWidth label="Email" type="text" required />
          </Box>
        </Fade>
        <Fade in={true} style={{ transitionDelay: "300ms" }}>
          <Box marginBottom={2}>
            <Button fullWidth variant="contained" color="primary">
              Login
            </Button>
          </Box>
        </Fade>
        <Fade in={true} style={{ transitionDelay: "300ms" }}>
          <Button
            onClick={() => forgotPasswordActiveHandler()}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
        </Fade>
      </Box>
    </form>
  ) : (
    <form>
      <Box display="flex" flexDirection="column">
        <Fade in={true} style={{ transitionDelay: "200ms" }}>
          <Box marginBottom={2}>
            <TextField fullWidth label="Email" type="text" required />
          </Box>
        </Fade>
        <Fade in={true} style={{ transitionDelay: "200ms" }}>
          <Box marginBottom={2}>
            <TextField fullWidth label="Password" type="password" required />
          </Box>
        </Fade>
        <Fade in={true} style={{ transitionDelay: "200ms" }}>
          <Box marginBottom={6} display="flex" justifyContent="flex-end">
            <p
              className="link-navigation"
              onClick={() => forgotPasswordActiveHandler()}
            >
              Forgot Password?
            </p>
          </Box>
        </Fade>
        <Fade in={true} style={{ transitionDelay: "300ms" }}>
          <Box marginBottom={2}>
            <Link to="/">
              <Button fullWidth variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </Box>
        </Fade>
      </Box>
    </form>
  );
};

export default LoginForm;
