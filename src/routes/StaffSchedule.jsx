import React from "react";
import { Table } from "react-bootstrap";

const StaffSchedule = () => {
  const schedules = [
    { name: "John Doe", date: "2024-10-05", shift: "Morning (8AM - 4PM)" },
    { name: "Jane Smith", date: "2024-10-05", shift: "Evening (4PM - 12AM)" },
    // Add more schedules here...
  ];

  return (
    <div className="mt-4">
      <h2>Staff Work Schedule</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Date</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.name}</td>
              <td>{schedule.date}</td>
              <td>{schedule.shift}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StaffSchedule;
