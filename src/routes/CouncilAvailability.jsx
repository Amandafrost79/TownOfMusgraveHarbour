// import React, { useState, Fragment } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { useAuth } from "../AuthContext";

// const CouncilAvailability = () => {
//   const [availability, setAvailability] = useState([]);
//   const { user } = useAuth();
//   const [message, setMessage] = useState("");

//   const handleDateSelect = (selectInfo) => {
//     const newDate = {
//       title: "Available",
//       start: selectInfo.startStr,
//     };
//     setAvailability([...availability, newDate]);
//   };

//   const handleSubmit = () => {
//     console.log("Submitted availability for:", user.username, availability);
//     alert("Availability submitted!");
//     setMessage(JSON.stringify(availability));
//   };

//   return (
//     <div>
//       <h2>{user?.username}'s Availability for Meetings</h2>
//       <FullCalendar
//         plugins={[dayGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         selectable={true}
//         select={handleDateSelect}
//         events={availability}
//       />
//       <button onClick={handleSubmit}>Submit Availability</button>
//       {availability
//         ? availability.map((time) => {
//             return (
//               <Fragment key={time.start}>
//                 <p>{time.title}</p>
//                 <p>{time.start}</p>
//               </Fragment>
//             );
//           })
//         : false}
//     </div>
//   );
// };

// export default CouncilAvailability;

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useAuth } from "../AuthContext";
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
    const newDate = {
      title: "Available",
      start: selectInfo.startStr,
    };

    const isAlreadySelected = availability.some(
      (date) => date.start === newDate.start
    );

    if (!isAlreadySelected) {
      const updatedAvailability = [...availability, newDate];
      setAvailability(updatedAvailability);

      // Save the updated availability to local storage
      localStorage.setItem("availability", JSON.stringify(updatedAvailability));
    } else {
      alert("This date is already selected.");
    }
  };

  // Handle deleting an available date
  const handleDelete = (indexToDelete) => {
    const updatedAvailability = availability.filter(
      (_, index) => index !== indexToDelete
    );
    setAvailability(updatedAvailability);

    // Update local storage after deletion
    localStorage.setItem("availability", JSON.stringify(updatedAvailability));
  };

  const handleSubmit = () => {
    console.log("Submitted availability for:", user.username, availability);
    alert("Availability submitted!");
  };

  return (
    <div className="council-availability-container">
      <h2>{user?.username}'s Availability for Meetings</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={availability}
      />
      <button className="submit-btn" onClick={handleSubmit}>
        Submit Availability
      </button>

      <h3>Selected Days</h3>
      {availability.length > 0 ? (
        <ul className="selected-days-list">
          {availability.map((entry, index) => (
            <li key={index}>
              <strong>Date:</strong> {entry.start}
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
        <p>No dates selected yet.</p>
      )}
    </div>
  );
};

export default CouncilAvailability;
