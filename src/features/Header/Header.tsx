import React from "react";
import { Typography, Box } from "@mui/material";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
export const Header = () => {
  return (
    <Box display={"flex"} width="100%" justifyContent="space-between" p={3}>
      <Box>
        <FaTelegramPlane
          style={{ fill: "#C8C7C7", width: "20px", height: "20px" }}
        />
        <AiFillInstagram
          style={{ fill: "#C8C7C7", width: "20px", height: "20px" }}
        />
        <AiOutlineTwitter
          style={{ fill: "#C8C7C7", width: "20px", height: "20px" }}
        />
      </Box>
      <Box display={"flex"} justifyContent="center" alignContent={"center"}>
        <Typography
          variant="h3"
          component={"h3"}
          sx={{ marginTop: "2px", mx: 1 }}
        >
          ورود / ثبت نام
        </Typography>
        <MdMoreVert
          style={{ fill: "#C8C7C7", width: "25px", height: "25px" }}
        />
      </Box>
    </Box>
  );
};
