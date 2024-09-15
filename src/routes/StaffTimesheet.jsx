import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import "./StaffTimesheet.css"; // Ensure your CSS is imported

const StaffTimesheet = () => {
  const { user } = useAuth();
  const [timesheet, setTimesheet] = useState([
    { date: "", hours: "", description: "" },
  ]);
  const [storedTimesheets, setStoredTimesheets] = useState([]);

  // Load timesheets from local storage on component mount
  useEffect(() => {
    const savedTimesheets =
      JSON.parse(localStorage.getItem("timesheets")) || [];
    setStoredTimesheets(savedTimesheets);
  }, []);

  // Handle input changes
  const handleTimesheetChange = (index, field, value) => {
    const updatedTimesheet = [...timesheet];
    updatedTimesheet[index][field] = value;
    setTimesheet(updatedTimesheet);
  };

  // Add new row for timesheet entry
  const addTimesheetRow = () => {
    setTimesheet([...timesheet, { date: "", hours: "", description: "" }]);
  };

  // Handle form submission
  const handleSubmit = () => {
    const newTimesheets = [...storedTimesheets, ...timesheet];
    setStoredTimesheets(newTimesheets);

    // Save to local storage
    localStorage.setItem("timesheets", JSON.stringify(newTimesheets));

    // Clear the form after submission
    setTimesheet([{ date: "", hours: "", description: "" }]);

    alert("Timesheet submitted!");
  };

  // Handle deletion of a timesheet entry
  const handleDelete = (indexToDelete) => {
    const updatedTimesheets = storedTimesheets.filter(
      (_, index) => index !== indexToDelete
    );
    setStoredTimesheets(updatedTimesheets);
    localStorage.setItem("timesheets", JSON.stringify(updatedTimesheets)); // Update local storage
  };

  return (
    <div className="timesheet-container">
      <h2>{user?.username}'s Timesheet</h2>
      {timesheet.map((entry, index) => (
        <div key={index} className="timesheet-row">
          <input
            type="date"
            value={entry.date}
            onChange={(e) =>
              handleTimesheetChange(index, "date", e.target.value)
            }
          />
          <input
            type="number"
            value={entry.hours}
            placeholder="Hours"
            onChange={(e) =>
              handleTimesheetChange(index, "hours", e.target.value)
            }
          />
          <input
            type="text"
            value={entry.description}
            placeholder="Work Description"
            onChange={(e) =>
              handleTimesheetChange(index, "description", e.target.value)
            }
          />
        </div>
      ))}
      <button className="add-day-btn" onClick={addTimesheetRow}>
        Add Day
      </button>
      <button onClick={handleSubmit}>Submit Timesheet</button>

      <h3>Submitted Timesheets</h3>
      {storedTimesheets.length > 0 ? (
        <ul className="submitted-timesheet-list">
          {storedTimesheets.map((entry, index) => (
            <li key={index}>
              <strong>Date:</strong> {entry.date} <br />
              <strong>Hours:</strong> {entry.hours} <br />
              <strong>Description:</strong> {entry.description}
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No timesheets submitted yet.</p>
      )}
    </div>
  );
};

export default StaffTimesheet;
