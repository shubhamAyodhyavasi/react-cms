import { 
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
} from "../actions/types";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;

    case UNSET_CURRENT_USER:
      return initialState;

    default:
      return state;
    // break;
  }
};
