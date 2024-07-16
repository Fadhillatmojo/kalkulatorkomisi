import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import JobIndex from './JobIndex.jsx';



function MyApp() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Kalkulator Komisi</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jobs">Jobs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/jobs" element={<JobIndex />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<MyApp />);
