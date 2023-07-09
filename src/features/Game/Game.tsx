import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Typography, Box, Tabs, Tab } from "@mui/material";
import { v4 as uuId } from "uuid";

import { setGameWords } from "./slice/gameReducers";
import { shuffleArray } from "../../functions/index.js";

import { setPlayersCount } from "./slice/gameReducers";
import { CsInput } from "../../shared/input";
import { Words } from "./components/Words";
import { GridTable } from "./components/GridTable.tsx";

import "./game.scss";
import { useNavigate } from "react-router-dom";

export const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState(0);
  const { psychoWord, othersWord, playersCount, words } = useSelector(
    (state) => state.game
  );

  const generate = (psychoWord, otherWord, playersCount) => {
    let temp = [];
    if (playersCount !== 0) {
      const gameWords = [...new Array(playersCount - 1)].map((item) => {
        return { value: otherWord, key: uuId() };
      });
      temp = shuffleArray([...gameWords, { value: psychoWord, key: uuId() }]);
    }
    dispatch(setGameWords(temp));
  };

  return (
    <Container maxWidth="md" sx={{ height: "100%" }} className="p-2">
      <Box className="cu-box-black p-1">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            direction: "rtl",
          }}
        >
          <Tabs
            value={tabs}
            onChange={(event, newValue) => {
              setTabs(newValue);
            }}
          >
            {/* <Tab label="اتوماتیک" sx={{ color: "#7e7e7e" }} /> */}
            <Tab label="دستی" sx={{ color: "#7e7e7e" }} />
          </Tabs>
        </Box>
        <Words />
        <Box>{tabs === 0 ? "" : tabs === 1 ? <Words /> : null}</Box>
      </Box>
      <Box
        className="cu-box-black p-2 my-2"
        display="flex"
        justifyContent={"space-between"}
      >
        <Button
          variant="contained"
          onClick={() => generate(psychoWord, othersWord, playersCount)}
        >
          پخش کردن کلمات
        </Button>
        <Box display="flex">
          <CsInput
            type="number"
            placeholder="یک عدد وارد کنید"
            value={playersCount}
            onChange={(e) => {
              dispatch(setPlayersCount(parseInt(e.target.value)));
            }}
          />
          <Typography
            sx={{ color: "white", m: 1, fontSize: "14px" }}
            id="modal-modal-title"
            variant="h4"
            component="h4"
            textAlign={"center"}
          >
            :تعداد بازیکنان را وارد کنید
          </Typography>
        </Box>
      </Box>
      <Box>{words.length && <GridTable />}</Box>

      <br />
      <br />
      <br />
      <br />
      <Button
        className="w-100"
        variant="contained"
        onClick={() => {
          navigate(`/`);
        }}
      >
        خانه
      </Button>
    </Container>
  );
};
