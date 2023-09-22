import Authenticated from "@/Layouts/AdminAuthenticated";
import { Head } from '@inertiajs/react';
import DangerButton from '@/Components/DangerButton';
import { useForm } from '@inertiajs/react';
import { Ziggy } from "@/ziggy";

export default function Dashboard({ auth, users }) {
    const { data, setData, delete: destroy, processing, reset, errors } = useForm({
        password: '', // パスワードが必要な場合に設定
    });

    const deleteUsers = (id) => {
        if (confirm("本当にこのユーザーを削除しますか？")) {
            // 削除操作を確認し、ユーザーの削除を実行
            destroy(route('admin.users.destroy', id), {
                preserveScroll: true,
                onSuccess: () => {
                    // 削除が成功した場合にリロード
                    reset();
                    location.reload();
                },
            });
        }
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-3xl text-gray-800 leading-tight">アカウント管理画面</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            こちらは管理者画面です。一般ユーザーの一覧を表示しています。'削除' をクリックすると登録しているアカウントが完全に削除されるので操作を誤らないように注意してください。
                        </div>

                        <table className="w-full bg-gray-100 mt-2">
                            <thead className='bg-blue-100'>
                                <tr className='text-green-600'>
                                    <th className='px-2 py-2 border border-gray-400'>ユーザー名</th>
                                    <th className='px-2 py-2 border border-gray-400'>メールアドレス</th>
                                    <th className='px-2 py-2 border border-gray-400'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(({ id, name, email }) => (
                                    <tr key={id}>
                                        <td className='px-2 py-2 border border-gray-400'>{name}</td>
                                        <td className='px-2 py-2 border border-gray-400'>{email}</td>
                                        <td className='px-2 py-2 border border-gray-400'>
                                            <DangerButton onClick={() => deleteUsers(id)}>
                                                削除
                                            </DangerButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
