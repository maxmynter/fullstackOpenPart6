import { connect } from "react-redux";

const Notification = (props) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <>
      {props.notification.text && (
        <div style={style}>{props.notification.text}</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

const connectedNotifications = connect(mapStateToProps)(Notification);
export default connectedNotifications;
