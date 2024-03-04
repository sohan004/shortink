import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import { Provider } from 'react-redux';
import store from './store';
import { Toaster } from 'react-hot-toast';
import DetailsPage from './pages/DetailsPage/DetailsPage';


export const BACKEND_URL = import.meta.env.MODE === 'development' ? 'http://localhost:3014' : 'https://ze.vercel.app'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/D/:id',
          element: <DetailsPage></DetailsPage>
        },
      ]
    }
  ])

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      
    </div>
  );
};

export default App;