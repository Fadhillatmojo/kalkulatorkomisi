import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import JobIndex from './JobIndex.jsx';



function MyApp() {
    return (
        <BrowserRouter>
            <h1>This Is Home</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/jobs">Jobs</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/jobs" element={<JobIndex />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<MyApp />);
