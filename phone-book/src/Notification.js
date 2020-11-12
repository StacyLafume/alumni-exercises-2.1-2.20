import React from "react";

const Notification = ({ notification, success }) => {
  console.log(notification);
  console.log(success);

  // if there is no notification return null
  if (notification === null) {
    return null;
  }

  // if success renders the paticular (inLine) style 
  if (success)
    return (
      <div className="success" style={styles.success}>
        {notification}
      </div>
    );
  else
    return (
      <div className="success" style={styles.fail}>
        {notification}
      </div>
    );
};

var styles = {
  success: {
    color: "green",
    background: "white",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  fail: {
    color: "red",
    background: "white",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
};

export default Notification;