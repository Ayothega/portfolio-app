import React from 'react';
import Link from 'next/link';
import { TabNav } from '@radix-ui/themes';

const Navbar = () => {
  return (
    <div className="flex justify-end p-4 bg-gray-50">
      <TabNav.Root className="bg-white rounded-lg shadow-md p-2">
        <Link href="/">
          <TabNav.Link>Home</TabNav.Link>
        </Link>
         <Link href="/aboutme">
          <TabNav.Link>About me</TabNav.Link>
        </Link>
        <Link href="/projects">
          <TabNav.Link>Projects</TabNav.Link>
        </Link>
        <Link href="/contactus">
          <TabNav.Link>Contact us</TabNav.Link>
        </Link>
      </TabNav.Root>
    </div>
  );
};

export default Navbar;
