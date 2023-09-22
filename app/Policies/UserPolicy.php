<?php

namespace App\Policies;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\User  $targetUser
     * @return mixed
     */
    public function delete(User $user, User $targetUser)
    {
        // ユーザーが削除操作を行う権限を持っているかどうかを判定するロジックをここに追加
        // 例: 管理者だけが削除できる場合
        return $user->isAdmin();
    }
}
