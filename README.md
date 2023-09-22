# 心の森林（PHP自作）
初めまして、新人エンジニアのkejikodoです。    
「心の森林」というアプリをlaravel10 react18 を使用して作成しました。

## 概要
- 自分の感情を思うままに記録ができる日記ノートと感情を他の仲間と共有できるブログサイトを合体させたサイトを作成しました。    
 - マルチログイン機能を実装しており、管理者ユーザーと一般ユーザーに分け、それぞれでログインできるようにしています。
 

## 使用方法
- 管理者ユーザー     
1. 登録された一般ユーザーの一覧表示、削除ができるようになっています。     
-**テストアカウント：     メールアドレス：kaihatsu@gmail.com     パスワード：KaihatsuPass0906**

- 一般ユーザー　　　　　
1.想いノートという画面で思うがままに感情を記録できます。こちらでは、感情の投稿、更新、削除ができるようになっています。    なお、想いノートに関しては、各ユーザーごとに管理しているので自分が残した日記を誰かに見られてしまう心配はありません。

2.心のひろばという画面で他の一般ユーザーと今の想いを共有できます。　こちらも想いノートと同じく、感情の投稿、更新、削除機能に加え、コメント登録ができるようになっています。　なお、投稿の更新、削除機能に関しては、実際に感情を投稿したユーザーのみが行えるようになっています。


-**テストアカウント１：メールアドレス：testy@gmail.com  　パスワード：TestY0906**

-**テストアカウント２：メールアドレス：tests@gmail.com    パスワード：TestS0906**


## 開発環境
XAMPP/MySQL/lavarel10/React

## データベース
お使いのphpMyAdminにDB.sqlをインポートしていただければお使いいただけるようになるはずです。
