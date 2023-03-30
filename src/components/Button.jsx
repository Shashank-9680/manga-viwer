import React from "react";
import axios from "axios";
function Button({ onClick, name }) {
  const handleClick = () => {
    onClick();
  };
  //   const [news, setNews] = useState([]);

  return (
    <button onClick={handleClick} className="title-btn">
      {name}
    </button>
  );
}
export default Button;
