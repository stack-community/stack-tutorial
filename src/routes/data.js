export const articles = [
    {
        slug: 'welcome',
        title: 'Stackプログラミング言語のチュートリアルへようこそ',
        content: `
Stackプログラミング言語は、スタック指向型の強力なプログラミング言語です。  
以下の特徴があります。  

1. スタック指向型の効率的な実行モデル
2. 明瞭で分かりやすいエレガントな構文
3. 便利で拡張性の高い豊富なコマンド
4. 強力かつ柔軟なデータ型の仕組み

<p>Stackプログラミング言語では、オンライン実行環境が提供されています。  
Webブラウザが動くPCとネット環境があれば、今すぐStackプログラミングを始めることができます。  

右に表示されているのは、Stackプログラミング言語で「Hello, world!」を出力するサンプルコードです。  
「実行」ボタンを押して、プログラムを動かしてみましょう！
`,
        code: `( (name) var
    (Hello, name !) (name) name replace print 
) (hello) var

(world) hello eval
`,
        next: 'fizzbuzz'
    },
    {
        slug: 'fizzbuzz',
        title: 'FizzBuzz',
        content: `
Fizz Buzz（フィズ・バズ）とは、英語圏で行われる言葉遊びです。  
みんなで1から順に数を数えていきます。  
ただし、3の倍数の時は数字の代わりに"Fizz"、5の倍数の時は"Buzz"、そして15の倍数の時は"Fizz Buzz"と言わなければなりません。  
ルールは簡単なのに、実際にやってみると意外と難しい。  

そんなFizz Buzzは、プログラミングの初学者に条件分岐を教える題材としてよく登場します。  
右に表示されているのは、Stackプログラミング言語でFizz Buzzを行うサンプルコードです。
`,
        code: `(
    (i) var 
    (Fizz) () 
    i 3 mod 0 equal if
) (fizz) var

(
    (i) var 
    (Buzz) () 
    i 5 mod 0 equal if
) (buzz) var

1 101 1 range (i) (

    () (msg) var
    msg i fizz eval concat (msg) var
    msg i buzz eval concat (msg) var

    (
        i (msg) var
    ) ()
    msg () equal if
    msg print
) for
`,
        next: 'guess'
    },
    {
        slug: 'guess',
        title: '数あてゲーム',
        content: `
計算機と数あてゲームをやってみましょう。  
今回のサンプルコードでは、計算機が1から10000での値から、ランダムで値を一つ選びます。  
計算機がどの値を選んだのか、当ててみてください。  

25回以内に当てられなければゲームオーバー。  
見事当てることができれば、計算機が誉めてくれます。
`,
        code: `(数あてゲーム ～ 1から10000まで)　print
1 10001 1 range rand (answer) var
0 (i) var 

(
    i 1 add (i) var
    i (回目のチャレンジ) concat print (> ) input (guess) var 
    (
        (正解!おめでとうございます) concat print
        0 exit
    ) (
        ((大き過ぎ!) print)
        ((小さ過ぎ!) print)
        answer guess less answer
        guess equal not and if
    ) 
    guess answer equal if
)
(i 25 less) while
(時間切れ。正解は)　answer concat (でした) concat print
`,
        next: null
    }
];
