// import React, { useEffect, useState } from 'react'
// import axiosInstance from '../../../api/axios/axios';
// import { endPoints } from '../../../api/endpoints/endpoints';
// import toast from 'react-hot-toast';

// function ProfileDetails() {
//     const [profileDetails,setProfileDetails]=useState(null);
//     useEffect(()=>{
//         const handleApi = async ()=>{
//             try {
//                 const res = await axiosInstance.get(endPoints.auth.profile);
//                 console.log(res, "res");
//                 if(res.data.status == 200){
//                     setProfileDetails(res.data.data);
//                 }else{
//                     toast.error(res.data.message);
//                 }
//                 return res;
//             } catch (error) {
//                 toast.error(res.data.message);
//             }
//         }
//         handleApi();
//     },[])
//   return (
//     <>
//     <h5>
//         {profileDetails?.first_name}
//     </h5>
//     <h5>{profileDetails?.last_name}</h5>
//     <h5>
//         {profileDetails?.email}
//     </h5>
//     </>
//   )
// }

// export default ProfileDetails

// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axios/axios";
// import { endPoints } from "../../../api/endpoints/endpoints";
// import toast from "react-hot-toast";
// import profileImg from "../../../assets/image/profile.png";
// // import "./ProfileDetails.css"; // Add a CSS file
// // import "../profileDetails/profileDetails.css"

// function ProfileDetails() {
//   const [profileDetails, setProfileDetails] = useState(null);

//   useEffect(() => {
//     const handleApi = async () => {
//       try {
//         const res = await axiosInstance.get(endPoints.auth.profile);
//         console.log(res, "res");
//         if (res.data.status === 200) {
//           setProfileDetails(res.data.data);
//         } else {
//           toast.error(res.data.message);
//         }
//         return res;
//       } catch (error) {
//         toast.error("Something went wrong!");
//       }
//     };
//     handleApi();
//   }, []);

//   return (
//     <div className="profile-card-container">
//       <div className="profile-card">
//         <h2 className="profile-title">👤 User Profile</h2>
//         {profileDetails ? (
//           <div className="profile-info">
//             <p>
//               <strong>First Name:</strong> {profileDetails.first_name}
//             </p>
//             <p>
//               <strong>Last Name:</strong> {profileDetails.last_name}
//             </p>
//             <p>
//               <strong>Email:</strong> {profileDetails.email}
              
//             </p>
//           </div>
//         ) : (
//           <p className="loading-text">Loading profile...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProfileDetails;

import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axios/axios";
import { endPoints } from "../../../api/endpoints/endpoints";
import toast from "react-hot-toast";
import profileImg from "../../../assets/image/profile.png";

// MUI Components
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  CircularProgress,
  Divider,
} from "@mui/material";

function ProfileDetails() {
  const [profileDetails, setProfileDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleApi = async () => {
      try {
        const res = await axiosInstance.get(endPoints.auth.profile);
        if (res.data.status === 200) {
          setProfileDetails(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    handleApi();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: 700,
            width: "100%",
            borderRadius: 3,
            boxShadow: 4,
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          {/* Left: Profile Image */}
          <Box
            sx={{
              backgroundColor: "#e0f7fa",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "40%" },
              p: 3,
            }}
          >
            <Avatar
              src={profileImg}
              alt="Profile"
              sx={{ width: 150, height: 150 }}
            />
          </Box>

          {/* Right: Profile Details */}
          <Box sx={{ width: { xs: "100%", md: "60%" }, p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              👤 My Profile
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <CardContent>
              <Typography variant="body1" gutterBottom>
                <strong>First Name:</strong> {profileDetails.first_name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Last Name:</strong> {profileDetails.last_name}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {profileDetails.email}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      )}
    </Box>
  );
}

export default ProfileDetails;


