import React, { Component } from 'react'

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const subscribe = listener => {
    listeners.push(listener);
  };

  const getState = () => state;

  const dispatch = action => {
    // reducer takes object in action and do what it tells
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  return {
    subscribe,
    getState,
    dispatch
  };

}

// Need to use singleton to fetch space X api data if not fetched yet
// To fetched data need to be added a boolean variable to know if we can 
// delete already existing launch 
// end of fetching space X data


function addMissionReducer = (state, action) {
  if (action.type === "ADD_MISSION") {
    return {
      // later will be added boolean to know if data of existing
      // launch can be deleted
      missions: state.missions.concat(action.mission);
    }
  } else if (action.type === "DELETE_MISSION") {
    return {
      missions: [...state.missions.slice(0, action.mission_id),
        ...state.missions.slice(action.mission_id + 1, state.missions.length)
      ]
    } 
  } 
  # @EDIT_MISSION_DATA will be added later due to complexity
  // else if (action.type === "EDIT_MISSION_DATA") {
  //   return {

  //   }
  // }
}

class MessageContainer extends Component {
  
  render() {
    return (

    )
  }
}




export default class App extends Component {
  render() {
    return (
      <div>
          <h1>Hella fellows</h1>
      </div>
    )
  }
}