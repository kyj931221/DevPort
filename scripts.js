$(document).ready(function() {
    // 모든 컴포넌트 로드를 Promise로 처리
    const loadComponents = [
        $("#content-table").load("./content-table/content-table.html"),
        $("#game-cards").load("./game-cards/game-cards.html"),
        $("#devices").load("./devices/devices.html"),
        $("#sidebar").load("./side-bar/sidebar.html"),
        $("#header").load("./header/header.html"),
        $("#license-award").load("./license-award/license-award.html"),
        $("#my-info").load("./infomation/infomation.html")
    ];

    // 모든 컴포넌트가 로드된 후 실행
    Promise.all(loadComponents).then(() => {
        // content-table.js 동적 로드
        const script = document.createElement("script");
        script.src = "./content-table/content-table.js";
        document.body.appendChild(script);

        // 검색 기능 이벤트 설정
        $(document).on('click', '.search-button', function() {
            const searchTerm = $('.search-input').val().toLowerCase();
            searchGames(searchTerm);
        });

        $(document).on('keypress', '.search-input', function(e) {
            if (e.which === 13) {
                const searchTerm = $(this).val().toLowerCase();
                searchGames(searchTerm);
            }
        });
    });
});

// 사이드바 토글 함수
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// 게임 검색 함수
function searchGames(searchTerm) {
    $('.game-card').each(function() {
        const gameTitle = $(this).find('h2').text().toLowerCase();
        const gameTags = $(this).find('.game-tags span').text().toLowerCase();
        const gameDescription = $(this).find('.game-description').text().toLowerCase();

        if (gameTitle.includes(searchTerm) ||
            gameTags.includes(searchTerm) ||
            gameDescription.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}