import React from 'react';
import NavBar from '../components/NavBar';

function AdminDashboard() {
  return (
    <div>
        <NavBar activeLink={'/aboutus'} />
        <div className='h-[96px] bg-background dark:bg-backgroundNight'></div>
    </div>
  )
}

export default AdminDashboard