import React, { useState, useId } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.scss";

import ModalBase from "../Modals/ModalBase/ModalBase";
import SuccessModal from "../Modals/SuccessModal/SuccessModal";

type TContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface IEncode extends TContactForm {
  formName: "contactForm";
}

const ContactForm = () => {
  const id = useId();

  // For better form notations and event handling. See more details on https://react-hook-form.com/api/useform/ .
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

  // Form submission:
  const encode = (data: IEncode): string => {
    let formDataKeys = Object.keys(data) as Array<keyof IEncode>;
    console.log(
      formDataKeys
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    );
    return formDataKeys
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (data: TContactForm) => {
    submitTimeOut(true);
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        formName: "contactForm",
        ...data,
      }),
    })
      .then((netData) => {
        reset();
        console.log("Hi there, your message has been sent.");
        // console.log(netData); > Response {type: 'basic', url: 'http://localhost:3000/', redirected: false, status: 404, ok: : Check to see that the response is 200.
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
      onSubmit={handleSubmit(onSubmit)}
      className="contactForm"
      name="contactForm"
      data-netlify="true"
      method="post"
    >
      <input name="formName" value="contactForm" type="hidden" />
      <div className="formHading">
        <h1>Contact Alon</h1>
        <p>Let's make something great together</p>
      </div>
      <div className="formInputs">
        <div className="formSection IdInputs">
          {/* <div className="alignInputs"></div> */}
          <div className="formInline">
            <label htmlFor={id + "name"}>
              <h3>{"Name: "}</h3>
            </label>
            <input
              {...register("name", {
                required: "Please write your name",
                maxLength: 12,
              })}
              className={id + "name"}
              name="name"
              type="text"
              // placeholder="What's my name again?"
              // value=""
            ></input>
          </div>
          <p className="error">{errors.name && errors.name?.message}</p>
          <div className="formInline">
            <label htmlFor={id + "email"}>
              <h3>{"Email: "}</h3>
            </label>
            <input
              {...register("email", {
                required: "Write your Email, I promise it won't be misused.",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: "Something is not right with your Email..",
                },
              })} //[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
              name="email"
              className={id + "email"}
              type="email"
              // value=""
            ></input>
          </div>
          <p className="error">{errors.email && errors.email?.message}</p>

          <div className="formInline">
            <label htmlFor={id + "phone"}>
              <h3>{"Phone: "}</h3>
            </label>
            <input
              {...register("phone", {
                required:
                  "Write your phone number, I promise it won't be misused.",

                valueAsNumber: true,
              })}
              name="phone"
              className={id + "phone"}
              type="tel"
              // value={}
            ></input>
          </div>

          <p className="error">{errors.phone && errors.phone?.message}</p>
        </div>
        <div className="formSection form_message_con">
          <div className="formInline formMessage">
            <label htmlFor={id + "message"}>
              <h3>{"Message: "}</h3>
            </label>
            <textarea
              {...register("message", {
                required: "At least write the topic/s you are interested in.",

                maxLength: 300,
              })}
              name="message"
              className={id + "message"}
              maxLength={300}
              // value=""
            ></textarea>
          </div>

          <p className="error">{errors.message && errors.message?.message}</p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="formSection formSubmit">
        <button
          className="AF_button sendMessageButton"
          disabled={disableSubmit}
          type="submit"
        >
          Send
        </button>
      </div>
      <ModalBase
        setShowModal={setShowSuccessModal}
        showModal={showSuccessModal}
        closeModalTimeOut={1500}
      >
        <SuccessModal setShowModal={setShowSuccessModal} name={name} />
      </ModalBase>
    </form>
  );
};

export default ContactForm;
