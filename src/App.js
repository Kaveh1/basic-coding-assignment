import { useRoutes, A } from 'hookrouter';
import routes from './router';
import NonExistingPage from './components/NonExistingPage';
import './styles/App.css';

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <>
      <div className="navbar">
        <A href="/countdown">Countdown</A>
        {/* Alternative solution in React Router version 6 - useNavigate hook (still beta) 
        <button onClick={() => navigate('/countdown')}>Countdown</button>
        */}
        <A href="/upload_image">Upload image</A>
      </div>
      {routeResult || <NonExistingPage />}
    </>
  );
};

export default App;
