import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Body from './Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './WatchPage';
import MainContainer from './MainContainer';

const appRouter= createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
{
  path:"/",
  element: <MainContainer/>
},
{
  path:"watch",
  element:<WatchPage/>
}
  ]
}])

function App() {
  
  return (
    <Provider store={store}>
    <div >
     <Head />
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
