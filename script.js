// 調整可能な変数: タイマーの初期時間 (秒単位)
        // 3分 = 3 * 60 = 180秒
        let timeRemaining = 3 * 60; 
        
        // HTMLの要素 (id="timer"の<div>) を取得
        const timerDisplay = document.getElementById('timer');

        /**
         * 秒数を「分:秒」の形式に変換して表示する関数
         * @param {number} totalSeconds - 残り時間 (秒)
         */
        function updateDisplay(totalSeconds) {
            // 分を計算: 秒数を60で割って小数点以下を切り捨てる
            const minutes = Math.floor(totalSeconds / 60); 
            
            // 秒を計算: 秒数を60で割った余り
            const seconds = totalSeconds % 60; 

            // 表示形式の整形: 秒が1桁の場合 (例: 5) には、前に '0' をつける (例: '05')
            const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

            // HTMLの表示を更新
            timerDisplay.textContent = `${minutes}:${formattedSeconds}`;
        }

        // 1秒ごとに実行する関数を設定
        // ここがタイマーの核となる部分です。
        const timerInterval = setInterval(() => {
            // 残り時間を1秒減らす
            timeRemaining--; 

            // 画面表示を更新
            updateDisplay(timeRemaining);

            // 終了条件の確認
            if (timeRemaining <= 0) {
                // タイマーを停止 (これがないとマイナスになっても止まりません)
                clearInterval(timerInterval); 
                
                // 終了時のメッセージを表示
                timerDisplay.textContent = "error";
            }
        }, 1000); // 1000ミリ秒 = 1秒ごとに実行


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
