import { createContext, useState } from "react";



export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {
    const [unreadNotification, setUnreadNotification] = useState(3);
    const [notificationType, setNotificationType] = useState("unread");


    const MarkAllAsRead = () => {
        setUnreadNotification(0);
        setNotificationType("read");

    }
   const value = {unreadNotification, setUnreadNotification, notificationType, setNotificationType, MarkAllAsRead};

    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}
