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

$(document).ready(function () {
    $("#nav-bar").load("sidebar.html");
});

$(document).ready(function () {
    $("#game-list").load("gamelist.html");
});