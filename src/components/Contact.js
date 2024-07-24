import { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

function Contact() {
  const form = useRef();

  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "Something went horribly wrong",
          backgroundColor: "#d9534f",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "Fill out entire form",
          backgroundColor: "#f0ad4e",
        };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      document.getElementById("name").value === "" ||
      document.getElementById("email").value === "" ||
      document.getElementById("message").value === ""
    ) {
      showToast("warning");
      return;
    }
    emailjs
      .sendForm(
        " service_gjasu0m",
        "template_oz607x8",
        form.current,
        "1gurcnxlkDtlQYTRu"
      )
      .then(
        (result) => {
          showToast("success");
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          showToast("danger");
          console.error(error);
        }
      );
  };
  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <h1>contact me</h1>
        <label>Name</label>
        <input type="text" name="name" id="name" />
        <label>Email</label>
        <input type="email" name="email" id="email" />
        <label>Message</label>
        <textarea name="message" id="message" />
        <input type="submit" value="Send" className="email-button" />
      </form>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
    </div>
  );
}

export default Contact;
