import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.scss";

import ModalBase from "../Modals/ModalBase/ModalBase";
import SuccessModal from "../Modals/SuccessModal/SuccessModal";

type TContactForm = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactForm>();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [name, setName] = useState("");

  const submitTimeOut = (bool: boolean) => {
    setDisableSubmit(true);
    setTimeout(() => setDisableSubmit(bool), 5000);
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (data: TContactForm) => {
    submitTimeOut(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        reset();
        console.log("You're message has been sent.");
        submitTimeOut(false);
        setName(data.name);
        setShowSuccessModal(true);
      })
      .catch((error) => {
        console.error(
          "Sorry, something most have gone wrong.. please try again."
        );
        submitTimeOut(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      method="POST"
      id="contactForm"
      name="contactForm"
      noValidate={true}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <div id="formHading">
        <h1>Connect me</h1>
        <p>Let's make something great together</p>
      </div>
      <input type="hidden" name="form-name" value="contactForm" />
      <div className="formInputs">
        <div className="formSection" id="IdInputs">
          <div id="alignInputs"></div>
          <div className="formInline">
            <h3>{"Name: "}</h3>
            <input
              {...register("name", {
                required: "Please enter a name",
                maxLength: 12,
              })}
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              // value=""
            ></input>
          </div>
          {errors.name && <p className="error">{errors.name?.message}</p>}
          <div className="formInline">
            <h3>{"Email: "}</h3>
            <input
              {...register("email", {
                required: "Please enter an Email",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: "Something is not right with your Email..",
                },
              })} //[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              // value=""
            ></input>
          </div>
          {errors.email && <p className="error">{errors.email?.message}</p>}
          <div className="formInline">
            <h3>{"Phone: "}</h3>

            <input
              {...register("phone", {
                required: "Please enter a phone number",

                valueAsNumber: true,
              })}
              name="phone"
              id="phone"
              type="tel"
              placeholder="Phone"
              // value={}
            ></input>
          </div>
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>
        <div className="formSection">
          <div className="formInline" id="formMessage">
            <h3>{"Message: "}</h3>

            <textarea
              {...register("message", {
                required:
                  "Please, write if only the reason that your leaving your contact",

                maxLength: 300,
              })}
              name="message"
              id="message"
              placeholder="Message"
              maxLength={300}
              // value=""
            ></textarea>
          </div>
          {errors.message && <p className="error">{errors.message?.message}</p>}
        </div>
        <div className="clearfix"></div>

        {/* <div data-netlify-recaptcha="true"></div> */}
        {/* Add recaptcha after css configaretions  */}
      </div>
      <div className="formSection" id="formSubmit">
        <button id="sendMessageButton" disabled={disableSubmit} type="submit">
          Send Message
        </button>
      </div>
      <ModalBase
        setShowModal={setShowSuccessModal}
        showModal={showSuccessModal}
      >
        <SuccessModal setShowModal={setShowSuccessModal} name={name} />
      </ModalBase>
    </form>
  );
};

export default ContactForm;
