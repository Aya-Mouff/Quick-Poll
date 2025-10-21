import { useState } from 'react';
import '../styles/home-page.css';

export default function HomePage() {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    alert('Logged out successfully!');
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Poll App</h1>

        <button className="home-button">Create New Poll</button>
        <button className="home-button">Poll History</button>
        <button className="home-button">Other's Polls</button>

        <button
          className="logout-button"
          onClick={() => setShowLogoutConfirm(true)}
        >
          Log Out
        </button>
      </div>

      {showLogoutConfirm && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="modal-title">Confirm Logout</h3>
            <p className="modal-text">Are you sure you want to log out?</p>
            <div className="modal-buttons">
              <button
                className="cancel-button"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="confirm-button"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
