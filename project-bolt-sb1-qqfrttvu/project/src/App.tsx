import { useState } from 'react';
import LandingPage from './components/LandingPage';
import MobileApp from './components/MobileApp';

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <div className="min-h-screen">
      {showApp ? (
        <MobileApp onBack={() => setShowApp(false)} />
      ) : (
        <LandingPage onOpenApp={() => setShowApp(true)} />
      )}
    </div>
  );
}

export default App;
