//..............1..............//
// import React from 'react'
// import * as yup from "yup";
// import { useForm } from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
// import axiosInstance from '../../../api/axios/axios';
// import { endPoints } from '../../../api/endpoints/endpoints';
// import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';

// const schema= yup.object().shape({
//     email:yup.string().email().required("Email is required"),
//     password:yup.string().min(4,"Minimum 4 character needed").required("Password is required")
// })
// function Login() {
//     const navigate = useNavigate()
//     const {
//         register,
//         handleSubmit,
//         formState:{errors,isSubmitting}
//     }=useForm({
//         resolver:yupResolver(schema)
//     })

//     const onSubmit = async (data)=>{
//         const formData=new FormData()
//         formData.append("email",data.email);
//         formData.append("password",data.password);
//         console.log(formData,"formData");
//         try {
//             const res= await axiosInstance.post(endPoints.auth.signin, formData)
//             if (res.data.status == 200) {
//                 toast.success(res.data.message)
//                 navigate(`/cms/productCreate`)
//             }else{
//                 toast.error(res.data.message)
//             }
//         } catch (error) {
//             toast.error(error.data.message)
//         }
//     }

//   return (
//    <>
//    <form onSubmit={handleSubmit(onSubmit)}>
//     <input
//     {...register("email")}
//     type="email"
//     placeholder="Email"
//     autoComplete="email"
//     aria-invalid={errors.email?"true":"false"}
//     />
//     {errors.email &&  (<p>{errors.email.message}</p>) }

//      <input
//     {...register("password")}
//     type="password"
//     placeholder="Password"
//     autoComplete="curent-password"
//     aria-invalid={errors.password?"true":"false"}
//     />
//     {errors.password &&  (<p>{errors.password.message}</p>) }

//     <button>Submit</button>
//     <Link to="/auth/register" style={{textDecoration:'none', color:'inherit'}}>
//     <button>
//     Register
//     </button>
//     </Link>
//    </form>
//    </>
//   )
// }

// export default Login
// ...........................................

// .........................2................................

/*
import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axiosInstance from '../../../api/axios/axios';
import { endPoints } from '../../../api/endpoints/endpoints';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Stack
} from '@mui/material';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(4, 'Minimum 4 characters needed')
    .required('Password is required'),
});

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
      const res = await axiosInstance.post(endPoints.auth.signin, formData);
      if (res.data.status === 200) {
        toast.success(res.data.message);
        navigate(`/cms/productCreate`);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" mb={3} color="primary">
          Welcome to Login Page
        </Typography>
        <Paper elevation={6} sx={{ padding: 4, width: '100%', borderRadius: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#115293' },
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/auth/register"
                variant="outlined"
                sx={{
                  color: '#ff9800',
                  borderColor: '#ff9800',
                  '&:hover': {
                    backgroundColor: '#fff3e0',
                    borderColor: '#fb8c00',
                  },
                }}
              >
                Register
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;

*/

//....................................//

//...................3.................//

// import React from 'react';
// import * as yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import axiosInstance from '../../../api/axios/axios';
// import { endPoints } from '../../../api/endpoints/endpoints';
// import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';
// import loginImg from '../../../assets/image/login-img.jpg';
// import '../login/login.css'
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Container,
//   Paper,
//   Stack
// } from '@mui/material';

// const schema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup
//     .string()
//     .min(4, 'Minimum 4 characters needed')
//     .required('Password is required'),
// });

// function Login() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append('email', data.email);
//     formData.append('password', data.password);

//     try {
//       const res = await axiosInstance.post(endPoints.auth.signin, formData);
//       if (res.data.status === 200) {
//         toast.success(res.data.message);
//         localStorage.setItem("token", res.data.token)
//         navigate(`/cms/productCreate`);
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//    <>
//   <div
//     // className="main-box"
//     style={{
//       backgroundImage: `url(${loginImg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       height: '100vh',
//       width: '100vw',
//     }}
//   >
//     <Box
//       sx={{
//         height: '100%',
//         width: '100%',
//         // backgroundColor: 'rgba(245, 245, 245, 0.8)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         p: 2,
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: '100%',
//           maxWidth: 400,
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h5" mb={3} sx={{ color: 'primary' }}>
//           Welcome to Login Page
//         </Typography>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Stack spacing={3}>
//             <TextField
//               label="Email"
//               type="email"
//               fullWidth
//               variant="outlined"
//               {...register('email')}
//               error={!!errors.email}
//               helperText={errors.email?.message}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               variant="outlined"
//               {...register('password')}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 backgroundColor: '#1976d2',
//                 '&:hover': { backgroundColor: '#115293' },
//               }}
//             >
//               Login
//             </Button>
//             <Button
//               component={Link}
//               to="/auth/register"
//               variant="outlined"
//               sx={{
//                 color: '#ff9800',
//                 borderColor: '#ff9800',
//                 '&:hover': {
//                   backgroundColor: '#fff3e0',
//                   borderColor: '#fb8c00',
//                 },
//               }}
//             >
//               Register
//             </Button>
//           </Stack>
//         </form>
//       </Paper>
//     </Box>
//   </div>
// </>

//   );
// }

// export default Login;

// .....................4..........//

import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../../../api/axios/axios";
import { endPoints } from "../../../api/endpoints/endpoints";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/image/login-img.jpg";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useTokenStore } from "../../../store/authStore";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(4, "Minimum 4 characters needed")
    .required("Password is required"),
});

function Login() {
  const setToken = useTokenStore((state) => state.setToken);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const res = await axiosInstance.post(endPoints.auth.signin, formData);
      if (res.data.status === 200) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        setToken();
        navigate(`/cms/productCreate`);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${loginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent glass effect
          backdropFilter: "blur(10px)",
          color: "#1976d2", // Default text color blue
        }}
      >
        <Typography variant="h5" mb={3} sx={{ color: "#1976d2" }}>
          Welcome to Login Page
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputLabelProps={{ style: { color: "#fff" } }} // Label white
              InputProps={{ style: { color: "#fff" } }} // Input text white
              FormHelperTextProps={{ style: { color: "#fff" } }} // Helper text white
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputLabelProps={{ style: { color: "#fff" } }} // Label white
              InputProps={{ style: { color: "#fff" } }} // Input text white
              FormHelperTextProps={{ style: { color: "#fff" } }} // Helper text white
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#1976d2",
                color: "white",
                "&:hover": {
                  backgroundColor: "#115293",
                },
              }}
            >
              Login
            </Button>

            <Button
              component={Link}
              to="/auth/register"
              variant="outlined"
              sx={{
                color: "#1976d2",
                borderColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  borderColor: "#115293",
                },
              }}
            >
              Register
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;
