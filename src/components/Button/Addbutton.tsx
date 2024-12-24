import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" 
      startIcon={<AddIcon 
        sx={{
          color:"#ffff" , 
          marginRight:"1px" , 
          width:"15px" , 
          height:"15px",
        }}
         />} 
      disableRipple
      sx={{
          backgroundColor: 'rgb(95, 99, 242)', 
          color: '#ffff ',
          borderRadius: '8px',
          borderColor:"transparent",
          textTransform: 'none',
          fontSize: '14px',
          padding: '6px 12px', 
          height: '40px', 
          lineHeight: '1.5',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          '&:hover': {
            backgroundColor:'rgb(67, 71, 217)'
          },
        }}>
        Add New
      </Button>

    </Stack>
  );
}
