import React from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
const ForgotPassword = () => {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required!")
        .matches(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
          "Enter a valid email address!"
        ),
    }),
    onSubmit:() => {
      formik.setSubmitting(true);
      // navigate("/verifyotp")
    },
  });

  return (
    <Box
    component="main"
    className="auth_module"
    sx={{
      alignItems: "center",
      display: "flex",
      flexGrow: 1,
    }}>
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
              onClick={() => navigate("/")}
              sx={{ p: 0, position: "absolute", left: 0, color: "#1d1d1d" }}
            >
              <ArrowBackIcon style={{color:"white"}}/>
            </IconButton>
            <Typography variant="h5" sx={{ color: "#1d1d1d" }}>
              Forgot Password
            </Typography>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <FormControl sx={{ width: "100%" }}>
              <Typography className="custom_label">Email Address</Typography>
              <TextField
                hiddenLabel
                className="text_field"
                placeholder="Email Address"
                fullWidth
                name="email"
                type="email"
                variant="outlined"
                id="email"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                helperText={formik.touched.email && formik.errors.email}
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
                onClick={()=>navigate("/verifyotp")}
              >
                Send
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </Box>
  )
}

export default ForgotPassword