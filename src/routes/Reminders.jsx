import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../AuthContext";

const Reminders = () => {
  const { user } = useAuth();
  const [reminders, setReminders] = useState(() => {
    const savedReminders = localStorage.getItem("reminders");
    return savedReminders ? JSON.parse(savedReminders) : [];
  });

  const [newReminder, setNewReminder] = useState({
    title: "",
    description: "",
    dueDate: new Date(),
  });
  const [filter, setFilter] = useState("All");

  // Save reminders to local storage whenever the reminders state changes
  useEffect(() => {
    if (reminders.length > 0) {
      localStorage.setItem("reminders", JSON.stringify(reminders));
    }
  }, [reminders]);

  // Handle adding a new reminder
  const handleAddReminder = () => {
    if (newReminder.title.trim()) {
      const newReminderWithCompletion = { ...newReminder, completed: false };
      setReminders([...reminders, newReminderWithCompletion]);
      setNewReminder({ title: "", description: "", dueDate: new Date() });
    }
  };

  // Handle deleting a reminder
  const handleDeleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  // Handle marking a reminder as completed
  const handleToggleComplete = (index) => {
    const updatedReminders = reminders.map((reminder, i) =>
      i === index ? { ...reminder, completed: !reminder.completed } : reminder
    );
    setReminders(updatedReminders);
  };

  // Filter reminders based on status (All, Completed, Pending)
  const filteredReminders = reminders.filter((reminder) => {
    if (filter === "Completed") return reminder.completed;
    if (filter === "Pending") return !reminder.completed;
    return true;
  });

  return (
    <div className="mt-4">
      <h2>{user?.username}'s Reminders</h2>

      {/* Reminder Input */}
      <Row className="mb-3">
        <Col xs={12}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Title"
              value={newReminder.title}
              onChange={(e) =>
                setNewReminder({ ...newReminder, title: e.target.value })
              }
            />
          </InputGroup>
        </Col>
        <Col xs={12} className="mt-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              placeholder="Description"
              value={newReminder.description}
              onChange={(e) =>
                setNewReminder({ ...newReminder, description: e.target.value })
              }
            />
          </InputGroup>
        </Col>
        <Col xs={12} className="mt-2">
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <DatePicker
              selected={newReminder.dueDate}
              onChange={(date) =>
                setNewReminder({ ...newReminder, dueDate: date })
              }
              className="form-control"
            />
          </Form.Group>
        </Col>
        <Col xs={12} className="mt-2">
          <Button variant="primary" onClick={handleAddReminder}>
            Add Reminder
          </Button>
        </Col>
      </Row>

      {/* Filter */}
      <Form.Group className="mb-3">
        <Form.Label>Filter Reminders</Form.Label>
        <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </Form.Select>
      </Form.Group>

      {/* Reminders List */}
      {filteredReminders.length > 0 ? (
        <ListGroup>
          {filteredReminders.map((reminder, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <Form.Check
                  type="checkbox"
                  label={<strong>{reminder.title}</strong>}
                  checked={reminder.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <div>
                  <small>Description: {reminder.description}</small>
                </div>
                <div>
                  <small>
                    Due Date: {new Date(reminder.dueDate).toLocaleDateString()}
                  </small>
                </div>
              </div>
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
        <p>No reminders available for the selected filter.</p>
      )}
    </div>
  );
};

export default Reminders;
