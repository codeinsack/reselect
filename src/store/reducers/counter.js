const initialState = {
  counter: 0,
  users: [
    {
      name: 'Alex',
      age: 15,
    },
    {
      name: 'Vasya',
      age: 19,
    },
    {
      name: 'Olya',
      age: 17,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default reducer;
