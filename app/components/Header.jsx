import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from '@/public/images/img.jpeg';
import { Button } from '@radix-ui/themes';

const Header = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <header className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Header Text */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, <span className="text-blue-600">I'm Ayothega</span>
            <br />
            Fullstack Developer
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum praesentium saepe quos officiis.
            Perferendis tempore a quam blanditiis! Alias modi inventore veniam soluta quasi tempora aliquid voluptates
            laboriosam cum.
          </p>
          {/* Button component */}
          <Link href="/contactus">
            <Button variant="soft" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Contact us
            </Button>
          </Link>
        </div>

        {/* Header image */}
        <div className="w-full md:w-auto">
          <Image
            src={img}
            alt="Ayothega - Fullstack Developer"
            className="rounded-lg shadow-lg"
            width={400}
            height={400}
            priority
          />
        </div>
      </header>
    </div>
  );
};

export default Header;