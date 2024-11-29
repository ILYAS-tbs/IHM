import "./numbers_line.css";

interface NumbersLineProps {
  appear: boolean;
}

function NumbersLine(props: NumbersLineProps) {
  if (props.appear == true) {
    return (
      <div id="circle-container">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>
    );
  }
}

export default NumbersLine;
