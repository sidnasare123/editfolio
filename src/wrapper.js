import { useEffect, useState } from "react";

import Rules from "./rules";
import Loader from "./Loader";
import { DATA_JSON_PATH } from "./constants";
import axios from "axios";

export default function Wrapper() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      await axios
        .get(DATA_JSON_PATH)
        .then((response) => {
          const data = response.data;
          setData(data);
        })
        .catch(() => {
          console.error("Error fetching data");
          setError(true);
        })
        .finally(setIsLoading(false));
    }
    getData();
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
  ) : error ? (
    <p className="error-note">
      Oops! Something went wrong while retrieving the data. Please refresh the
      page or try again later.
    </p>
  ) : (
    <div className="wrapper">
      <p className="header-msg">
        <u>Note</u>: After making changes, it may take up to 3–5 minutes for
        updates to appear on the portfolio website.
      </p>
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
