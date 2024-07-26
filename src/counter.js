import React from 'react';
import { incrementRequest, decrementRequest } from './actions';
import { connect } from 'react-redux';

const Counter = ({count, increment, decrement}) => {
  return (
    <div className='count'>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
const mapStateToProps = (state) =>({
    count: state.counter.count,

});
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementRequest()),
  decrement: () => dispatch(decrementRequest())
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
