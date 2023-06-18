import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../DataContext";
import { Button } from "@mui/material";

const HabitCard = (props) => {
  const { state, dispatch } = useData();
  return (
    <div className="bg-blue-400 p-4 flex flex-col gap-6">
      <h3 className="text-3xl text-center">{props.habitName}</h3>
      <div className="flex gap-2">
        <Button
          variant="contained"
          onClick={() => {
            props.openModal();
            props.setModalData({
              id: props.id,
              habitName: props.habitName,
              habitRepeat: props.habitRepeat,
              habitGoal: props.habitGoal,
              habitDay: props.habitDay,
              habitStart: props.habitStart,
            });
          }}
          className="basis-1/3"
        >
          EDIT
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "DELETE_HABIT", payload: props.id })}
          className="basis-1/3"
        >
          DELETE
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "ARCHIVE_HABIT", payload: props.id })}
          className="basis-1/3"
        >
          ARCHIVE
        </Button>
      </div>
      <div className="flex justify-center">
        <Link to={`/habit/${props.id}`}>View Detail</Link>
      </div>
    </div>
  );
};

export default HabitCard;
