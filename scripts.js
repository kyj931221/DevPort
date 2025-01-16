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

// 게임 카드 로드
$(document).ready(function () {
    $("#game-cards").load("./game-cards/game-cards.html");
});

// 게임 카드 로드
$(document).ready(function () {
    $("#devices").load("./devices/devices.html");
});

// 사이드바 로드
$(document).ready(function () {
    $("#sidebar").load("./side-bar/sidebar.html");
});

// 헤더 로드
$(document).ready(function () {
    $("#header").load("./header/header.html");
});

// 게임 테이블
$(document).ready(function () {
    $("#content-table").load("./content-table/content-table.html");
});

// 자격증 및 수상 경력
$(document).ready(function () {
    $("#license-award").load("./license-award/license-award.html");
});

// Infomation
$(document).ready(function () {
    $("#my-info").load("./infomation/infomation.html");
});