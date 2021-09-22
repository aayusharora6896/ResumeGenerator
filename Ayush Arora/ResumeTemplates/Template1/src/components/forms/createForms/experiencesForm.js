import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as experiencesActions  from '../../../actions/experiencesActions';

const ExperiencesForm = () => {
  const [experiencesData, setExperiencesData] = useState({ job_position: "", company: "", location: "", start_date: "", end_date: "", primary_work_breif: "", impact1: "", impact2: "" });
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(experiencesActions.postExperiences('60fcc884bbed863d20b02573', experiencesData));
    e.target.reset();
  }
  return (
    <div>
        <p><strong>Experiences</strong></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="experiences-jobPosition" label="Job Position" onChange={(e) => setExperiencesData({ ...experiencesData, job_position: e.target.value })}/>
            <TextField id="experiences-company" label="Company" onChange={(e) => setExperiencesData({ ...experiencesData, company: e.target.value })}/>
            <TextField id="experiences-location" label="Location" onChange={(e) => setExperiencesData({ ...experiencesData, location: e.target.value })}/>
            <TextField id="experiences-startDate" label="Start Date" onChange={(e) => setExperiencesData({ ...experiencesData, start_date: e.target.value })}/>
            <TextField id="experiences-endDate" label="End Date" onChange={(e) => setExperiencesData({ ...experiencesData, end_date: e.target.value })}/>
            <TextField id="experiences-primaryWorkBreif" label="Primary Work Breif" onChange={(e) => setExperiencesData({ ...experiencesData, primary_work_breif: e.target.value })}/>
            <TextField id="experiences-impact1" label="Impact 1" onChange={(e) => setExperiencesData({ ...experiencesData, impact1: e.target.value })}/>
            <TextField id="experiences-impact2" label="Impact 2" onChange={(e) => setExperiencesData({ ...experiencesData, impact2: e.target.value })}/>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    </div>
  );
}

export default  ExperiencesForm;