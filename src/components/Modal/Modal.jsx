import React, { useState } from 'react';
import './Modal.css';
import {Button, Dialog, ListItemText, List, Divider, AppBar, Toolbar, IconButton, Typography, Slide} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({character}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>See more...</Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className='modal-title'>{character.name}</Typography>
          </Toolbar>
        </AppBar>
        <div className='modal-content'>
            <div>
                <img src={character.images.lg} alt='character' className='modal-character-image'></img>
            </div>
            <List className='list'>
                <ListItemText className='list-item' primary={character.biography.publisher} secondary="Published by" />
                <ListItemText className='list-item' primary={character.biography.fullName} secondary="Full Name" />
                <ListItemText className='list-item' primary={character.work.occupation} secondary="Occupation" />
                <ListItemText className='list-item' primary={character.biography.firstAppearance} secondary="First apparition" />
                <ListItemText className='list-item' primary={character.connections.groupAffiliation} secondary="Affiliations" />
                <Divider />
            </List>
        </div>
      </Dialog>
    </div>
  );
}

export default Modal;
