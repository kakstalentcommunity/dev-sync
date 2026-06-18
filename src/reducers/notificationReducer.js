export const initialNotificationState = {
  message: "",
  type: "info"
};

export const notificationReducer = (
  state,
  action
) => {

  switch (action.type) {

    case "SHOW_NOTIFICATION":
      return {
        message: action.payload.message ??
          action.payload,
        type: action.payload.type ??
          "info"
      };

    case "CLEAR_NOTIFICATION":
      return {
        message: "",
        type: "info"
      };

    default:
      return state;
  }

};
