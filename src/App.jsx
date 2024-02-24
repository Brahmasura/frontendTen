import style from "./App.module.scss";
import NotificationBar from "./component/notificationBar/notification-bar.component";
import Notification from "./component/notifications/notification.component";
import { NotifiArray } from "./component/notifiArray";

function App() {
  return (
    <>
      <main>
        <div className={style.container}>
          <NotificationBar />

          {NotifiArray.map((item) => (
            <Notification key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
