import { GET_SKILLS, SKILLS_LOADING, CREATE_SKILLS, UPDATE_SKILLS, DELETE } from "../actions/skillsActions";

const initialState = {
  skills: [{}],
  loading: true,
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case SKILLS_LOADING:
      return {
        ...state,
        loading: true,
      };
      case CREATE_SKILLS:
      return {
        ...state, 
        skills: [...state.skills, action.payload]
      };
      case UPDATE_SKILLS:
      return {
        ...state,
        skills: state.skills.map((ele) => (ele._id === action.payload._id ? action.payload : ele))
      };
      case DELETE: 
      return {
        ...state,
        skills: state.skills.filter((ele) => ele._id !== action.payload)
        }
    default:
      return state;
  }
};

export default skillsReducer;