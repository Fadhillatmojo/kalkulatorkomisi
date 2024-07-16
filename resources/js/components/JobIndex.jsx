import React, { useState, useEffect } from "react";
import axios from "axios";
import AddJobForm from "./AddJobForm"; // Import komponen AddJobForm jika belum dilakukan

function JobIndex() {
    const [jobs, setJobs] = useState([]);

    // Fungsi untuk memperbarui data jobs setelah menambahkan job baru
    const fetchJobs = () => {
        axios.get('http://localhost:8000/api/jobs') // Sesuaikan dengan URL API Anda
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };

    useEffect(() => {
        fetchJobs(); // Memuat data saat komponen dimuat pertama kali
    }, []); // Kosongkan array dependencies untuk memuat sekali saja saat awal

    return (
        <section>
            <AddJobForm onSuccess={fetchJobs} /> {/* Mengirimkan callback onSuccess untuk memperbarui data */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Marketing/Employee</th>
                        <th scope="col">Period Job</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Gross Profit</th>
                        <th scope="col">Commission</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td>{job.marketing}</td>
                            <td>{job.period_job}</td>
                            <td>{job.amount}</td>
                            <td>{job.gross_profit}</td>
                            <td>{job.commission}</td>
                            <td>{job.created_at}</td>
                            <td>
                                {/* Actions */}
                                {/* Tambahkan tombol edit dan delete sesuai kebutuhan */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default JobIndex;
