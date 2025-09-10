import { useEffect, useState } from "react";

import userData from "./data.json";
import { rules } from "./rules";
import Loader from "./Loader";

export default function Wrapper() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData(userData);
    }, 40000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return isLoading ? (
    <Loader />
  ) : (
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
