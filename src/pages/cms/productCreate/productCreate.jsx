// .........1........
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup'
// import React, { useState } from 'react'
// import axiosInstance from '../../../api/axios/axios';
// import { endPoints } from '../../../api/endpoints/endpoints';
// import toast from 'react-hot-toast';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// const schema=yup.object().shape({
//     title:yup.string().min(2,"Minimum two alphabet").max(30,"Maximum thirty alphabet").required("Title is Required"),
//     description:yup.string().min(2,"Minimum two alphabet").max(30,"Maximum thirty alphabet").required("Title is Required"),
//     image:yup.mixed().required()
// })
// function ProductCreate() {
//     const navigate=useNavigate();
//     const [img,setImg]=useState();
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         reset,
//         clearErrors,
//     }=useForm({resolver:yupResolver(schema)})

//     const handleChange=(e)=>{
//         const file=e.target.files[0]
//         if (file && file.type.startsWith("image/")) {
//             setImg("image",file);
//             setValue("image",file);
//             clearErrors("image",file);

//         }else{
//             alert("Please Upload Your Image")
//         }
//     }

//     const onSubmit = async(data)=>{
//         const formData= new FormData();
//         formData.append("title",data.title);
//         formData.append("description",data.description);
//         formData.append("image",img);
//         reset();
//         setImg("");

//         try{
//         const res= await axiosInstance(endPoints.crud.create)
//         if(res.data.status==200){
//             toast.success(res.data.message)
//             navigate(`/cms/productList`)
//         }else{
//             toast.error(res.data.message)
//         }
//     }catch(error){
//         toast.error(error.data.message)
//     }
//     }
//     return(
//         <>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <input
//                 {...register("title")} type="text" placeholder="Title" name="title"
//                 aria-invalid={clearErrors.title?"true":"false"}
//                 />
//                 {/* {errors.title && <P>{errors.title.message}</P>} */}
//             </div>

//            <div>
//               <input
//                 {...register("description")} type="text" placeholder="Description" name="description"
//                 aria-invalid={clearErrors.description?"true":"false"}
//                 />
//                 {/* {errors.description && <P>{errors.description.message}</P>} */}
//            </div>

//               <div>
//                <input
//                type="file" name="image" accept="image/*" onChange={handleChange}
//                />
//                {/* {errors.image && <p>{errors.image.message}</p>} */}
//               </div>

//               {img && (
//                         <div>
//                             <img src={URL.createObjectURL(img)}
//                             alt="preview"
//                             />
//                         </div>
//                     )}
//                 <button type="submit"
//                 //  disabled={isSubmitting}
//                  >
//                     {/* {isSubmitting?"Adding...":"Add"} */}
//                 </button>

//         </form>
//         </>
//     )

// }

// export default ProductCreate

// ..........2......//

// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import React, { useState } from "react";
// import axiosInstance from "../../../api/axios/axios";
// import { endPoints } from "../../../api/endpoints/endpoints";
// import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Paper,
//   Stack,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// const schema = yup.object().shape({
//   title: yup
//     .string()
//     .min(2, "Minimum two alphabet")
//     .max(30, "Maximum thirty alphabet")
//     .required("Title is Required"),
//   description: yup
//     .string()
//     .min(2, "Minimum two alphabet")
//     .max(30, "Maximum thirty alphabet")
//     .required("Title is Required"),
//   image: yup.mixed().required("Image is required"),
// });

// function ProductCreate() {
//   const navigate = useNavigate();
//   const [img, setImg] = useState();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     clearErrors,
//     formState: { errors, isSubmitting },
//   } = useForm({ resolver: yupResolver(schema) });

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       setImg(file);
//       setValue("image", file);
//       clearErrors("image");
//     } else {
//       alert("Please upload a valid image");
//     }
//   };

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("image", img); // Fixed typo: was formData.img()

//     reset();
//     setImg("");

//     try {
//       const res = await axiosInstance.post(endPoints.crud.create, formData);
//       if (res.data.status === 200) {
//         toast.success(res.data.message);
//         navigate(`/cms/productList`);
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <>
//     <Box
//       sx={{
//         height: "100vh",
//         width: "100vw",
//         backgroundColor: "#f5f5f5",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         p: 2,
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: "100%",
//           maxWidth: 500,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" mb={3} color="primary">
//           Create New Product
//         </Typography>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Stack spacing={3}>
//             <TextField
//               {...register("title")}
//               label="Title"
//               fullWidth
//               error={!!errors.title}
//               helperText={errors.title?.message}
//               // {...register("title")} type="text" placeholder="Title" name="title"
//               // aria-invalid={clearErrors.title?"true":"false"}
//             />
//             {/* {errors.title && <P>{errors.title.message}</P>} */}

//             <TextField
//               {...register("description")}
//               label="Description"
//               fullWidth
//               error={!!errors.description}
//               helperText={errors.description?.message}
//               // {...register("description")} type="text" placeholder="Description" name="description"
//               // aria-invalid={clearErrors.description?"true":"false"}
//             />
//             {/* {errors.description && <P>{errors.description.message}</P>} */}

//             <Button
//               variant="outlined"
//               component="label"
//               sx={{ textTransform: "none" }}
//             >
//               Upload Image
//               <input
//                 type="file"
//                 accept="image/*"
//                 hidden
//                 onChange={handleChange}
//                 name="image"
//               />
//             </Button>
//             {/* {errors.image && <p>{errors.image.message}</p>} */}

//             {/* {img && (
//               <Box>
//                 <img
//                   src={URL.createObjectURL(img)}
//                   alt="preview"
//                   style={{ maxWidth: "100%", maxHeight: 200, borderRadius: 8 }}
//                 />
//               </Box>
//             )} */}

//             {img && (
//               <Box
//                 sx={{
//                   width: 200,
//                   height: 200,
//                   overflow: "hidden",
//                   borderRadius: 2,
//                   border: "1px solid #ccc",
//                   mx: "auto",
//                 }}
//               >
//                 <img
//                   src={URL.createObjectURL(img)}
//                   alt="preview"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover", // Masks to box size
//                     display: "block",
//                   }}
//                 />
//               </Box>
//             )}

//             {/* <Link to="/cms/productList">
//               <Button variant="outlined">Product List</Button>
//             </Link> */}

//             <Box sx={{ width: "100%", mx: "auto" }}>
//               <Button
//                 component={Link}
//                 to="/cms/productList"
//                 variant="outlined"
//                 fullWidth
//               >
//                 Product List
//               </Button>
//             </Box>

//             <Button
//               type="submit"
//               variant="contained"
//               disabled={isSubmitting}
//               sx={{
//                 backgroundColor: "#1976d2",
//                 "&:hover": { backgroundColor: "#115293" },
//               }}
//             >
//               {/* {isSubmitting?"Adding...":"Add"} */}
//               Add Product
//             </Button>
//           </Stack>
//         </form>
//       </Paper>
//     </Box>
//     <Link to="/auth/profileDetails"> Profile Details</Link>
//   </>
//   );
// }

// export default ProductCreate;

//.............................//

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import axiosInstance from "../../../api/axios/axios";
import { endPoints } from "../../../api/endpoints/endpoints";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

// Validation Schema
const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Minimum two alphabet")
    .max(30, "Maximum thirty alphabet")
    .required("Title is Required"),
  description: yup
    .string()
    .min(2, "Minimum two alphabet")
    .max(30, "Maximum thirty alphabet")
    .required("Description is Required"),
  image: yup.mixed().required("Image is required"),
});

function ProductCreate() {
  const navigate = useNavigate();
  const [img, setImg] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  // Image change handler
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImg(file);
      setValue("image", file);
      clearErrors("image");
    } else {
      alert("Please upload a valid image");
    }
  };

  // Submit handler
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", img);

    reset();
    setImg("");

    try {
      const res = await axiosInstance.post(endPoints.crud.create, formData);
      if (res.data.status === 200) {
        toast.success(res.data.message);
        navigate(`/cms/productList`);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" mb={3} color="primary">
          Create New Product
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {/* Title Field */}
            <TextField
              {...register("title")}
              label="Title"
              fullWidth
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            {/* Description Field */}
            <TextField
              {...register("description")}
              label="Description"
              fullWidth
              error={!!errors.description}
              helperText={errors.description?.message}
            />

            {/* Upload Image Button */}
            <Button
              variant="outlined"
              component="label"
              sx={{ textTransform: "none" }}
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleChange}
                name="image"
              />
            </Button>

            {/* Image Preview */}
            {img && (
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  overflow: "hidden",
                  borderRadius: 2,
                  border: "1px solid #ccc",
                  mx: "auto",
                }}
              >
                <img
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            )}

            {/* Product List Button */}
            <Box sx={{ width: "100%", mx: "auto" }}>
              <Button
                component={Link}
                to="/cms/productList"
                variant="outlined"
                fullWidth
              >
                Product List
              </Button>
            </Box>

            {/* Profile Details Button */}
            <Box sx={{ width: "100%", mx: "auto" }}>
              <Button
                component={Link}
                to="/auth/profileDetails"
                variant="outlined"
                color="white"
                fullWidth
                 sx={{
                  color:"#fff",
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" },
              }}
              >
                Profile Details
              </Button>
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" },
              }}
            >
              Add Product
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default ProductCreate;
