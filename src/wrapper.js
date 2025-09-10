import { useEffect, useState } from "react";
import userData from "./data.json";
import { rules } from "./rules";

export default function Wrapper() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(userData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        {Object.keys(data).map((item, idx) => (
          <div className="input-block" key={idx}>
            {rules(item, data)}
          </div>
        ))}

        <div className="submit">
          <button className="submit-btn" type="submit">
            Submit
          </button>
          <button className="json" type="button">
            Download JSON
          </button>
        </div>
      </form>
    </div>
  );
}
