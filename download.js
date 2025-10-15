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

