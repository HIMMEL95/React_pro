import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button className="btn" onClick={onClickEnter}>
        입장
      </button>
      <button className="btn" onClick={onClickLeave}>
        퇴장
      </button>
      <h1 style={{ color }}>{message}</h1>
      <button
        className="btn"
        style={{ color: "red" }}
        onClick={() => setColor("red")}
      >
        빨간색
      </button>
      <button
        className="btn"
        style={{ color: "green" }}
        onClick={() => setColor("green")}
      >
        초록색
      </button>
      <button
        className="btn"
        style={{ color: "blue" }}
        onClick={() => setColor("blue")}
      >
        파란색
      </button>
    </div>
  );
};

export default Say;
