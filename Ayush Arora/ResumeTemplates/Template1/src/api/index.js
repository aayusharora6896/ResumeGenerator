import axios from 'axios';

// const url = 'http://localhost:5000/api/user/60fcc884bbed863d20b02573/visibility';

export const fetchAchievements = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/achievements`);    
export const fetchContact = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/contact`);    
export const fetchEducation = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/education`);    
export const fetchExperiences = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/experiences`);    
export const fetchProfile = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/profile`);    
export const fetchProjects = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/projects`);    
export const fetchPublications = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/publications`);    
export const fetchSkills = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/skills`);    

export const createAchievements = (userID, achievementsData) => axios.post(`http://localhost:5000/api/user/${userID}/achievement`, achievementsData);    
export const createContact = (userID, contactData) => axios.post(`http://localhost:5000/api/user/${userID}/contact`, contactData);    
export const createEducation = (userID, educationData) => axios.post(`http://localhost:5000/api/user/${userID}/education`, educationData);    
export const createExperiences = (userID, experiencesData) => axios.post(`http://localhost:5000/api/user/${userID}/experience`, experiencesData);    
export const createProfile = (userID, profileData) => axios.post(`http://localhost:5000/api/user/${userID}/profile`, profileData);    
export const createProjects = (userID, projectsData) => axios.post(`http://localhost:5000/api/user/${userID}/project`, projectsData);    
export const createPublications = (userID, publicationsData) => axios.post(`http://localhost:5000/api/user/${userID}/publications`, publicationsData);  
export const createSkills = (userID, skillsData) => axios.post(`http://localhost:5000/api/user/${userID}/skills`, skillsData);  
  
export const removeAchievement = (userID, elementID) => axios.delete(`http://localhost:5000/api/user/${userID}/achievement/${elementID}`);
export const removeContact = (userID, elementID) => axios.delete(`http://localhost:5000/api/user/${userID}/contact/${elementID}`);
export const removeEducation = (userID, elementID) => axios.delete(`http://localhost:5000/api/user/${userID}/education/${elementID}`);
export const removeExperience = (userID, elementID) => axios.delete(`http://localhost:5000/api/user/${userID}/experience/${elementID}`);
export const removeProfile = (userID, elementID) => axios.delete(`http://localhost:5000/api/user/${userID}/profile/${elementID}`);
export const removeProject = (userID, elementID) => axios.delete(`http://localhost:5000/api/user/${userID}/project/${elementID}`);
export const removePublications = (userID, elementID) => axios.delete(`http://localhost:5000/api/user/${userID}/publication/${elementID}`);
export const removeSkill = (userID, elementID) => axios.delete(`http://localhost:5000/api/user/${userID}/skill/${elementID}`);


export const updateAchievements = (userID, achievementsID, achievementsData) => axios.patch(`http://localhost:5000/api/user/${userID}/achievements/${achievementsID}`, achievementsData);
export const updateContact = (userID, contactID, contactData) => axios.patch(`http://localhost:5000/api/user/${userID}/contact/${contactID}`, contactData);
export const updateEducation = (userID, educationID, educationData) => axios.patch(`http://localhost:5000/api/user/${userID}/education/${educationID}`, educationData);
export const updateExperience = (userID, experiencesID, experiencesData) => axios.patch(`http://localhost:5000/api/user/${userID}/experiences/${experiencesID}`, experiencesData);
export const updateProfile = (userID, profileID, profileData) => axios.patch(`http://localhost:5000/api/user/${userID}/profile/${profileID}`, profileData);
export const updateProjects = (userID, projectsID, projectsData) => axios.patch(`http://localhost:5000/api/user/${userID}/projects/${projectsID}`, projectsData);
export const updatePublications = (userID, publicationsID, publicationsData) => axios.patch(`http://localhost:5000/api/user/${userID}/publications/${publicationsID}`, publicationsData);
export const updateSkills = (userID, skillsID, skillsData) => axios.patch(`http://localhost:5000/api/user/${userID}/skills/${skillsID}`, skillsData);