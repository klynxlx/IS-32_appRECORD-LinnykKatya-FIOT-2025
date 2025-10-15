function showDetails3() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
<p><strong>Тема:</strong> ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
<p><strong>Мета:</strong> ⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX   
</p>
<p><strong>Місце розташування:</strong></p>
<ul>
        <a href="https://github.com/klynxlx/IS-32_appWEB-LinnykKatya-FIOT-2025-" target="_blank">посилання на репозиторій веб застосунка</a><br>
        <a href="https://klynxlx.github.io/IS-32_appWEB-LinnykKatya-FIOT-2025-/" target="_blank">посилання на живу сторінку веб-застосунка</a><br>
        <a href="https://github.com/klynxlx/IS-32_INDEPENDENT-LinnykKatya-FIOT-2025" target="_blank">посилання на репозиторій самостійної роботи</a><br>
        <a href="https://klynxlx.github.io/IS-32_INDEPENDENT-LinnykKatya-FIOT-2025/" target="_blank">посилання на живу сторінку самостійної роботи</a>
        <a href="https://klynxlx.github.io/IS-32_INDEPENDENT-LinnykKatya-FIOT-2025/" target="_blank">посилання на живу сторінку звітного html-докумсенту</a>
</ul>`
;
}
function Task1() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
            <img src="./images/maket1.jpg" alt="Placeholder Image" width="700">
            <img src="./images/maket2.jpg" alt="Placeholder Image" width="700">
            <img src="./images/code1.jpg" alt="Placeholder Image" width="700">
            <img src="./images/code2.jpg" alt="Placeholder Image" width="700">`
        ;
    }
    function showFixedTable() {
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
        <a href="file:///C:/Users/katun/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/uni/web/IS-32_appRECORD-LinnykKatya-FIOT-2025/lab3task2/fixedTable.html">фіксована таблична верстка</a>
        <img src="./images/Ftable.jpg" alt="Placeholder Image" width="700">
                `
            ;
        }
    function showGumTable() {
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
            <a href="file:///C:/Users/katun/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/uni/web/IS-32_appRECORD-LinnykKatya-FIOT-2025/lab3task2/GumTable.html">гумова таблична верстка</a>
            <img src="./images/Gtable.jpg" alt="Placeholder Image" width="700">
                    `
                ;
            }
    function showFixedBlock() {
                var outputDiv = document.getElementById("output");
                outputDiv.innerHTML = `
                <a href="file:///C:/Users/katun/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/uni/web/IS-32_appRECORD-LinnykKatya-FIOT-2025/lab3task2/fixedBlock.html">фіксована блокова верстка</a>
                <img src="./images/Fblock.jpg" alt="Placeholder Image" width="700">
                        `
                    ;
                }
    function showGumBlock() {
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
            <a href="file:///C:/Users/katun/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/uni/web/IS-32_appRECORD-LinnykKatya-FIOT-2025/lab3task2/GumBlock.html">гумова блокова верстка</a>
            <img src="./images/Gblock.jpg" alt="Placeholder Image" width="700">
                    `
                ;
            }

         function showConclusion3() {
                            var outputDiv = document.getElementById("output");
                            var conclusion = `
                                <p><strong>Висновок:</strong> Під час виконання ЛР №3 я придбала практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувала переваги та недоліки типів макетів веб-сторінок, придбала практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX.    </p>
                                <p> <b>Веб-додатки на основі таблиць: </b></p>
                            <ul>
                          <li> Переваги: простота, сумісність, легке вирівнювання.</li>
                            <li> Недоліки: погана адаптивність, складність підтримки, несемантична структура.</li>

                                <p><b> Веб-додатки на основі блоків:</b></p>

                          <li>Переваги: гнучкість, адаптивність, сучасний дизайн.</li>
                          <li>Недоліки: вимагають більше знань та часу на налаштування.</li>
                          </ul>
                                `
                            ;
                            outputDiv.innerHTML = conclusion;
                        }             