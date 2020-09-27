import React from "react";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
const LoginPage = (props) => {
  // initializing dispatch
  const dispatch = useDispatch();
  let loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    dispatch(userActions.loginUserToDB(data));
    props.history.push("/");
  };
  // Component code
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <h3 className="text-center">Login Page</h3>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          ref={register}
        />
        {errors.username ? (
          <span style={{ color: "red" }}>{`* ${errors.username.message}`}</span>
        ) : (
          ""
        )}
        <p></p>
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register}
        />
        {errors.password ? (
          <span style={{ color: "red" }}>{`* ${errors.password.message}`}</span>
        ) : (
          ""
        )}
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginPage;
