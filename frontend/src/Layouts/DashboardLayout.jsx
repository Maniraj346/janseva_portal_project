import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useTranslation } from 'react-i18next';

function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white p-6 space-y-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        {role === 'citizen' && (
          <button
            onClick={() => navigate('/report')}
            className="block w-full text-left hover:underline"
          >
            📝 {t('reportTitle')}
          </button>
        )}
        {(role === 'officer' || role === 'admin') && (
          <button
            onClick={() => navigate('/view-issues')}
            className="block w-full text-left hover:underline"
          >
            📋 {t('viewIssuesTitle')}
          </button>
        )}
        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          {t('logoutButton')}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;