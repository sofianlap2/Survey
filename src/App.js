import React, { useState } from 'react'
import './App.css';


function App() {

  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [age, setAge] = useState('');
  const [married, setMarried] = useState();
  const [social, setSocial] = useState();
  const [reason, setReason] = useState('');
  const [date, setDate] = useState(`${new Date().getFullYear()}-${`${new Date().getMonth()}`}-${`${new Date().getDay()}`.padStart(2, 0)} ${`${new Date().getHours()}`}:${`${new Date().getMinutes()}`}`)

  return (
    <div className="App">
      <div className="event-name">
        <h1>Event feedback Survey</h1>
      </div>
      <form>
        <label htmlFor="event-time">Please enter your desired date and time for the appointment</label>
        <input
          type="datetime-local"
          id="event-time"
          name="event-time"
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="reason"> Reason for appointment</label>
        <textarea
          rows="3"
          cols="60"
          height="auto"
          name="reason"
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <label htmlFor="social">How did you hear about this event</label>
        <div>
          <input type="radio"
            id="facebook"
            checked={social === "facebook"}
            value="facebook"
            onChange={(e) => setSocial(e.target.value)}
          />
          <label htmlFor="facebook">facebook</label>
        </div>
        <div>
          <input type="radio"
            id="linkedIn"
            checked={social === "linkedIn"}
            value="linkedIn"
            onChange={(e) => setSocial(e.target.value)}
          />
          <label htmlFor="linkedIn">linkedIn</label>
        </div>
        <div>
          <input type="radio"
            id="friend-colleague"
            checked={social === "friend-colleague"}
            value="friend-colleague"
            onChange={(e) => setSocial(e.target.value)}
          />
          <label htmlFor="friend-colleague">friend or colleague</label>
        </div>
        <label>How would you like to receive additional information about the event?</label>
        <div>
          <input type="checkbox"
            id="phone"
            name="phone"
            checked={phone}
            onChange={e => setPhone(e.target.checked)}
          />
          <label htmlFor="phone">phone {phone ?
            (<input
              type="number"
              onChange={(e) => setPhoneInput(e.target.value)}
              value={phoneInput}
            />)
            : ''}
          </label>
        </div>
        <div>
          <input type="checkbox"
            id="email"
            name="email"
            checked={email}
            onChange={e => setEmail(e.target.checked)}
          />
          <label htmlFor="email">
            email {email ?
              (<input type="email"
                onChange={(e) => setEmailInput(e.target.value)}
                value={emailInput}
              />)
              : ''}</label>
        </div>
        <label htmlFor="age">What is your age?</label>
        <input id="age" type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <label>Are you married</label>
        <div>
          <input type="radio"
            id="yes"
            value="yes"
            checked={married === "yes"}
            onChange={(e) => setMarried(e.target.value)}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input type="radio"
            id="no"
            value="no"
            checked={married === "no"}
            onChange={(e) => setMarried(e.target.value)}
          />
          <label htmlFor="no">No</label>
        </div>
      </form>
    </div>
  );
}

export default App;
