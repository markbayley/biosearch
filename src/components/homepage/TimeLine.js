import React from "react";
import "./Timeline.scss";

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // yValues: [0, 1, 2, 3, 4, 5],
      xValues: [
        { date: "2017", num: 0 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 12 },
        { date: "", num: 14 },
        { date: "", num: 20 },
        { date: "", num: 12 },
        { date: "", num: 2 },
        { date: "", num: 6 },
        { date: "", num: 7 },
        { date: "", num: 8 },
        { date: "", num: 6 },
        { date: "", num: 2 },
        { date: "2018", num: 0 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 1 },
        { date: "", num: 1 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "2019", num: 0 },
        { date: "", num: 2 },
        { date: "", num: 0 },
        { date: "", num: 2 },
        { date: "", num: 1 },
        { date: "", num: 2 },
        { date: "", num: 22 },
        { date: "", num: 12 },
        { date: "", num: 22 },
        { date: "", num: 3 },
        { date: "", num: 4 },
        { date: "", num: 5 },
        { date: "", num: 2 },
        { date: "2020", num: 0 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 3 },
        { date: "", num: 5 },
        { date: "", num: 4 },
        { date: "", num: 2 },
        { date: "", num: 3 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
        { date: "", num: 2 },
      ],
    };
  }

  render() {
    const { xValues } = this.state;
    return (
      <div className="chart">
        <Xaxis xValues={xValues} />
      </div>
    );
  }
}

const Xaxis = (props) => {
  const { xValues } = props;
  return (
    <div className="plot">
      {xValues.map((x) => (
        <div
          className="box-image"
          style={{
            height: `${(x.num * 300) / 100}px`,
          }}
        >
          {/* {x.num} */}
        </div>
      ))}
      {xValues.map((x) => (
        <div className="x-axis">
          <span className="x-label">{x.date}</span>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
