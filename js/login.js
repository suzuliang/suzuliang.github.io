function handleLoginSubmit(event) {
    event.preventDefault();

    // 获取用户输入的昵称和密码
    var nickname = document.getElementById("nickname").value;
    var password = document.getElementById("password").value;

    // 预设的用户名和密码
    var validUsername = "username";
    var validPassword = "123456";

    // 检查用户名和密码是否匹配
    if (nickname === validUsername && password === validPassword) {
        alert("登录成功！");
        window.location.href = "./index.html";
    } else {
        alert("用户名或密码错误，请重试！");
    }
}