import React from "react";
import "./Contact.css";
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "496a7577-2f69-435a-bf06-25b4d0d1012d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want to me to work on. You
            can contact anytime.{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="email.svg" alt="" /> <p>samalkr7739@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/contact.svg" alt="" /> <p>+919905428001</p>
            </div>
            <div className="contact-detail">
              <img src="location.png" alt="" /> <p>Raipur, Chhattisgarh, India</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={onSubmit} className="contact-right" >
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name"></input>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your messsage here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
