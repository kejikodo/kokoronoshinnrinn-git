import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import DangerButton from '@/Components/DangerButton';
import { InertiaLink } from '@inertiajs/inertia-react';


export default function Comments({ comments, blogId, auth }) {
    const [formData, setFormData] = useState({ content: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // コメントを投稿
        Inertia.post(route('comments.store'), {
            content: formData.content,
            blog_id: blogId,
        }).then(() => {
            // 投稿成功後、コメント一覧データを再読み込み
            Inertia.reload({ only: ['comments'] });
        });
    };

    const deleteComment = (id) => {
        Inertia.delete(route('comments.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {
                // 削除成功後、コメント一覧データを再読み込み
                Inertia.reload({ only: ['comments'] });
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-3xl text-gray-800 leading-tight">コメント一覧</h2>}
        >
            <Head title="コメント一覧" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <table className="w-full bg-green-100 mt-2">
                            {/* テーブルヘッダー */}
                            <thead className="bg-blue-100">
                                <tr className="text-green-600">
                                    <th className="px-2 py-2 border border-gray-400">名前</th>
                                    <th className="px-2 py-2 border border-gray-400">コメント内容</th>
                                    <th className="px-2 py-2 border border-gray-400"></th>
                                </tr>
                            </thead>
                            {/* テーブルボディ */}
                            <tbody className="bg-white">
                                {comments.map((comment) => (
                                    <tr key={comment.id}>
                                        <td className="border border-gray-400 px-2 py-2 text-center">
                                            {comment.user.name}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2 text-center">
                                            {comment.content}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2 text-center">
                                            {auth.user.id === comment.user_id && (
                                                <DangerButton onClick={() => deleteComment(comment.id)}>
                                                    削除
                                                </DangerButton>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* コメント投稿フォーム */}
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <textarea
                                    className="w-full p-2 border rounded"
                                    name="content"
                                    id="content"
                                    rows="3"
                                    placeholder="コメントを入力..."
                                    value={formData.content}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                >
                                    投稿
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* ブログ一覧へのリンク */}
                    <InertiaLink href={route('blogs.index')} className="text-blue-500 hover:underline block mt-4">
                        ブログ一覧へ
                    </InertiaLink>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}