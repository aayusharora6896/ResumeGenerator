// api/user/:user_id/skills
 import * as api from '../api';

export const GET_SKILLS = "GET_SKILLS";
export const CREATE_SKILLS = "CREATE_SKILLS";
export const SKILLS_LOADING = "SKILLS_LOADING";
export const UPDATE_SKILLS = "UPDATE_SKILLS";
export const DELETE = "DELETE";

// Get skills
export const getSkills = (userID) => async(dispatch) => {
  dispatch(setSkillsLoading());
    const { data } = await api.fetchSkills(userID);
    try{
    dispatch({
        type: GET_SKILLS,
        payload: data,
      })
    }
    catch(err){
      dispatch({
        type: GET_SKILLS,
        payload: {},
      })
    }
};

// skills loading
export const setSkillsLoading = () => {
  return {
    type: SKILLS_LOADING,
  };
}

// Post Skills
export const postSkills  = (userID, skillsData) => async(dispatch) => {
  try{
    const { data } = await api.createSkills(userID, skillsData);
    dispatch({ type: CREATE_SKILLS, payload: data });
  }catch(err){
    console.log(err.message);
  }
}

// Update Skills
export const patchSkills = (userID, elemID, skillsData) => async (dispatch) => {
  try {
    const { data } = await api.updateSkills(userID, elemID, skillsData);
    console.log(data);
    dispatch({ type: UPDATE_SKILLS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Element
export const deleteSkill = (userID, elementID) => async (dispatch) => {
  try {
    await api.removeSkill(userID, elementID);
    dispatch({
       type: DELETE,
       payload: elementID 
    });
  } catch (error) {
    console.log(error.message);
  }
};