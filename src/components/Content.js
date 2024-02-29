import { Box, Grid, Typography, Button, Card, Rating, Icon, Fab , CardActions, CardActionArea, CardContent, CardMedia} from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import StarIcon from "@mui/icons-material/Star";
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

const Content = () => {
  const value = 5;

  return (
    <Box>
      <Typography fontSize={48} fontWeight={400} marginLeft={40}>
        Best Website builders in the US{" "}
      </Typography>

      <Grid
        container
        sx={{ border: "1px solid grey" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid item md xs={10}>
          <CheckCircleOutlineIcon fontSize="25px" /> Last Updated- February 22,
          2020 <InfoOutlinedIcon fontSize="25px" sx={{ marginLeft: "4%" }} />{" "}
          Advertising Disclosure{" "}
        </Grid>
        <Grid item xs={1}>
          Top Relevant <ExpandMoreOutlinedIcon fontSize="25px" />{" "}
        </Grid>
      </Grid>

      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        color={"black"}
      >
        <Button variant="text">Tools</Button>
        <Button variant="text">AWS Builder</Button>
        <Button variant="text">Start Build</Button>
        <Button variant="text">Build Supplies</Button>
        <Button variant="text">Tooling</Button>
        <Button variant="text">BlueHosting</Button>
      </Grid>

      <Grid container gap={"10px"}>
        Home <ArrowForwardIosIcon fontSize="2px" sx={{ padding: "5px" }} />{" "}
        Hosting for all{" "}
        <ArrowForwardIosIcon fontSize="2px" sx={{ padding: "5px" }} /> Hosting{" "}
        <ArrowForwardIosIcon fontSize="2px" sx={{ padding: "5px" }} /> Hosting6{" "}
        <ArrowForwardIosIcon fontSize="2px" sx={{ padding: "5px" }} /> Hosting5
      </Grid>

      <Card>
        <Button sx={{ backgroundColor: "#FF7724", color: "#FFFFFF" }}>
          {" "}
          <EmojiEventsOutlinedIcon /> Best Choice
        </Button>
        <Grid>
        <Fab color="#E1E4E6" disabled  >
        1
      </Fab> </Grid>

        <Grid container display={"flex"} justifyContent={"space-around"}>
          <Grid>
          <img
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
            width={200}
            style={{ padding: "30px" }} 
          />
        <Typography sx={{marginLeft:'90px'}}>Builder 1</Typography>
          </Grid>

          <Grid>
            <pre>
              <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive
            </pre>
            <pre>
              Digital Platform Creation Tool, Streamlined Design Interface for{" "}
            </pre>
            <pre>Professional Websites and Online Stores (Black/Blue) </pre>
            <pre>
              <b>Main Highlights</b>
            </pre>

            <pre>
              {" "}
              [What You Get]: Receive the WixPro website builder suite,
            </pre>
            <pre>
              {" "}
              access to premium design templates, an extensive library of{" "}
            </pre>
            <pre> widgets and apps, and detailed step-by-step guides.</pre>
          </Grid>
          
          

          <Grid>
            <Card sx={{width:'200px', height:'300'}}>
            <Typography variant="h4" sx={{padding:'10px 0 10px 75px'}}>9.8</Typography>
            <Typography variant="h5" sx={{padding:'0 0 15px 35px'}}>Exceptional</Typography>

            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
                padding:'0 0 20px 35px'
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>   </Card>
          </Grid>

        </Grid>

        <Grid container display={"flex"} justifyContent={"space-evenly"} >
            <Button  sx={{margin:'0 100px 20px 460px'}}>Show More <ExpandMoreOutlinedIcon fontSize="15px"/> </Button>
            <Button variant="contained" sx={{width:250, margin:'0 0 20px 400px'}}>View</Button>
          </Grid>

      </Card> 



      <Card>
        <Button sx={{ backgroundColor: "#FF7724", color: "#FFFFFF" }}>
          {" "}
          < DiamondOutlinedIcon /> Best Value
        </Button>
        <Grid>
        <Fab color="#E1E4E6" disabled  >
        2
      </Fab> </Grid>

        <Grid container display={"flex"} justifyContent={"space-around"}>
          <Grid>
          <img
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
            width={200}
            style={{ padding: "30px" }} 
          />
        <Typography sx={{marginLeft:'90px'}}>Builder 1</Typography>
          </Grid>

          <Grid>
            <pre>
              <b>SiteCraft 68-Inch Ultimate Web Design Studio</b>- Advanced Site
            </pre>
            <pre>
            Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic {" "}
            </pre>
            <pre>Websites and E-commerce Platforms (Green/White)</pre>
            <pre>
              <b>Main Highlights</b>
            </pre>

            <pre> [What You Get]: Receive the WixPro website builder suite,</pre>
            <pre> access to premium design templates, an extensive library of </pre>
            <pre> widgets and apps, and detailed step-by-step guides.
</pre>
          </Grid>
          
          

          <Grid>
            <Card sx={{width:'200px', height:'300'}}>
            <Typography variant="h4" sx={{padding:'10px 0 10px 75px'}}>9.8</Typography>
            <Typography variant="h5" sx={{padding:'0 0 15px 35px'}}>Exceptional</Typography>

            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
                padding:'0 0 20px 35px'
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>   </Card>
          </Grid>

        </Grid>

        <Grid container display={"flex"} justifyContent={"space-evenly"} >
            <Button  sx={{margin:'0 100px 20px 460px'}}>Show More <ExpandMoreOutlinedIcon fontSize="15px"/> </Button>
            <Button variant="contained" sx={{width:250, margin:'0 0 20px 400px'}}>View</Button>
          </Grid>

      </Card>



      
      <Card>
      
          <Grid>
        <Fab color="#E1E4E6" disabled  >
        3
      </Fab> </Grid>
        <Grid container display={"flex"} justifyContent={"space-around"}>
          <Grid>
          <img
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
            width={200}
            style={{ padding: "30px" }} 
          />
        <Typography sx={{marginLeft:'90px'}}>Builder 1</Typography>
          </Grid>

          <Grid>
            <pre>
              <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive
            </pre>
            <pre>
              Digital Platform Creation Tool, Streamlined Design Interface for{" "}
            </pre>
            <pre>Professional Websites and Online Stores (Black/Blue) </pre>
            <pre>
              <b>Main Highlights</b>
            </pre>

            <pre>
              {" "}
              [What You Get]: Receive the WixPro website builder suite,
            </pre>
            <pre>
              {" "}
              access to premium design templates, an extensive library of{" "}
            </pre>
            <pre> widgets and apps, and detailed step-by-step guides.</pre>
          </Grid>
          
          

          <Grid>
            <Card sx={{width:'200px', height:'300'}}>
            <Typography variant="h4" sx={{padding:'10px 0 10px 75px'}}>9.8</Typography>
            <Typography variant="h5" sx={{padding:'0 0 15px 35px'}}>Exceptional</Typography>

            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
                padding:'0 0 20px 35px'
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>   </Card>
          </Grid>

        </Grid>

        <Grid container display={"flex"} justifyContent={"space-evenly"} >
            <Button  sx={{margin:'0 100px 20px 460px'}}>Show More <ExpandMoreOutlinedIcon fontSize="15px"/> </Button>
            <Button variant="contained" sx={{width:250, margin:'0 0 20px 400px'}}>View</Button>
          </Grid>

      </Card>



      
      <Card>
        
          <Grid>
        <Fab color="#E1E4E6" disabled  >
        4
      </Fab> </Grid>
        <Grid container display={"flex"} justifyContent={"space-around"}>
          <Grid>
          <img
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
            width={200}
            style={{ padding: "30px" }} 
          />
        <Typography sx={{marginLeft:'90px'}}>Builder 1</Typography>
          </Grid>

          <Grid>
            <pre>
              <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive
            </pre>
            <pre>
              Digital Platform Creation Tool, Streamlined Design Interface for{" "}
            </pre>
            <pre>Professional Websites and Online Stores (Black/Blue) </pre>
            <pre>
              <b>Main Highlights</b>
            </pre>

            <pre>
              {" "}
              [What You Get]: Receive the WixPro website builder suite,
            </pre>
            <pre>
              {" "}
              access to premium design templates, an extensive library of{" "}
            </pre>
            <pre> widgets and apps, and detailed step-by-step guides.</pre>
          </Grid>
          
          

          <Grid>
            <Card sx={{width:'200px', height:'300'}}>
            <Typography variant="h4" sx={{padding:'10px 0 10px 75px'}}>9.8</Typography>
            <Typography variant="h5" sx={{padding:'0 0 15px 35px'}}>Exceptional</Typography>

            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
                padding:'0 0 20px 35px'
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>   </Card>
          </Grid>

        </Grid>

        <Grid container display={"flex"} justifyContent={"space-evenly"} >
            <Button  sx={{margin:'0 100px 20px 460px'}}>Show More <ExpandMoreOutlinedIcon fontSize="15px"/> </Button>
            <Button variant="contained" sx={{width:250, margin:'0 0 20px 400px'}}>View</Button>
          </Grid>

      </Card>


      <Typography variant="h5" marginLeft={15}>Related deals you might like for </Typography>
      <Box sx={{ display:'flex', justifyContent:"space-evenly"}}>
      <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <Grid>
        <CardMedia
          component="img"

          
          image="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
        width={'200'}
          alt="green iguana"
         sx={{padding:'30px'}}
        />
        </Grid>
        <CardContent>
          <Button   sx={{backgroundColor:'#E1E4E6'}}>20% Off</Button> <Button sx={{backgroundColor:'#E1E4E6'}}>Limited time</Button>
          <Typography gutterBottom variant="body1" component="div" marginLeft={5}>
            Webbuilder 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
Computer modern clasic with wix support          </Typography>

         $39.96  <p>$49.96   (20% Off)  </p> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  variant="contained" fullWidth sx={{height:35}}>
          
        </Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <Grid>
        <CardMedia
          component="img"

          // height="200"
          image="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
        width={'100%'}
          alt="green iguana"
          style={{ margin:'30px 50px 30px 30px'}}
        />
        </Grid>
        <CardContent>
          <Button   sx={{backgroundColor:'#E1E4E6'}}>20% Off</Button> <Button sx={{backgroundColor:'#E1E4E6'}}>Limited time</Button>
          <Typography gutterBottom variant="body1" component="div" marginLeft={5}>
            Webbuilder 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
Computer modern clasic with wix support          </Typography>

         $39.96  <p>$49.96   (20% Off)  </p> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  variant="contained" fullWidth>
          View Deal
        </Button>
      </CardActions>
    </Card>

      
    <Card sx={{ maxWidth: 500}}>
      <CardActionArea>
        <Grid>
        <CardMedia
          component="img"

          // height="200"
          image="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
        width={'100%'}
          alt="green iguana"
          style={{ margin:'30px 50px 30px 30px'}}
        />
        </Grid>
        <CardContent>
          <Button   sx={{backgroundColor:'#E1E4E6'}}>20% Off</Button> <Button sx={{backgroundColor:'#E1E4E6'}}>Limited time</Button>
          <Typography gutterBottom variant="body1" component="div" marginLeft={5}>
            Webbuilder 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
Computer modern clasic with wix support          </Typography>

         $39.96  <p>$49.96   (20% Off)  </p> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  variant="contained" fullWidth>
          View Deal
        </Button>
      </CardActions>
    </Card>

      
      
      </Box>
<Grid container display={"flex"} justifyContent={"space-between"}>
  <Grid item >
<Typography variant="h5" marginLeft={20} marginTop={10}> Sign up and get exclusive</Typography>
<Typography variant="h5" marginLeft={20}>special deals</Typography>  </Grid>

<Button variant="contained" sx={{height:50, marginTop:10, marginRight:8}}>SignUp</Button>

</Grid>
    </Box>
  );
};

export default Content;
