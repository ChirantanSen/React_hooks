// import { yupResolver } from '@hookform/resolvers/yup';
// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router-dom'
// import * as yup from 'yup'
// import axiosInstance from '../../../api/axios/axios';
// import { endPoints } from '../../../api/endpoints/endpoints';
// import toast from 'react-hot-toast';



// const schema = yup.object().shape({
//     title:yup.string().min(2,"Minimum 2 alphabets").max(30,"Can not exceed 30 alphabet").required("Title is required"),
//     description:yup.string().min(2,"Minimum 2 alphabets").max(30,"Can not exceed 30 alphabet").required("Description is required"),
//     image:yup.mixed().required("Image is required")
// })
// function Edit() {
//     const {id}=useParams();
//     const [img,setImg]=useState();
//     const [details,setDetails]=useState();
//     console.log(details,"kk");
//     // ............
//     const{
//         register,
//         handleSubmit,
//         setValue,
//         clearErrors,
//         formState:{errors, isSubmitting},
//     }=useForm({resolver:yupResolver(schema)})
//     // ............
//     const handleChange = (e) =>{
//         const file =e.target.files[0];
//         if(file && file.type.startsWith('image/')){
//             setImg(file);
//             setValue("image",file);
//             clearErrors("image",file)
//         }else{
//             alert("Please upload your image file")
//         }
//     }
//     // ............
//     useEffect(()=>{
//         const handleApi = async ()=>{
//             try {
//                 const res = await axiosInstance.get(`${endPoints.crud.detail}/${id}`)
//                 setDetails(res.data.data || [])
//                 return res;
//             } catch (error) {
//                 console.log(error);
                
//             }
//         }
//         handleApi()
//     },[])
//     // ............
//     useEffect(()=>{
//         setValue("title",details?.title)
//         setValue("description",details?.description)
//     },[setValue,details])
//     // ............
    
//     const onSubmit = async (data)=>{
//         const formData = new FormData()
//         formData.append("id",id);
//         formData.append("title",data.title);
//         formData.append("description",data.description);
//         formData.append("image",img);

//         try {
//             const response= await axiosInstance.post(endPoints.crud.update, formData)
//             if (response.data.status == 200) {
//                 toast.success(response.data.message)
//             }else{
//                 toast.error(response.data.message)
//             }
//             return response;
//         } catch (error) {
//             toast.error(error.data.message)
//         }
//     }

//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//             <input
//             {...register("title")}
//             type="text"
//             placeholder="title"
//             name="title"
//             />
//             {errors.title && (<p>{errors.title.message}</p>)}
//         </div>
//         {/* ................ */}

//          <div>
//             <input
//             {...register("description")}
//             type="description"
//             placeholder="description"
//             name="description"
//             />
//             {errors.description && <p>{errors.description.message}</p>}
//         </div>
//         {/* ................ */}

//         <div>
//             <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//             />
//             {errors.image && <p>{errors.image.message}</p>}
//         </div>
//         {/* ................ */}
//         <div>
//             {img && (
//                 <div>
//                     <img src={URL.createObjectURL(img)}
//                     alt="Preview"
//                     />
//                 </div>
//             )}
//             <button
//             type="submit"
//             disabled={isSubmitting}
//             >
//                 {isSubmitting?"Adding...":"Add"}
//             </button>
//         </div>
//     </form>
//     </>
//   )
// }

// export default Edit

// ..................2................

import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import axiosInstance from '../../../api/axios/axios';
import { endPoints } from '../../../api/endpoints/endpoints';
import toast from 'react-hot-toast';

// MUI imports
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';

const schema = yup.object().shape({
  title: yup.string().min(2, 'Minimum 2 characters').max(30, 'Cannot exceed 30 characters').required('Title is required'),
  description: yup.string().min(2, 'Minimum 2 characters').max(30, 'Cannot exceed 30 characters').required('Description is required'),
  image: yup.mixed().required('Image is required'),
});

function Edit() {
  const { id } = useParams();
  const [img, setImg] = useState();
  const [details, setDetails] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImg(file);
      setValue('image', file);
      clearErrors('image');
    } else {
      alert('Please upload a valid image file');
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axiosInstance.get(`${endPoints.crud.detail}/${id}`);
        setDetails(res.data.data || {});
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [id]);

  useEffect(() => {
    if (details) {
      setValue('title', details?.title || '');
      setValue('description', details?.description || '');
    }
  }, [details, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', img);

    try {
      const response = await axiosInstance.post(endPoints.crud.update, formData);
      if (response.data.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={4} sx={{ padding: 4, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>Edit Item</Typography>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <TextField
            fullWidth
            // label="Title"
            margin="normal"
            {...register('title')}
            error={Boolean(errors.title)}
            helperText={errors.title?.message}
          />

          <TextField
            fullWidth
            // label="Description"
            margin="normal"
            {...register('description')}
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
          />

          <Box my={2}>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              style={{ marginTop: '8px' }}
            />
            {errors.image && <Typography color="error" variant="body2">{errors.image.message}</Typography>}
          </Box>

          {img && (
            <Box mb={2} textAlign="center">
              <img src={URL.createObjectURL(img)} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Edit;
