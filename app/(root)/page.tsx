import { UserButton } from '@clerk/nextjs';
import React from 'react';

type HomeProps = {
  
};

const Home:React.FC<HomeProps> = () => {
  
  return <div>Home
    <UserButton afterSignOutUrl='/'/>
  </div>
}
export default Home;