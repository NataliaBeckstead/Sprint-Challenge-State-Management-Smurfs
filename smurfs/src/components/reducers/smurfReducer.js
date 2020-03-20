import { FETCH_DATA, UPDATE_SMURF, SET_ERROR, POST_START, POST_SUCCESS, POST_FAILURE } from "../actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  isPostingData: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        error: ""
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    case POST_START:
      return {
        ...state,
        isPostingData: true,
        error: ""
      };
    case POST_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isPostingData: false
        };
    case POST_FAILURE:
      return {
        ...state,
        isPostingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};