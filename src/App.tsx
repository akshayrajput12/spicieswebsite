import React, { Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, useRoutes } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { routes } from './routes';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
            <p className="text-gray-600">Something went wrong. Please try again later.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Loading Component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

// App Routes Component
const AppRoutes = () => {
  const location = useLocation();
  const element = useRoutes(routes);

  return (
    <AnimatePresence mode="wait">
      {element}
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <div className="relative min-h-screen bg-white dark:bg-gray-900">
          <AnimatePresence>
            {loading && <Loader />}
          </AnimatePresence>
          
          {!loading && (
            <>
              <Navbar />
              <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Suspense fallback={<PageLoader />}>
                  <AppRoutes />
                </Suspense>
              </main>
            </>
          )}
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;