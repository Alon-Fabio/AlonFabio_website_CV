import React, { useReducer, useState, useTransition } from "react";
import PropTypes from "prop-types";

import "./fadminbio.scss";

// ========================================================== Typescript ========================================================== \\

interface ISgnRedState {
  email: string;
  password: string;
}
interface ISignInReducer {
  (signInState: ISgnRedState, { type, payload }: ISigRedAction): ISgnRedState;
}
interface ISigRedAction {
  type: "CHANGE_PASS" | "CHANGE_EMAIL";
  payload: string;
}

type IFadminbioAction = (
  action: string,
  bodyObject?: { CLDFolder: "photos" | "graphics" } | { tests: string[] } | {}
) => void;

interface TUserTable {
  id: string;
  name: string;
  email: string;
  pet: string;
  age: string;
  entries: string;
  joined: string;
}

interface TLoginsTable {
  id: string;
  hash: string;
  email: string;
}

// ========================================================== component ========================================================== \\

const Fadminbio: React.FC = () => {
  const [auth, setAuth] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [healthCheck, setHealthCheck] = useState<string[]>([]);
  const [users, setUsers] = useState<TUserTable[] | { message: string }[] | []>(
    []
  );
  const [login, setLogin] = useState<
    TLoginsTable[] | { message: string }[] | []
  >([]);
  const [isPending, startTransition] = useTransition();

  const signInReducer: ISignInReducer = (signInState, { type, payload }) => {
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
    setFetchStatus(true);

    event.preventDefault();
    // console.log("Started :", stage, signInState);
    fetch(`https://multitasker.alonfabio.com/api/signin`, {
      // fetch(`http://localhost/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signInState),
    })
      .then((response) =>
        response.status === 200 ? response.json() : response
      )
      .then((data) => {
        console.log("Mid :", data, "data.status: ", data.status);
        setFetchStatus(false);

        if (data.userId && data.success === true) {
          saveAuthTokenInSessions(data.token);
          // console.log("Logged in: ", data.token);
          setAuth(true);
        }
      })

      .catch((err) => {
        setFetchStatus(false);
        return console.log("Failed....", err);
      });
  };

  // Handles admin actions:
  const handleFadminbioAction: IFadminbioAction = (
    method,
    action,
    bodyObject = {}
  ) => {
    setFetchStatus(true);
    startTransition(() => {
      fetch(`https://multitasker.alonfabio.com/api/${action}`, {
        // fetch(`http://localhost/${action}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          authentication:
            window.sessionStorage.getItem("SmartBrainToken") || "",
        },

        body: JSON.stringify({ ...signInState, ...bodyObject }),
      })
        .then((response) => response.json())
        .then((data) => {
          setFetchStatus(false);
          console.log(data, action);
          if (typeof data !== "object" || !Boolean(data)) {
            setUsers([{ message: "no users" }]);
            setLogin([{ message: "no users" }]);
            return;
          }
          if (action === "admin/getUsers") {
            Boolean(data.hasOwnProperty("users")) && setUsers(data.users);

            Boolean(data.hasOwnProperty("logins")) && setLogin(data.logins);
          }
          if (action === "health-check") {
            setHealthCheck(data.testRes);
          }
        })
        .catch((err) => {
          setFetchStatus(false);
          console.log(err);
        });
    });
  };

  const generateTable = (tableData: { [key: string]: any }[]) => {
    const headers = Object.keys(tableData[0]);

    return (
      <table>
        <thead>
          <tr>
            {headers.map((head) => (
              <td key={head}>{head}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((userObject, index) => (
            <tr key={index + "row"}>
              {Object.values(userObject).map((data, index) => (
                <td key={index + "data"}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section id="Fadminbio" className="pageHero flexCenter">
      <article className="container ">
        <main className="">
          {auth ? (
            <div className="Fadminbio_Container ">
              <h2>Welcome Fabio, what do you wish to do?</h2>
              <h2>
                {Array.isArray(healthCheck) ? (
                  healthCheck.map((test) => ` ${test},`)
                ) : (
                  <></>
                )}
              </h2>

              <nav
                id="Fadminbio_Button_Container"
                style={!showNav ? { left: "-180px" } : {}}
              >
                <div id="buttons_show_nav">
                  {!showNav ? (
                    <button onClick={() => setShowNav(true)}>→</button>
                  ) : (
                    <button onClick={() => setShowNav(false)}>←</button>
                  )}
                </div>
                <h3>Management</h3>
                <ul>
                  <li>
                    <button
                      onClick={() => handleFadminbioAction("admin/getUsers")}
                    >
                      Users
                    </button>
                  </li>
                </ul>
                <h3>Gallery</h3>
                <ul>
                  <li>
                    <button
                      onClick={() =>
                        handleFadminbioAction("gallery/update", {
                          CLDFolder: "graphics",
                        })
                      }
                    >
                      Update Graphics
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() =>
                        handleFadminbioAction("gallery/update", {
                          CLDFolder: "photos",
                        })
                      }
                    >
                      Update Photos
                    </button>
                  </li>
                </ul>
                <h3>Health</h3>
                <ul>
                  <li>
                    <button
                      onClick={() =>
                        handleFadminbioAction("health-check", {
                          tests: ["redis", "pingAF"],
                        })
                      }
                    >
                      Health check
                    </button>
                  </li>
                </ul>
              </nav>

              <p>
                {isPending === false && fetchStatus === true && "Loading..."}
              </p>
              <div id="Fadminbio_Result" className="subSection  container">
                {users.length !== 0 && (
                  <div id="Fadminbio_schemas">
                    <div id="userSchema">
                      <h3>Users:</h3>
                      {generateTable(users)}
                    </div>
                    <div id="loginSchema">
                      <h3>Logins:</h3>
                      {generateTable(login)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
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
          )}
        </main>
      </article>
    </section>
  );
};

Fadminbio.propTypes = {
  stage: PropTypes.string.isRequired,
};

export default Fadminbio;
