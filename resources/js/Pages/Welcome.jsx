import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gradient-to-b from-emerald-500 to-emerald-300 dark:bg-dots-lighter dark:bg-gray-900 flex flex-col justify-center items-center">
                <div className="bg-white p-6 rounded-md flex flex-col items-center space-y-4">
                    <img
                        src='/img/心の森林logo.png'
                        alt='心の森林ロゴ'
                        className="h-54 w-auto bg-white bg-opacity-30 rounded-md"
                    />
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="text-4xl font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                ログイン
                            </Link>
                            <Link
                                href={route('register')}
                                className="text-4xl font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                新規会員登録(無料)
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
