// api/user/:user_id/experiences
 import * as api from '../api';

export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const CREATE_EXPERIENCES = "CREATE_EXPERIENCES";
export const EXPERIENCES_LOADING = "EXPERIENCES_LOADING";
export const UPDATE_EXPERIENCES = "UPDATE_EXPERIENCES";
export const DELETE = "DELETE";

// Get Experiences
export const getExperiences = (userID) => async(dispatch) => {
  dispatch(setExperiencesLoading());
    const { data } = await api.fetchExperiences(userID);
    try{
    dispatch({
        type: GET_EXPERIENCES,
        payload: data,
      })
    }
    catch(err){
      dispatch({
        type: GET_EXPERIENCES,
        payload: {},
      })
    }
};

// Experiences loading
export const setExperiencesLoading = () => {
  return {
    type: EXPERIENCES_LOADING,
  };
}

// Post Experiences
export const postExperiences  = (userID, experiencesData) => async(dispatch) => {
  try{
    const { data } = await api.createExperiences(userID, experiencesData);
    dispatch({ type: CREATE_EXPERIENCES, payload: data });
  }catch(err){
    console.log(err.message);
  }
}

// Update Experiences
export const patchExperiences = (userID, elemID, experiencesData) => async (dispatch) => {
  try {
    const { data } = await api.updateExperience(userID, elemID, experiencesData);
    console.log(data);
    dispatch({ type: UPDATE_EXPERIENCES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Element
export const deleteExperience = (userID, elementID) => async (dispatch) => {
  try {
    await api.removeExperience(userID, elementID);
    dispatch({
       type: DELETE,
       payload: elementID 
    });
  } catch (error) {
    console.log(error.message);
  }
};