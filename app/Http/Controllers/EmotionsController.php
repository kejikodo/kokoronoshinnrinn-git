<?php

namespace App\Http\Controllers;

use App\Models\emotions;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class EmotionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $emotions = emotions::all();
        $auth_user = Auth::user()->name; // 現在の認証ユーザーの名前を取得
        
        return Inertia::render('Emotions/Index',[
            'emotions'=>$emotions, 
            'auth_user' => $auth_user, 
            'message' => session('message')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // バリデーション機能をここに記載
        $request -> validate([
            'event' => 'required|max:30',
            'emotions_body' => 'required|max:300',
        ]);

        // ログインユーザーのIDを取得
        $userId = Auth::id();

        // ファームから受け取ったデータをDBに保存

        Emotions::create([
            'event' => $request-> input('event'),
            'emotions' => $request-> input('emotions'),
            'emotions_body' => $request->input('emotions_body'),
            // 他のブログ記事のプロパティを設定
            'user_id' => $userId, // ログインユーザーのIDを設定
        ]);

        /*
        Emotions::create([
            $request->all(),
            'user_id' => $userId, // ログインユーザーのIDを設定
        ]);
        
        $emotions = new Emotions($request->input());
        $emotions->save();
        */

        // 成功時の処理
        return redirect('emotions')->with([
            'message' => '登録しました。',
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $emotions = Emotions::find($id);
        $emotions->fill($request->input())->saveOrFail();
        return redirect('emotions')->with([
            'message' => '更新しました。',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $emotions = Emotions::find($id);
        $emotions->delete();
        return redirect('emotions')->with([
            'message' => '削除しました。',
        ]);
    }
}
