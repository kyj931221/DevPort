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

// 게임 테이블 로드
$(document).ready(function () {
    $("#content-table").load("./content-table/content-table.html", function () {
        // 외부 HTML이 로드된 후 JavaScript 파일을 실행
        const script = document.createElement("script");
        script.src = "./content-table/content-table.js"; // content-table.js를 동적으로 추가
        document.body.appendChild(script);
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
// 타이틀
$(document).ready(function () {
    $("#header").load("./header/header.html");
});
// 검색기능
$(document).ready(function () {
    $("#search-bar").load("searchbar.html");
});
// 사이드 메뉴 기능
$(document).ready(function () {
    $("#sidebar").load("./side-bar/sidebar.html");
});
// 게임 테이블
$(document).ready(function () {
    $("#content-table").load("./content-table/content-table.html");
});
// 게임 리스트
$(document).ready(function () {
    $("#game-content").load("game-content.html");
});
// 자격증 및 수상경력
$(document).ready(function () {
    $("#license-award").load("./license-award/license-award.html");
});
// Infomation
$(document).ready(function () {
    $("#my-info").load("./infomation/infomation.html");
});