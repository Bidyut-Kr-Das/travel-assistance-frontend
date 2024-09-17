import React, { useState } from 'react';

const SSLWarning = () => {
  const [accepted, setAccepted] = useState(false);

  const handleProceed = () => {
    // Open the backend URL in a new tab to let users accept the self-signed certificate
    window.open('https://your-backend-url:5000', '_blank');
    setAccepted(true);
  };

  return (
    <div>
      {!accepted ? (
        <div style={styles.warningBox}>
          <h3>Action Required</h3>
          <p>
            To use this application, please accept the security certificate for
            our backend server by visiting the following link:
          </p>
          <button style={styles.button} onClick={handleProceed}>
            Proceed to Webpage
          </button>
          <p>
            After accepting the certificate, return to this page and refresh
            the browser.
          </p>
        </div>
      ) : (
        <div style={styles.thankYouBox}>
          <h3>Thank you!</h3>
          <p>
            You can now continue using the app. Please refresh the page after
            accepting the certificate.
          </p>
        </div>
      )}
    </div>
  );
};

// Basic styles for the component
const styles = {
  warningBox: {
    padding: '20px',
    backgroundColor: '#ffdddd',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'center',
    border: '1px solid #ff8888',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  thankYouBox: {
    padding: '20px',
    backgroundColor: '#ddffdd',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'center',
    border: '1px solid #88ff88',
  },
};

export default SSLWarning;