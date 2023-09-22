<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class emotions extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'event', 
        'emotions', 
        'emotions_body'
    ];

    // リレーション追加
    public function user () 
    {
        return $this-> belongsTo(User::class);
    }
}
