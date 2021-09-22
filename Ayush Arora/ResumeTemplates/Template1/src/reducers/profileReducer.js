import { GET_PROFILE, PROFILE_LOADING, CREATE_PROFILE, UPDATE_PROFILE, DELETE } from "../actions/profileActions";


const initialState = {
  profile: [{}],
  loading: true,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
      case CREATE_PROFILE:
        return {
          ...state, 
          profile: [...state.profile, action.payload]
        };
      case UPDATE_PROFILE:
      return {
        ...state,
        profile: state.profile.map((ele) => (ele._id === action.payload._id ? action.payload : ele))
      };
      case DELETE: 
      return {
        ...state,
        profile: state.profile.filter((ele) => ele._id !== action.payload)
      }
        default:
      return state;
  }
};

export default profileReducer;