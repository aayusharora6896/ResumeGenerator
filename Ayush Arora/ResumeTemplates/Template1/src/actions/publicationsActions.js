// api/user/:user_id/achievements
 import * as api from '../api';

export const GET_PUBLICATIONS = "GET_PUBLICATIONS";
export const CREATE_PUBLICATIONS = "CREATE_PUBLICATIONS";
export const PUBLICATIONS_LOADING = "PUBLICATIONS_LOADING";
export const UPDATE_PUBLICATIONS = "UPDATE_PUBLICATIONS";
export const DELETE = "DELETE";

// Get Publications
export const getPublications = (userID) => async(dispatch) => {
  dispatch(setPublicationsLoading());
    const { data } = await api.fetchPublications(userID);
    try{
    dispatch({
        type: GET_PUBLICATIONS,
        payload: data,
      })
    }
    catch(err){
      dispatch({
        type: GET_PUBLICATIONS,
        payload: {},
      })
    }
};

// Publications loading
export const setPublicationsLoading = () => {
  return {
    type: PUBLICATIONS_LOADING,
  };
}

// Post Publications
export const postPublications  = (userID, publicationsData) => async(dispatch) => {
  try{
    const { data } = await api.createPublications(userID, publicationsData);
    dispatch({ type: CREATE_PUBLICATIONS, payload: data });
  }catch(err){
    console.log(err.message);
  }
}

// Update Publications
export const patchPublications = (userID, elemID, publicationsData) => async (dispatch) => {
  try {
    const { data } = await api.updatePublications(userID, elemID, publicationsData);
    console.log(data);
    dispatch({ type: UPDATE_PUBLICATIONS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Element
export const deletePublication = (userID, elementID) => async (dispatch) => {
  try {
    await api.removePublications(userID, elementID);
    dispatch({
       type: DELETE,
       payload: elementID 
    });
  } catch (error) {
    console.log(error.message);
  }
};
