import {
  useContext,
  useEffect
} from "react";

import { NotificationContext }
from "../../context/NotificationContext";

const Notification = () => {

  const { state, dispatch } =
    useContext(NotificationContext);

  useEffect(() => {
    if (!state.message) return;

    const timeout = setTimeout(() => {
      dispatch({
        type: "CLEAR_NOTIFICATION"
      });
    }, 4500);

    return () => clearTimeout(timeout);
  }, [dispatch, state.message]);

  if (!state.message) return null;

  return (
    <div
      className={`notification notification-${state.type}`}
      role="alert"
    >

      <span>{state.message}</span>

      <button
        type="button"
        className="notification-close"
        onClick={() =>
          dispatch({
            type: "CLEAR_NOTIFICATION"
          })
        }
        aria-label="Close notification"
      >
        x
      </button>

    </div>
  );
};

export default Notification;
