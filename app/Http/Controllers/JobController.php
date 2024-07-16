<?php

namespace App\Http\Controllers;

use Log;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::all();
        return response()->json($jobs);
    }

    public function store(Request $request)
    {
        try {
            // Validate request data
            $request->validate([
                'employee_id' => 'required',
                'marketing' => 'required|string',
                'period_job' => 'required|date',
                'amount' => 'required|numeric',
                'gross_profit' => 'required|numeric',
            ]);

            // Calculate commission
            $commission = $request->gross_profit * 0.1;

            // Save job data to database
            $job = Job::create([
                'employee_id' => $request->employee_id,
                'marketing' => $request->marketing,
                'period_job' => $request->period_job,
                'amount' => $request->amount,
                'gross_profit' => $request->gross_profit,
                'commission' => $commission,
            ]);

            return response()->json($job, 201); // Respond with the created job and HTTP status 201 (Created)
        } catch (\Exception $e) {
            // Return an error response
            return response()->json(['error' => $e], 500); // HTTP status 500 (Internal Server Error)
        }

    }

    public function show($id)
    {
        $job = Job::find($id);
        return response()->json($job);
    }

    public function update(Request $request, $id)
    {
        $job = Job::find($id);
        $job->marketing = $request->marketing;
        $job->period_job = $request->period_job;
        $job->amount = $request->amount;
        $job->gross_profit = $request->gross_profit;
        $job->save();

        return response()->json($job);
    }

    public function destroy($id)
    {
        $job = Job::find($id);
        $job->delete();

        return response()->json('Job deleted successfully');
    }
}
