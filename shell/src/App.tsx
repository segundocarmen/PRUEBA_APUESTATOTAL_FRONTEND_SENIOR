import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Welcome from './pages/welcome';
import Dashboard from './pages/dashboard';
import PokemonDetail from './pages/pokemon-detail';
import PokemonHistory from './pages/pokemon-history';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Welcome />} />
                <Route path='/' element={<Layout />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/pokemon-detail' element={<PokemonDetail />} />
                    <Route
                        path='/pokemon-history'
                        element={<PokemonHistory />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
