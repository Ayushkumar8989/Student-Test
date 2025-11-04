import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <div className="card max-w-lg mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for does not exist.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
