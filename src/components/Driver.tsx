import { useCallback, useEffect, useState } from "react";

interface Props {
  driver: string;
  raceStarted: boolean;
}

export const Driver = ({ driver, raceStarted }: Props) => {
  const [seconds, setSeconds] = useState(0);

  const formatTime = useCallback((seconds: number): string => {
    let s = 0;
    let m = 0;
    if (seconds > 60) {
      m = Math.floor(seconds / 60);
      s = seconds % 60;
    } else {
      s = seconds;
    }
    return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
  }, []);

  const incrementSeconds = () => {
    setSeconds((prev) => prev + 1);
  };

  useEffect(() => {
    if (raceStarted) {
      console.log("raceStarted has updated");
      const interval = setInterval(incrementSeconds, 1000);

      return () => {
        console.log("Clean up from interval useEffect");
        clearInterval(interval);
      };
    }
  }, [raceStarted]);

  return (
    <ul>
      <li>
        <h2>{driver}</h2>
        <p>{formatTime(seconds)}</p>
      </li>
    </ul>
  );
};
