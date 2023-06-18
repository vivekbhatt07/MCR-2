import React, { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const DataContext = createContext();

const Data = [
  {
    id: uuidv4(),
    habitName: "Meditate",
    habitRepeat: "alternate",
    habitGoal: "one",
    habitDay: "morning",
    habitStart: "today",
  },
  {
    id: uuidv4(),
    habitName: "Running",
    habitRepeat: "weekly",
    habitGoal: "one",
    habitDay: "evening",
    habitStart: "tomorrow",
  },
  {
    id: uuidv4(),
    habitName: "Drink",
    habitRepeat: "weekly",
    habitGoal: "one",
    habitDay: "afternoon",
    habitStart: "overmorrow",
  },
  {
    id: uuidv4(),
    habitName: "Read",
    habitRepeat: "weekly",
    habitGoal: "two",
    habitDay: "anytime",
    habitStart: "today",
  },
  {
    id: uuidv4(),
    habitName: "Stretch",
    habitRepeat: "daily",
    habitGoal: "three",
    habitDay: "anytime",
    habitStart: "today",
  },
  {
    id: uuidv4(),
    habitName: "Gym",
    habitRepeat: "daily",
    habitGoal: "one",
    habitDay: "night",
    habitStart: "tomorrow",
  },
];

const InitialState = {
  habitList: [...Data],
  archiveList: [],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT": {
      return {
        ...state,
        habitList: [...state.habitList, { id: uuidv4(), ...action.payload }],
      };
    }
    case "EDIT_HABIT": {
      return {
        ...state,
        habitList: state.habitList.map((current) => {
          return current.id == action.payload.id
            ? { ...action.payload }
            : current;
        }),
      };
    }
    case "DELETE_HABIT": {
      return {
        ...state,
        habitList: state.habitList.filter((current) => {
          return current.id !== action.payload;
        }),
      };
    }
    case "ARCHIVE_HABIT": {
      return {
        ...state,
        habitList: state.habitList.filter((current) => {
          return current.id != action.payload;
        }),
        archiveList: [
          ...state.archiveList,
          state.habitList.find((current) => {
            return current.id == action.payload;
          }),
        ],
      };
    }
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
