 import { GET_EXPERIENCES, EXPERIENCES_LOADING, CREATE_EXPERIENCES, UPDATE_EXPERIENCES, DELETE } from "../actions/experiencesActions";

const initialState = {
  experiences: [{}],
  loading: true,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
        loading: false,
      };
    case EXPERIENCES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_EXPERIENCES:
      return {
        ...state, 
        experiences: [...state.experiences, action.payload]
      };
      case UPDATE_EXPERIENCES:
      return {
        ...state,
        experiences: state.experiences.map((ele) => (ele._id === action.payload._id ? action.payload : ele))
      };
      case DELETE: 
      return {
        ...state,
        experiences: state.experiences.filter((ele) => ele._id !== action.payload)
        }
    default:
      return state;
  }
};

export default experiencesReducer;