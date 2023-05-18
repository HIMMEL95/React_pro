import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { connect } from 'react-redux';

const TodosContainer = ({changeInput, insert, toggle, remove}) => {
    return (
        <Todos todo={changeInput} onSubmit={changeInput} />
    );
};

export default connect(
    (state) => ({
        input: state.todos.input,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    }
)

// export default TodosContainer;