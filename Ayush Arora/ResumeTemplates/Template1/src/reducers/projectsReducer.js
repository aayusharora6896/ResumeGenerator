import { GET_PROJECTS, PROJECTS_LOADING, CREATE_PROJECTS, UPDATE_PROJECTS, DELETE } from "../actions/projectsActions";

const initialState = {
  projects: [{}],
  loading: true,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true,
      };
      case CREATE_PROJECTS:
      return {
        ...state, 
        projects: [...state.projects, action.payload]
      };
      case UPDATE_PROJECTS:
      return {
        ...state,
        projects: state.projects.map((ele) => (ele._id === action.payload._id ? action.payload : ele))
      };
      case DELETE: 
      return {
        ...state,
        projects: state.projects.filter((ele) => ele._id !== action.payload)
        }
    default:
      return state;
  }
};

export default projectsReducer;