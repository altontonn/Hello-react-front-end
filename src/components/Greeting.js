import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomGreeting } from '../redux/greeting';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);
  return (
    <h1>{greeting}</h1>
  );
};

export default Greeting;
