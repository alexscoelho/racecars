import { useState } from "react";
import { Header } from "./components/Header";
import { Scoreboard } from "./components/Scoreboard";

function App() {
  const [showScoreboard, setShowScoreboard] = useState(false);

  const hideScoreboard = () => {
    setShowScoreboard(false);
  };

  return (
    <>
      <Header />
      {!showScoreboard && (
        <button onClick={() => setShowScoreboard(true)}>Show scoreboard</button>
      )}
      {showScoreboard && <Scoreboard hideScoreboard={hideScoreboard} />}
    </>
  );
}

export default App;
