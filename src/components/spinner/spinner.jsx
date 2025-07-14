import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, Paper } from '@mui/material';

const SpinnerWithDesign = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2500); // simulate loading

    return () => clearTimeout(delay);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f0f2f5',
        p: 2,
      }}
    >
      {loading ? (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
            bgcolor: 'white',
          }}
        >
          <CircularProgress size={60} thickness={5} color="primary" />
          <Typography mt={2} variant="subtitle1" color="text.secondary">
            Loading, please wait...
          </Typography>
        </Paper>
      ) : (
        <Typography variant="h4" color="primary">
          ✅ Content Loaded!
        </Typography>
      )}
    </Box>
  );
};

export default SpinnerWithDesign;
