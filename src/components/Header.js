import { useState, useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {}, []);

  return (
    <>
      <h1>{}</h1>
    </>
  );
};

export default Header;
