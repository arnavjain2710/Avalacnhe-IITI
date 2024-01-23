import React, { useContext, useEffect, useState } from "react";
import Map from "../../Map";
import { useNavigate } from "react-router-dom";
import mapContext from "../../context/mapContext";
import "./form.css";

function Form() {
  const context = useContext(mapContext);
  const { t1, t2, sett1, sett2, updateT2, updateT1 } = context;
  const navigate = useNavigate();

  const [team1, setTeam1] = useState({
    score: "",
    shortName: "",
    name: "",
  });

  const [team2, setTeam2] = useState({
    score: "",
    shortName: "",
    name: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (team, field, value) => {
    if (team === "team1") {
      setTeam1({ ...team1, [field]: value });
    } else if (team === "team2") {
      setTeam2({ ...team2, [field]: value });
    }
  };

  const handleSubmit = () => {
    if (
      team1.score &&
      team1.shortName &&
      team1.name &&
      team2.score &&
      team2.shortName &&
      team2.name
    ) {
      setSubmittedData({ team1, team2 });
      updateT1(team1);
      updateT2(team2);
      navigate("/map");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <>
      <div className="form-page">
        <div className="form-container">
          <h2>Team 1:</h2>
          <label>
            Score:
            <input
              type="text"
              value={team1.score}
              onChange={(e) =>
                handleInputChange("team1", "score", e.target.value)
              }
            />
          </label>
          <br />
          <label>
            Short Name:
            <input
              type="text"
              value={team1.shortName}
              onChange={(e) =>
                handleInputChange("team1", "shortName", e.target.value)
              }
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              value={team1.name}
              onChange={(e) =>
                handleInputChange("team1", "name", e.target.value)
              }
            />
          </label>
        </div>

        <div className="form-container">
          <h2>Team 2:</h2>
          <label>
            Score:
            <input
              type="text"
              value={team2.score}
              onChange={(e) =>
                handleInputChange("team2", "score", e.target.value)
              }
            />
          </label>
          <br />
          <label>
            Short Name:
            <input
              type="text"
              value={team2.shortName}
              onChange={(e) =>
                handleInputChange("team2", "shortName", e.target.value)
              }
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              value={team2.name}
              onChange={(e) =>
                handleInputChange("team2", "name", e.target.value)
              }
            />
          </label>
        </div>
      </div>
      <div className="bt">
      <button className="button" onClick={handleSubmit}>Submit</button>
        </div>
      {submittedData && (
        <Map team1={submittedData.team1} team2={submittedData.team2} />
      )}
    </>
  );
}

export default Form;
