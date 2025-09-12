import { useEffect, useState } from "react";
import axios from "axios";

import Rules from "./rules";
import Loader from "./Loader";
import { DATA_JSON_PATH } from "./constants";
import ReactFocusLock from "react-focus-lock";

export default function Wrapper() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setSubmissionError(false);
    setSubmissionSuccess(false);

    try {
      const jsonStr = JSON.stringify(data, null, 2);
      const base64Content = btoa(unescape(encodeURIComponent(jsonStr)));
      await axios.post("/api/newfile", {
        path: "data/data.json",
        content: base64Content,
        commitMessage: "Update data.json",
      });
      setSubmissionSuccess(true);
    } catch (_) {
      setSubmissionError(true);
    } finally {
      setIsSubmit(false);
    }
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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="error-note">
          Oops! Something went wrong while retrieving the data. Please refresh
          the page or try again later.
        </p>
      ) : (
        <div className="wrapper">
          <p className="header-msg">
            <u>Note</u>: After making changes, it may take up to 5–10 minutes
            for updates to appear on the portfolio website.
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
              {submissionSuccess && (
                <p className="submit-success">Data is successfully updated</p>
              )}
              {submissionError && (
                <p className="submit-error">
                  Oops. Failed to update data. Try again or later
                </p>
              )}
            </div>
          </form>
        </div>
      )}
      {isSubmit && <SubmissionProgress />}
    </>
  );
}

function SubmissionProgress() {
  return (
    <ReactFocusLock>
      <div className="submission-progress">
        <button style={{ opacity: 0 }}></button>
      </div>
    </ReactFocusLock>
  );
}
