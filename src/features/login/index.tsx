import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup";
import "./Login.scss";
const Login = () => {
    const navigate=useNavigate();
    const[showPassword,setShowPassword]=React.useState(false);
    const handleClickShowPassword=()=>{
        setShowPassword(prevShowPassword=>!prevShowPassword);
    }
    const handleMouseDownPassword=(event:any)=>{
        event.preventDefault();
    }
    const initialValues={
        email:'',
        password:'',
        remember:false,
    }
    const validation=Yup.object({
        remember:Yup.boolean(),
        email:Yup.string()
        .required("Email is Required")
        .matches(
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
            "Enter a Valid Email Address!"),
        password:Yup.string()
        .required("Password is Required")
        .min(6,"Password must be atleast 6 character long")
    })
    const formik=useFormik({
        initialValues,
        validationSchema:validation,
        onSubmit:(values)=>{
            formik.setSubmitting(true);
            // navigate("/dashboard")
        },
   })
   console.log(formik.errors);
  return (
   <Box
   component="main"
   className='auth_module'
   sx={{
    alignItems:"center",
    display:"flex",
    flexGrow:1,
   }}>
    <Container
    className='auth_cntnr'
    maxWidth='xs'>

    <Box
    m={0}
    className='auth_logo'
    sx={{display:"flex",justifyContent:"center"}}
    >
  <figure className='logo_cntnr'>
        <img src='/static/images/logo.png' alt='LowHate Admin Panel'/>
    
  </figure>
    </Box>
  <div className='auth_box'>

   <Box sx={{mb:3,textAlign:"center",color:"#1d1d1d"}}>
    <Typography variant='h5'> Log in to Lowhate Admin </Typography>
   </Box>
    <form onSubmit={formik.handleSubmit}>
        <FormControl sx={{mb:2,width:"100%"}}>
            <Typography className='custom_label'>Email Address</Typography>
            <TextField
            placeholder='Email Address'
            className='text_field'
            fullWidth
            hiddenLabel
            name='email'
            id='email'
            variant='outlined'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            helperText={formik.touched.email&& formik.errors.email}
            />
        </FormControl>
        <FormControl sx={{mb:2,width:"100%"}}>
            <Typography className='custom_label'>Password</Typography>
            <TextField
            placeholder='Password'
            className='text_field'
            fullWidth
            hiddenLabel
            name='password'
            id='password'
            type={showPassword?'text':'password'}
            variant='outlined'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
                endAdornment:(
                    <InputAdornment className='eye_btn' position='end'>
                        <IconButton
                        aria-label="toggle password visiblity"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'>
                            {showPassword?<Visibility/>:<VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            />
        </FormControl>
        <Box 
        sx={{display:"flex",justifyContent:"space-between", alignItems:"center"}} >
        <Box className='remember_box'>
            <FormControlLabel
            control={<Checkbox/>}
            label='Remember Me'
            name='remember'
            checked={formik.values.remember}
            onChange={formik.handleChange}
            />
        </Box>
        <Box 
        className='anchor'
        onClick={()=>navigate('/forgotpassword')} >
        <Typography>Forgot Password</Typography>
        </Box>
        </Box>
        <Box sx={{pt:3}}>
            <Button 
            className='btn btn-primary'
            variant='contained'
            color='primary'
            fullWidth
            size='large'
            type='submit'
            onClick={()=>{
            navigate("/dashboard")
            }}
            >Sign In</Button>
        </Box>
    </form>
  </div>

    </Container>
   </Box>
  )
}

export default Login