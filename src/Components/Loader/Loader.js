import React from 'react';
import './Loader.Style.scss'
import { Box, CircularProgress } from '@mui/material';

const PageLoader = () => {
    return(
        <Box className="page-loader">
            <CircularProgress/>
        </Box>
    )
}
export default PageLoader;