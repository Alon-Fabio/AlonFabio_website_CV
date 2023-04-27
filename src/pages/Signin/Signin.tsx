import React, { useReducer } from "react";
import PropTypes from "prop-types";

interface ISgnRedState {
  email: string;
  password: string;
}
interface ISigRedAction {
  type: "CHANGE_PASS" | "CHANGE_EMAIL";
  payload: string;
}

const Signin: React.FC<{ stage: string }> = ({ stage }) => {
  const signInReducer = (
    signInState: ISgnRedState,
    { type, payload }: ISigRedAction
  ): ISgnRedState => {
    switch (type) {
      case "CHANGE_EMAIL":
        return { ...signInState, email: payload };
      case "CHANGE_PASS":
        return { ...signInState, password: payload };
      default:
        console.error(new Error("FormReducer type is not valid"));
        return signInState;
    }
  };
  const [signInState, signInDispatch] = useReducer(signInReducer, {
    email: "",
    password: "",
  });

  const saveAuthTokenInSessions = (token: string) => {
    window.sessionStorage.setItem("SmartBrainToken", token);
  };

  const onSubmitSignIn = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log("Started :", stage, signInState);
    fetch(`http://${stage}/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json", authentication: "false" },
      body: JSON.stringify(signInState),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Mid :", data);
        if (data.userId && data.success === "true") {
          saveAuthTokenInSessions(data.token);
          console.log("Logged in: ", data.token);
        }
      })
      .catch((err) => console.log("Failed....", err));
  };

  const getImagesUrl = async (action: string) => {
    let status = { proses: "loading", err: "" };
    let response = await fetch(`http://localhost/gallery${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authentication:
        //   window.sessionStorage.getItem("SmartBrainToken") || "no token",
      },

      body: JSON.stringify({ ClDFolder: "graphics" }),
    }).catch((err) => {
      status = { proses: "failed", err };
      console.log("catch, failed", err);
    });
    if (status.proses !== "failed") {
      // @ts-ignore
      let data = await response.json();
      console.log("response", data);
    }
    if (status.proses === "failed") {
      return status.err;
    }
  };

  return (
    <article
      className="flexCenter"
      style={{ height: "100vh", backgroundColor: "#777" }}
    >
      <main className="">
        <form className="">
          <fieldset id="sign_up" className="">
            <legend className="">Sign In</legend>
            <div className="">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                className=""
                type="email"
                autoComplete="email"
                name="email"
                id="email"
                onChange={(event) =>
                  signInDispatch({
                    type: "CHANGE_EMAIL",
                    payload: event.target.value,
                  })
                }
              />
            </div>
            <div className="">
              <label className="" htmlFor="password">
                Password
              </label>
              <input
                className=""
                type="password"
                autoComplete="current-password"
                name="password"
                id="password"
                onChange={(event) =>
                  signInDispatch({
                    type: "CHANGE_PASS",
                    payload: event.target.value,
                  })
                }
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={(event) => onSubmitSignIn(event)}
              className=""
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
        <button onClick={() => getImagesUrl("/update")}>updateUrls</button>
      </main>
    </article>
  );
};

Signin.propTypes = {
  stage: PropTypes.string.isRequired,
};

export default Signin;
