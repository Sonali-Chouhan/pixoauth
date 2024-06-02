import { Box, Button, Typography } from "@mui/material";
import CSVFile from '../../Assets/Files/owid-covid-data.csv'

const Dashboard = () => {

    /**
     * @Download
     * Below code is to download the file from assets folder
     */
    const handleDownload = () => {
        var anchor=document.createElement('a');
    	anchor.setAttribute('href', CSVFile);
    	anchor.setAttribute('download','');
    	document.body.appendChild(anchor);
    	anchor.click();
    	anchor.parentNode.removeChild(anchor);
    }

    console.log(window.location.origin + "/owid-covid-data.csv")

    return(
        <Box>
            <Typography variant="h5" component="h2">
                Welcome to dashboard
                <Button 
                    variant="contained"
                    sx={{float: 'right'}}
                    onClick={handleDownload}
                >
                    Download CSV
                </Button>
            </Typography>
        </Box>
    )
}
export default Dashboard;