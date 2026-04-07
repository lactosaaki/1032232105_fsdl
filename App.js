import React, { useState, useEffect } from 'react';

function App() {
  const [student, setStudent] = useState({});
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const addStudent = async () => {
    await fetch('http://localhost:5000/addStudent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    alert("Added");
  };

  const getStudents = async () => {
    const res = await fetch('http://localhost:5000/students');
    const data = await res.json();
    setList(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h2>Student Form</h2>

      <input name="firstName" placeholder="First Name" onChange={handleChange}/>
      <input name="lastName" placeholder="Last Name" onChange={handleChange}/>
      <input name="rollNo" placeholder="Roll No" onChange={handleChange}/>
      <input name="contact" placeholder="Contact" onChange={handleChange}/>

      <button onClick={addStudent}>Add</button>
      <button onClick={getStudents}>View</button>

      <table border="1">
        <tr>
          <th>Name</th>
          <th>Roll</th>
          <th>Contact</th>
        </tr>

        {list.map((s, i) => (
          <tr key={i}>
            <td>{s.firstName} {s.lastName}</td>
            <td>{s.rollNo}</td>
            <td>{s.contact}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;