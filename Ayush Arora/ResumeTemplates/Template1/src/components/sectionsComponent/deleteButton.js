import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import * as achievementsActions  from '../../actions/achievementsActions';
import * as contactActions  from '../../actions/contactActions';
import * as educationActions  from '../../actions/educationActions';
import * as experiencesActions  from '../../actions/experiencesActions';
import * as profileActions  from '../../actions/profileActions';
import * as projectsActions  from '../../actions/projectsActions';
import * as skillsActions  from '../../actions/skillsActions';
import * as publicationsActions  from '../../actions/publicationsActions';

const DeleteButton = ({elementId, page}) => {
  const dispatch = useDispatch();

    const handleDelete = async (e) => {
        if(page === "Achievements"){
            dispatch(achievementsActions.deleteAchievement('60fcc884bbed863d20b02573', elementId));
        }
        if(page === "Contact"){
            dispatch(contactActions.deleteContact('60fcc884bbed863d20b02573', elementId));
        }
        if(page === "Education"){
            dispatch(educationActions.deleteEducation('60fcc884bbed863d20b02573', elementId));
        }
        if(page === "Experiences"){
            dispatch(experiencesActions.deleteExperience('60fcc884bbed863d20b02573', elementId));
        }
        if(page === "Profile"){
            dispatch(profileActions.deleteProfile('60fcc884bbed863d20b02573', elementId));
        }
        if(page === "Projects"){
            dispatch(projectsActions.deleteProject('60fcc884bbed863d20b02573', elementId));
        }
        if(page === "Skills"){
            dispatch(skillsActions.deleteSkill('60fcc884bbed863d20b02573', elementId));
        }
        if(page === "Publications"){
            dispatch(publicationsActions.deletePublication('60fcc884bbed863d20b02573', elementId));
        }
    }
    return(
    <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick = {handleDelete}
    >
    Delete
    </Button>
    )
}

export default DeleteButton;