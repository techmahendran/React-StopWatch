const Buttons = ({
  startTimeBtn,
  pasuseTimeBtn,
  resetTimeBtn,
  resumeBtn,
  status,
}) => {
  return (
    <>
      <div className="btns">
        {status === 0 && (
          <button className="start" onClick={startTimeBtn}>
            Start
          </button>
        )}

        {status === 1 && (
          <>
            <button className="pause" onClick={pasuseTimeBtn}>
              Pause
            </button>
            <button className="reset" onClick={resetTimeBtn}>
              Reset
            </button>
          </>
        )}
        {status === 2 && (
          <>
            <button className="pause" onClick={resumeBtn}>
              Resume
            </button>
            <button className="reset" onClick={resetTimeBtn}>
              Reset
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Buttons;
