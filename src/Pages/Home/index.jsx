import React, { useState } from "react";
import { Button } from "@mui/material";

import { Add } from "@mui/icons-material";
import ModalProvider from "../../Component/ModalProvider";
import { useData } from "../../DataContext/index";
import HabitCard from "../../Component/HabitCard";
import "./Home.css";
import Header from "../../Component/Header";

const Home = () => {
  const { state, dispatch } = useData();

  const [isHabitOpen, setIsHabitOpen] = useState(false);

  const handleOpenHabit = () => setIsHabitOpen(true);
  const handleCloseHabit = () => setIsHabitOpen(false);

  const [habitData, setHabitData] = useState({
    habitName: "",
    habitRepeat: "",
    habitGoal: "",
    habitDay: "",
    habitStart: "",
  });

  const handleHabitData = (event) => {
    const { name, value } = event.target;
    setHabitData((prevHabitData) => {
      return { ...prevHabitData, [name]: value };
    });
  };

  const habitSubmitHandler = (event) => {
    event.preventDefault();
    handleCloseHabit();
  };

  // const repeat = ["Daily", "Monthly", "Yearly"];

  // const goals = ["1 times", "2 times", "3 times"];

  // const timeOfTheDay = ["Morning", "Afternoon", "Evening", "Night", "Any Time"];

  const startDate = ["Today", "Tomorrow", "Day after tomorrow"];

  return (
    <div className="max-w-[1280px] mx-auto bg-blue-950 min-h-screen px-6 py-4 flex flex-col gap-12">
      <Header />
      <h1 className="text-center mb-6 text-4xl text-blue-50">FITNESS FREAK</h1>
      <div className="mx-auto">
        <ModalProvider
          isOpen={isHabitOpen}
          closeModal={handleCloseHabit}
          modalTitle="ADD HABIT"
          modalBtnVariant={
            <Button
              variant="contained"
              className="flex items-center gap-1"
              onClick={handleOpenHabit}
            >
              <Add />
              <span>Add a new habit</span>
            </Button>
          }
        >
          <div className="flex flex-col gap-3">
            <form
              className="text-blue-950 flex flex-col gap-4"
              onSubmit={habitSubmitHandler}
            >
              <label className="flex flex-col gap-1">
                <span>Name</span>
                <input
                  type="text"
                  name="habitName"
                  onChange={handleHabitData}
                  value={habitData.habitName}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Repeat</span>
                <select
                  name="habitRepeat"
                  onChange={handleHabitData}
                  value={habitData.habitRepeat}
                >
                  <option value="daily">Daily</option>
                  <option value="alternate">Monthly</option>
                  <option value="weekly">Yearly</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span>Goal</span>
                <select
                  name="habitGoal"
                  onChange={handleHabitData}
                  value={habitData.habitGoal}
                >
                  <option value="one">1 Time</option>
                  <option value="two">2 Times</option>
                  <option value="three">3 Times</option>
                  <option value="four">4 Times</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span>Time of Day</span>
                <select
                  name="habitDay"
                  onChange={handleHabitData}
                  value={habitData.habitDay}
                >
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                  <option value="night">Night</option>
                  <option value="anytime">Anytime</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span>Start date</span>
                <select
                  name="habitStart"
                  onChange={handleHabitData}
                  value={habitData.habitStart}
                >
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="overmorrow">Overmorrow</option>
                </select>
              </label>
              <div className="flex gap-2">
                <Button
                  variant="contained"
                  className="basis-1/2"
                  onClick={() => {
                    handleCloseHabit();
                    setHabitData({
                      habitName: "",
                      habitRepeat: "",
                      habitGoal: "",
                      habitDay: "",
                      habitStart: "",
                    });
                  }}
                >
                  Discard
                </Button>
                {habitData.habitName ? (
                  <Button
                    variant="contained"
                    className="basis-1/2"
                    type="submit"
                    onClick={() =>
                      dispatch({ type: "EDIT_HABIT", payload: habitData })
                    }
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    className="basis-1/2"
                    type="submit"
                    onClick={() =>
                      dispatch({ type: "ADD_HABIT", payload: habitData })
                    }
                  >
                    Save
                  </Button>
                )}
              </div>
            </form>
          </div>
        </ModalProvider>
      </div>
      <section className="flex flex-col gap-8 text-blue-50">
        <h2 className="text-center text-4xl">Habit List</h2>
        <div className="habit_list">
          {state.habitList.map((currentHabit) => {
            return (
              <HabitCard
                key={currentHabit.id}
                {...currentHabit}
                openModal={handleOpenHabit}
                setModalData={setHabitData}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
