import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";



import {
  // MdShare,
  MdAddShoppingCart,
  MdAddCircle,
  MdRemoveCircle,
  // MdFavorite,
  // MdVerticalAlignBottom,
} from "react-icons/md";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";




const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 0, sm: 2, md: 3, lg: 3 }}
        >
          {data.map((item) => (
            <Grid item sx={{ my: 1 }} xs={12} sm={6} md={4} lg={3}>
              <Box>
                <Card
                  sx={{
                    width: "290px",
                    padding: 1,
                    margin: 2,
                    "&:hover": {
                      cursor: "pointer",
                      transform: "scale(1.1)",
                    },
                    bgcolor:"white",
                    borderRadius:"20px",
                  }}
                >
                  <div>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                      alt="loading..."
                     sx={{borderRadius:"20px"}} 
                    />
                  </div>

                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "16px" }}
                      fontFamily={"Oswald"}
                    >
                      {item.title}
                    </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {item.price}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton sx={{ float: "right", textAlign: "center" ,color:"black" }}>
                      <MdAddShoppingCart className="addtocart" size={"25px"} />
                    </IconButton>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card> */}
      

      {/* {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image}  />
        </div>
      ))} */}
    </div>
  );
};

export default Product;
