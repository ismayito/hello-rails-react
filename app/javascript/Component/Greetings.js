import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../Redux/action";

const GreetingsComponent = () => {
  const dispatch = useDispatch();
  const randomMessage = useSelector((state) => state.randomMessage);
  console.log(randomMessage);

  useEffect(() => {
    // Dispatch the fetchMessage action when the component mounts
    dispatch(fetchMessage());
  }, [dispatch]);

  console.log(randomMessage);

  return (
    <div>
      <h2>Random Message:</h2>
      <p>{randomMessage}</p>
    </div>
  );
};

export default GreetingsComponent;
