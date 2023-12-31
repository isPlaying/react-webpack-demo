import { useRoutes } from 'react-router-dom';
import ROUTER_CONFIG from './routes';

const App = () => {
  return useRoutes(ROUTER_CONFIG);
};

export default App;
