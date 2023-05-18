import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import { Component } from "react";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// const App = () => {
//   // return (
//   //   <MyComponent name="React" favoriteNumber={7}>
//   //     리액트
//   //   </MyComponent>
//   // );
//   // return <Counter />;
//   // return <Say />;
//   // return <EventPractice />;
//   // return <ValidationSample />;
//   return <IterationSample />;
// };

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  // render() {
  //   return (
  //     <div>
  //       <ScrollBox ref={(ref) => (this.scrollbox = ref)} />
  //       <button onClick={() => this.scrollbox.scrollToBottom()}>
  //         맨 밑으로
  //       </button>
  //       <button onClick={() => this.scrollbox.scrollToTop()}>맨 위로</button>
  //     </div>
  //   );
  // }

  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
