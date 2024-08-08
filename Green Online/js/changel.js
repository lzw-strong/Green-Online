// JavaScript 代码来切换显示/隐藏语言选择器  
document.querySelector('.nav ul .change').addEventListener('click', function () {
    var selector = document.getElementById('languageSelector');
    selector.classList.toggle('show');
});

document.getElementById('closeLanguageSelector').addEventListener('click', function () {
    var selector = document.getElementById('languageSelector');
    selector.classList.remove('show');
});  