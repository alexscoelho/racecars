import { useEffect, useState } from "react";
import { Driver } from "./Driver";

interface Props {
  hideScoreboard: () => {};
}

const drivers = ["John Petrucci", "Steve Vai", "Joe Satriani"];

export const Scoreboard = ({ hideScoreboard }: Props) => {
  const [raceStarted, setRaceStarted] = useState(false);

  useEffect(() => {
    console.log("Scoreboard.tsx has mounted");

    return () => {
      console.log("Scoreboard.tsx has un-mounted");
    };
  }, []);

  return (
    <div>
      <h1>Scoreboard</h1>
      <button onClick={() => setRaceStarted(!raceStarted)}>
        {raceStarted ? "Stop" : "Go"}
      </button>
      {drivers.map((driver) => (
        <Driver key={driver} driver={driver} raceStarted={raceStarted} />
      ))}

      <button onClick={hideScoreboard}>Hide scoreboard</button>
    </div>
  );
};
