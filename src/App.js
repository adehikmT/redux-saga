import React, { useEffect } from "react";
import "./App.css";

import {
  GET_REQUEST_MUSIC,
  POST_REQUEST_LOGIN,
} from "./redux/actions/actionTypes";
import { connect } from "react-redux";

function App({ music: { loading, data, error }, auth, getMusic, postLogin }) {
  useEffect(() => {
    getMusic();
    postLogin({ username: "userb", password: "password" });
    console.log(auth);
  }, []);
  console.log(auth);

  return (
    <div className="App">
      {auth.data !== null ? <h1>{auth.data}</h1> : null}
      {loading ? (
        <h1>LOADING...</h1>
      ) : data !== null ? (
        <ul>
          {data.map((data, i) => (
            <li key={i}>{data.title}</li>
          ))}
        </ul>
      ) : data !== null && data.error && error ? (
        <h1>{data.error}</h1>
      ) : (
        <h1>data null</h1>
      )}
    </div>
  );
}

const mapStateProps = (state) => ({
  music: state.music,
  auth: state.auth,
});

const mapDispatchProps = (dispatch) => ({
  getMusic: () => dispatch({ type: GET_REQUEST_MUSIC }),
  postLogin: (data) => dispatch({ type: POST_REQUEST_LOGIN, payload: data }),
});

export default connect(mapStateProps, mapDispatchProps)(App);
