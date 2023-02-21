import { useState } from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <form className="Contact-form">
        <h1>
            Contact me
        </h1>
        <div className = "Contact-names">
          <FirstNameField/>
          <LastNameField/>
        </div>
        <div>
          <EmailField/>
        </div>
        <div>
          <MessageField/>
        </div>
      </form>
    </div>
  );
}

function FirstNameField() {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
    </div>
  )
}

function LastNameField() {
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    </div>
  )
}

function EmailField() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
  )
}

function MessageField() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input value={message} onChange={(e) => setMessage(e.target.value)}/>
    </div>
  )
}

export default Contact;