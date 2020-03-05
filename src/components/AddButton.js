import React from 'react'
import './AddButton.scss'

// href 추가되야함.
function AddButton() {
  return (
    <div className="add-button">
      <a className="float" id="menu-share">
        <i className="fa fa-share my-float"/>
      </a>
      <ul>
        <li>
          <a>
            <i className="fa fa-camera my-float"/>
          </a>
        </li>
        <li>
          <a>
            <i className="fas fa-utensils my-float"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AddButton;