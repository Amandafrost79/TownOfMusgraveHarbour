import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useAuth } from "../AuthContext";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./councilavailability.css"; // Assuming you have some styles

const CouncilAvailability = () => {
  const { user } = useAuth();
  const [availability, setAvailability] = useState([]);

  // When the component loads, try to get the availability from local storage
  useEffect(() => {
    const savedAvailability = JSON.parse(localStorage.getItem("availability"));
    if (savedAvailability) {
      setAvailability(savedAvailability);
    }
  }, []);

  // Handle selecting a new available date
  const handleDateSelect = (selectInfo) => {
    console.log("selectinfo ", selectInfo);
    const newDate = {
      title: "Available",
      start: selectInfo.startStr,
    };

    const isAlreadySelected = availability.some(
      (date) => date.start === newDate.start
    );

    if (isAlreadySelected) {
      alert("This date is already selected.");
      return;
    }
    const updatedAvailability = [...availability, newDate];
    setAvailability(updatedAvailability);

    //Save the updated av+ilability to local storage
    localStorage.setItem("availability", JSON.stringify(updatedAvailability));
  };

  // Handle deleting an available date
  const handleDelete = (indexToDelete) => {
    setAvailability((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );

    // Update local storage after deletion
    localStorage.setItem("availability", JSON.stringify(updatedAvailability));
  };

  const handleSubmit = () => {
    console.log("Submitted availability for:", user.username, availability);
    alert("Availability submitted!");
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>{user?.username}'s Availability for Meetings</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            select={handleDateSelect}
            events={availability}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button variant="primary" onClick={handleSubmit}>
            Submit Availability
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Selected Days</h3>
          {availability.length > 0 ? (
            <ListGroup>
              {availability.map((entry, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>Date:</strong> {entry.start}
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
            <p>No dates selected yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );

  // return (
  //   <div className="council-availability-container">
  //     <h2>{user?.username}'s Availability for Meetings</h2>
  //     <FullCalendar
  //       plugins={[dayGridPlugin, interactionPlugin]}
  //       initialView="dayGridMonth"
  //       selectable={true}
  //       select={handleDateSelect}
  //       events={availability}
  //     />
  //     <button className="submit-btn" onClick={handleSubmit}>
  //       Submit Availability
  //     </button>

  //     <h3>Selected Days</h3>
  //     {availability.length > 0 ? (
  //       <ul className="selected-days-list">
  //         {availability.map((entry, index) => (
  //           <li key={index}>
  //             <strong>Date:</strong> {entry.start}
  //             <button
  //               className="delete-btn"
  //               onClick={() => handleDelete(index)}
  //             >
  //               Delete
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //     ) : (
  //       <p>No dates selected yet.</p>
  //     )}
  //   </div>
  // );
};

export default CouncilAvailability;
