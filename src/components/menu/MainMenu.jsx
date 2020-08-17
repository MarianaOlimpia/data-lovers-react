import React, { useState } from 'react';
import './MainMenu.css';
import {Button, Menu, MenuItem} from '@material-ui/core/';

const MainMenu = ({title, select, setSearchCharacter}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const selectedMenuOption = (selected) => setSearchCharacter(selected);
    const handleClose = () => setAnchorEl(null);

    return ( 
        <div className='menu-button'>
            <Button variant='contained' color='primary' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {title}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {select.map((option, index) => <MenuItem key={index} onClick={() => selectedMenuOption(option.value)}>{option.name}</MenuItem>)}
            </Menu>
        </div>
     );
}
 
export default MainMenu;