window.addEventListener('load', function () {
    var img = document.querySelector('.logo')
    if(img) {
        var parent = img.parentElement
        if(parent.href) {
            parent.href = 'https://developer.ame.calindra.com.br/'
        }
    }
})
