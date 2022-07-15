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

  const onSubmit = (data: TContactForm, e: any) => {
    e.preventDefault();
    submitTimeOut(true);
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "contactForm",
        ...data,
      }),
    })
      .then((netData) => {
        reset();
        console.log("Hi there, your message has been sent.");
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
      onSubmit={handleSubmit((data, e) => onSubmit(data, e))}
      id="contactForm"
      name="contactForm"
      data-netlify="true"
      method="post"
    >
      <input name="form-name" value="contactForm" type="hidden" />
      <div id="formHading">
        <h1>Contact Alon</h1>
        <p>Let's make something great together</p>
      </div>
      <div className="formInputs">
        <div className="formSection" id="IdInputs">
          <div id="alignInputs"></div>
          <div className="formInline">
            <h3>{"Name: "}</h3>
            <input
              {...register("name", {
                required: "Please write your name",
                maxLength: 12,
              })}
              id="name"
              name="name"
              type="text"
              // placeholder="What's my name again?"
              // value=""
            ></input>
          </div>
          <p className="error">{errors.name && errors.name?.message}</p>
          <div className="formInline">
            <h3>{"Email: "}</h3>
            <input
              {...register("email", {
                required: "Write your Email, I promise it won't be misused.",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: "Something is not right with your Email..",
                },
              })} //[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
              name="email"
              id="email"
              type="email"
              // value=""
            ></input>
          </div>
          <p className="error">{errors.email && errors.email?.message}</p>

          <div className="formInline">
            <h3>{"Phone: "}</h3>

            <input
              {...register("phone", {
                required:
                  "Write your phone number, I promise it won't be misused.",

                valueAsNumber: true,
              })}
              name="phone"
              id="phone"
              type="tel"
              // value={}
            ></input>
          </div>

          <p className="error">{errors.phone && errors.phone?.message}</p>
        </div>
        <div className="formSection">
          <div className="formInline" id="formMessage">
            <h3>{"Message: "}</h3>

            <textarea
              {...register("message", {
                required: "At least write the topic/s you are interested in.",

                maxLength: 300,
              })}
              name="message"
              id="message"
              maxLength={300}
              // value=""
            ></textarea>
          </div>

          <p className="error">{errors.message && errors.message?.message}</p>
        </div>
        <div className="clearfix"></div>
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
