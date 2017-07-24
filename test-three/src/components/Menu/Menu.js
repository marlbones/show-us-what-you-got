import React from 'react';
import MenuData from '../../data/menu-data.json';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';

const Menu = () => {
    return (
      <div className="menu">
        <h2>Menu</h2>
        {MenuData.children.map((child, i) => //maps through data to create a MenuItem component to correspond with children in data file
          <MenuItem key={i} data={child} />
        )}
      </div>
    );

}

export default Menu;
