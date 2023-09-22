<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_id',
        'user_id',
        'content'
    ];

    public function blogs()
    {
        return $this->belongsTo(Blogs::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
