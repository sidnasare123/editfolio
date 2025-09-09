import { useEffect, useState } from "react";
import userData from "./data.json";
import { rules } from "./rules";

export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(userData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <h1>Editfolio</h1>
      <h4>Edit your portfolio now. No Coding required.</h4>
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
          <button className="json">Download JSON</button>
        </div>
      </form>
    </div>
  );
}
