import React, { useState } from "react";
import { Grid, Button, Modal, Typography, Box } from "@mui/material";
import { setGameWords } from "../slice/gameReducers";
import { useDispatch, useSelector } from "react-redux";
export const GridTable = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { words } = useSelector((state) => state.game);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleOpen = (item) => {
    setSelectedCard(item);
    setOpen(true);
  };
  const handleClose = (card) => {
    dispatch(
      setGameWords(
        words.filter((item) => {
          return item.key !== card.key;
        })
      )
    );
    setOpen(false);
  };
  return (
    <Box  className="cu-box-black p-1">
      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        container
      >
        {words.map((item) => {
          return (
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: ".5rem",
              }}
            >
              <Button
                sx={{
                  width: "90%",
                  backgroundColor: "#717171",
                  minHeight: "4rem",
                }}
                variant="contained"
                key={item.key}
                onClick={(e) => {
                  handleOpen(item);
                }}
              ></Button>
            </Grid>
          );
        })}
      </Grid>
      <Modal
        open={open}
        onClose={(e) => {
          handleClose(selectedCard);
        }}
        className="modal-container"
      >
        <Box
          sx={{
            maxWidth: { md: 450, xs: "100%" },
            minWidth: { md: 450, xs: "100%" },
          }}
          className="modal-box"
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
          >
            کلمه شما
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            fontSize="28px"
            textAlign={"center"}
          >
            {selectedCard?.value}
          </Typography>
          <Button
            sx={{ width: "100%" }}
            variant="contained"
            onClick={() => {
              handleClose(selectedCard);
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              textAlign={"center"}
              fontSize="16px"
            >
              فهمیدم
            </Typography>
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
