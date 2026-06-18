export const initialAttendanceState = {
  attendance: []
};

export const attendanceReducer = (
  state,
  action
) => {

  switch (action.type) {

    case "MARK_ATTENDANCE":
      return {
        ...state,
        attendance: [
          ...state.attendance,
          action.payload
        ]
      };

    default:
      return state;
  }

};