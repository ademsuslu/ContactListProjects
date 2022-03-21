import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Form from './Form';

const style = {
  display:"flex",
  justifyContent: "center",
  alignİtems: "center",
  textAlign: "center",
  width:"100%",
  backgroundColor:"#fbfbfb",
  boxShadow: 24,
};
const CreateContact=({rows})=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Create Contact</Button>
      <Modal
      sx={{backgroundColor:"red"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {/*Create Contact form  */}
            <Form rows={rows} handleClose={handleClose} />
     
        </Box>
      </Modal>
    </div>
  );
}

export default CreateContact;