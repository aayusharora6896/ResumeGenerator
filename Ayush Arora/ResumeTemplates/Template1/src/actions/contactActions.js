// api/user/:user_id/contact
 import * as api from '../api';

export const GET_CONTACT = "GET_CONTACT";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const CONTACT_LOADING = "CONTACT_LOADING";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE = "DELETE";


// Get Contact
export const getContact = (userID) => async(dispatch) => {
  dispatch(setContactLoading());
    const { data } = await api.fetchContact(userID);
    try{
    dispatch({
        type: GET_CONTACT,
        payload: data,
      })
    }
    catch(err){
      dispatch({
        type: GET_CONTACT,
        payload: {},
      })
    }
};

// Contact loading
export const setContactLoading = () => {
  return {
    type: CONTACT_LOADING,
  };
}

// Post Achievements
export const postContact  = (userID, contactData) => async(dispatch) => {
  try{
    const { data } = await api.createContact(userID, contactData);
    dispatch({ type: CREATE_CONTACT, payload: data });
  }catch(err){
    console.log(err.message);
  }
}

// Update Achievements
export const patchContact = (userID, elemID, contactData) => async (dispatch) => {
  try {
    const { data } = await api.updateContact(userID, elemID, contactData);
    console.log(data);
    dispatch({ type: UPDATE_CONTACT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Element
export const deleteContact = (userID, elementID) => async (dispatch) => {
  try {
    await api.removeContact(userID, elementID);
    dispatch({
       type: DELETE,
       payload: elementID 
    });
  } catch (error) {
    console.log(error.message);
  }
};