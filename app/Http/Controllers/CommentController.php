<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    // コメント一覧表示
    public function index($blogId)
    {
        // ブログに関連するコメント一覧を取得
        $comments = Comment::where('blog_id', $blogId)->with('user')->get();
    
        return Inertia::render('Comments/Index', [
            'comments' => $comments,
            'message' => session('message'),
            'blogId' => $blogId, // ブログのIDをビューに渡す
        ]);
    }

    // コメントの投稿
    public function store(Request $request)
    {
        // バリデーションルールを定義
        $request->validate([
            'content' => 'required',
        ]);
    
        // ログインユーザーのIDを取得
        $userId = Auth::id();
    
        // コメントを作成し、ログインユーザーのIDとブログIDを設定して保存
        Comment::create([
            'content' => $request->input('content'),
            'user_id' => $userId,
            'blog_id' => $request->input('blog_id'), // ブログIDを設定
        ]);
    
        return redirect()->route('comments.index', ['blogId' => $request->input('blog_id')])
            ->with(['message' => 'コメントを投稿しました。']);
    }

    // コメントの更新
    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);
        $comment->fill($request->input())->saveOrFail();
        return redirect('comments')->with([
            'message' => '更新しました',
        ]);
    }

    // コメントの削除
    public function destroy($id)
    {
        $comment = Comment::find($id);
        
        if (!$comment) {
            return redirect()->route('comments.index', ['blogId' => $comment->blog_id])
                ->with(['error' => 'コメントが見つかりませんでした。']);
        }
        
        if (Auth::id() !== $comment->user_id) {
            return redirect()->route('comments.index', ['blogId' => $comment->blog_id])
                ->with(['error' => 'コメントを削除する権限がありません。']);
        }
    
        $comment->delete();
    
        return redirect()->route('comments.index', ['blogId' => $comment->blog_id])
            ->with(['message' => 'コメントを削除しました。']);
    }

}