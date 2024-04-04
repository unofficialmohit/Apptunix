import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [oldPassword, setOldPassword] = useState<boolean>(false);
  const [cnfmPassword, setCnfmPassword] = useState<boolean>(false);

  return (
    <Box
      component="main"
      className="auth_module"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
      }}
    >
      <Container className="auth_cntnr" maxWidth="xs">
        <Box
          m={0}
          className="auth_logo"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <figure className="logo_cntnr">
            <img src="/static/images/logo.png" alt="" />
          </figure>
        </Box>
        <div className="auth_box">
          <Box sx={{ mb: 3, textAlign: "center", position: "relative" }}>
            <IconButton
              onClick={() => navigate("/dashboard")}
              sx={{ p: 0, position: "absolute", left: 0, color: "#1d1d1d" }}
            >
             <ArrowBackIcon style={{color:"white"}}/>
            </IconButton>
            <Typography variant="h5" sx={{ color: "#1d1d1d" }}>
              Change Password
            </Typography>
          </Box>
          <form>
            <FormControl sx={{ mb: 2, width: "100%" }}>
              <Typography className="custom_label">Old Password</Typography>
              <TextField
                className="text_field"
                hiddenLabel
                placeholder="Old Password"
                fullWidth
                id="oldPassword"
                name="oldPassword"
                type={oldPassword ? "text" : "password"}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.oldPassword}
                // helperText={
                //   formik.touched.oldPassword && formik.errors.oldPassword
                // }
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className="eye_btn">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setOldPassword(!oldPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {oldPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl sx={{ mb: 2, width: "100%" }}>
              <Typography className="custom_label">New Password</Typography>
              <TextField
                className="text_field"
                placeholder="New Password"
                fullWidth
                id="newPassword"
                name="newPassword"
                type={cnfmPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className="eye_btn">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setCnfmPassword(!cnfmPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {cnfmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl sx={{ mb: 2, width: "100%" }}>
              <Typography className="custom_label">Confirm Password</Typography>
              <TextField
                className="text_field"
                placeholder="Confirm Password"
                fullWidth
                id="passwordConfirmation"
                name="passwordConfirmation"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className="eye_btn">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <Box sx={{ pt: 3 }}>
              <Button
                className="btn btn_primary"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={() => navigate("/dashboard")}
              >
                Submit
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </Box>
  );
};

export default ChangePassword;
