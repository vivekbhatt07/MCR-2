import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../DataContext";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Detail = () => {
  const { state } = useData();
  const { habitId } = useParams();

  const getHabit = state.habitList.find((currentHabit) => {
    return currentHabit.id == habitId;
  });

  return (
    <div className="max-w-[1280px] mx-auto bg-blue-950 min-h-screen px-6 py-4 flex flex-col gap-12">
      <h1 className="mx-auto text-4xl text-blue-50">HABIT DETAILS</h1>
      <div className="min-w-[400px] mx-auto p-4 bg-blue-600 flex flex-col gap-4 rounded-md">
        <h3 className="text-2xl text-center uppercase font-semibold">
          {getHabit.habitName}
        </h3>
        <div className="flex flex-col gap-2 text-blue-50">
          <p className="flex gap-4 justify-between bg-[#000] p-2 rounded-md">
            <span>Habit Repetition</span>
            <ArrowRightAltIcon />
            <span>{getHabit.habitRepeat}</span>
          </p>
          <p className="flex gap-4 justify-between bg-[#000] p-2 rounded-md">
            <span>Habit Goal</span>
            <ArrowRightAltIcon />
            <span>{getHabit.habitGoal} Time</span>
          </p>
          <p className="flex gap-4 justify-between bg-[#000] p-2 rounded-md">
            <span>Habit Day</span>
            <ArrowRightAltIcon />
            <span>{getHabit.habitDay} time</span>
          </p>
          <p className="flex gap-4 justify-between bg-[#000] p-2 rounded-md">
            <span>Habit Repetition</span>
            <ArrowRightAltIcon />
            <span>From {getHabit.habitStart}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
