function searchGames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const gameBoxes = document.querySelectorAll('.game-box');

    gameBoxes.forEach(box => {
        const title = box.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            box.style.display = 'flex'; // 검색어와 일치하는 경우 박스를 보이기
            box.classList.add('highlight'); // 강조 효과 추가
        } else {
            box.style.display = 'none'; // 검색어와 일치하지 않는 경우 숨기기
            box.classList.remove('highlight'); // 강조 효과 제거
        }
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
// 타이틀
$(document).ready(function () {
    $("#header").load("header.html");
});
// 검색기능
$(document).ready(function () {
    $("#search-bar").load("searchbar.html");
});
// 사이드 메뉴 기능
$(document).ready(function () {
    $("#nav-bar").load("sidebar.html");
});
// 게임 리스트
$(document).ready(function () {
    $("#game-list").load("gamelist.html");
});