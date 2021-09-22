import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as projectsActions  from '../../../actions/projectsActions';


const ProjectsForm = () => {
  const [projectsData, setProjectsData] = useState({ title: '', desctiption: ''});
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(projectsActions.postProjects('60fcc884bbed863d20b02573', projectsData));
    e.target.reset();
  }
  return (
    <div>
        <p><strong>Project</strong></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="project-projectTitle" label="Project Title" onChange={(e) => setProjectsData({ ...projectsData, project_title: e.target.value })}/>
            <TextField id="project-skillsUsed" label="Skills Used" onChange={(e) => setProjectsData({ ...projectsData, skills_used: e.target.value })}/>
            <TextField id="project-description1" label="Description 1" onChange={(e) => setProjectsData({ ...projectsData, description1: e.target.value })}/>
            <TextField id="project-description2" label="Description 2" onChange={(e) => setProjectsData({ ...projectsData, description2: e.target.value })}/>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    </div>
  );
}

export default  ProjectsForm;