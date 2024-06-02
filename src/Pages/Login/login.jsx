import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import './Login.Style.scss'
import Box from '@mui/material/Box';
import {USER_CONFIG} from '../../Utils/Config'
import generateToken from '../../Utils/Common';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import userIcon from  "../../Assets/images/person.png";

/**
 * @VALIDATION_SCHEMA
 * This code is used for the validations
 */
const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});




const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    const {isAuth} = useSelector((state)=>{
        return{
            isAuth: state.auth?.isAuth
        }
    })
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    useEffect(()=>{
        if(isAuth?.token){
            navigate('/dashboard')
        }
    },[isAuth?.token])

    /**
     * @Authentication
     * Below code is for make authentication with hardcode creds
     * @USER_CONFIG if creds is matches with USER_CONFIG then generate token is page is navigating on the dashboard page 
     */
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(values?.email===USER_CONFIG.email && values.password===USER_CONFIG.password){
                const token = generateToken()
                dispatch(authLogin({token, ...values}))
            }else{
                formik.setFieldError('error', 'Invalid Credentials!')
            }
        },
    });

    return(
        <Box className='login-page'>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h5" mb={4} sx={{textAlign: 'center'}}>
                    Login Account
                </Typography>
                <Box className='user-icon'>
                    <img src={userIcon}/>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <InputLabel>Email</InputLabel>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            placeholder='Email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel>Password</InputLabel>
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {formik?.errors?.error && (
                            <Box className='error'>{formik?.errors?.error}</Box>
                        )}
                        <Button 
                            color="primary" 
                            variant="contained" 
                            fullWidth 
                            type="submit"
                            className='login-btn'
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
export default Login;