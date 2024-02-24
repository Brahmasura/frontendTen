import { useContext, useEffect, useState } from "react";
import style from "./notification.module.scss";
import { NotificationContext } from "../../contexts/notification.context";

const Notification = ({ item }) => {
  const { img, name, title, text, time, type, img2, message} = item;
  const {
    unreadNotification,
    setUnreadNotification,
    notificationType,
    setNotificationType,
  } = useContext(NotificationContext);

  const [firstClick, setFirstClick] = useState(false);

  const [combinedState, setCombinedState] = useState("unread"); // Initial value "unread"

  useEffect(() => {
    // Update combinedState based on conditions
    const newCombinedState =
      !firstClick && notificationType === "unread" && type === "unread"
        ? "unread"
        : "read";
    setCombinedState(newCombinedState);
  }, [firstClick, notificationType, type, name]);

  const handleClick = () => {
    if (!firstClick && notificationType === "unread") {
      setUnreadNotification(unreadNotification - 1);
      setFirstClick(true);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${style.notificationDiv} ${style[combinedState]}`}
      >
        <img src={img} alt={`${img}`} />
        <div className={style.notiContent}>
          <div className={style.textDiv}>
            <p>
              <span>{name} </span>
              {title}
              <span> {text} </span>
              <span></span>
            </p>
            <p>{time}</p>
            {message && (<div className={style.messageDiv}><p>{message}</p></div>)}
          </div>
          {img2 && (<img src={img2} alt={`${img2}`}/>)}
          
        </div>
      </div>
    </>
  );
};

export default Notification;
