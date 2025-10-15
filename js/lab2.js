function showDetails() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
<p><strong>Тема:</strong> КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>
<p><strong>Мета:</strong> придбати практичні навички роботи з селекторами, ідентифікаторами, списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів.</p>
<p><strong>Місце розташування:</strong></p>
<ul>
      <a href="https://github.com/klynxlx/IS-32_appWEB-LinnykKatya-FIOT-2025-" target="_blank">посилання на репозиторій веб застосунка</a><br>
        <a href="https://klynxlx.github.io/IS-32_appWEB-LinnykKatya-FIOT-2025-/" target="_blank">посилання на живу сторінку веб-застосунка</a><br>
        <a href="https://github.com/klynxlx/IS-32_INDEPENDENT-LinnykKatya-FIOT-2025" target="_blank">посилання на репозиторій самостійної роботи</a><br>
        <a href="https://klynxlx.github.io/IS-32_INDEPENDENT-LinnykKatya-FIOT-2025/" target="_blank">посилання на живу сторінку самостійної роботи</a>
        <a href="https://klynxlx.github.io/IS-32_INDEPENDENT-LinnykKatya-FIOT-2025/" target="_blank">посилання на живу сторінку звітного html-докумсенту</a>
</ul> `
;

}
function showStyles() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <p><strong>Вбудований стиль (Inline CSS)<p>
        <p>Стилі додаються безпосередньо в тег HTML за допомогою атрибута style.</p>
        <img src="./images/image.png" alt="Placeholder Image" width="700">   
        <p><strong>Внутрішній стиль (Internal CSS)<p>   
        <p>Стилі додаються у секцію style всередині елемента head HTML-документа.</p>      
        <img src="./images/s.jpg" alt="Placeholder Image" width="300"> 
        <p><strong>Зовнішній стиль (External CSS)<p> 
        <p>Стилі зберігаються в окремому файлі з розширенням .css, який підключається до HTML-документа за допомогою тега link.head HTML-документа.</p>  
        <img src="./images/ss.jpg" alt="Placeholder Image" width="700"> `

    ;
}

function showTagSelector() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <img src="./images/photo_2024-09-26_21-39-36.jpg" alt="Placeholder Image" width="700">
        <img src="./images/tag.jpg" alt="Placeholder Image" width="700">
        <p>селектор тегу</p>`
    ;
}

function showClassSelector() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <img src="./images/photo_2024-09-26_20-57-06.jpg" alt="Placeholder Image" width="300">
      <img src="./images/class.jpg" alt="Placeholder Image" width="700">`
    ;
}

function showIDSelector() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <img src="./images/photo_2024-09-26_22-04-13.jpg" alt="Placeholder Image" width="700">
        <img src="./images/photo_2024-09-26_22-04-20.jpg" alt="Placeholder Image" width="700">
        <p>Cелектори ідентифікаторів.</p>`
    ;
}
function showOtherSelector() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <img src="./images/photo_2024-09-26_22-08-01.jpg" alt="Placeholder Image" width="700">
        <p> селектори нащадків.</p>


        <img src="./images/photo_2024-09-26_22-09-54.jpg" alt="Placeholder Image" width="700">
        <img src="./images/photo_2024-09-26_22-13-27.jpg" alt="Placeholder Image" width="700">
        <p> селектор групування.</p>`
    ;
}

function showCSS() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <p> шрифти.</p> 
        <img src="./images/шрифти.jpg" alt="шрифти" width="700">
        
        <p> контури.</p> 
        <img src="./images/контури.jpg" alt="Placeholder Image" width="700">

        <p> фон.</p> 
        <img src="./images/фон.jpg" alt="Placeholder Image" width="700">
        
        <p> колір тексту.</p>
        <img src="./images/колір тексту.jpg" alt="Placeholder Image" width="700">

        <p> CSS-властивості для таблиць.</p>
        <img src="./images/table.jpg" alt="Placeholder Image" width="700">

        <p> CSS просунутий.</p>
        <img src="./images/photo_2024-09-26_23-17-20.jpg" alt="Placeholder Image" width="700">
        <img src="./images/css2.jpg" alt="Placeholder Image" width="700">`
       
    ;
}

function showConclusion2() {
    var outputDiv = document.getElementById("output");
    var conclusion = `
        <p><strong>Висновок:</strong> Під час виконання ЛР №2 я придбала практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів</p>`
    ;
    outputDiv.innerHTML = conclusion;
}