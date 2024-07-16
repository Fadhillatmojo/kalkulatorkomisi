<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobClientController extends Controller
{
    public function index()
    {
        $jobs = Job::all();
        return response()->json($jobs);
    }

    public function store(Request $request)
    {
        $job = new Job();
        $job->marketing = $request->marketing;
        $job->period_job = $request->period_job;
        $job->amount = $request->amount;
        $job->gross_profit = $request->gross_profit;
        $job->save();

        return response()->json($job);
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
