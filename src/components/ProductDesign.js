// FrontendInterns.js
import React, { useState, useEffect } from "react";
// import "./FrontendInterns.css"; // Import shared CSS for table styling

const ProductDesignInterns = () => {
  const [interns, setInterns] = useState([
    {
      id: 1,
      name: "Victor Idam",
      info: "Product Design",
      Task1: 7,
      Task2: 10,
      overallGrade: 0,
      image: "",
    },
    {
      id: 2,
      name: "Emeka Austine",
      info: "Product Design",
      Task1: 10,
      Task2: 10,
      overallGrade: 0,
      image:
        "https://images.unsplash.com/photo-1606459431839-90b942dc3754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZhY2VzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Nuel Desmond",
      info: "Product Design",
      Task1: 8,
      Task2: 10,
      overallGrade: 0,
      image: "",
    },
    {
      id: 4,
      name: "James Gordon",
      info: "Product Design",
      Task1: 9,
      Task2: 10,
      overallGrade: 0,
      image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZhY2VzfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Eze Dumebi",
      info: "Product Design",
      Task1: 10,
      Task2: 10,
      overallGrade: 0,
      image:
        "https://images.unsplash.com/photo-1503467913725-8484b65b0715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxmYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    // Add more interns
  ]);

  useEffect(() => {
    // Calculate overall grade for each intern
    const updatedInterns = interns.map((intern) => ({
      ...intern,
      overallGrade: (intern.Task1 + intern.Task2) / 2, // Calculate average
    }));

    // Sort interns based on their overall grades in descending order
    const sortedInterns = [...updatedInterns].sort(
      (a, b) => b.overallGrade - a.overallGrade
    );

    setInterns(sortedInterns);
  }, [interns]);

  // Extract top 3 interns
  const topThreeInterns = interns.slice(0, 3);

  return (
    <div>
      {/* <h2>ProductDesign Interns</h2> */}
      <div className="top-class">
        {topThreeInterns.map((intern, index) => (
          <div className="top-class-e" key={intern.id}>
            <img src={intern.image} alt={intern.name} />
            <p>
              {index + 1} - {intern.name}: {intern.overallGrade}
            </p>
          </div>
        ))}
      </div>
      <h3>Learderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Learning path</th>
            <th>Task1</th>
            <th>Task2</th>
            <th>Overall Grading</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern, index) => (
            <tr key={intern.id}>
              <td>{index + 1}</td>
              <td>{intern.name}</td>
              <td>{intern.info}</td>
              <td>{intern.Task1}</td>
              <td>{intern.Task2}</td>
              <td>{intern.overallGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDesignInterns;
