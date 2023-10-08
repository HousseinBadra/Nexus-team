import React from 'react';
import { Avatar } from '@mui/material';
import ResponsiveAppBar from '../components/navbar';
// import { RootState } from '../store';

export default function accountPage() {
  //   const user = useSelector((state: RootState) => state.AuthSlice.auth);
  return (
    <div>
      <ResponsiveAppBar />
      <main>
        <div className="avatar">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <div className="profile" />
        </div>
      </main>
    </div>
  );
}
