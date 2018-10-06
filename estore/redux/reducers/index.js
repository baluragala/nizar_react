function counterReducer(prevState = { counter: 0 }, action) {
  switch (action.type) {
    case INC:
      return { counter: prevState.counter + action.by };
    case DEC:
      return { counter: prevState.counter - action.by };
    default:
      return prevState;
  }
}
