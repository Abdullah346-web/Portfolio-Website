import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute component - Guards admin routes
 * Currently uses mock authentication (isAdmin = false by default)
 * To test admin access, toggle isAdmin to true in AuthContext
 */
const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-main mb-4">Access Denied</h1>
          <p className="text-gray-400 mb-6">You don't have permission to access this page.</p>
          <a
            href="/"
            className="inline-block btn-main px-6 py-2 rounded-lg transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
