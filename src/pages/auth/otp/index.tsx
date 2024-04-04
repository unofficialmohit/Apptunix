import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormControl from "@mui/material/FormControl";

const VerifyOtp = () => {
    const otpStyle = {
        width: "50px",
        height: "50px",
        "box-sizing": "border-box",
        margin: "0 auto",
      };
  const navigate = useNavigate();
const[otp,setOtp]=useState("");
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
              onClick={() => navigate("/forgotpassword")}
              sx={{ p: 0, position: "absolute", left: 0, color: "#1d1d1d" }}
            >
               <ArrowBackIcon style={{color:"white"}}/>
            </IconButton>
            <Typography variant="h5" sx={{ color: "#1d1d1d" }}>
              Verify Otp
            </Typography>
          </Box>
          <form>
            <FormControl className="opt_fields" sx={{ width: "100%" }}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
                inputStyle={otpStyle}
                inputType="tel"
              />
            </FormControl>
            <Box sx={{ pt: 3 }}>
              <Button
                className="btn btn-primary"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={() => navigate("/resetPassword")}
              >
                Verify Otp
              </Button>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                pt: 2,
              }}
            >
              <Typography className="anchor" sx={{ cursor: "pointer" }}>
                Resend Otp
              </Typography>
            </Box>
          </form>
        </div>
      </Container>
    </Box> 
  )
}

export default VerifyOtp