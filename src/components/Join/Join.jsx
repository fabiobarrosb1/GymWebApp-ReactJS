import React, { useRef, useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x4pbj9d",
        "template_i81tdaa",
        form.current,
        "yDJIIOUEJboRjzYtX"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        {messageSent ? (
          <p className="joined-message">
            Thank you for <span className="joined-span">joining us!</span>
          </p>
        ) : (
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your Email address"
              required
            />
            <button type="submit" className="btn btn-j">
              Join Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Join;
