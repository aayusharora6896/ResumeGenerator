import { GET_PUBLICATIONS, PUBLICATIONS_LOADING, CREATE_PUBLICATIONS, UPDATE_PUBLICATIONS, DELETE } from "../actions/publicationsActions";

const initialState = {
  publications: [{}],
  loading: true,
};

const publicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        loading: false,
      };
    case PUBLICATIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
     case CREATE_PUBLICATIONS:
      return {
        ...state, 
        publications: [...state.publications, action.payload]
      };
      case UPDATE_PUBLICATIONS:
      return {
        ...state,
        publications: state.publications.map((ele) => (ele._id === action.payload._id ? action.payload : ele))
      };
      case DELETE: 
      return {
        ...state,
        publications: state.publications.filter((ele) => ele._id !== action.payload)
        }
    default:
      return state;
  }
};

export default publicationsReducer;