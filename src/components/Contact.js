import { useState } from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <form className="form">
        <h1>Contact me</h1>
        <label>Name</label>
        <NameField />
        <label>Email</label>
        <EmailField />
        <label>Message</label>
        <MessageField />
      </form>
    </div>
  );
}

function NameField() {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>
  );
}

function EmailField() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}

function MessageField() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <textarea
        rows={"6"}
        placeholder="Whatever you want to email me about"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}

export default Contact;
