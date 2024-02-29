import { Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Footer = () => {
  return (
    <div>
      <Grid container display={'flex'} sx={{backgroundColor:'#212731', color:'#FFFFFF'}}>
        <Grid item xs={6} paddingLeft={10}>
<h2>Categories</h2>
<Typography>Web Builder</Typography>
<Typography>Hosting</Typography>
<Typography>Data center</Typography>
<Typography>Robotic-Automation</Typography>
        </Grid>
        <Grid item xs={4} >
<h2>Contact</h2>
<Typography>Contact</Typography>
<Typography>Privacy Policy</Typography>
<Typography>Terms of Service</Typography>
<Typography>Categories</Typography>
<Typography>About</Typography>

        </Grid>
        <Grid itemxs={2}>
 <Typography marginTop={10}>United State <ExpandMoreOutlinedIcon fontSize="15px" /></Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
