$(document).ready(function() {
    // 검색 기능 구현
    $('.search-button').click(function() {
        const searchTerm = $('.search-input').val().toLowerCase();
        searchGames(searchTerm);
    });

    // 엔터 키로 검색
    $('.search-input').keypress(function(e) {
        if (e.which === 13) {
            const searchTerm = $(this).val().toLowerCase();
            searchGames(searchTerm);
        }
    });

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

    // Play Now 버튼 클릭 이벤트 (옵션)
    $('.play-button').click(function(e) {
        const gameUrl = $(this).attr('data-game-url');
        // 게임 URL이 유효한지 확인 (옵션)
        if (!gameUrl) {
            e.preventDefault();
            console.error('Game URL not found');
            return;
        }

        // 클릭 로깅이나 추가 기능이 필요한 경우 여기에 구현
        console.log(`Loading game from: ${gameUrl}`);
    });
});