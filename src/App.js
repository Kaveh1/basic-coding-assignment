import { useRoutes, A } from 'hookrouter'
import routes from './router'
import './App.css'

const App = () => {
  const routeResult = useRoutes(routes);
  
  return (
    <div className='App'>
      <A href='/countdown'>Countdown</A>
      <br></br>
      <A href='/upload_image'>Upload image</A>
      {routeResult}
    </div> 
  );
}

export default App;
