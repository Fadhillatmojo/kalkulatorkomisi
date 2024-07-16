<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardControlller extends Controller
{
    public function marketingChart()
    {
        // Query untuk mendapatkan data marketing dengan jumlah job terbanyak
        $marketingJobs = Job::select(DB::raw('marketing, COUNT(*) as job_count'))
            ->groupBy('marketing')
            ->get();

        return response()->json($marketingJobs);
    }

    public function profitChart()
    {
        // Query untuk mendapatkan data profit berdasarkan period_job (monthly)
        $profitData = Job::select(DB::raw('DATE_FORMAT(period_job, "%Y-%m") as month, SUM(gross_profit) as total_profit'))
            ->groupBy(DB::raw('DATE_FORMAT(period_job, "%Y-%m")'))
            ->get();

        return response()->json($profitData);
    }
}
