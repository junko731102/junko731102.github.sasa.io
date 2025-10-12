//アラートコード
         const linkElement = document.getElementById('alert');

        // 2. リンクがクリックされたときのイベントリスナーを追加
        linkElement.addEventListener('click', function(event) {
            // ページ遷移（リロード）を防ぐ
            event.preventDefault();

            // 3. アラートを表示
            alert('警告\nセキュリティ上の理由で、store.apple.comへのアクセスがブロックされました。');
        });







        //再読み込みコード
        const TARGET_BUTTON_ID = "saiyomikomi";

        const reloadButton = document.getElementById(TARGET_BUTTON_ID);

        if (reloadButton) {
            reloadButton.addEventListener('click', function(event) {
                event.preventDefault();
                location.reload();
            });
        }


        // Bootstrapのカスタムバリデーション用JavaScript

(function () {
    'use strict'

    // カスタムバリデーションを適用したい全フォームを取得
    const forms = document.querySelectorAll('.needs-validation')

    // ループして検証スタイルを適用
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            // フォームが有効でない場合（バリデーションエラーがある場合）
            if (!form.checkValidity()) {
                event.preventDefault() // 送信を中止
                event.stopPropagation() // イベントの伝播を停止
            }
            // was-validatedクラスを追加して、検証フィードバックを表示
            form.classList.add('was-validated')
        }, false)
    })
})()

console.log(forms)

