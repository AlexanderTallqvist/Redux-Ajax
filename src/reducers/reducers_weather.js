import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Remember that we NEVER want to minipulate our APP state,
      // so dont use array.push!
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}
