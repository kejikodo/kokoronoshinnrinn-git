import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import BlueButton from '@/Components/BlueButton';
import GreenButton from '@/Components/GreenButton';
import TextareaInput from '@/Components/TextareaInput';
import Select from '@/Components/Select';

export default function Dashboard({ auth, emotions, message }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [confirmingEmotionsUpdate, setConfirmingEmotionsUpdate] = useState(false);
    const passwordInput = useRef();
    const eventInput = useRef();
    const emotionsInput = useRef();
    const emotionsBodyInput = useRef();

    const {
        data,
        setData,
        delete: 
        destroy,
        post,
        put,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
        event: '',
        emotions: '',
        emotions_body: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const confirmEmotionsUpdate = (id, event, emotions, emotions_body) => {
        setData({ id: id, event: event, emotions: emotions, emotions_body: emotions_body });
        setConfirmingEmotionsUpdate(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        post(route('emotions.store'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => emotionsInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const updateEmotions = (e) => {
        e.preventDefault();

        put(route('emotions.update', data.id), {
            preserveScroll: true,
            onSuccess: () => closeModal_u(),
            onError: () => emotionsInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const deleteEmotions = (id) => {
        destroy(route('emotions.destroy', id), {
            preserveScroll: true,
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    const closeModal_u = () => {
        setConfirmingEmotionsUpdate(false);
        reset();
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-3xl text-gray-800 leading-tight">想いノート</h2>}
        >
            <Head title="想いノート" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <BlueButton onClick={confirmUserDeletion}>登録</BlueButton>

                    <Modal show={confirmingUserDeletion} onClose={closeModal}>
                        <form onSubmit={deleteUser} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">想いノート登録フォーム</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                あなたしか見ることができない秘密のノートです。
                                <br />
                                あなたの感情を思うままに記録しましょう。
                            </p>

                            <div className="mt-6">
                                <TextInput
                                    id="event"
                                    type="text"
                                    name="event"
                                    ref={eventInput}
                                    value={data.event}
                                    onChange={(e) => setData('event', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="できごと"
                                />
                                <InputError message={errors.event} className="mt-2" />
                            </div>

                            <div className="mt-6">
                                <Select
                                    id="emotions"
                                    name="emotions"
                                    ref={emotionsInput}
                                    value={data.emotions}
                                    onChange={(e) => setData('emotions', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    placeholder="感情を選択してください"
                                    options={['', '喜び', '信頼', '怒り', '驚き', '悲しみ', '嫌悪', '期待', '恐れ']}
                                />
                                <InputError message={errors.emotions} className="mt-2" />
                            </div>

                            <div className="mt-6">
                                <TextareaInput
                                    id="emotions_body"
                                    type="text"
                                    name="emotions_body"
                                    ref={emotionsBodyInput}
                                    value={data.emotionsBody}
                                    onChange={(e) => setData('emotions_body', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="かんがえたこと"
                                />
                                <InputError message={errors.emotionsBody} className="mt-2" />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>戻る</SecondaryButton>

                                <BlueButton className="ml-3" disabled={processing}>
                                    登録
                                </BlueButton>
                            </div>
                        </form>
                    </Modal>

                    <Modal show={confirmingEmotionsUpdate} onClose={closeModal_u}>
                        <form onSubmit={updateEmotions} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">想いノート更新フォーム</h2>

                            <div className="mt-6">
                                <TextInput
                                    id="event"
                                    type="text"
                                    name="event"
                                    ref={eventInput}
                                    value={data.event}
                                    onChange={(e) => setData('event', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="できごと"
                                />
                                <InputError message={errors.event} className="mt-2" />
                            </div>

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
                                    id="emotions_body"
                                    type="text"
                                    name="emotions_body"
                                    ref={emotionsBodyInput}
                                    value={data.emotions_body}
                                    onChange={(e) => setData('emotions_body', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="かんがえたこと"
                                />
                                <InputError message={errors.emotions_body} className="mt-2" />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal_u}>戻る</SecondaryButton>

                                <BlueButton className="ml-3" disabled={processing}>
                                    更新
                                </BlueButton>
                            </div>
                        </form>
                    </Modal>

                    {message && (
                        <div className="mt-2 text-blue-900 bg-green-100 p-3 rounded-lg text-center font-bold">
                            {message}
                        </div>
                    )}

                    <div>
                        <table className="w-full bg-green-700 mt-2">    
                            <thead className="bg-blue-100">
                                <tr className="text-green-600">
                                    <th className="px-2 py-2 border border-gray-400">投稿日</th>
                                    <th className="px-2 py-2 border border-gray-400">できごと</th>
                                    <th className="px-2 py-2 border border-gray-400">感情</th>
                                    <th className="px-2 py-2 border border-gray-400">かんがえたこと</th>
                                    <th className="px-2 py-2 border border-gray-400"></th>
                                    <th className="px-2 py-2 border border-gray-400"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {emotions.map((emotions) => (
                                    auth.user.id === emotions.user_id && ( // ログインユーザーが投稿者のみ表示
                                        <tr key={emotions.id}>
                                            <td className="border border-gray-400 px-2 py-2 text-center">
                                                {new Date(emotions.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2">
                                                {emotions.event}
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2">
                                                {emotions.emotions}
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2">
                                                {emotions.emotions_body}
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2 text-center">
                                                <GreenButton
                                                    onClick={() =>
                                                        confirmEmotionsUpdate(
                                                            emotions.id,
                                                            emotions.event,
                                                            emotions.emotions,
                                                            emotions.emotions_body
                                                        )
                                                    }
                                                >
                                                    更新
                                                </GreenButton>
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2 text-center">
                                                <DangerButton
                                                    onClick={() => deleteEmotions(emotions.id)}
                                                >
                                                    削除
                                                </DangerButton>
                                            </td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

