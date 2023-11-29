const TimeContent = ({ onSetTime }) => {
  return (
    <>
      <div className="time">
        <span className="hour">
          {onSetTime.h >= 10 ? onSetTime.h : "0" + onSetTime.h}
        </span>
        <span>:</span>
        <span className="minute">
          {onSetTime.m >= 10 ? onSetTime.m : "0" + onSetTime.m}
        </span>
        <span>:</span>
        <span className="second">
          {onSetTime.s >= 10 ? onSetTime.s : "0" + onSetTime.s}
        </span>
        <span>:</span>
        <span className="millsecond">
          {onSetTime.ms >= 10 ? onSetTime.ms : "0" + onSetTime.ms}
        </span>
      </div>
    </>
  );
};

export default TimeContent;
