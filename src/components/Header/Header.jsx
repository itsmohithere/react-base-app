import React from 'react';
import { LogoutButton } from '../../commonComponents';

function Header(params) {
  return(
    <React.Fragment>
      <div>
        <LogoutButton className='logoutHeader' />
      </div>
    </React.Fragment>
  );
}

export default Header;
