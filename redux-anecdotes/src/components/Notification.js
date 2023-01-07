import { connect } from "react-redux";

const Notification = (props) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <>
      {props.notifications.length >= 1 && (
        <div style={style}>{props.notifications.slice(-1)[0].text}</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  };
};

const connectedNotifications = connect(mapStateToProps)(Notification);
export default connectedNotifications;
