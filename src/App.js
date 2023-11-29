import Buttons from "./components/Buttons";
import Header from "./components/Header";
import TimeContent from "./components/TimeContent";

import { useState } from "react";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interVal, setInterVal] = useState();
  const [status, setStatus] = useState(0);

  let upDateMs = time.ms,
    upDateS = time.s,
    upDateM = time.m,
    upDateH = time.h;

  const run = () => {
    if (upDateMs === 100) {
      upDateS++;
      upDateMs = 0;
    }
    if (upDateS === 60) {
      upDateM++;
      upDateS = 0;
    }
    if (upDateM === 60) {
      upDateH++;
      upDateM = 0;
    }
    upDateMs++;
    return setTime({ ms: upDateMs, s: upDateS, m: upDateM, h: upDateH });
  };

  const startTimeBtn = () => {
    setInterVal(setInterval(() => run(), 10));
    setStatus(1);
  };

  const pasuseTimeBtn = () => {
    clearInterval(interVal);
    setInterVal(0);
    setStatus(2);
  };

  const resetTimeBtn = () => {
    clearInterval(interVal);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setStatus(0);
  };

  const resumeBtn = () => {
    startTimeBtn();
  };

  return (
    <>
      <div className="container">
        <h1>StopWatch</h1>
        <TimeContent onSetTime={time} />

        <Buttons
          startTimeBtn={startTimeBtn}
          pasuseTimeBtn={pasuseTimeBtn}
          resetTimeBtn={resetTimeBtn}
          resumeBtn={resumeBtn}
          status={status}
        />

        <Header />
      </div>
    </>
  );
}

export default App;
