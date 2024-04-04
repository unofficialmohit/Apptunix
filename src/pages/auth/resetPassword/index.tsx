import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as Yup from "yup";
import { useFormik } from "formik";
const ResetPasswordPage = () => {
  const[showConfirmPassword,setShowConfirmPassword]=React.useState(false);
  const[showPassword,setShowPassword]=React.useState(false);
  const navigate=useNavigate();
  const initialValues={
    password:"",
    confirmpassword:""
  }
  const schema=Yup.object({
    password:Yup.string().min(6,"Password Must be Minimum of 6 Length").required("Please Enter Password"),
    confirmpassword:Yup.string().oneOf([Yup.ref('password'),""],"Password Must Match").required("Please Enter Password")
  })
  const formik=useFormik({
    initialValues,
    validationSchema:schema,
    onSubmit:()=>{
      formik.setSubmitting(true);
      //navigate('/');
    }
  })
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
              Reset Password
            </Typography>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <FormControl sx={{ mb: 2, width: "100%" }}>
              <Typography className="custom_label">Password</Typography>
              <TextField
                sx={{ m: 0 }}
                hiddenLabel
                placeholder="Password"
                fullWidth
                margin="normal"
                name="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.password&&formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment className="eye_btn" position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={()=>{setShowPassword(prevShowPassword=>!prevShowPassword)}}
                        onMouseDown={(e:any)=>{e.preventDefault();}}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <Typography className="custom_label">Confirm Password</Typography>
              <TextField
                sx={{ m: 0 }}
                hiddenLabel
                placeholder="Confirm Password"
                fullWidth
                margin="normal"
                name="confirmpassword"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.confirmpassword&&formik.errors.confirmpassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment className="eye_btn" position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={()=>{setShowConfirmPassword(prevShowConfirmPassword=>!prevShowConfirmPassword)}}
                        onMouseDown={(e:any)=>{e.preventDefault();}}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
                onClick={() => navigate("/")}
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

export default ResetPasswordPage