import { Box, Button, Typography } from "@mui/material";
import './System.Style.scss'
import { useNavigate } from "react-router";

const PageNotFound = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/dashboard')
    }

    return(
        <Box className="page-not-found">
            <Box>
                <Typography variant="h1" component="h1">
                    <b>404</b>
                </Typography>
                <Typography variant="h4" component="h4">
                    OOPS! Page not found.
                </Typography>
                <Button 
                    variant="contained"
                    sx={{mt: 4}}
                    onClick={handleNavigate}
                >
                    Go to Dashboard
                </Button>
            </Box>
        </Box>
    )
}
export default PageNotFound;