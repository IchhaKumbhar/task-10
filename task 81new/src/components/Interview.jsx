import React, { useState } from 'react';

function InterviewDetailsForm() {
  const [job, setJob] = useState('');
  const [candidate, setCandidate] = useState('');
  const [interviewer, setInterviewer] = useState('');
  const [round, setRound] = useState('');
  const [interviewType, setInterviewType] = useState('In Person');
  const [startOn, setStartOn] = useState('25-07-2024');
  const [startTime, setStartTime] = useState('03:30 PM');
  const [commentForInterviewer, setCommentForInterviewer] = useState('');
  const [notifyCandidate, setNotifyCandidate] = useState(false);
  const [commentForCandidate, setCommentForCandidate] = useState('');
  const [sendReminder, setSendReminder] = useState(false);

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleCandidateChange = (event) => {
    setCandidate(event.target.value);
  };

  const handleInterviewerChange = (event) => {
    setInterviewer(event.target.value);
  };

  const handleRoundChange = (event) => {
    setRound(event.target.value);
  };

  const handleInterviewTypeChange = (event) => {
    setInterviewType(event.target.value);
  };

  const handleStartOnChange = (event) => {
    setStartOn(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleCommentForInterviewerChange = (event) => {
    setCommentForInterviewer(event.target.value);
  };

  const handleNotifyCandidateChange = (event) => {
    setNotifyCandidate(event.target.checked);
  };

  const handleCommentForCandidateChange = (event) => {
    setCommentForCandidate(event.target.value);
  };

  const handleSendReminderChange = (event) => {
    setSendReminder(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with the following data:', {
      job,
      candidate,
      interviewer,
      round,
      interviewType,
      startOn,
      startTime,
      commentForInterviewer,
      notifyCandidate,
      commentForCandidate,
      sendReminder,
    });
  };

  return (
    <div>
      <h2>Interview Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="job">Job *</label>
          <select id="job" value={job} onChange={handleJobChange}>
            <option value="">--</option>
            {/* Add job options here */}
          </select>
        </div>
        <div>
          <label htmlFor="candidate">Candidate *</label>
          <input
            type="text"
            id="candidate"
            value={candidate}
            onChange={handleCandidateChange}
          />
        </div>
        <div>
          <label htmlFor="interviewer">Interviewer *</label>
          <select id="interviewer" value={interviewer} onChange={handleInterviewerChange}>
            <option value="">Nothing selected</option>
            {/* Add interviewer options here */}
          </select>
        </div>
        <div>
          <label htmlFor="round">Round *</label>
          <select id="round" value={round} onChange={handleRoundChange}>
            <option value="">--</option>
            {/* Add round options here */}
          </select>
        </div>
        <div>
          <label htmlFor="interviewType">Interview Type</label>
          <select id="interviewType" value={interviewType} onChange={handleInterviewTypeChange}>
            <option value="In Person">In Person</option>
            {/* Add other interview type options here */}
          </select>
        </div>
        <div>
          <label htmlFor="startOn">Start On *</label>
          <input
            type="date"
            id="startOn"
            value={startOn}
            onChange={handleStartOnChange}
          />
        </div>
        <div>
          <label htmlFor="startTime">Start Time *</label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={handleStartTimeChange}
          />
        </div>
        <div>
          <label htmlFor="commentForInterviewer">Comment for Interviewer</label>
          <textarea
            id="commentForInterviewer"
            value={commentForInterviewer}
            onChange={handleCommentForInterviewerChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="notifyCandidate"
            checked={notifyCandidate}
            onChange={handleNotifyCandidateChange}
          />
          <label htmlFor="notifyCandidate">Notify Candidate</label>
        </div>
        <div>
          <label htmlFor="commentForCandidate">Comment for Candidate</label>
          <textarea
            id="commentForCandidate"
            value={commentForCandidate}
            onChange={handleCommentForCandidateChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="sendReminder"
            checked={sendReminder}
            onChange={handleSendReminderChange}
          />
          <label htmlFor="sendReminder">Send Reminder</label>
        </div>
        <button type="submit">Save</button>
        <button type="button">Save & Add More</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

export default InterviewDetailsForm;