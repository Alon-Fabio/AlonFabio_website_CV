import React from "react";
import { useForm } from "react-hook-form";

type contactForm = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      method="post"
      id="contactForm"
      name="ContactFrom"
      noValidate={true}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* Not sure if this does anything anymore, needs to be tested in production */}
      <p style={{ visibility: "hidden" }}>
        <label>Don't fill this up.</label>
        <input name="bot-field" type="text"></input>
      </p>
      {/* --------------------------------------------------------------------- */}
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
              placeholder="Your Name *"
            ></input>
          </div>
          <div className="form-group">
            <input
              {...register("email", { required: true })}
              name="email"
              id="email"
              type="email"
              placeholder="Your Email *"
            ></input>
          </div>
          <div className="form-group">
            <input
              {...register("phone", { required: true, valueAsNumber: true })}
              name="phone"
              id="phone"
              type="tel"
              placeholder="Your Phone *"
            ></input>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea
              {...register("message", { required: true })}
              name="message"
              id="message"
              placeholder="Your Message *"
            ></textarea>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-lg-12 text-center">
          <div id="success"></div>
          <button
            id="sendMessageButton"
            className="btn btn-primary btn-xl text-uppercase"
            type="submit"
          >
            Send Message
          </button>
        </div>
        {/* <div data-netlify-recaptcha="true"></div> 
               Add recaptcha after css configaretions  */}
      </div>
    </form>
  );
};

export default ContactForm;
