import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as achievementsActions  from '../../../actions/achievementsActions';


const AchievementsForm = () => {
  const [achievementsData, setAchievementsData] = useState({ title: '', desctiption: ''});
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(achievementsActions.postAchievements('60fcc884bbed863d20b02573', achievementsData));
    e.target.reset();
  }
  return (
    <div>
        <p><strong>Achievements</strong></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="achievements-title" label="Title" onChange={(e) => setAchievementsData({ ...achievementsData, title: e.target.value })}/>
            <TextField id="achievements-description" label="Description" onChange={(e) => setAchievementsData({ ...achievementsData, description: e.target.value })}/>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    </div>
  );
}

export default  AchievementsForm;