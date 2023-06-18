import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const Data = [
  { id: "1", title: "Meditate" },
  { id: "2", title: "Running" },
  { id: "3", title: "Drink" },
  { id: "4", title: "Read" },
  { id: "5", title: "Stretch" },
  { id: "6", title: "Gym" },
];

const InitialState = {
  habitList: [...Data],
  archiveList: [],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT": {
      return { ...state, habitList: [...state.habitList, action.payload] };
    }
    case "EDIT_HABIT": {
      return { ...state };
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
