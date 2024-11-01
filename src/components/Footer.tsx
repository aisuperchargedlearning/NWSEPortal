import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2 text-gray-600">
          <span>Made with</span>
          <Heart className="h-5 w-5 text-red-500" />
          <span>by NWSE</span>
        </div>
        <div className="text-center text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} NWSE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;