import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as skillsActions  from '../../../actions/skillsActions';
import { useParams } from "react-router-dom";


const SkillsForm = () => {
  const [skillsData, setSkillsData] = useState({ title: '', desctiption: ''});
  const dispatch = useDispatch();
  let { elementId } = useParams();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(skillsActions.patchSkills('60fcc884bbed863d20b02573', elementId, skillsData));
    e.target.reset();
  }
  return (
    <div>
        <p><strong>Skills</strong></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="skills-skillsTitle" label="Skills Title" onChange={(e) => setSkillsData({ ...skillsData, skills_title: e.target.value })}/>
            <TextField id="skills-skillsSet" label="Skills Set" onChange={(e) => setSkillsData({ ...skillsData, skillSet: e.target.value })}/>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    </div>
  );
}

export default SkillsForm;