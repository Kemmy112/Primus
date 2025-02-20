import React, { useState, useEffect, useReducer } from 'react';

const initialState = { count: 0 };  //State initialization for all the states that will be used.

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error(); //this is the default and it basically shows an error.
  }
}

//So this function above uses the useReducer hook. This hook implements a sort of switch statement. It is actually preferred over useState when it comes to determining which hook manages more complex state logic.
//action and type are the parameters for the switch statement, so typically revolves around the two cases 'increment' and 'decrement' and returns either an increase or decrease.

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);  //This line uses array destructuring to assign the values returned by the useReducer to 'state' and 'dispatch' to
  const [name, setName] = useState(''); //similarly assigns the values returned by the useState to 'name' and 'setName'

  //'reducer' is the fxn we defined outside and 'initialState' is the state that store thevalue for when the component firts renders

  useEffect(() => {
    console.log(`Count has changed to: ${state.count}`);
  }, [state.count]);
// the useEffect hook is just for side effects that won't be done during rendering. I view the changes made in my console.
  //So each time the function is re-rendered, the useEEfect will display the new value for state.count.

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button> 
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      {/* When you call 'dispatch', you are telling React to update the state based on the action you provide. */}
       {/* the objects in the dispatch fxn tells what action exactly is to be done */}

      <input
        type="text" //specifies the data type
        value={name} // this line combines or lemme say merges the value property to the variable 'name' we earlier defined
        onChange={(e) => setName(e.target.value)} //This is an arrow function that takes e as an argument andlistens for any events. When an input is entered, the fxn is triggered and it basically implements the setName fxn from the useState that will update the new name variable
        placeholder="Enter your name"
      />
    </div>
  );
}

export default Counter;