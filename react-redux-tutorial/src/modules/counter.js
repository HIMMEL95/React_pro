const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export를 사용함으로써 해당 함수를 다른 파일에서 불러와 사용 가능
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default counter;

// 해당 js 사용하는 방법
// import counter from "./counter";
// import {increase, decrease} from './counter';
// 한꺼번에 불러오고 싶을 때
// import counter, {increase, decrease} from './counter';
