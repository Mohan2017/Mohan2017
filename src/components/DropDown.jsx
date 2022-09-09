import { useState } from "react";
const DropDown = ({ greet }) => {
  const [content, setContent] = useState(false);
  const handleClick = () => {
    console.log(content);
    setContent(!content);
    if (content) {
      console.log("content", content);
    } else {
      console.log("Content: ", content);
    }
  };

  return (
    <>
      <h1>{content && greet}</h1>
      <button onClick={handleClick}>click</button>
    </>
  );
};
export default DropDown;
