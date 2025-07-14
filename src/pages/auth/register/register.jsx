// import React from 'react'
// import * as yup from "yup";
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import axiosInstance from '../../../api/axios/axios';
// import { endPoints } from '../../../api/endpoints/endpoints';
// import toast from 'react-hot-toast';
// import {Button, TextField} from '@mui/material';
// const schema = yup.object().shape({
//     first_name:yup.string().min(2,"Minimum two alphabet required").max(20,"Maximum twenty alphabets").required(),
//     last_name:yup.string().min(2,"Minimum two alphabet required").max(20,"Maximum twenty alphabets").required(),
//     email:yup.string().required(),
//     password:yup.string().required(),
//     profile_pic:yup.mixed().required()
// })

// function Register() {
//     const{
//         register,
//         handleSubmit,
//         // setValue,
//         // clearErrors,
//     }= useForm({
//         resolver:yupResolver(schema)
//     })
//     const onSubmit= async(data)=>{
//         const formData = new FormData()
//         formData.append("first_name",data.first_name);
//         formData.append("last_name",data.last_name);
//         formData.append("email",data.email);
//         formData.append("password",data.password);
//         // formData.append("profile_pic",image);
        
//         try {
//             const res= await axiosInstance(endPoints.auth.signup, formData)
//             if(res.data.status == 200){
//                 toast.success(res.data.message)
//             }else{
//                 toast.error(res.data.message)
//             }
//         } catch (error) {
//             toast.error(error.data.message)
//         }
//     }

//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//         {...register("first_name")}
//         label="First Name"
//         variant="outlined"
//         // error={!! errors.first_name}
//         // helperText={errors.first_name?.message}
//         />

//         <TextField
//         {...register("last_name")}
//         label="Last Name"
//         variant="outlined"
//         // error={!! errors.last_name}
//         // helperText={errors.last_name?.message}
//         />

//         <TextField
//         {...register("password")}
//         label="password"
//         variant="outlined"
//         // error={!! errors.password}
//         // helperText={errors.password?.message}
//         />

//         <TextField
//         {...register("email")}
//         label="Email"
//         variant="outlined"
//         // error={!! errors.email}
//         // helperText={errors.email?.message}
//         />

//         <Button>
//             {/* {isSubmitting?"Loading...":"Register Now"} */}
//             Register
//         </Button>

//     </form>
//     </>
//   )
// }

// export default Register


//.....................................
//................2...................//

import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axiosInstance from '../../../api/axios/axios';
import { endPoints } from '../../../api/endpoints/endpoints';
import toast from 'react-hot-toast';
import registerImg from '../../../assets/image/register/blog-3.jpg';
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, 'Minimum two alphabet required')
    .max(20, 'Maximum twenty alphabets')
    .required(),
  last_name: yup
    .string()
    .min(2, 'Minimum two alphabet required')
    .max(20, 'Maximum twenty alphabets')
    .required(),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
  profile_pic: yup.mixed().required('Profile picture is required'),
});

function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [image, setImage] = useState();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('profile_pic', image);

    try {
      const res = await axiosInstance.post(endPoints.auth.signup, formData);
      if (res.data.status === 200) {
        toast.success(res.data.message);
        navigate('/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Registration failed');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setValue('profile_pic', file);
      clearErrors('profile_pic');
    } else {
      alert('Please upload a valid image');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${registerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box
        sx={{
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${registerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2,
  }}
      >
        <Paper
        elevation={0}
  sx={{
    padding: 3, // Reduce padding
    borderRadius: 3,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: transparent or glass effect
    backdropFilter: 'blur(10px)', // Optional: blurred glass effect
    width: '100%',
    maxWidth: 400, // 👈 Smaller width
  }}
        >
          <Typography variant="h5" mb={3} sx={{ color: 'white' }}>
  Welcome to Register Page
</Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <TextField
                {...register('first_name')}
  label="First Name"
  variant="outlined"
  error={!!errors.first_name}
  helperText={errors.first_name?.message}
  InputLabelProps={{ style: { color: 'white' } }}
  InputProps={{ style: { color: 'white' } }}
              />

              <TextField
                {...register('last_name')}
                label="Last Name"
                variant="outlined"
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
                InputLabelProps={{ style: { color: 'white' } }}
  InputProps={{ style: { color: 'white' } }}
              />

              <TextField
                {...register('email')}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                InputLabelProps={{ style: { color: 'white' } }}
  InputProps={{ style: { color: 'white' } }}
              />

              <TextField
                {...register('password')}
                label="Password"
                variant="outlined"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                InputLabelProps={{ style: { color: 'white' } }}
  InputProps={{ style: { color: 'white' } }}
              />
<Button
  variant="outlined"
  component="label"
  sx={{
    backgroundColor: '#1976d2',
    color: 'white', // 👈 makes the text white
    '&:hover': {
      backgroundColor: '#115293',
      color: 'white', // 👈 keeps text white on hover
    },
  }}
>
  Upload Profile Picture
  <input type="file" hidden accept="image/*" onChange={handleImageChange} />
</Button>

              {errors.profile_pic && (
                <Typography color="error" fontSize={14}>
                  {errors.profile_pic.message}
                </Typography>
              )}

              {image && (
                <Box>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="preview"
                    style={{
                      maxWidth: '100%',
                      maxHeight: 200,
                      borderRadius: 8,
                      marginTop: 10,
                    }}
                  />
                </Box>
              )}

              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#115293' },
                }}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}

export default Register;

