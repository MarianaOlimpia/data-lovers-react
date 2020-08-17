import React, { useState } from 'react';
import options from '../../assets/options';
import MainMenu from '../menu/MainMenu';
import logo from '../../assets/imglogo.jpg';
import './NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, TextField, InputAdornment } from '@material-ui/core';

const NavBar = ({characters, setSearchCharacter}) => {
    const [searchCharacterTemp, setSearchCharacterTemp] = useState(characters)
    const onSubmit = (e) => {
        e.preventDefault();
        setSearchCharacter(searchCharacterTemp);
      }

    return ( 
      <AppBar position="fixed" style={{ background: 'black' }}>
        <Toolbar className='nav-bar'>
          <img src= {logo} alt='logo' className="logo" />
          <div className='menu'>
            {options.map((menu, index) => (<MainMenu key={index} title={menu.title} select={menu.options} setSearchCharacter={setSearchCharacter}/>))}
          </div>
            <form className='searchForm' onSubmit={onSubmit}>
                    <TextField label='Buscar por palabras clave' InputProps={{startAdornment: (<InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }} color='primary' placeholder='Buscar' onChange={(e) => {
                        setSearchCharacterTemp(e.target.value);
                        }} value={searchCharacterTemp}/>
            </form>
        </Toolbar>
      </AppBar>
     );
}
 
export default NavBar;
