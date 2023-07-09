import { Typography, Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Header } from "../Header/Header";
import "./home.scss";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Header />
      <Container
        className="h-100"
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow:'1'
        }}
      >
        <Box>
          <Typography variant="h1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
          </Typography>
          <Typography sx={{ m: 2 }} variant="h3" component={"h2"}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`game`);
          }}
        >
          شروع بازی 
        </Button>
      </Container>
    </div>
  );
};
