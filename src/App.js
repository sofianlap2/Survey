import React, { useState } from 'react'
import './App.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState();

  const [information, setInformation] = useState();
  const [age, setAge] = useState('');
  const [married, setMarried] = useState();
  const [social, setSocial] = useState();
  const [reason, setReason] = useState('');
  const [date, setDate] = useState(`${new Date().getFullYear()}-${`${new Date().getMonth()}`}-${`${new Date().getDay()}`.padStart(2, 0)} ${`${new Date().getHours()}`}:${`${new Date().getMinutes()}`}`)

  const userInfo = {
    name: name,
    email: email,
    phone: phone,
    dateappointment: date,
    reason: reason,
    information: information,
    age: age,
    married: married
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const newUser = await axios.post('/addAnswer', userInfo)
    // if (newUser) <Redirect to='/pdf' />
    // else {
    //   return 'Please verify your informations'
    // }
    console.log(userInfo)
  }

  return (
    <div className="App">
      <div className="event-name">
        <h1>Event feedback Survey</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label>Phone</label>
        <input
          type="number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        <label htmlFor="event-time">Please enter your desired date and time for the appointment</label>
        <input
          type="datetime-local"
          id="event-time"
          name="event-time"
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
          required
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
          required
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
            value='phone'
            onChange={e => setInformation(e.target.value)}
          />
          <label htmlFor="phone">phone </label>
        </div>
        <div>
          <input type="checkbox"
            id="email"
            name="email"
            value="email"
            onChange={e => setInformation(e.target.value)}
          />
          <label htmlFor="email">
            email </label>
        </div>
        <label htmlFor="age">What is your age?</label>
        <input
        className="age-inp"
        id="age"
         type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          required
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
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;

