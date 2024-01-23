import React from 'react';
import './Header.css'; // Import your CSS file

export default function Header({ team1, team2 }) {
  return (
    <div className="header-container">
      <div className="team-name">{team1.name}</div>
      <div className="scores-container">
        <div className="team-score">{team1.score}</div>
        <div className="vs">VS</div>
        <div className="team-score">{team2.score}</div>
      </div>
      <div className="team-name">{team2.name}</div>
    </div>
  );
};


