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
      <h1 className="mx-auto text-4xl text-blue-50">HABIT DETAILS</h1>
      <div className="min-w-[400px] mx-auto p-4 bg-blue-600 h-[300px] flex flex-col gap-3 rounded-md">
        <h3 className="text-2xl text-center uppercase">{getHabit.habitName}</h3>
      </div>
    </div>
  );
};

export default Detail;
