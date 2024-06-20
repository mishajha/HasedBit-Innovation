import React, { useEffect, useState } from 'react';

function IplTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h1>IPL 2022 Points Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.Team}</td>
              <td>{team.MatchesPlayed}</td>
              <td>{team.Wins}</td>
              <td>{team.Losses}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IplTable;
