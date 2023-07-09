import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setPsychoWord, setOthersWord } from "../slice/gameReducers";
import { CsInput } from "../../../shared/input";
export const Words = () => {
  const { psychoWord, othersWord } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const psychoWordsHandler = (e) => {
    dispatch(setPsychoWord(e.target.value));
  };
  const othersWordsHandler = (e) => {
    dispatch(setOthersWord(e.target.value));
  };
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        margin={"8px"}
      >
        <CsInput
          className="text-align-end"
          type="password"
          value={psychoWord}
          onChange={(e) => {
            psychoWordsHandler(e);
          }}
        />
        <Typography variant="h3" sx={{ margin: ".5rem" }}>
          :کلمه سایکو
        </Typography>
      </Box>
      <Box display="flex" justifyContent={"center"} alignItems="center">
        <CsInput
          className="text-align-end"
          type="password"
          value={othersWord}
          onChange={(e) => {
            othersWordsHandler(e);
          }}
        />
        <Typography variant="h3" sx={{ margin: ".5rem" }}>
          :کلمه دیگران
        </Typography>
      </Box>
    </Box>
  );
};
