<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\emotions;
use App\Models\Blog;
use App\Models\Comment;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        emotions::factory(7)->create();
        Blog::factory()->count(5)->create();
        Comment::factory()->count(10)->create();
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
