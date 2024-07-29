import React, { useState } from 'react';

function AddEventPage() {
  const [eventName, setEventName] = useState('');
  const [labelColor1, setLabelColor1] = useState('#FF0000');
  const [labelColor2, setLabelColor2] = useState('#FF0000');
  const [where, setWhere] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Event Name:', eventName);
    console.log('Label Color 1:', labelColor1);
    console.log('Label Color 2:', labelColor2);
    console.log('Where:', where);
  };

  return (
    <div className="container">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="labelColor1">Label Color:</label>
          <div className="input-group">
            <input
              type="color"
              className="form-control"
              id="labelColor1"
              value={labelColor1}
              onChange={(e) => setLabelColor1(e.target.value)}
              required
            />
            <span className="input-group-text" style={{ backgroundColor: labelColor1 }}></span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="labelColor2">Label Color:</label>
          <div className="input-group">
            <input
              type="color"
              className="form-control"
              id="labelColor2"
              value={labelColor2}
              onChange={(e) => setLabelColor2(e.target.value)}
              required
            />
            <span className="input-group-text" style={{ backgroundColor: labelColor2 }}></span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="where">Where:</label>
          <textarea
            className="form-control"
            id="where"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddEvents;