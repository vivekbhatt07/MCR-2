import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../DataContext";

const Detail = () => {
  const { state } = useData();
  const { habitId } = useParams();

  const getHabit = state.habitList.find((currentHabit) => {
    return currentHabit.id == habitId;
  });

  return (
    <div className="max-w-[1280px] mx-auto bg-blue-950 min-h-screen px-6 py-4 flex flex-col gap-12">
      <h1>{getHabit.habitName}</h1>
    </div>
  );
};

export default Detail;
