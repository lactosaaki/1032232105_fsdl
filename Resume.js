import { useState } from "react";

function Resume() {
  const [data, setData] = useState({
    name: "",
    objective: "",
    summary: "",
    education: "",
    skills: "",
    experience: "",
    achievements: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Resume Builder</h2>

      {/* INPUT SECTION */}
      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <textarea
        name="objective"
        placeholder="Career Objective"
        onChange={handleChange}
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        onChange={handleChange}
      />

      <textarea
        name="education"
        placeholder="Education"
        onChange={handleChange}
      />

      <textarea
        name="skills"
        placeholder="Skills"
        onChange={handleChange}
      />

      <textarea
        name="experience"
        placeholder="Experience / Internships"
        onChange={handleChange}
      />

      <textarea
        name="achievements"
        placeholder="Achievements"
        onChange={handleChange}
      />

      {/* PREVIEW SECTION */}
      <hr />
      <h3>Resume Preview</h3>

      <p><b>Name:</b> {data.name}</p>
      <p><b>Career Objective:</b> {data.objective}</p>
      <p><b>Summary:</b> {data.summary}</p>
      <p><b>Education:</b> {data.education}</p>
      <p><b>Skills:</b> {data.skills}</p>
      <p><b>Experience:</b> {data.experience}</p>
      <p><b>Achievements:</b> {data.achievements}</p>
    </div>
  );
}

export default Resume;