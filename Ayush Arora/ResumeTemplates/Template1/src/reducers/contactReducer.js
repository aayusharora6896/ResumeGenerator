import { GET_CONTACT, CONTACT_LOADING, CREATE_CONTACT, UPDATE_CONTACT, DELETE } from "../actions/contactActions";

const initialState = {
  contact: [{}],
  loading: true,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    case CONTACT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CONTACT:
      return {
        ...state, 
        contact: [...state.contact, action.payload]
      };
      case UPDATE_CONTACT:
      return {
        ...state,
        contact: state.contact.map((ele) => (ele._id === action.payload._id ? action.payload : ele))
      };
      case DELETE: 
      return {
        ...state,
        contact: state.contact.filter((ele) => ele._id !== action.payload)
        }
    default:
      return state;
  }
};

export default contactReducer;