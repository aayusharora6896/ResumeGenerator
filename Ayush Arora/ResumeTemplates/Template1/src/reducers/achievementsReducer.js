import { GET_ACHIEVEMENTS, ACHIEVEMENTS_LOADING, CREATE_ACHIEVEMENTS, UPDATE_ACHIEVEMENTS, DELETE } from "../actions/achievementsActions";

const initialState = {
  achievements: [{}],
  loading: true,
};

const achievementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACHIEVEMENTS:
      return {
        ...state,
        achievements: action.payload,
        loading: false,
      };
    case ACHIEVEMENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
     case CREATE_ACHIEVEMENTS:
      return {
        ...state, 
        achievements: [...state.achievements, action.payload]
      };
      case UPDATE_ACHIEVEMENTS:
      return {
        ...state,
        achievements: state.achievements.map((ele) => (ele._id === action.payload._id ? action.payload : ele))
      };
      case DELETE: 
      return {
        ...state,
        achievements: state.achievements.filter((ele) => ele._id !== action.payload)
        }
    default:
      return state;
  }
};

export default achievementsReducer;