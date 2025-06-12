import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/ui/animated-hero';
import { Header } from './components/ui/header';

function Home() {
  return <Hero />;
}

function Start() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold">Start Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;
