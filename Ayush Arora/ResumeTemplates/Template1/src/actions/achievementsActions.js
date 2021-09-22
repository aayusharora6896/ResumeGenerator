// api/user/:user_id/achievements
 import * as api from '../api';

export const GET_ACHIEVEMENTS = "GET_ACHIEVEMENTS";
export const CREATE_ACHIEVEMENTS = "CREATE_ACHIEVEMENTS";
export const ACHIEVEMENTS_LOADING = "ACHIEVEMENTS_LOADING";
export const UPDATE_ACHIEVEMENTS = "UPDATE_ACHIEVEMENTS";
export const DELETE = "DELETE";

// Get Achievements
export const getAchievements = (userID) => async(dispatch) => {
  dispatch(setAchievementsLoading());
    const { data } = await api.fetchAchievements(userID);
    try{
    dispatch({
        type: GET_ACHIEVEMENTS,
        payload: data,
      })
    }
    catch(err){
      dispatch({
        type: GET_ACHIEVEMENTS,
        payload: {},
      })
    }
};

// Achievements loading
export const setAchievementsLoading = () => {
  return {
    type: ACHIEVEMENTS_LOADING,
  };
}

// Post Achievements
export const postAchievements  = (userID, achievementsData) => async(dispatch) => {
  try{
    const { data } = await api.createAchievements(userID, achievementsData);
    dispatch({ type: CREATE_ACHIEVEMENTS, payload: data });
  }catch(err){
    console.log(err.message);
  }
}

// Update Achievements
export const patchAchievements = (userID, elemID, achievementsData) => async (dispatch) => {
  try {
    const { data } = await api.updateAchievements(userID, elemID, achievementsData);
    console.log(data);
    dispatch({ type: UPDATE_ACHIEVEMENTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Element
export const deleteAchievement = (userID, elementID) => async (dispatch) => {
  try {
    await api.removeAchievement(userID, elementID);
    dispatch({
       type: DELETE,
       payload: elementID 
    });
  } catch (error) {
    console.log(error.message);
  }
};
