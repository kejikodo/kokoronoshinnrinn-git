import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import BlueButton from '@/Components/BlueButton';
import GreenButton from '@/Components/GreenButton';
import TextareaInput from "@/Components/TextareaInput";
import  Select from '@/Components/Select';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard({ auth, blogs, message }) {
    // ページネーションのリンクの取得
    const { links } = blogs;
    
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [confirmingBlogsUpdate, setConfirmingBlogsUpdate] = useState(false);
    const passwordInput = useRef();
    const emotionsInput = useRef();
    const contentInput = useRef();

    const {
        data,
        setData,
        delete: destroy, post, put,
        processing,
        reset,
        errors,
    } = useForm({
        password: '', emotions: '', content: '',  
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const confirmBlogsUpdate = (id, emotions, content) => {
        setData({id:id, emotions:emotions, content:content})
        setConfirmingBlogsUpdate(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        post(route('blogs.store'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const updateBlog = (e) => {
        e.preventDefault();

        put(route('blogs.update', data.id), {
            preserveScroll: true,
            onSuccess: () => closeModal_k(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const deleteBlog = (id) => {
        destroy(route('blogs.destroy',id), {
            preserveScroll: true,
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    const closeModal_k = () => {
        setConfirmingBlogsUpdate(false);
        reset();
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-3xl text-gray-800 leading-tight">心のひろば</h2>}>
            <Head title="心のひろば" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <BlueButton onClick={confirmUserDeletion}>投稿</BlueButton>

                    <Modal show={confirmingUserDeletion} onClose={closeModal}>
                        <form onSubmit={deleteUser} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                心のひろば投稿フォーム
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                            自分一人で抱え込まず同じ悩みを抱えている仲間と気持ちを共有してみよう！<br />
                            もちろん悩みだけでなく嬉しかったことや楽しかったことなども気軽に共有しよう！
                            </p>

                            <div className="mt-6">
                                <Select
                                    id="emotions"
                                    name="emotions"
                                    ref={emotionsInput}
                                    value={data.emotions}
                                    onChange={(e) => setData('emotions', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    placeholder="emotions"
                                    options={['', '喜び', '信頼', '怒り', '驚き', '悲しみ', '嫌悪', '期待', '恐れ']}
                                >
                                </Select>
                                <InputError message={errors.emotions} className="mt-2" />
                            </div>

                            <div className="mt-6">
                                <TextareaInput
                                    id="content"
                                    type="text"
                                    name="content"
                                    ref={contentInput}
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="できごと"
                                >
                                </TextareaInput>
                                <InputError message={errors.content} className="mt-2" />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>戻る</SecondaryButton>

                                <BlueButton className="ml-3" disabled={processing}>
                                    投稿
                                </BlueButton>
                            </div>
                        </form>
                    </Modal>

                    <Modal show={confirmingBlogsUpdate} onClose={closeModal_k}>
                        <form onSubmit={updateBlog} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                心のひろば更新フォーム
                            </h2>

                            <div className="mt-6">
                                <Select
                                    id="emotions"
                                    name="emotions"
                                    ref={emotionsInput}
                                    value={data.emotions}
                                    onChange={(e) => setData('emotions', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    placeholder="emotions"
                                    options={['', '喜び', '信頼', '怒り', '驚き', '悲しみ', '嫌悪', '期待', '恐れ']}
                                >
                                </Select>
                                <InputError message={errors.emotions} className="mt-2" />
                            </div>

                            <div className="mt-6">
                                <TextareaInput
                                    id="content"
                                    type="text"
                                    name="content"
                                    ref={contentInput}
                                    value={data.content} 
                                    onChange={(e) => setData('content', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="できごと"
                                >
                                </TextareaInput>

                                <InputError message={errors.content} className="mt-2" />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal_k}>戻る</SecondaryButton>

                                <GreenButton className="ml-3" disabled={processing}>
                                    更新
                                </GreenButton>
                            </div>
                        </form>
                    </Modal>

                    {message && <div className="mt-2 text-blue-900  bg-green-100 p-3 rounded-lg text-center font-bold">{message}</div>}

                    <div >
                        <table className="w-full bg-gray-100 mt-2">
                            <thead className='bg-blue-100'>
                                <tr className='text-green-600'>
                                    <th className='px-2 py-2 border border-gray-400 text-xl'>名前</th>
                                    <th className='px-2 py-2 border border-gray-400 text-xl'>感情</th>
                                    <th className='px-2 py-2 border border-gray-400 text-xl'>考えたこと</th>
                                    <th className='px-2 py-2 border border-gray-400 text-xl'></th>
                                    <th className='px-2 py-2 border border-gray-400 text-xl'></th>
                                    <th className='px-2 py-2 border border-gray-400 text-xl'>コメント一覧</th>
                                </tr>
                            </thead>
                            <tbody>
                            {blogs.data.map(({ id, emotions, content, user_id, user }) => (
                                <tr key={id}>
                                    <td className='px-2 py-2 border border-gray-400 text-xl'>{user.name}</td> {/* ユーザー名を表示 */}
                                    <td className='px-2 py-2 border border-gray-400 text-xl'>{emotions}</td>
                                    <td className='px-2 py-2 border border-gray-400 text-xl'>{content}</td>
                                    <td className='px-2 py-2 border border-gray-400 text-xl'>
                                        {auth.user.id === user_id && (
                                            <GreenButton  onClick={() => confirmBlogsUpdate(id, emotions, content)}>
                                                更新
                                            </GreenButton>
                                        )}
                                    </td>
                                    <td className='px-2 py-2 border border-gray-400'>
                                        {auth.user.id === user_id && (
                                            <DangerButton  onClick={() => deleteBlog(id)}>
                                                削除
                                            </DangerButton>
                                        )}
                                    </td>
                                    <td className='px-2 py-2 border border-gray-400'>
                                        <InertiaLink href={route('comments.index', { blogId: id})} className="text-blue-500 hover:underline">
                                            コメント一覧へ
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <Pagination links={links} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}