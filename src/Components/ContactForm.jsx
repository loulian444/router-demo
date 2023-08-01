import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`
    Name: ${name}
    Email: ${email}
    Phone: ${phone}`);
  };

  return (
    <>
      {/* creat form for name, email, phone number
      save to a state
      when submitted show alert with the info */}
      <h3>Contact Form</h3>
      <form onSubmit={submitHandler}>
        <label>
          Name:{" "}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={nameHandler}
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@mail.com"
            value={email}
            onChange={emailHandler}
          />
        </label>
        <br />
        <label>
          Phone:{" "}
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            value={phone}
            onChange={phoneHandler}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
