import { useEffect, useState } from 'react';
import { apiClient } from '../lib/apiClient';

interface HealthResponse {
  success: boolean;
  message: string;
  timestamp: string;
  database: string;
}

function HomePage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await apiClient.get<HealthResponse>('/health');
        setHealth(response.data);
      } catch (err) {
        setError('Failed to connect to backend');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <div className="card max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary-600 mb-4">
            Student Test Admission System
          </h1>
          <p className="text-gray-600 mb-8">
            Production-ready MERN application skeleton
          </p>

          {loading && (
            <div className="text-gray-500">Checking backend connection...</div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {health && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              <p className="font-semibold">{health.message}</p>
              <p className="text-sm mt-2">Database: {health.database}</p>
              <p className="text-sm">Time: {new Date(health.timestamp).toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
