<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Data yang akan diisi ke dalam tabel jobs
        $jobs = [
            [
                'employee_id' => 1,
                'marketing' => 'Marketing A',
                'period_job' => '2024-07-01',
                'amount' => 5000000,
                'gross_profit' => 2000000,
                'commission' => 200000, // 10% dari gross_profit
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'employee_id' => 2,
                'marketing' => 'Marketing B',
                'period_job' => '2024-07-05',
                'amount' => 7000000,
                'gross_profit' => 3000000,
                'commission' => 300000, // 10% dari gross_profit
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Tambahkan data lainnya sesuai kebutuhan
        ];

        // Masukkan data ke dalam tabel menggunakan DB facade
        DB::table('jobs')->insert($jobs);
    }
}
