import { useContext } from "react";
import style from "./notification-bar.module.scss";
import { NotificationContext } from "../../contexts/notification.context";

const NotificationBar = () => {
  const { MarkAllAsRead, unreadNotification } = useContext(NotificationContext);
  return (
    <>
      <div className={style.notifyOne}>
        <div className={style.leftDiv}>
          <p>Notifications </p>
          <span>{unreadNotification}</span>
        </div>

        <p onClick={MarkAllAsRead}>Mark all as read</p>
      </div>
    </>
  );
};

export default NotificationBar;
