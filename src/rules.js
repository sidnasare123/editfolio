import { FaCircleInfo } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import Icons from "./icons";

function Rules({ input_name, data, setData }) {
  switch (input_name) {
    case "name":
      return <NameContainer data={data} setData={setData} />;
    case "title":
      return <TitleContainer data={data} setData={setData} />;
    case "current_loc":
      return <CurrentLocation data={data} setData={setData} />;
    case "email":
      return <EmailContainer data={data} setData={setData} />;
    case "phone":
      return <PhoneContainer data={data} setData={setData} />;
    case "linkedin":
      return <LinkedInContainer data={data} setData={setData} />;
    case "homepage_about":
      return <HomepageAbout data={data} setData={setData} />;
    case "resume":
      return <ResumeContainer data={data} setData={setData} />;
    case "profile_pic":
      return <ProfilePic data={data} setData={setData} />;
    case "homepage_quote":
      return <HomepageQuote data={data} setData={setData} />;
    case "about_me":
      return <AboutMe data={data} setData={setData} />;
    case "highlights":
      return <HighlightsContainer data={data} setData={setData} />;
    case "skills":
      return <SkillsContainer data={data} setData={setData} />;
    case "experience":
      return <ExperienceContainer />;
    case "education":
      return <EducationContainer />;
    case "achievements":
      return <AchievementsContainer data={data} setData={setData} />;
    case "what_i_offer":
      return <ServicesContainer data={data} setData={setData} />;
    case "projects":
      return <ProjectsContainer />;
    default:
      break;
  }
}

function NameContainer({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["name"] = e.target.value;
    setData(new_data);
  };
  return (
    <div>
      <LabelWrapper label="Full name:">
        <p>
          This is the name that appears in the
          <b> Navigation Bar</b>, <b>Website Title</b>, &{" "}
          <b>bottom left corner in the Contact section</b>.
        </p>
      </LabelWrapper>
      <input
        name="name"
        onChange={handleChange}
        value={data.name}
        type="text"
        min={3}
        required
        placeholder="Enter full name"
        autoComplete="off"
      />
    </div>
  );
}

function TitleContainer({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["title"] = e.target.value;
    setData(new_data);
  };

  return (
    <div>
      <LabelWrapper label="Profession title:">
        <p>
          This is the profession title that appears in the <b>Navigation Bar</b>{" "}
          & <b>Website Title</b>. Keep it short.
        </p>
      </LabelWrapper>
      <input
        onChange={handleChange}
        name="title"
        value={data.title}
        type="text"
        min={3}
        required
        autoComplete="off"
        placeholder="Enter professional title"
      />
    </div>
  );
}

function CurrentLocation({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["current_loc"] = e.target.value;
    setData(new_data);
  };

  return (
    <div>
      <LabelWrapper label="Current location:">
        <p>
          This is the your location that appears in{" "}
          <b>bottom right corner in the Contact section</b>.
        </p>
      </LabelWrapper>
      <input
        onChange={handleChange}
        name="location"
        value={data.current_loc}
        placeholder="Enter the current location"
        type="text"
        min={3}
        required
        autoComplete="off"
      />
    </div>
  );
}

function EmailContainer({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["email"] = e.target.value;
    setData(new_data);
  };
  return (
    <div>
      <h6>Email:</h6>
      <input
        onChange={handleChange}
        name="email"
        value={data.email}
        type="email"
        required
        autoComplete="off"
        placeholder="Enter the email"
      />
    </div>
  );
}

function PhoneContainer({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["phone"] = e.target.value;
    setData(new_data);
  };
  return (
    <div>
      <h6>Phone number:</h6>
      <input
        onChange={handleChange}
        name="phone"
        type="tel"
        value={data.phone}
        placeholder="Enter the phone number"
        required
        autoComplete="off"
      />
    </div>
  );
}

function LinkedInContainer({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["linkedin"] = e.target.value;
    setData(new_data);
  };
  return (
    <div>
      <h6>LinkedIn URL:</h6>
      <input
        name="linkedin"
        onChange={handleChange}
        placeholder="Enter the LinkedIn profile link"
        value={data.linkedin}
        type="url"
        required
        autoComplete="off"
      />
    </div>
  );
}

function HomepageAbout({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["homepage_about"] = e.target.value;
    setData(new_data);
  };
  return (
    <div>
      <LabelWrapper label="Homepage short bio:">
        <p>
          This is a short bio of you that appears on the <b>Homepage</b>. Keep
          it brief.<br></br> <br></br>
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
            Similarly, use <b>&lt;i&gt;</b> and <b>&lt;/i&gt;</b> for italics,
            and <b>&lt;u&gt;</b> and <b>&lt;/u&gt;</b> for underline.
          </li>
        </p>
      </LabelWrapper>
      <textarea
        onChange={handleChange}
        name="short_bio"
        placeholder="Enter a short bio"
        value={data.homepage_about}
        type="text"
        min={100}
        required
        autoComplete="off"
      />
    </div>
  );
}

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

function ResumeContainer({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    let value = e.target.value;
    value = value
      .replace("https://github.com/", "https://raw.githubusercontent.com/")
      .replace("/blob", "");
    new_data["resume"] = value;
    setData(new_data);
  };
  return (
    <div>
      <LabelWrapper label="Resume URL:">
        <p>
          Upload your resume to the storage space in the{" "}
          <a
            className="external"
            href="https://github.com/prempritam888/portfolio-assets/tree/main/resume"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , then copy the link to your file and paste it into the input field.
          For step-by-step guidance, follow the{" "}
          <a
            className="external"
            href="https://github.com/prempritam888/portfolio-assets/tree/main/resume"
            target="_blank"
            rel="noreferrer"
          >
            tutorial
          </a>
          .
        </p>
      </LabelWrapper>
      <input
        name="resume_url"
        placeholder="Enter the resume link"
        onChange={handleChange}
        value={data.resume}
        type="url"
        required
        autoComplete="off"
      />
    </div>
  );
}

function ProfilePic({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    let value = e.target.value;
    value = value
      .replace("https://github.com/", "https://raw.githubusercontent.com/")
      .replace("/blob", "");
    new_data["profile_pic"] = value;
    setData(new_data);
  };
  return (
    <div>
      <LabelWrapper label="Profile image URL:">
        <p>
          This is the profile image that appears on the <b>About</b> page.
          Upload your profile picture to the storage space in the{" "}
          <a
            className="external"
            href="https://github.com/prempritam888/portfolio-assets/tree/main/profile"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , then copy the link to your file and paste it into the input field.
          For step-by-step guidance, follow the{" "}
          <a
            className="external"
            href="https://github.com/prempritam888/portfolio-assets/tree/main/profile"
            target="_blank"
            rel="noreferrer"
          >
            tutorial
          </a>
          .
        </p>
      </LabelWrapper>
      <input
        onChange={handleChange}
        name="profile_pic_url"
        placeholder="Enter the profile pic link"
        value={data.profile_pic}
        type="url"
        required
        autoComplete="off"
      />
    </div>
  );
}

function HomepageQuote({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["homepage_quote"] = e.target.value;
    setData(new_data);
  };
  return (
    <div>
      <LabelWrapper label="Homepage quote:">
        <p>
          This is the text that appears above the short bio in the{" "}
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
        </p>
      </LabelWrapper>
      <textarea
        name="quote"
        value={data.homepage_quote}
        onChange={handleChange}
        placeholder="Enter a quote"
        type="text"
        min={30}
        required
        autoComplete="off"
        style={{ height: "100px" }}
      />
    </div>
  );
}

function AboutMe({ data, setData }) {
  const handleChange = (e) => {
    const new_data = { ...data };
    new_data["about_me"] = e.target.value;
    setData(new_data);
  };
  return (
    <div>
      <LabelWrapper label="About me:">
        <p>
          This is your story that appears on the <b>About</b> page.
          <br></br> <br></br>
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
          <i>→ Hello man.&lt;br&gt;&lt;/br&gt;</i> How are you.
          <br></br>
          <br></br>
          Here, 'Hello man.' is the first paragraph. Then the <br></br> tags
          create a blank line, and 'How are you.' is printed.
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
        value={data.about_me}
        onChange={handleChange}
        placeholder="Enter about you"
        type="text"
        min={200}
        required
        autoComplete="off"
        style={{ height: "500px" }}
      />
    </div>
  );
}

function HighlightsContainer({ data, setData }) {
  function handleChange(e, idx, type) {
    const new_data = { ...data };
    const value = e.target.value;
    if (type === "name") {
      new_data["highlights"][idx]["name"] = value;
      setData(new_data);
      return;
    }
    new_data["highlights"][idx]["count"] = value;
    setData(new_data);
  }

  function handleRemove(idx) {
    const new_data = { ...data };
    const highlights = new_data.highlights.filter((_, i) => i !== idx);
    new_data["highlights"] = highlights;
    setData(new_data);
  }

  function addHighlight() {
    const new_data = { ...data };
    new_data.highlights.push({
      name: "",
      count: "",
    });
    setData(new_data);
  }

  return (
    <div>
      <LabelWrapper label="Highlights of your journey:">
        <p>
          This section appears below the short bio on the <b>Homepage</b>. It
          highlights key milestones in your journey—such as the number of
          projects completed, overall professional experience, teaching
          experience (if any), and other notable achievements. You can present
          these using numbers.
        </p>
      </LabelWrapper>
      <div className="highlights-container">
        {data.highlights.map((item, idx) => (
          <div className="highlight" key={idx}>
            <input
              name="highlight_name"
              value={item.name}
              type="text"
              min={3}
              required
              placeholder="Highlight name"
              autoComplete="off"
              onChange={(e) => handleChange(e, idx, "name")}
            />
            <input
              name="highlight_count"
              value={item.count}
              type="number"
              required
              placeholder="Count"
              autoComplete="off"
              onChange={(e) => handleChange(e, idx, "count")}
            />
            <button
              title="remove"
              onClick={() => handleRemove(idx)}
              type="button"
            >
              <IoClose />
            </button>
          </div>
        ))}
        <button onClick={addHighlight} type="button" className="new-highlight">
          Add Highlight
        </button>
      </div>
    </div>
  );
}

function SkillsContainer({ data, setData }) {
  function handleChange(e, idx, type) {
    const new_data = { ...data };
    const value = e.target.value;
    if (type === "name") {
      new_data["skills"][idx]["name"] = value;
      setData(new_data);
      return;
    }
    new_data["skills"][idx]["level"] = value;
    setData(new_data);
  }

  function handleRemove(idx) {
    const new_data = { ...data };
    const new_skills = new_data.skills.filter((_, i) => i !== idx);
    new_data["skills"] = new_skills;
    setData(new_data);
  }

  function addSkills() {
    const new_data = { ...data };
    new_data.skills.push({
      name: "",
      level: "",
    });
    setData(new_data);
  }

  return (
    <div>
      <LabelWrapper label="Skills:">
        <p>
          This section appears on the <b>About</b> page. It showcases your
          skills. Add a skill and rate yourself on a scale of 0 to 100.
        </p>
      </LabelWrapper>
      <div className="skills-container">
        {data.skills.map((item, idx) => (
          <div className="skill" key={idx}>
            <input
              name="skill_name"
              value={item.name}
              onChange={(e) => handleChange(e, idx, "name")}
              type="text"
              required
              min={3}
              placeholder="Skill name"
              autoComplete="off"
            />
            <input
              name="skill_count"
              value={item.level}
              type="number"
              required
              min="1"
              max="100"
              onChange={(e) => handleChange(e, idx, "level")}
              placeholder="Count"
              autoComplete="off"
            />
            <button
              title="Remove"
              onClick={() => handleRemove(idx)}
              type="button"
            >
              <IoClose />
            </button>
          </div>
        ))}
        <button onClick={addSkills} type="button" className="new-skill">
          Add Skill
        </button>
      </div>
    </div>
  );
}

function AchievementsContainer({ data, setData }) {
  function handleChange(e, idx, type) {
    const new_data = { ...data };
    const value = e.target.value;
    if (type === "name") {
      new_data["achievements"][idx]["title"] = value;
      setData(new_data);
      return;
    }
    new_data["achievements"][idx]["description"] = value;
    setData(new_data);
  }

  function handleRemove(idx) {
    const new_data = { ...data };
    const new_achievement = new_data.achievements.filter((_, i) => i !== idx);
    new_data["achievements"] = new_achievement;
    setData(new_data);
  }

  function addAchievement() {
    const new_data = { ...data };
    new_data.achievements.push({
      title: "",
      description: "",
      icon: "FaStar",
    });
    setData(new_data);
  }

  return (
    <div>
      <LabelWrapper label="Achievements & Recognitions:">
        <p>
          This section appears on the <b>About</b> page. You can add
          achievements, notable certifications, memberships, and more here.
        </p>
      </LabelWrapper>
      <div className="what_i_offer_container">
        {data.achievements.map((item, idx) => {
          return (
            <div className="services-container" key={idx}>
              <div className="services-wrapper">
                <div className="row_1">
                  <Icons icon={item.icon} />
                  <input
                    name="achievement_name"
                    value={item.title}
                    type="text"
                    min={3}
                    required
                    placeholder="Enter achievement title"
                    autoComplete="off"
                    onChange={(e) => handleChange(e, idx, "name")}
                  />
                </div>
                <input
                  name="achievement_detail"
                  type="text"
                  min={3}
                  required
                  value={item.description}
                  autoComplete="off"
                  placeholder="Enter achievement description"
                  onChange={(e) => handleChange(e, idx, "description")}
                />
              </div>
              <button
                onClick={() => handleRemove(idx)}
                type="button"
                className="close-btn"
                title="remove"
              >
                <IoClose />
              </button>
            </div>
          );
        })}

        <button onClick={addAchievement} type="button" className="new-service">
          Add Achievement
        </button>
      </div>
    </div>
  );
}

function ServicesContainer({ data, setData }) {
  function handleChange(e, idx, type) {
    const new_data = { ...data };
    const value = e.target.value;
    if (type === "name") {
      new_data["what_i_offer"][idx]["title"] = value;
      setData(new_data);
      return;
    }
    new_data["what_i_offer"][idx]["description"] = value;
    setData(new_data);
  }

  function handleRemove(idx) {
    const new_data = { ...data };
    const new_service = new_data.what_i_offer.filter((_, i) => i !== idx);
    new_data["what_i_offer"] = new_service;
    setData(new_data);
  }

  function addService() {
    const new_data = { ...data };
    new_data.what_i_offer.push({
      title: "",
      description: "",
      icon: "FaHandsHelping",
    });
    setData(new_data);
  }

  return (
    <div>
      <LabelWrapper label="Services I offer:">
        <p>
          This is the section below projects in the <b>Homepage</b>. You can add
          the services that you can offer.
        </p>
      </LabelWrapper>
      <div className="what_i_offer_container">
        {data.what_i_offer.map((item, idx) => {
          return (
            <div className="services-container" key={idx}>
              <div className="services-wrapper">
                <div className="row_1">
                  <Icons icon={item.icon} />
                  <input
                    name="service_name"
                    value={item.title}
                    type="text"
                    min={3}
                    required
                    autoComplete="off"
                    placeholder="Enter service name"
                    onChange={(e) => handleChange(e, idx, "name")}
                  />
                </div>
                <input
                  name="service_description"
                  type="text"
                  min={3}
                  required
                  value={item.description}
                  autoComplete="off"
                  placeholder="Enter service description"
                  onChange={(e) => handleChange(e, idx, "description")}
                />
              </div>
              <button
                onClick={() => handleRemove(idx)}
                type="button"
                className="close-btn"
                title="remove"
              >
                <IoClose />
              </button>
            </div>
          );
        })}

        <button onClick={addService} type="button" className="new-service">
          Add Service
        </button>
      </div>
    </div>
  );
}

function ExperienceContainer() {
  return (
    <div>
      <h6>Enter your name:</h6>
      <input name="name" type="text" min={3} required autoComplete="off" />
    </div>
  );
}

function ProjectsContainer() {
  return (
    <div>
      <h6>Enter your Project:</h6>
      <input
        name="name"
        type="text"
        min={3}
        required
        autoComplete="off"
        disabled
      />
    </div>
  );
}

function EducationContainer() {
  return (
    <div>
      <h6>Enter your name:</h6>
      <input name="name" type="text" min={3} required autoComplete="off" />
    </div>
  );
}

export default Rules;
