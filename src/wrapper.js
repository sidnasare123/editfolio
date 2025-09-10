import { useEffect, useState } from "react";

import userData from "./data.json";
import Rules from "./rules";
import Loader from "./Loader";

export default function Wrapper() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData(userData);
    }, 1000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        {Object.keys(data).map((item, idx) => (
          <div className="input-block" key={idx}>
            <Rules input_name={item} data={data} setData={setData} />
          </div>
        ))}

        <div className="submit">
          <button className="submit-btn" type="submit">
            Submit
          </button>
          <button onClick={handleDownload} className="json" type="button">
            Download JSON
          </button>
        </div>
      </form>
    </div>
  );
}
