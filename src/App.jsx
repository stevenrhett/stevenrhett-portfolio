import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './Root';
import Login from './Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout/>
	},
	{
		path: '/login',
		element: <Login/>
	}
]);


const App = () => {
	return (<RouterProvider router={router}/>);
};


export default App;

