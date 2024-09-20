// 复制提醒
document.addEventListener("copy", function (e) {
    new Vue({
        data: function () {
            this.$notify({
                title: "哎嘿！复制成功",
                message: "",
                position: 'top-right',
                offset: 100,
                showClose: false,
                type: "success"
            });
            return { visible: false }
        }
    })
})

// /* 禁用F12按键并提醒 */
// document.onkeydown = function () {
//     if (window.event && window.event.keyCode == 123) {
//         event.keyCode = 0;
//         event.returnValue = false;
//         new Vue({
//             data: function () {
//                 this.$notify({
//                     title: "啊啊！你干嘛啊！想扒菜鱼的底裤呢？坏！",
//                     message: "",
//                     position: 'top-right',
//                     offset: 50,
//                     showClose: false,
//                     type: "error"
//                 });
//                 return { visible: false }
//             }
//         })
//         return false;
//     }
// };