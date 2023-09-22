<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\Auth\RegisteredUserController; //追加
use App\Http\Controllers\EmotionsController; //追加
use App\Http\Controllers\BlogController; //追加
use App\Http\Controllers\CommentController; //追加

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/emotions', [EmotionsController::class, 'index'])->name('emotions.index');
    Route::post('/emotions/store', [EmotionsController::class, 'store'])->name('emotions.store');
    Route::put('/emotions/update/{id}', [EmotionsController::class, 'update'])->name('emotions.update');
    Route::delete('/emotions/destroy/{id}', [EmotionsController::class, 'destroy'])->name('emotions.destroy');

    Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');
    Route::post('/blogs/store', [BlogController::class, 'store'])->name('blogs.store');
    Route::put('/blogs/update/{id}', [BlogController::class, 'update'])->name('blogs.update');
    Route::delete('/blogs/destroy/{id}',[BlogController::class, 'destroy'])->name('blogs.destroy');

    Route::get('/comments/{blogId}', [CommentController::class, 'index'])->name('comments.index');
    Route::post('/comments/store', [CommentController::class, 'store'])->name('comments.store');
    Route::put('/comments/update/{id}', [CommentController::class, 'update'])->name('comments.update');
    Route::delete('/comments/destroy/{id}', [CommentController::class, 'destroy'])->name('comments.destroy');

});
require __DIR__.'/auth.php';

Route::prefix('admin')->name('admin.')->group(function(){

    Route::get('/dashboard', [RegisteredUserController::class, 'index'])
        ->middleware(['auth:admin', 'verified'])
        ->name('dashboard');

    Route::get('/admin/profile/edit', 'AdminProfileController@edit')
        ->name('admin.profile.edit');

    Route::delete('/users/{id}', [RegisteredUserController::class, 'destroy'])
        ->middleware('auth:admin')
        ->name('users.destroy');
    

    require __DIR__.'/admin.php';
});