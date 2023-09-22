import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-3xl text-gray-800 leading-tight">はじめに</h2>}
        >
            <Head title="はじめに" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-green-50 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-2xl text-gray-900">
                            このアプリは、自分のありのままの気持ちを大切にする感情記録と仲間と共有できるセルフケアアプリです。<br />
                            自分を大切にすることが、周囲への思いやりへ繋がっていきます。
                        </div>
                        <div className="p-6 text-2xl text-gray-900">
                            想いノートとは、自分しか見ることができない秘密のノートです。<br />
                            普段は人には言えないあなたの感情や秘密のエピソードを整理して管理しましょう。<br />
                        </div>
                        <div className="p-6 text-2xl text-gray-900">
                            心のひろばとは、自分では解決できなかったモヤモヤや仲間に共有したい嬉しかったエピソードを投稿できるブログです。<br />
                            もし今孤独感を感じているのであれば、安心してください。<br />
                            あなたは、独りではありません。
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
