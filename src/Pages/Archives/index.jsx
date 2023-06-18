import React from "react";
import "./Archives.css";
import { useData } from "../../DataContext";
import Header from "../../Component/Header";
import HabitCard from "../../Component/HabitCard";

const Archives = () => {
  const { state } = useData();
  return (
    <div className="max-w-[1280px] mx-auto bg-blue-950 min-h-screen px-6 py-4 flex flex-col gap-12">
      <Header />
      <section className="flex flex-col gap-8 text-blue-50">
        <h2 className="text-center text-4xl">Archive List</h2>
        <div className="archive_list">
          {state.archiveList.map((currentHabit) => {
            return <HabitCard key={currentHabit.id} {...currentHabit} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Archives;
