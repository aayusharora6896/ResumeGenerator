// api/user/:user_id/education
 import * as api from '../api';

export const GET_EDUCATION = "GET_EDUCATION";
export const CREATE_EDUCATION = "CREATE_EDUCATION";
export const EDUCATION_LOADING = "EDUCATION_LOADING";
export const UPDATE_EDUCATION = "UPDATE_EDUCATION";
export const DELETE = "DELETE";

// Get Education
export const getEducation = (userID) => async(dispatch) => {
  dispatch(setEducationLoading());
    const { data } = await api.fetchEducation(userID);
    try{
    dispatch({
        type: GET_EDUCATION,
        payload: data,
      })
    }
    catch(err){
      dispatch({
        type: GET_EDUCATION,
        payload: {},
      })
    }
};

// Education loading
export const setEducationLoading = () => {
  return {
    type: EDUCATION_LOADING,
  };
}

// Post Education
export const postEducation  = (userID, educationData) => async(dispatch) => {
  try{
    const { data } = await api.createEducation(userID, educationData);
    dispatch({ type: CREATE_EDUCATION, payload: data });
  }catch(err){
    console.log(err.message);
  }
}

// Update Education
export const patchEducation = (userID, elemID, educationData) => async (dispatch) => {
  try {
    const { data } = await api.updateEducation(userID, elemID, educationData);
    console.log(data);
    dispatch({ type: UPDATE_EDUCATION, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Element
export const deleteEducation = (userID, elementID) => async (dispatch) => {
  try {
    await api.removeEducation(userID, elementID);
    dispatch({
       type: DELETE,
       payload: elementID 
    });
  } catch (error) {
    console.log(error.message);
  }
};