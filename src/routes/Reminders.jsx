import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Row, Col, InputGroup } from "react-bootstrap";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  // Load reminders from local storage on component mount
  useEffect(() => {
    const savedReminders = JSON.parse(localStorage.getItem("reminders")) || [];
    setReminders(savedReminders);
  }, []);

  // Save reminders to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  // Handle adding a new reminder
  const handleAddReminder = () => {
    if (newReminder.trim()) {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };

  // Handle deleting a reminder
  const handleDeleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  return (
    <div className="mt-4">
      <h2>Reminders</h2>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add a new reminder"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
        />
        <Button variant="primary" onClick={handleAddReminder}>
          Add
        </Button>
      </InputGroup>

      {reminders.length > 0 ? (
        <ListGroup>
          {reminders.map((reminder, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <div>{reminder}</div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDeleteReminder(index)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No reminders yet. Add a reminder using the input above.</p>
      )}
    </div>
  );
};

export default Reminders;
