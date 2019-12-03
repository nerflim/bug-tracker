import React from 'react';
import SubSidebar from './SubSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChalkboard } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='bg-pink-300 h-screen flex'>
      <div className='text-white text-center'>
        <ul>
          <li>
            <button type='button' className='p-6 focus:outline-none'>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
          <li>
            <div className='p-6'>
              <FontAwesomeIcon icon={faChalkboard} />
            </div>
          </li>
        </ul>
      </div>
      <SubSidebar />
    </div>
  );
};

export default Sidebar;
