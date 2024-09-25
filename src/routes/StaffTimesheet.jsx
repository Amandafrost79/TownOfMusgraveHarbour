import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import "./StaffTimesheet.css"; // Ensure your CSS is imported
import {
  Stack,
  Col,
  Row,
  Button,
  Form,
  ListGroup,
  Card,
} from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

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

  // Convert stored timesheets to FullCalendar event format
  const calendarEvents = storedTimesheets.map((entry, index) => ({
    id: index, // A unique identifier for each event
    title: `${entry.hours} hrs - ${entry.description}`,
    start: entry.date, // FullCalendar requires date in 'YYYY-MM-DD' format
    allDay: true, // Display as an all-day event
  }));

  // return (
  //   <Stack gap={3} direction="horizontal">
  //     <Col className="timesheet-container">
  //       <h2>{user?.username}'s Timesheet</h2>
  //       {timesheet.map((entry, index) => (
  //         <div key={index} className="timesheet-row">
  //           <input
  //             type="date"
  //             value={entry.date}
  //             onChange={(e) =>
  //               handleTimesheetChange(index, "date", e.target.value)
  //             }
  //           />
  //           <input
  //             type="number"
  //             value={entry.hours}
  //             placeholder="Hours"
  //             onChange={(e) =>
  //               handleTimesheetChange(index, "hours", e.target.value)
  //             }
  //           />
  //           <input
  //             type="text"
  //             value={entry.description}
  //             placeholder="Work Description"
  //             onChange={(e) =>
  //               handleTimesheetChange(index, "description", e.target.value)
  //             }
  //           />
  //         </div>
  //       ))}
  //       <button className="add-day-btn" onClick={addTimesheetRow}>
  //         Add Day
  //       </button>
  //       <button onClick={handleSubmit}>Submit Timesheet</button>

  //       <h3>Submitted Timesheets</h3>
  //       {storedTimesheets.length > 0 ? (
  //         <ul className="submitted-timesheet-list">
  //           {storedTimesheets.map((entry, index) => (
  //             <li key={index}>
  //               <strong>Date:</strong> {entry.date} <br />
  //               <strong>Hours:</strong> {entry.hours} <br />
  //               <strong>Description:</strong> {entry.description}
  //               <button
  //                 className="delete-btn"
  //                 onClick={() => handleDelete(index)}
  //               >
  //                 Delete
  //               </button>
  //             </li>
  //           ))}
  //         </ul>
  //       ) : (
  //         <p>No timesheets submitted yet.</p>
  //       )}
  //     </Col>

  //     <Col className="p-2">
  //       <FullCalendar
  //         plugins={[dayGridPlugin, interactionPlugin]}
  //         initialView="dayGridMonth"
  //         selectable={true}
  //         events={calendarEvents}
  //         // select={handleDateSelect}
  //         // events={availability}
  //       />
  //     </Col>
  //   </Stack>
  // );

  return (
    <Stack gap={3} direction="horizontal">
      <Col>
        <h2>{user?.username}'s Timesheet</h2>
        {timesheet.map((entry, index) => (
          <Row key={index} className="mb-2 align-items-center">
            <Col xs={3}>
              <Form.Control
                type="date"
                value={entry.date}
                onChange={(e) =>
                  handleTimesheetChange(index, "date", e.target.value)
                }
              />
            </Col>
            <Col xs={2}>
              <Form.Control
                type="number"
                value={entry.hours}
                placeholder="Hours"
                onChange={(e) =>
                  handleTimesheetChange(index, "hours", e.target.value)
                }
              />
            </Col>
            <Col xs={5}>
              <Form.Control
                type="text"
                value={entry.description}
                placeholder="Work Description"
                onChange={(e) =>
                  handleTimesheetChange(index, "description", e.target.value)
                }
              />
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
                className="d-flex justify-content-between align-items-start"
              >
                <div>
                  <strong>Date:</strong> {entry.date} <br />
                  <strong>Hours:</strong> {entry.hours} <br />
                  <strong>Description:</strong> {entry.description}
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
          <Card className="mt-3">
            <Card.Body>No timesheets submitted yet.</Card.Body>
          </Card>
        )}
      </Col>

      <Col className="p-2">
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
