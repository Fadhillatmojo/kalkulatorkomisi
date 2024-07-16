import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddJobForm({ onSuccess }) {
    const [employeeOptions, setEmployeeOptions] = useState([]);
    const [employeeId, setEmployeeId] = useState('');
    const [marketing, setMarketing] = useState('');
    const [periodJob, setPeriodJob] = useState('');
    const [amount, setAmount] = useState('');
    const [grossProfit, setGrossProfit] = useState('');

    useEffect(() => {
        // Memuat daftar employee saat komponen dimuat
        axios.get('http://localhost:8000/api/employees') // Sesuaikan dengan URL API Anda
            .then(response => {
                setEmployeeOptions(response.data);
            })
            .catch(error => {
                console.error('Error fetching employees: ', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const commission = parseFloat(grossProfit) * 0.1;

        const newJob = {
            employee_id: employeeId,
            marketing: marketing,
            period_job: periodJob,
            amount: parseFloat(amount),
            gross_profit: parseFloat(grossProfit),
            commission: commission,
        };

        axios.post('http://localhost:8000/api/jobs', newJob) // Sesuaikan dengan URL API Anda
            .then(response => {
                console.log(response.data);
                onSuccess(); // Memanggil callback untuk memperbarui data jobs
                // Tambahkan logika penanganan setelah berhasil disimpan
                // Contoh: Tampilkan pesan sukses, reset form, dll.
            })
            .catch(error => {
                console.error('Error adding job: ', error);
                // Tambahkan logika penanganan error
                // Contoh: Tampilkan pesan error kepada pengguna
            });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
                <label htmlFor="employeeId" className="form-label">Employee:</label>
                <select id="employeeId" className="form-select" value={employeeId} onChange={e => setEmployeeId(e.target.value)} required>
                    <option value="">Pilih Employee</option>
                    {/* Contoh opsi statis, ganti dengan data yang sesuai */}
                    <option value="1">John Doe</option>
                    <option value="2">Jane Smith</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="marketing" className="form-label">Marketing:</label>
                <input type="text" id="marketing" className="form-control" value={marketing} onChange={e => setMarketing(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="periodJob" className="form-label">Period Job:</label>
                <input type="date" id="periodJob" className="form-control" value={periodJob} onChange={e => setPeriodJob(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount:</label>
                <input type="number" id="amount" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="grossProfit" className="form-label">Gross Profit:</label>
                <input type="number" id="grossProfit" className="form-control" value={grossProfit} onChange={e => setGrossProfit(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Job</button>
        </form>
    );
}

export default AddJobForm;
