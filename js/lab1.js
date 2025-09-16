function toggleDescription() {
    var outputDiv = document.getElementById("output");
    var currentContent = outputDiv.innerHTML.trim();
    var description = `
        <p><strong>Опис предметного середовища для проєкту сайту для перегляду фільмів та серіалів</strong></p>
        <p><strong>Тема:</strong><br>
        Створення веб-сайту для перегляду популярних фільмів та серіалів онлайн з можливістю сортування за категоріями, пошуку контенту та отримання інформації про кожен фільм або серіал.</p>

        <p><strong>Мета:</strong><br>
        Розробити інтерактивний веб-сайт, де користувачі зможуть переглядати популярні фільми та серіали онлайн, дізнаватися більше про кожен контент (опис, жанр, рік випуску), а також використовувати різні фільтри та категорії для зручного пошуку. Сайт повинен мати простий і зручний інтерфейс, який адаптується до різних типів пристроїв (десктопів, планшетів, смартфонів).</p>

        <p><strong>Опис бізнес-логіки:</strong></p>
        <ul>
            <li>Контент (фільми та серіали): Сайт показує користувачам список популярних фільмів та серіалів. Кожен фільм/серіал має постер, назву, рік випуску та жанр.</li>
            <li>Категорії: Фільми та серіали поділені на жанрові категорії.</li>
            <li>Пошук: Сайт надає можливість пошуку контенту за назвою.</li>
            <li>Список популярного контенту: Відображаються найпопулярніші фільми та серіали.</li>
            <li>Підтримка користувачів: Сайт надає технічну підтримку та посилання на FAQ.</li>
        </ul>

        <p><strong>Сценарій користування:</strong></p>
        <ol>
            <li>Користувач заходить на сайт і бачить категорії популярних фільмів та серіалів.</li>
            <li>Користувач може натиснути на постер фільму/серіалу для перегляду детальної інформації.</li>
            <li>Функція пошуку дозволяє знайти конкретний фільм або серіал за назвою.</li>
            <li>Користувач може сортувати контент за категоріями, як-от: Фантастика, Драма тощо.</li>
            <li>Користувач може звернутися до підтримки або переглянути FAQ.</li>
        </ol>
    `;
    outputDiv.innerHTML = (currentContent === '<p>Місце виведення інформації</p>' || currentContent === '') ? description : '<p>Місце виведення інформації</p>';
}

function showTopicDetails() {
    var outputDiv = document.getElementById("output");
    var topicDetails = `
       <p><strong>Тема:</strong> СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.<br>
        РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.<br><br>
        <strong>Мета:</strong> придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами.<br>
        Створити шаблон звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт.<br><br>
        <strong>Місце розташування:</strong> <a href="https://github.com/klynxlx/IS-32_appWEB-LinnykKatya-FIOT-2025-" target="_blank">посилання на репозиторій веб застосунка</a><br>
        <a href="https://klynxlx.github.io/web_labs/" target="_blank">посилання на живу сторінку веб-застосунка</a><br>
        <a href="https://github.com/klynxlx/IS-32_INDEPENDENT-LinnykKatya-FIOT-2025" target="_blank">посилання на репозиторій самостійної роботи</a><br>
        <a href="https://klynxlx.github.io/IS-32_INDEPENDENT-LinnykKatya-FIOT-2025/" target="_blank">посилання на живу сторінку самостійної роботи</a>
    `;
    outputDiv.innerHTML = topicDetails;
}

function showTableCode() {
    var outputDiv = document.getElementById("output");
    var tableCode = `
        <img src="./images/table1.jpg" alt="Placeholder Image" width="300">
        <img src="./images/table2.jpg" alt="Placeholder Image" width="1000">
       <h1>Теги та атрибути таблиць</h1>

        <p>
            У HTML таблиці створюються за допомогою спеціальних тегів:
        </p>

        <ul>
            <li><b>&lt;table&gt;</b> — основний контейнер таблиці.</li>
            <li><b>&lt;tr&gt;</b> (table row) — рядок таблиці.</li>
            <li><b>&lt;td&gt;</b> (table data) — комірка (звичайна клітинка).</li>
            <li><b>&lt;th&gt;</b> (table header) — комірка-заголовок (зазвичай виділяється жирним).</li>
            <li><b>&lt;caption&gt;</b> — заголовок таблиці (назва зверху).</li>
            <li><b>&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</b> — логічне розділення таблиці на шапку, тіло та підвал.</li>
        </ul>

        <h2>Атрибути таблиць:</h2>
        <ul>
            <li><b>border</b> — товщина рамки (наприклад, <code>border="1"</code>).</li>
            <li><b>cellpadding</b> — відстань від межі клітинки до її вмісту.</li>
            <li><b>cellspacing</b> — відстань між клітинками.</li>
            <li><b>rowspan</b> — об’єднання клітинок по рядках.</li>
            <li><b>colspan</b> — об’єднання клітинок по стовпцях.</li>
            <li><b>width</b>, <b>height</b> — ширина та висота таблиці або клітинок.</li>
        </ul>
    `;
    outputDiv.innerHTML = tableCode;
}

function showListCode() {
    var outputDiv = document.getElementById("output");
    var listCode = `
        <img src="./images/spusok.jpg" alt="Placeholder Image" width="300">
        <img src="./images/spusok1.jpg" alt="Placeholder Image" width="300">
         <h1>Теги та атрибути для створення списків</h1>

        <h2>Види списків:</h2>

        <h3>1. Маркірований список</h3>
        <p>
            Створюється тегом <b>&lt;ul&gt;</b> (unordered list).  
            Кожен пункт списку — <b>&lt;li&gt;</b> (list item).  
            Атрибут <b>type</b> (устарілий, замінений CSS) дозволяє задати маркери: <code>disc</code>, <code>circle</code>, <code>square</code>.
        </p>
        <pre>
&lt;ul&gt;
    &lt;li&gt;Фантастика&lt;/li&gt;
    &lt;li&gt;Драма&lt;/li&gt;
    &lt;li&gt;Бойовик&lt;/li&gt;
&lt;/ul&gt;
        </pre>

        <h3>2. Нумерований список</h3>
        <p>
            Створюється тегом <b>&lt;ol&gt;</b> (ordered list).  
            Атрибути:  
        </p>
        <ul>
            <li><b>type</b> — стиль нумерації (<code>1</code>, <code>A</code>, <code>a</code>, <code>I</code>, <code>i</code>).</li>
            <li><b>start</b> — з якого числа почати.</li>
            <li><b>reversed</b> — відлік у зворотному порядку.</li>
        </ul>
        <pre>
&lt;ol type="I" start="3"&gt;
    &lt;li&gt;Фантастика&lt;/li&gt;
    &lt;li&gt;Драма&lt;/li&gt;
    &lt;li&gt;Бойовик&lt;/li&gt;
&lt;/ol&gt;
        </pre>

        <h3>3. Список визначень</h3>
        <p>
            Створюється тегом <b>&lt;dl&gt;</b> (description list).  
            Елементи:  
        </p>
        <ul>
            <li><b>&lt;dt&gt;</b> — термін (назва).</li>
            <li><b>&lt;dd&gt;</b> — його опис.</li>
        </ul>
        <pre>
&lt;dl&gt;
    &lt;dt&gt;Фантастика&lt;/dt&gt;
    &lt;dd&gt;Жанр, що описує вигадані світи та події.&lt;/dd&gt;
&lt;/dl&gt;
        </pre>
    `;
    outputDiv.innerHTML = listCode;
}

function showImage() {
    var outputDiv = document.getElementById("output");
    var imageCode = `
        <img src="./images/photo_2024-09-20_12-46-05.jpg" alt="Placeholder Image" width="300">
        <h1>Атрибути зображень</h1>

        <p>
            Зображення вставляються тегом <b>&lt;img&gt;</b>, який є <b>порожнім тегом</b> (не має закриваючого).
        </p>

        <h2>Основні атрибути:</h2>
        <ul>
            <li><b>src</b> (source) — шлях до зображення (локальний або URL).</li>
            <li><b>alt</b> (alternative text) — альтернативний текст, який відображається, якщо картинка недоступна (важливий для SEO та доступності).</li>
            <li><b>width</b> — ширина зображення (в пікселях або %).</li>
            <li><b>height</b> — висота зображення.</li>
            <li><b>title</b> — підказка при наведенні курсора.</li>
        </ul>
    `;
    outputDiv.innerHTML = imageCode;
}

function showConclusion() {
    var outputDiv = document.getElementById("output");
    var conclusion = `
        <p><strong>Висновок:</strong> Під час виконання ЛР №1 я набула практичних навичок зі створення структури HTML-документу та роботи з таблицями, списками, зображеннями.</p>
    `;
    outputDiv.innerHTML = conclusion;
}