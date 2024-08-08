const span = document.querySelector(".user span")
// 渲染函数，退出时也会用到
function render() {
    // 获取本地存储的用户数据
    const uPhone = localStorage.getItem("go-phone")
    console.log(uPhone);
    if (uPhone) {
        span.innerHTML = `${uPhone}`
    }
    else {
        span.innerHTML = `登录/注册`
    }
}
render()

// 退出登录
// span.addEventListener("click", function () {
//     localStorage.removeItem("uPhone")
//     render()
// })