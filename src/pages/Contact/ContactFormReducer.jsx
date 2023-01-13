export const CHANGE_TEXT_INPUT = "CHANGE-TEXT-INPUT";

export const INITIAL_DATA = {
  name: "",
  email: "",
  subject: "",
  mobile: "",
  message: "",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-TEXT-INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
