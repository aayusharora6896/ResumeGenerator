// api/user/:user_id/projects
 import * as api from '../api';

export const GET_PROJECTS = "GET_PROJECTS";
export const CREATE_PROJECTS = "CREATE_PROJECTS";
export const PROJECTS_LOADING = "PROJECTS_LOADING";
export const UPDATE_PROJECTS = "UPDATE_PROJECTS";
export const DELETE = "DELETE";

// Get Projects
export const getProjects = (userID) => async(dispatch) => {
  dispatch(setProjectsLoading());
    const { data } = await api.fetchProjects(userID);
    try{
    dispatch({
        type: GET_PROJECTS,
        payload: data,
      })
    }
    catch(err){
      dispatch({
        type: GET_PROJECTS,
        payload: {},
      })
    }
};

// Projects loading
export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING,
  };
}

// Post Projects
export const postProjects  = (userID, projectsData) => async(dispatch) => {
  try{
    const { data } = await api.createProjects(userID, projectsData);
    dispatch({ type: CREATE_PROJECTS, payload: data });
  }catch(err){
    console.log(err.message);
  }
}

// Update Projects
export const patchProjects = (userID, elemID, projectsData) => async (dispatch) => {
  try {
    const { data } = await api.updateProjects(userID, elemID, projectsData);
    console.log(data);
    dispatch({ type: UPDATE_PROJECTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Element
export const deleteProject = (userID, elementID) => async (dispatch) => {
  try {
    await api.removeProject(userID, elementID);
    dispatch({
       type: DELETE,
       payload: elementID 
    });
  } catch (error) {
    console.log(error.message);
  }
};