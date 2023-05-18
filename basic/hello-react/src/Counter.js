import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      fixedNumber: 10,
    };
  }

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 숫자 : {fixedNumber}</h1>
        <button
          className="btn"
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("숫자 1 더하기.");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
        <button
          className="btn"
          onClick={() => {
            this.setState({ number: number - 1 }, () => {
              console.log("숫자 1 빼기");
              console.log(this.state);
            });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
