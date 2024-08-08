const picData = [
    { url: "./uploads/carousel1.png", title: "GREEN ONLINR汉语国际教育新手教师训练平台" },
    { url: "./uploads/carousel2.png", title: "HSK线上课程" },
    { url: "./uploads/carousel3.png", title: "道阻且长行则将至!" }
]
1
// 获取元素
const img = document.querySelector(".banner .pic img")
const point = document.querySelector(".banner ol")

// 开启定时器
let i = 0;
// 点击圆点跳转图片
point.addEventListener("click", function (e) {
    const li = e.target.closest('li');
    if (li) {
        const index = Array.from(point.children).indexOf(li);
        // console.log(index);
        i = index - 1
        carousel()
    }
})


function carousel() {
    // 确保i在有效范围内  
    i = (i + 1) % picData.length;

    // 等待足够的时间让过渡完成  
    // 改变图片路径  
    img.src = picData[i].url;
    img.alt = picData[i].title;


    // 选出圆点指示器
    // 先删除以前的pointActive
    document.querySelector(".banner ol .pointActive").classList.remove("pointActive")

    // 给当前li添加pointActive
    document.querySelector(`.banner ol li:nth-child(${i + 1})`).classList.add("pointActive")
}
let timerId = setInterval(carousel, 3000)

// 鼠标经过图片和圆点停止定时器
// 清除定时器
point.addEventListener("mouseenter", function () {
    clearInterval(timerId)
})
img.addEventListener("mouseenter", function () {
    clearInterval(timerId)
})

// 鼠标离开打开定时器
point.addEventListener("mouseleave", function () {
    timerId = setInterval(carousel, 3000)
})
img.addEventListener("mouseleave", function () {
    timerId = setInterval(carousel, 3000)
})