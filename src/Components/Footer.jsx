import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-purple-700 bg-purple-800 text-white py-8 mt-12">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <h2 className="text-2xl font-bold">Job Portal</h2>

        <p className="text-purple-200">
          Helping developers find remote jobs around the world.
        </p>

        <div className="flex justify-center gap-6">
          <Link to="/" className="hover:text-purple-300 transition duration-300 hover:underline">
            Home
          </Link>

          <Link to="/jobs"className="hover:text-purple-300 transition duration-300 hover:underline">
            Jobs
          </Link>

          <Link to="/saved-jobs" className="hover:text-purple-300 transition duration-300 hover:underline">
            Saved Jobs
          </Link>
        </div>

        <hr className="border-purple-600 my-4" />

        <p className="text-sm text-purple-300">
          © 2026 Job Portal. All rights reserved.

Built with React • Tailwind CSS • Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;