import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as educationActions  from '../../../actions/educationActions';

const EducationForm = () => {
  const [educationData, setEducationData] = useState({  degree_name: "", domain_name: "", school_name: "", university_name: "", university_city: "", university_state: "", university_country: "", year_begin: "", month_begin: "", year_end: "", month_end: "", GPA: "",});
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(educationActions.postEducation('60fcc884bbed863d20b02573', educationData));
    e.target.reset();
  }
  return (
    <div>
        <p><strong>Education</strong></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="education-degreeName" label="Degree Name" onChange={(e) => setEducationData({ ...educationData, degree_name: e.target.value })}/>
            <TextField id="education-domainName" label="Domain Name" onChange={(e) => setEducationData({ ...educationData, domain_name: e.target.value })}/>
            <TextField id="education-schoolName" label="School Name" onChange={(e) => setEducationData({ ...educationData, school_name: e.target.value })}/>
            <TextField id="education-universityName" label="University Name" onChange={(e) => setEducationData({ ...educationData, university_name: e.target.value })}/>
            <TextField id="education-universityCity" label="University City" onChange={(e) => setEducationData({ ...educationData, university_city: e.target.value })}/>
            <TextField id="education-universityState" label="University State" onChange={(e) => setEducationData({ ...educationData, university_state: e.target.value })}/>
            <TextField id="education-universityCountry" label="University Country" onChange={(e) => setEducationData({ ...educationData, university_country: e.target.value })}/>
            <TextField id="education-yearBegin" label="Year Begin" onChange={(e) => setEducationData({ ...educationData, year_begin: e.target.value })}/>
            <TextField id="education-monthBegin" label="Month Begin" onChange={(e) => setEducationData({ ...educationData, month_begin: e.target.value })}/>
            <TextField id="education-yearEnd" label="Year End" onChange={(e) => setEducationData({ ...educationData, year_end: e.target.value })}/>
            <TextField id="education-monthEnd" label="Month End" onChange={(e) => setEducationData({ ...educationData, month_end: e.target.value })}/>
            <TextField id="education-Gpa" label="GPA" onChange={(e) => setEducationData({ ...educationData, GPA: e.target.value })}/>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    </div>
  );
}

export default  EducationForm;