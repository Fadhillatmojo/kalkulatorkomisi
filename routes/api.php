<?php

use App\Http\Controllers\DashboardControlller;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/marketing-chart', [DashboardControlller::class, 'marketingChart']);
Route::get('/profit-chart', [DashboardControlller::class, 'profitChart']);
Route::apiResource('employees', EmployeeController::class);
Route::apiResource('jobs', JobController::class);
