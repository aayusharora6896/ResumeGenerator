import { GET_EDUCATION, EDUCATION_LOADING, CREATE_EDUCATION, UPDATE_EDUCATION, DELETE } from "../actions/educationActions";

const initialState = {
  education: [{}],
  loading: true,
};

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EDUCATION:
      return {
        ...state,
        education: action.payload,
        loading: false,
      };
    case EDUCATION_LOADING:
      return {
        ...state,
        loading: true,
      };
      case CREATE_EDUCATION:
        return {
          ...state, 
          education: [...state.education, action.payload]
        };
      case UPDATE_EDUCATION:
      return {
        ...state,
        education: state.education.map((ele) => (ele._id === action.payload._id ? action.payload : ele))
      };
        case DELETE: 
      return {
        ...state,
        education: state.education.filter((ele) => ele._id !== action.payload)
        }
    default:
      return state;
  }
};

export default educationReducer;