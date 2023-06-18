import React, { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const DataContext = createContext();

const Data = [
  {
    id: uuidv4(),
    habitName: "Meditate",
    habitRepeat: "",
    habitGoal: "",
    habitDay: "",
    habitStart: "",
  },
  {
    id: uuidv4(),
    habitName: "Running",
    habitRepeat: "",
    habitGoal: "",
    habitDay: "",
    habitStart: "",
  },
  {
    id: uuidv4(),
    habitName: "Drink",
    habitRepeat: "",
    habitGoal: "",
    habitDay: "",
    habitStart: "",
  },
  {
    id: uuidv4(),
    habitName: "Read",
    habitRepeat: "",
    habitGoal: "",
    habitDay: "",
    habitStart: "",
  },
  {
    id: uuidv4(),
    habitName: "Stretch",
    habitRepeat: "",
    habitGoal: "",
    habitDay: "",
    habitStart: "",
  },
  {
    id: uuidv4(),
    habitName: "Gym",
    habitRepeat: "",
    habitGoal: "",
    habitDay: "",
    habitStart: "",
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
          // return current.id == action.pa
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
