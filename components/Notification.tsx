import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../src/store/store";
import { clearNotification } from "../src/reducers/notificationReducer";

const Notification: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.notification.message);

  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  );
};

export default Notification;
