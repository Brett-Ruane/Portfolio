import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <form className="Contact-form">
        <h1>
            Contact me
        </h1>
        <h2>
        <input id="text1" placeholder="First Name">
        </input>
        <input id="text2" placeholder="Last Name">
        </input>
        </h2>
        <input id="text3" placeholder="email">
        </input>
        <input id="text4" placeholder="Message">
        </input>
      </form>
    </div>
  );
}

export default Contact;