<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory; 
    
    protected $fillable = [
        'emotions',
        'content',
        'user_id',
    ]; 

    // リレーション追加
    public function user () 
    {
        return $this-> belongsTo(User::class);
    }

    public function comment()
    {
        return $this-> hasMany(Comment::class);
    }
}



