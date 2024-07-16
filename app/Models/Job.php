<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;
    protected $fillable = [
        'employee_id',
        'marketing',
        'period_job',
        'amount',
        'gross_profit',
        'commission'
    ];
}
