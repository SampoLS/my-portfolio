import { Outlet } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import PageAside from './pages/pageAside';

function App() {
    return (
        <Layout>
            <PageAside />
            <main>
                <Outlet />
            </main>
        </Layout>
    );
}

export default App;
