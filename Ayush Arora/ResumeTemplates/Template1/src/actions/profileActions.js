// api/user/:user_id/profile
 import * as api from '../api';

export const GET_PROFILE = "GET_PROFILE";
export const CREATE_PROFILE = "CREATE_PROFILE";
export const PROFILE_LOADING = "PROFILE_LOADING";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const DELETE = "DELETE";

// Get Profile
export const getProfile = (userID) => async(dispatch) => {
  dispatch(setProfileLoading());
    const { data } = await api.fetchProfile(userID);
    try{
    dispatch({
        type: GET_PROFILE,
        payload: data,
      })
    }
    catch(err){
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    }
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
}
// Post Profile
export const postProfile  = (userID, profileData) => async(dispatch) => {
  try{
    const { data } = await api.createProfile(userID, profileData);
    dispatch({ type: CREATE_PROFILE, payload: data });
  }catch(err){
    console.log(err.message);
  }
}

// Update Profile
export const patchProfile = (userID, elemID, profileData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(userID, elemID, profileData);
    console.log(data);
    dispatch({ type: UPDATE_PROFILE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Element
export const deleteProfile = (userID, elementID) => async (dispatch) => {
  try {
    await api.removeProfile(userID, elementID);
    dispatch({
       type: DELETE,
       payload: elementID 
    });
  } catch (error) {
    console.log(error.message);
  }
};
