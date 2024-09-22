import React, { useState, useEffect } from "react";

const SSLWarning = (accepted, setAccepted) => {
  // Check if the cookie is present
  useEffect(() => {
    console.log(accepted);
    const hasAccepted = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("sslAccepted="));
    if (hasAccepted) {
      console.log(hasAccepted);
      setAccepted(true);
    }
    console.log(accepted);
  }, []);

  const handleProceed = () => {
    // Redirect the user to the backend, where they will accept the certificate and get redirected back
    window.location.href =
      "https://ec2-3-108-254-223.ap-south-1.compute.amazonaws.com:5000";
  };

  // If accepted, do not render anything (component unloads)
  if (!accepted) {
    return null;
  }

  return (
    <div style={styles.warningBox}>
      <h3>Action Required</h3>
      <p>
        To use this application, please accept the security certificate for our
        backend server. You will be redirected to the backend, and after
        accepting, you will automatically be brought back here.
      </p>
      <button style={styles.button} onClick={handleProceed}>
        Proceed to Accept Certificate
      </button>
    </div>
  );
};

// Basic styles for the component
const styles = {
  warningBox: {
    padding: "20px",
    height: "16rem ",
    width: "56rem",
    backgroundColor: "black",
    borderRadius: "8px",
    marginTop: "20px",
    textAlign: "center",
    border: "1px solid #ff8888",
    margin: "auto auto",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default SSLWarning;
