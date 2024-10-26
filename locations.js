document.addEventListener('DOMContentLoaded', function() {
    const locationNav = document.querySelector('.nav-item:has(a[href="#"])');
    const locationLink = locationNav.querySelector('.nav-link');
    let isOpen = false;

    // 处理点击事件
    locationLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (!isOpen) {
            // 关闭其他可能打开的下拉菜单
            document.querySelectorAll('.nav-item.active').forEach(item => {
                if (item !== locationNav) {
                    item.classList.remove('active');
                }
            });
        }
        locationNav.classList.toggle('active');
        isOpen = !isOpen;
    });

    // 点击页面其他地方关闭下拉菜单
    document.addEventListener('click', function(e) {
        if (!locationNav.contains(e.target)) {
            locationNav.classList.remove('active');
            isOpen = false;
        }
    });
});