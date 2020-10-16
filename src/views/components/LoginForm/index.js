import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
const LoginForm = ({ forgotPasswordActive, forgotPasswordActiveHandler }) => {
  return forgotPasswordActive ? (
    <form>
      <Box display="flex" flexDirection="column">
        <Box marginBottom={8}>
          <TextField fullWidth label="Email" type="text" required />
        </Box>

        <Box marginBottom={2}>
          <Button fullWidth variant="contained" color="primary">
            Login
          </Button>
        </Box>
        <Button
          onClick={() => forgotPasswordActiveHandler()}
          variant="outlined"
          color="primary"
        >
          Cancel
        </Button>
      </Box>
    </form>
  ) : (
    <form>
      <Box display="flex" flexDirection="column">
        <Box marginBottom={2}>
          <TextField fullWidth label="Email" type="text" required />
        </Box>
        <Box marginBottom={2}>
          <TextField fullWidth label="Password" type="password" required />
        </Box>
        <Box marginBottom={6} display="flex" justifyContent="flex-end">
          <p
            className="link-navigation"
            onClick={() => forgotPasswordActiveHandler()}
          >
            Forgot Password?
          </p>
        </Box>
        <Box marginBottom={2}>
          <Button fullWidth variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
