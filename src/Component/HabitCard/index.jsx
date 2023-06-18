import React from "react";
import { Link } from "react-router-dom";

const HabitCard = (props) => {
  return (
    <div className="bg-blue-400 p-4">
      <h3 className="text-3xl">{props.title}</h3>
      <Link to={`/habit/${props.id}`}>View Detail</Link>
    </div>
  );
};

export default HabitCard;
