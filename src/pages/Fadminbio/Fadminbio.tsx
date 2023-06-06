import React, { useReducer, useState, useTransition } from "react";
import PropTypes from "prop-types";

import "./Fadminbio.scss";

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
interface IFadminbioAction {
  (action: string, bodyObject?: { folder: string } | {}): void;
}
type TTableData = {
  [key: string]: string | number | null;
}[];
// { users: [...users], login: [...login] } server return >>
const Fadminbio: React.FC<{ stage: string }> = ({ stage = "localhost" }) => {
  const [auth, setAuth] = useState(true);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [users, setUsers] = useState<TTableData>([
    {
      id: 1,
      name: "fuck this prj",
      email: "alon.the.fabio@gmail.com",
      pet: null,
      age: null,
      entries: "0",
      joined: "2023-05-23T15:33:00.537Z",
    },
    {
      id: 2,
      name: "Alon",
      email: "alon.the.fabio@Gmail.com",
      pet: null,
      age: null,
      entries: "0",
      joined: "2023-06-01T07:37:46.365Z",
    },
  ]);
  const [login, setLogin] = useState<TTableData>([
    {
      id: 1,
      hash: "$2a$10$bF6o2QvvPJE0CcMQjerQtew63nX2yWFvCSvK4I0evlmCf1CqO6iES",
      email: "alon.the.fabio@gmail.com",
    },
    {
      id: 2,
      hash: "$2a$10$GbhQ1UvCgOfl3j3UzrAC0OmGtpAhiUUgIF7UV.JrSuFQrhta/lTIm",
      email: "alon.the.fabio@Gmail.com",
    },
  ]);
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
    console.log("Started :", stage, signInState);
    fetch(`http://${stage}/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json", authentication: "false" },
      body: JSON.stringify(signInState),
    })
      .then((response) =>
        response.status === 200 ? response.json() : response
      )
      .then((data) => {
        console.log("Mid :", data);
        setFetchStatus(false);

        if (data.userId && data.success === "true") {
          saveAuthTokenInSessions(data.token);
          console.log("Logged in: ", data.token);
          setAuth(true);
        }
      })

      .catch((err) => {
        setFetchStatus(false);
        return console.log("Failed....", err);
      });
  };

  const handleFadminbioAction: IFadminbioAction = (action, bodyObject = {}) => {
    setFetchStatus(true);
    startTransition(() => {
      fetch(`http://${stage}/${action}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          authentication:
            window.sessionStorage.getItem("SmartBrainToken") || "",
        },
        body: JSON.stringify({ ...signInState, ...bodyObject }),
      })
        .then((response) =>
          response.status === 200 ? response.json() : response
        )
        .then((data) => {
          setFetchStatus(false);
          console.log(data, action);
          if (action === "signin/getUsers" && data.users.length > 0) {
            setUsers(data.users);
          }
          if (action === "signin/getUsers" && data.login.length > 0) {
            setLogin(data.login);
          }
          if (action === "signin/getUsers" && data.length === 0) {
            setUsers([{ message: "no users" }]);
            setLogin([{ message: "no users" }]);
          }
        })
        .catch((err) => {
          setFetchStatus(false);
          console.log(err);
        });
    });
  };

  const generateTable = (tableData: TTableData) => {
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
      <article className="flexCenter container">
        <main className="">
          {auth ? (
            <div className="Fadminbio_Container ">
              <h2>Welcome Fabio, what do you wish to do?</h2>

              <nav id="Fadminbio_Button_Container">
                <ul>
                  <li>
                    <button
                      onClick={() => handleFadminbioAction("signin/getUsers")}
                    >
                      Users
                    </button>
                  </li>
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
                    <button onClick={() => console.log(users)}>users</button>
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
              </nav>

              <p>
                {isPending === false && fetchStatus === true && "Loading..."}
              </p>
              <div id="Fadminbio_Result" className="subSection flexCenter">
                {users.length !== 0 && (
                  <div id="schemas">
                    <div id="userSchema">
                      {/* <h3>Users:</h3> */}
                      {generateTable(users)}
                    </div>
                    <div id="loginSchema">
                      {/* <h3>Logins:</h3> */}
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
