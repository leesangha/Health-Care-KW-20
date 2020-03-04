import React from 'react'
import './AddButton.css'


function AddButton() {
  return (
    <div className="add-button">
      <a href="#" className="float" id="menu-share">
        <i className="fa fa-share my-float"/>
      </a>
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-camera my-float"/>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-utensils my-float"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AddButton;