import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { Stack, Col, Row, Button, Form, ListGroup } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const StaffTimesheet = () => {
  const { user } = useAuth();
  const [timesheet, setTimesheet] = useState([
    { date: "", hours: "", category: "" },
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
    setTimesheet([...timesheet, { date: "", hours: "", category: "" }]);
  };

  // Handle form submission
  const handleSubmit = () => {
    const newTimesheets = [...storedTimesheets, ...timesheet];
    setStoredTimesheets(newTimesheets);

    // Save to local storage
    localStorage.setItem("timesheets", JSON.stringify(newTimesheets));

    // Clear the form after submission
    setTimesheet([{ date: "", hours: "", category: "" }]);

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

  // Assign colors based on category
  const getCategoryColor = (category) => {
    switch (category) {
      case "WTP":
        return "blue";
      case "Fleet":
        return "green";
      case "Roads":
        return "red";
      default:
        return "gray";
    }
  };

  // Convert stored timesheets to FullCalendar event format
  const calendarEvents = storedTimesheets.map((entry, index) => ({
    id: index, // A unique identifier for each event
    title: `${entry.hours} hrs - ${entry.category}`,
    start: entry.date, // FullCalendar requires date in 'YYYY-MM-DD' format
    allDay: true, // Display as an all-day event
    backgroundColor: getCategoryColor(entry.category), // Color based on category
  }));

  return (
    <Stack gap={3} direction="horizontal">
      <Col xs={4}>
        <h2>{user?.username}'s Timesheet</h2>
        {timesheet.map((entry, index) => (
          <Row key={index} className="mb-2 align-items-center">
            <Col xs={12} className="mb-2">
              <Form.Control
                type="date"
                value={entry.date}
                onChange={(e) =>
                  handleTimesheetChange(index, "date", e.target.value)
                }
              />
            </Col>
            <Col xs={12} className="mb-2">
              <Form.Control
                type="number"
                value={entry.hours}
                placeholder="Hours"
                onChange={(e) =>
                  handleTimesheetChange(index, "hours", e.target.value)
                }
              />
            </Col>
            <Col xs={12} className="mb-2">
              <Form.Select
                value={entry.category}
                onChange={(e) =>
                  handleTimesheetChange(index, "category", e.target.value)
                }
              >
                <option value="">Select Category</option>
                <option value="WTP">WTP</option>
                <option value="Fleet">Fleet</option>
                <option value="Roads">Roads</option>
              </Form.Select>
            </Col>
          </Row>
        ))}
        <Button variant="primary" onClick={addTimesheetRow} className="me-2">
          Add Day
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Submit Timesheet
        </Button>

        <h3 className="mt-4">Submitted Timesheets</h3>
        {storedTimesheets.length > 0 ? (
          <ListGroup>
            {storedTimesheets.map((entry, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>Date:</strong> {entry.date} <br />
                  <strong>Hours:</strong> {entry.hours} <br />
                  <strong>Category:</strong> {entry.category}
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p>No timesheets submitted yet.</p>
        )}
      </Col>

      <Col xs={8} className="p-2">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          events={calendarEvents} // Pass the events to the calendar
        />
      </Col>
    </Stack>
  );
};

export default StaffTimesheet;
