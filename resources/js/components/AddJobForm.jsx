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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Employee:</label>
                <select value={employeeId} onChange={e => setEmployeeId(e.target.value)} required>
                    <option value="">Pilih Employee</option>
                    {employeeOptions.map(employee => (
                        <option key={employee.id} value={employee.id}>{employee.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Marketing:</label>
                <input type="text" value={marketing} onChange={e => setMarketing(e.target.value)} required />
            </div>
            <div>
                <label>Period Job:</label>
                <input type="date" value={periodJob} onChange={e => setPeriodJob(e.target.value)} required />
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
            </div>
            <div>
                <label>Gross Profit:</label>
                <input type="number" value={grossProfit} onChange={e => setGrossProfit(e.target.value)} required />
            </div>
            <button type="submit">Add Job</button>
        </form>
    );
}

export default AddJobForm;
