import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <h1 className="text-2xl font-bold text-primary-600">
            Student Test Admission
          </h1>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container-custom py-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Student Test Admission. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
