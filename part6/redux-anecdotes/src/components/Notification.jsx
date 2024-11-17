import { useSelector } from "react-redux";

const Notification = () => {
  const message = useSelector((state) => state.notification.message);
  const style = {
    border: "solid black",
    padding: 10,
    borderWidth: 2,
    minHeight: "18px",
    color: "green",
  };
  return <div style={style}>{message}</div>;
};
export default Notification;
