import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { motion } from 'framer-motion';

function ImagePlaceholder({ loaded, children }) {
  return (
    <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'linear-gradient(45deg, #f0f0f0 30%, #e0e0e0 90%)'
          }}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Box>
  );
}

export default ImagePlaceholder; 