import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getFarmState } from "../features/user/farmSlice";
import { getFarm } from "../features/user/farmSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Form = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const fname = useSelector(getFarmState);
  const form = useForm({
    defaultValues: {
      name: fname,
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data.name);
    setData(data.name);
    dispatch(getFarm(data.name));
    navigate("/");
  };
  const { register, control, handleSubmit, setValue } = form;
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id="name" {...register("name")} />

        <button type="submit">Submit</button>
      </form>
      <h1>{data}</h1>
    </div>
  );
};

export default Form;
