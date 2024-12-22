import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

interface settings {
    usericon:React.ElementType; 
}
export const settings = [
    {usertitle :'Profile', usericon:Person2OutlinedIcon  },
    { usertitle :'Setting', usericon: SettingsOutlinedIcon },
    {usertitle : 'Billing', usericon: AttachMoneyOutlinedIcon},
    { usertitle :'Activity', usericon:  PeopleAltOutlinedIcon },
    { usertitle :'Help', usericon:NotificationsOutlinedIcon}
  ];
  