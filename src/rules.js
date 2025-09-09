import { FaCircleInfo } from "react-icons/fa6";

export const rules = (key, data) => {
  switch (key) {
    case "name":
      return (
        <div>
          <LabelWrapper label="Full name:">
            <p>
              This is the name that appears in the
              <b> Navigation Bar</b>, <b>Website Title</b>, &{" "}
              <b>bottom left corner in the Contact section</b>
            </p>
          </LabelWrapper>
          <input
            name="name"
            value={data["name"]}
            type="text"
            min={3}
            required
            autoComplete="name"
          />
        </div>
      );
    case "title":
      return (
        <div>
          <LabelWrapper label="Profession title:">
            <p>
              This is the profession title that appears in the{" "}
              <b>Navigation Bar</b> & <b>Website Title</b>
            </p>
          </LabelWrapper>
          <input
            name="title"
            value={data["title"]}
            type="text"
            min={3}
            required
            autoComplete="title"
          />
        </div>
      );
    case "current_loc":
      return (
        <div>
          <LabelWrapper label="Current location:">
            <p>
              This is the your location that appears in{" "}
              <b>bottom right corner in the Contact section</b>
            </p>
          </LabelWrapper>
          <input
            name="location"
            value={data["current_loc"]}
            type="text"
            min={3}
            required
            autoComplete="location"
          />
        </div>
      );
    case "email":
      return (
        <div>
          <h6>Email:</h6>
          <input
            name="email"
            value={data["email"]}
            type="email"
            required
            autoComplete="email"
          />
        </div>
      );
    case "phone":
      return (
        <div>
          <h6>Phone number:</h6>
          <input
            name="phone"
            type="text"
            value={data["phone"]}
            min={3}
            required
            autoComplete="phone"
          />
        </div>
      );
    case "linkedin":
      return (
        <div>
          <h6>LinkedIn URL:</h6>
          <input
            name="linkedin"
            value={data["linkedin"]}
            type="text"
            min={3}
            required
            autoComplete="linkedin"
          />
        </div>
      );

    case "homepage_about":
      return (
        <div>
          <LabelWrapper label="Short Bio:">
            <p>
              This is a short bio of you that appears on the <b>Homepage</b>.
              Keep it brief.<br></br> <br></br>
              <u>
                <b>Note:</b>
              </u>
              <br></br>
              <br></br>
              <li>
                To make text bold, wrap it with <b>&lt;b&gt;</b> and{" "}
                <b>&lt;/b&gt;</b> tags.
              </li>
              <u>
                <i>Example:</i>
              </u>
              <br></br>
              <i>
                → I am a <b>&lt;b&gt;</b>scientist<b>&lt;/b&gt;</b> based in the
                USA.
              </i>
              <br></br>
              <br></br>
              <li>
                Similarly, use <b>&lt;i&gt;</b> and <b>&lt;/i&gt;</b> for
                italics, and <b>&lt;u&gt;</b> and <b>&lt;/u&gt;</b> for
                underline.
              </li>
            </p>
          </LabelWrapper>
          <textarea
            name="short_bio"
            value={data["homepage_about"]}
            type="text"
            min={100}
            required
            autoComplete="short_bio"
          />
        </div>
      );
    case "resume":
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
    case "profile_pic":
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
    case "homepage_quote":
      return (
        <div>
          <LabelWrapper label="Homepage quote:">
            <p>
              This is a quote from the short bio that appears on the{" "}
              <b>Homepage</b>.<br></br> <br></br>
              <u>
                <b>Note:</b>
              </u>
              <br></br>
              <br></br>
              <li>
                To go to the next line, use <b>&lt;br&gt;</b>
                <b>&lt;/br&gt;</b>
              </li>
              <u>
                <i>Example:</i>
              </u>
              <br></br>
              <br></br>
              <i>→ Hello man.&lt;br&gt;&lt;/br&gt;</i> How are you.
              <br></br>
              <br></br>
              Here, 'How are you.' is printed on the next line.
              <br></br>
              <br></br>
              <li>
                To make text bold, wrap it with <b>&lt;b&gt;</b> and{" "}
                <b>&lt;/b&gt;</b> tags.
              </li>
              <u>
                <i>Example:</i>
              </u>
              <br></br>
              <i>
                → I am a <b>&lt;b&gt;</b>scientist<b>&lt;/b&gt;</b> based in the
                USA.
              </i>
              <br></br>
              <br></br>
              <li>
                Similarly, use <b>&lt;i&gt;</b> and <b>&lt;/i&gt;</b> for
                italics, and <b>&lt;u&gt;</b> and <b>&lt;/u&gt;</b> for
                underline.
              </li>
            </p>
          </LabelWrapper>
          <textarea
            name="quote"
            value={data["homepage_quote"]}
            type="text"
            min={30}
            required
            autoComplete="quote"
            style={{ height: "100px" }}
          />
        </div>
      );

    case "what_i_offer":
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
    case "about_me":
      return (
        <div>
          <LabelWrapper label="About Me:">
            <p>
              This is a short bio of you that appears on the <b>Homepage</b>.
              Keep it brief.<br></br> <br></br>
              <u>
                <b>Note:</b>
              </u>
              <br></br>
              <br></br>
              <li>
                To go to the next line, use <b>&lt;br&gt;</b>
                <b>&lt;/br&gt;</b>
                <br></br>
                If you want a 1-line gap, use two <b>&lt;br&gt;</b>
                <b>&lt;/br&gt;</b> in a row.
              </li>
              <u>
                <i>Example:</i>
              </u>
              <br></br>
              <i>
                For a one-line gap, add two line breaks before the next
                paragraph like this:
              </i>
              <br></br>
              <br></br>
              <i>→ Hello man.&lt;br&gt;&lt;/br&gt; &lt;br&gt;&lt;/br&gt;</i> How
              are you.
              <br></br>
              <br></br>
              Here, 'Hello man.' is the first paragraph. Then the <br></br> tags
              create a blank line, and 'How are you.' is printed on the next
              line.
              <br></br>
              <br></br>
              <li>
                Wrap text with tags: <b>&lt;b&gt;</b> and <b>&lt;/b&gt;</b> for
                bold,
                <b>&lt;i&gt;</b> and <b>&lt;/i&gt;</b> for italics, and{" "}
                <b>&lt;u&gt;</b> and <b>&lt;/u&gt;</b> for underline.
              </li>
            </p>
          </LabelWrapper>
          <textarea
            name="about_me"
            value={data["about_me"]}
            type="text"
            min={200}
            required
            autoComplete="about_me"
            style={{ height: "400px" }}
          />
        </div>
      );
    case "highlights":
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
    case "experience":
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
    case "skills":
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
    case "education":
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
    case "projects":
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
    default:
      return (
        <div>
          <h6>Enter your name:</h6>
          <input name="name" type="text" min={3} required autoComplete="name" />
        </div>
      );
  }
};

function LabelWrapper({ children, label }) {
  return (
    <div className="label">
      <h6>{label}</h6>
      <div className="info">
        <FaCircleInfo />
        <span className="tooltip">{children}</span>
      </div>
    </div>
  );
}
