<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;



class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with('user')->latest()->paginate(3); // ユーザー情報を含めて最新の投稿内容をページネーションして取得
    
        // 現在の認証ユーザーを取得
        $authUser = Auth::user();
    
        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs,
            'auth_user' => $authUser,
            'i' => (request()->input('page', 1) - 1) * 3,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // バリデーションルールを定義
        $request->validate([
            'content' => 'required|max:300',
        ]);
    
        // ログインユーザーのIDを取得
        $userId = Auth::id();
    
        // ブログ記事を作成し、ログインユーザーのIDを設定して保存
        Blog::create([
            'emotions' => $request-> input('emotions'),
            'content' => $request->input('content'),
            // 他のブログ記事のプロパティを設定
            'user_id' => $userId, // ログインユーザーのIDを設定
        ]);
    
        return redirect('blogs')->with([
            'message' => '登録しました。',
        ]);
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $blogs = Blog::find($id);
        $blogs->fill($request->input())->saveOrFail();
        return redirect('blogs')->with([
            'message' => '更新しました。',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $blogs = Blog::find($id);
        $blogs->delete();
        return redirect('blogs')->with([
            'message' => '削除しました。',
        ]);
    }
}
