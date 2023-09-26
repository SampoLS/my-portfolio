import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.tsx';
import AboutPage from './pages/about/index.tsx';
import HobbiesPage from './pages/hobbies/index.tsx';
import ContactPage from './pages/contact/index.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            { path: '/about', element: <AboutPage /> },
            { path: '/hobbies', element: <HobbiesPage /> },
            { path: '/contact_me', element: <ContactPage /> },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
