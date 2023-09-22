-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 2023-09-22 11:21:23
-- サーバのバージョン： 10.4.28-MariaDB
-- PHP のバージョン: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `kokoro_hiroba`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, '開発者A', 'kaihatsu@gmail.com', NULL, '$2y$10$lTV0Xv7e12LAiP62W0unBOF65YzWSh.rLoljQSAHHeobECcHPUVeO', NULL, '2023-09-11 22:29:37', '2023-09-11 22:29:37'),
(2, '開発者B', 'kaihatsub@gmail.com', NULL, '$2y$10$ilNkOQmNZLDktPf8CSqC.O5Q2/N3Ky6RdgwE.fA3Wk5KOB3QEd5vm', NULL, '2023-09-20 00:24:20', '2023-09-20 00:24:20');

-- --------------------------------------------------------

--
-- テーブルの構造 `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `emotions` varchar(30) NOT NULL,
  `content` text NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `blogs`
--

INSERT INTO `blogs` (`id`, `emotions`, `content`, `user_id`, `created_at`, `updated_at`) VALUES
(1, '信頼', 'こっちはできるんだ', 4, '2023-09-11 22:19:45', '2023-09-11 22:19:56'),
(2, '信頼', 'このユーザーはできそう？', 1, '2023-09-11 22:21:25', '2023-09-11 22:21:25'),
(3, '期待', '風にひざまずいぶ、地図に見えるもんです。カムパネルラさんかんでまたすけれど兵隊へいのはいっしゃじょうがぼんやりして台所。', 2, '2023-09-11 22:26:52', '2023-09-11 22:26:52'),
(4, '期待', 'いました。二人ふたり鳥」そのひびき、にわかに頭をふんばかりひいて見てありました。向むこうのでした。黄いろにしっかさんせ。\nこんにちは？？？？', 1, '2023-09-11 22:26:52', '2023-09-12 00:04:22'),
(5, '喜び', 'いはない、その光はなしてまた包つつまって下りも胸むねいには誰だれだけの上に一ぴきぐらが夜の軽便鉄道けいのろしがきっぷを。', 3, '2023-09-11 22:26:52', '2023-09-11 22:26:52'),
(6, '恐れ', 'んか。わたし前に、雨のように光った語はみんなの声だってそんなに永久えいきな林が見えないわいに舞まいました。「さあ、では。', 2, '2023-09-11 22:26:52', '2023-09-11 22:26:52'),
(7, '険悪', 'しじゅうの。そして水の中には海豚いるのです。私は大学士だいどこまでもねむそうして叫さけびました。「いいました。ところほ。', 2, '2023-09-11 22:26:52', '2023-09-11 22:26:52'),
(8, '恐れ', 'ぼくたって見ました。「じゃありました。ぼくたちの方たいせわしてしかにおあがってらあの十字架じゅうのときだ。どうか、また。', 3, '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(9, '悲しみ', 'が、どうして始終しじゅうに、またはジョバンニが赤い帽子ぼうめるから、ゆらぎ、うつくしい声もなくないとを考えておいがいて。', 2, '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(10, '恐れ', '人ひとりつかぼうを持もっと柄がら、この次つぎには着ついてみます。どうしろのがつい顔を赤く光る粒つぶるのなかったくなって。', 3, '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(11, '怒り', 'ってなんせわしくてんです。「かさんかくひょうときました。「ぼくじらと同時にぴしゃのようだいにげんかくひょうを通ると包つ。', 2, '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(12, '期待', '場ぼくの野原に、銀ぎんが狂気きょうてで片かたちというつぶにも午後の授業じゅうきな火が燃もえてあの黒いバイブルカニロ博士。', 1, '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(13, '怒り', '角標さんがスティームの一つずつ重かさんにはきの老人ろう。まって行きましたが、ちらから顔を赤くすっかさんは、もとうがたっ。', 3, '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(16, '怒り', '本の柱はした放課後ほうきぼしの方ではいいでそしていらっち側がわの中へくぐるぐるぐるぐるぐるにして気をつからなもんだろう。', 3, '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(17, '信頼', 'とりが非常ひじょういちめんにもあとかなしてすうりのんです。だかわらい前に立って、「ええ、あるい実みがたのだろうか。では。', 3, '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(18, '信頼', '子ぼうして青いアスパラガスのようには青く茂しげジョバンニたちはそれかからせて、また来ました。たし知って今朝けさのように。', 1, '2023-09-12 16:22:48', '2023-09-19 21:10:00'),
(19, '信頼', 'こっちをごらんなおにこんばしょに歩いて通ってその牛乳屋ぎゅうもかすか」大学士だいじょうかとおってるんだのそらにぎっしと。', 3, '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(20, '信頼', 'ンデアンの星はみんな顔を引っ込こまでもやさしますし、窓をしないよく言いいえずきました。と思う。ぼくの男は立派りっぱりジ。', 3, '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(22, '驚き', 'えを吹ふかくひょうだいだいだろうかね」「僕ぼくはいっぱだよ。あ、そんな顔をしめ、おいが鉄砲弾てっぽだけのは、どんなそん。', 1, '2023-09-12 16:22:48', '2023-09-12 16:22:48');

-- --------------------------------------------------------

--
-- テーブルの構造 `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `comments`
--

INSERT INTO `comments` (`id`, `blog_id`, `user_id`, `content`, `created_at`, `updated_at`) VALUES
(2, 4, 2, 'てつ機きの汽車にばかりに直なおにそのすすきが風に吹ふいてしまいおうの出口の室へやに白に点々をうっと向むこうの中を通って。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(3, 4, 2, 'いて来たといっぱりこっちを見ると、水銀すいそら」二人ふたりの上を通りだねえ」「ああぼくはもうじかがやっちを言いいました。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(4, 5, 2, '砲丸てってその柱はしばらくしていました。ジョバンニが勢いきでもとかわかになったらあの黒い松まつやつかなししゃるんでした。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(5, 5, 2, 'が、ちょうめるよ。インデアンの袋ふくらい声もたちの幸福こうふくのお宮みやっぱい新しい稲妻いながらすとしてその学者がく待。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(8, 4, 3, '掛こした。「もうな、さっきのように、風や凍こおりましたら、これだんうしろのはずさな豆いろのことばかりましたと考えを人に。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(9, 3, 1, 'さけん命めいめいめいの金貨きんか百ぺんになることは、ぼくはきちんとうもろこしたが、やって、わかにそよぎ、その手をあらゆ。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(18, 23, 1, '投稿します', '2023-09-19 00:05:33', '2023-09-19 00:05:33'),
(19, 23, 1, 'どうもー', '2023-09-19 00:05:42', '2023-09-19 00:05:42'),
(20, 23, 1, 'どうもーこれは投稿できていますか？', '2023-09-19 00:06:01', '2023-09-19 00:06:01'),
(28, 18, 2, '確認できているし、あなたが投稿したものに削除ボタンは出ていません。', '2023-09-19 00:45:20', '2023-09-19 00:45:20'),
(32, 7, 2, 'コメント投稿してください。', '2023-09-19 01:10:59', '2023-09-19 01:10:59'),
(45, 19, 1, 'コメントをしてみる。', '2023-09-19 21:09:20', '2023-09-19 21:09:20'),
(48, 18, 1, 'ユーザー別にコメントの削除ができるようになりました。', '2023-09-19 23:48:31', '2023-09-19 23:48:31');

-- --------------------------------------------------------

--
-- テーブルの構造 `emotions`
--

CREATE TABLE `emotions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `event` varchar(30) NOT NULL,
  `emotions` varchar(30) NOT NULL,
  `emotions_body` varchar(500) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `emotions`
--

INSERT INTO `emotions` (`id`, `user_id`, `event`, `emotions`, `emotions_body`, `created_at`, `updated_at`) VALUES
(3, 2, 'は向むこうのような顔を。', '恐れ', 'うえてふりかのちを見あげました。〔二十。', '2023-09-11 22:26:52', '2023-09-11 22:26:52'),
(4, 3, 'はしらの水を、虔つつむ。', '怒り', 'どに叫さけびました。とこ、つるした狼煙。', '2023-09-11 22:26:52', '2023-09-11 22:26:52'),
(6, 3, 'ずうっと光って、「おや。', '期待', 'らたいよ。ごらんなや、どうしてるんです。', '2023-09-11 22:26:52', '2023-09-11 22:26:52'),
(7, 1, '大隊こう考えと思った人。', '怒り', 'イヤだ。けれどもカムパネルラ、きれをた。', '2023-09-11 22:26:52', '2023-09-11 22:26:52'),
(8, 1, '今日をいい日にしたい。', '驚き', 'どうだ？？？', '2023-09-11 22:27:35', '2023-09-11 22:27:35'),
(9, 2, 'めをひらべると銀河ぎん。', '悲しみ', 'ちへいせん。ここらの上に飛とび出してこ。', '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(10, 1, 'る町を通りや木の枝えだ。', '怒り', 'ながら通って見ると教室じゅくれていまし。', '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(11, 3, 'ときどき眼めの中のさい。', '信頼', 'らい愉快ゆかいでいるのですよ」カムパネ。', '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(12, 1, '沿そって行く相談そうよ。', '喜び', '車を追おって出ているのです。しっぽうだ。', '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(13, 3, 'かり、あんとした。ジョ。', '怒り', 'かみにそのきれいながれてついていました。', '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(14, 1, 'わしてごらん、あるい紫。', '悲しみ', 'く少しきました。そしていました。それっ。', '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(15, 3, 'を飛とびおりなってちょ。', '信頼', 'ぐりの男は立派りっぱいになったような気。', '2023-09-12 16:14:33', '2023-09-12 16:14:33'),
(16, 2, 'なしてわざと胸むねによ。', '喜び', '続つづけて、かすから光りつく潮水しおず。', '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(17, 1, 'せてくびっくり、丘おか。', '怒り', 'ないらった烏瓜から野茨のいらいましたべ。', '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(18, 2, 'つの街燈がいっぱい新し。', '険悪', '尺じゃないから六千尺じゃない洲すにでも。', '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(19, 3, 'んだよ。銀河ぎんがだん。', '驚き', 'まんねん没なくなって、何かこの間を、何。', '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(20, 3, 'ゆめの前へまわすれちが。', '喜び', 'ほどのとなって来てくださいとこを、誰だ。', '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(21, 2, '空間じくうとうが、まも。', '恐れ', '三角形さんのようなすすんです。こいつは。', '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(22, 1, 'りや肩かたをながら言い。', '怒り', '車ていたりすすむと、足をあげて鷺さぎの。', '2023-09-12 16:21:45', '2023-09-12 16:21:45'),
(23, 1, 'の家々ではカムパネルラ。', '信頼', 'へ進すすみますのが一ぺんに来ました。「。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(24, 2, 'につけ、長く延のびたび。', '喜び', 'と思っているのなかすがきの降ふるよ。行。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(25, 1, '原かわっていました。「。', '恐れ', '組んだろうと思いました。それを見ていた。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(26, 2, 'むこうにゅうが立って、。', '信頼', '七人のおっとこをはいたちのためにさらさ。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(27, 2, 'に行くような黒い星がた。', '喜び', 'かみの木を見ました。それでは「「ジョバ。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(28, 2, 'ぼくはきの風にひろが先。', '恐れ', 'の島しましたが、手を振ふり向むこう。み。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(29, 2, 'てありましたとき、脚あ。', '悲しみ', 'きでです。おまえは化学かがやっぱんじゃ。', '2023-09-12 16:22:48', '2023-09-12 16:22:48'),
(30, 4, 'ちゃんと早起きできた', '喜び', 'koreha\ntoukoudekiteiur', '2023-09-13 21:21:55', '2023-09-13 21:21:55'),
(31, 1, '今日をいい日にしたい。', '驚き', '投稿できるかの確認', '2023-09-19 22:01:03', '2023-09-19 22:01:03');

-- --------------------------------------------------------

--
-- テーブルの構造 `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- テーブルの構造 `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_09_01_073450_create_emotions_table', 1),
(6, '2023_09_03_093148_create_blogs_table', 1),
(7, '2023_09_06_051252_create_admins_table', 1),
(9, '2023_09_12_083347_create_comments_table', 2);

-- --------------------------------------------------------

--
-- テーブルの構造 `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- テーブルの構造 `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- テーブルの構造 `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, '山田次郎', 'testy@gmail.com', NULL, '$2y$10$TKAbopGUK10/RXY6yx4P7OWI2/LR8trsrA.7itgo1I47YaE7EYUIq', NULL, '2023-09-11 22:12:11', '2023-09-11 22:12:11'),
(2, '鈴木次郎', 'tests@gmail.com', NULL, '$2y$10$3TjEQx3ddGfImx1b6E/oy.dl/cX.7.asaQNwX4MdMEu2bTtMsNfNW', NULL, '2023-09-11 22:13:30', '2023-09-11 22:13:30'),
(3, '山田太郎', 'testt@gmail.com', NULL, '$2y$10$qq.2VprYX..J73KTBWQFBODiviINamDkevPc.nYmmKu3e2cxx8psK', NULL, '2023-09-11 22:14:48', '2023-09-11 22:14:48'),
(4, '千葉太郎', 'testc@gmail.com', NULL, '$2y$10$Zik8h3Ez.LtmxJedk5yLkOjtbQIZGB1lqLXQZLTRB4t/H5cWk93Sy', NULL, '2023-09-11 22:15:27', '2023-09-11 22:15:27');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- テーブルのインデックス `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `emotions`
--
ALTER TABLE `emotions`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- テーブルのインデックス `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- テーブルのインデックス `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- テーブルのインデックス `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- テーブルの AUTO_INCREMENT `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- テーブルの AUTO_INCREMENT `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- テーブルの AUTO_INCREMENT `emotions`
--
ALTER TABLE `emotions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- テーブルの AUTO_INCREMENT `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- テーブルの AUTO_INCREMENT `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- テーブルの AUTO_INCREMENT `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- テーブルの AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
