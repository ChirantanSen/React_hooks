
// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axios/axios";
// import { endPoints } from "../../../api/endpoints/endpoints";
// import { Link } from "react-router-dom";
// import SweetAlertComponent from "../../../components/sweetAlert/sweetAlert";
// import { product_list } from "../../../api/axios/axios";
// // MUI imports
// import { Box, Button, Grid, Typography, Paper } from "@mui/material";

// function ProductList() {
//   const [list, setList] = useState([]);
//   const [id, setId] = useState();
//   const [modal, setModal] = useState(false);

//   const handleApi = async () => {
//     try {
//       const res = await axiosInstance.post(endPoints.crud.list);
//       setList(res.data.data || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     handleApi();
//   }, []);

//   const handleDelete = async () => {
//     const formData = new FormData();
//     formData.append("id", id);
//     try {
//       await axiosInstance.post(endPoints.crud.remove, formData);
//       setModal(false);
//       handleApi();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Box sx={{ width: "100%", px: 4, py: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Product List
//       </Typography>

//       <Grid container spacing={3}>
//         {Array.isArray(list) &&
//           list.map((item) => (
//             <Grid item xs={12} key={item._id}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   width: "100%",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 2,
//                   p: 2,
//                   justifyContent: "space-between",
//                   flexWrap: "wrap", // helpful for smaller screens
//                 }}
//               >
//                 {/* Image */}
//                 <Box
//                   component="img"
//                   src={product_list(item.image)}
//                   alt={item.title}
//                   sx={{
//                     width: 100,
//                     height: 100,
//                     objectFit: "cover",
//                     borderRadius: 2,
//                     flexShrink: 0,
//                   }}
//                 />

//                 {/* Title and Description */}
//                 <Box sx={{ flexGrow: 1, minWidth: 200 }}>
//                   <Typography variant="subtitle1" fontWeight="bold">
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {item.description}
//                   </Typography>
//                 </Box>

//                 {/* Action Buttons */}
//                 <Box display="flex" gap={1} flexShrink={0}>
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     component={Link}
//                     to={`/cms/edit/${item._id}`}
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="error"
//                     onClick={() => {
//                       setId(item._id);
//                       setModal(true);
//                     }}
//                   >
//                     Delete
//                   </Button>
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//       </Grid>

//       {/* Sweet Alert Modal */}
//       {modal && (
//         <SweetAlertComponent
//           confirm={() => {
//             if (id !== undefined) {
//               handleDelete();
//             } else {
//               console.error("ID is undefined");
//             }
//           }}
//           cancel={() => setModal(false)}
//           title={"Are you sure?"}
//           subtitle={"You will not be able to recover!"}
//         />
//       )}
//     </Box>
//   );
// }

// export default ProductList;


//................................//

import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axios/axios";
import { endPoints } from "../../../api/endpoints/endpoints";
import { Link } from "react-router-dom";
import SweetAlertComponent from "../../../components/sweetAlert/sweetAlert";
import { product_list } from "../../../api/axios/axios";

// MUI imports
import {
  Box,
  Button,
  Grid,
  Typography,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function ProductList() {
  const [list, setList] = useState([]);
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  const [titleSearch, setTitleSearch] = useState("");
  const [descSearch, setDescSearch] = useState("");

  const handleApi = async () => {
    try {
      const res = await axiosInstance.post(endPoints.crud.list);
      setList(res.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("id", id);
    try {
      await axiosInstance.post(endPoints.crud.remove, formData);
      setModal(false);
      handleApi();
    } catch (error) {
      console.log(error);
    }
  };

  // Filter list based on search inputs
  const filteredList = list.filter((item) => {
    const titleMatch = item.title
      ?.toLowerCase()
      .includes(titleSearch.toLowerCase());
    const descMatch = item.description
      ?.toLowerCase()
      .includes(descSearch.toLowerCase());
    return titleMatch && descMatch;
  });

  return (
    <Box sx={{ width: "100%", px: 4, py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product List
      </Typography>

      {/* Search Bars */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
          justifyContent: "center",
        }}
      >
        <TextField
          label="Search by Title"
          variant="outlined"
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Search by Description"
          variant="outlined"
          value={descSearch}
          onChange={(e) => setDescSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <Grid item xs={12} key={item._id}>
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  component="img"
                  src={product_list(item.image)}
                  alt={item.title}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />

                <Box sx={{ flexGrow: 1, minWidth: 200 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>

                <Box display="flex" gap={1} flexShrink={0}>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={`/cms/edit/${item._id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setId(item._id);
                      setModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ m: 2 }}>
            No products found.
          </Typography>
        )}
      </Grid>

      {modal && (
        <SweetAlertComponent
          confirm={() => {
            if (id !== undefined) {
              handleDelete();
            } else {
              console.error("ID is undefined");
            }
          }}
          cancel={() => setModal(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </Box>
  );
}

export default ProductList;

