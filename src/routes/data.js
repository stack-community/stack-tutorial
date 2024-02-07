export const articles = [
    {
        slug: 'welcome',
        title: 'Stackプログラミング言語のチュートリアルへようこそ',
        content: '<p>Stackプログラミング言語は、スタック指向型の強力なプログラミング言語です。<p>\
<p>以下の特徴があります。</p>\
<ol>\
<li>スタック指向型の効率的な実行モデル</li>\
<li>明瞭で分かりやすいエレガントな構文</li>\
<li>便利で拡張性の高い豊富なコマンド</li>\
<li>強力かつ柔軟なデータ型の仕組み</li>\
</ol>\
<p>Stackプログラミング言語では、オンライン実行環境が提供されています。<br />\
Webブラウザが動くPCとネット環境があれば、今すぐStackプログラミングを始めることができます。</p>\
<p>右に表示されているのは、Stackプログラミング言語で「Hello, world!」を出力するサンプルコードです。<br />\
「実行」ボタンを押して、プログラムを動かしてみましょう！</p>\
',
        code: '( (name) var\n\
(Hello, name !) (name) name replace print\n\
) (hello) var\n\
\n\
(world) hello eval',
        next: 'fizzbuzz'
    },
    {
        slug: 'fizzbuzz',
        title: 'FizzBuzz',
        content: '<p>Fizz Buzz（フィズ・バズ）とは、英語圏で行われる言葉遊びです。</p>\
<p>みんなで1から順に数を数えていきます。<br />\
ただし、3の倍数の時は数字の代わりに"Fizz"、5の倍数の時は"Buzz"、そして15の倍数の時は"Fizz Buzz"と言わなければなりません。<br />\
ルールは簡単なのに、実際にやってみると意外と難しい。</p>\
<p>そんなFizz Buzzは、プログラミングの初学者に条件分岐を教える題材としてよく登場します。</p>\
<p>右に表示されているのは、Stackプログラミング言語でFizz Buzzを行うサンプルコードです。</p>\
',
        code: '(\n\
    (i) var\n\
    (Fizz) ()\n\
    i 3 mod 0 equal if\n\
) (fizz) var\n\
\n\
(\n\
    (i) var\n\
    (Buzz) ()\n\
    i 5 mod 0 equal if\n\
) (buzz) var\n\
\n\
1 101 1 range (i) (\n\
\n\
    () (msg) var\n\
    msg i fizz eval concat (msg) var\n\
    msg i buzz eval concat (msg) var\n\
\n\
    (\n\
        i (msg) var\n\
    ) ()\n\
    msg () equal if\n\
    msg print\n\
) for',
        next: 'guess'
    },
    {
        slug: 'guess',
        title: '数あてゲーム',
        content: '<p>計算機と数あてゲームをやってみましょう。</p>\
<p>今回のサンプルコードでは、計算機が1から10000での値から、ランダムで値を一つ選びます。<br />\
計算機がどの値を選んだのか、当ててみてください。</p>\
<p>25回以内に当てられなければゲームオーバー。見事当てることができれば計算機が誉めてくれます。</p>',
        code: '(数あてゲーム ～ 1から10000まで)　print\n\
1 10001 1 range rand (answer) var\n\
0 (i) var \n\
\n\
(\n\
    i 1 add (i) var\n\
    i (回目のチャレンジ) concat print (> ) input (guess) var\n\
    (\n\
        (正解!おめでとうございます) concat print\n\
        0 exit\n\
    ) (\n\
        ((大き過ぎ!) print)\n\
        ((小さ過ぎ!) print)\n\
        answer guess less answer\n\
        guess equal not and if\n\
    )\n\
    guess answer equal if\n\
)\n\
(i 25 less) while\n\
(時間切れ。正解は)　answer concat (でした) concat print',
        next: null
    }
];
