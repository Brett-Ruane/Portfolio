import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gjasu0m",
        "template_oz607x8",
        form.current,
        "5UyWYtolwvK4FVoj1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Contact">
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

// function NameField() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//     </div>
//   );
// }

// function EmailField() {
//   const [email, setEmail] = useState("");

//   return (
//     <div>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} />
//     </div>
//   );
// }

// function MessageField() {
//   const [message, setMessage] = useState("");

//   return (
//     <div>
//       <textarea
//         rows={"6"}
//         placeholder="Whatever you want to email me about"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//     </div>
//   );
// }

export default Contact;
