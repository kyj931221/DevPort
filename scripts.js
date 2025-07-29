$(document).ready(function() {

    // --- 1. 공통 컴포넌트(헤더, 사이드바) 로드 ---
    // 모든 load 경로 앞에 ./ 추가
    $('#header-container').load('./header/header.html');
    $('#sidebar-container').load('./side-bar/sidebar.html', function() {
        $('#sidebar-container a').on('click', function(e) {
            e.preventDefault();
            // href 속성은 상대적이므로 그대로 둡니다.
            loadContent($(this).attr('href'));
        });
    });

    // --- 2. '준비 중' 팝업 기능 ---
    // searchGames 함수에서 이곳으로 위치를 옮겼습니다.
    $(document).on('click', '.coming-soon-btn', function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.popup-notification').remove();

        const popup = $('<div class="popup-notification">서비스 준비 중입니다.</div>');
        $('body').append(popup);

        setTimeout(function() {
            popup.css('opacity', 1);
        }, 10);

        setTimeout(function() {
            popup.css('opacity', 0);
            setTimeout(function() {
                popup.remove();
            }, 500);
        }, 2000);
    });

    // --- 3. 초기 페이지 로드 ---
    loadContent('./my-info.html');
});

/**
 * 지정된 URL의 콘텐츠를 메인 영역에 불러오는 함수
 */
function loadContent(url) {
    $('#main-content').load(url, function(response, status, xhr) {
        if (status === "error") {
            $('#main-content').html("<h2>페이지를 불러올 수 없습니다.</h2><p>경로를 확인해주세요: " + url + "</p>");
            return;
        }

        if (url.includes('content-table.html')) {
            $.getScript('./content-table/content-table.js');
        }
        else if (url.includes('game-cards.html')) {
            setupGameSearch();
        }
    });
}

/**
 * 게임 카드 검색 기능을 설정하는 함수
 */
function setupGameSearch() {
    $(document).off('click', '.search-button').on('click', '.search-button', function() {
        const searchTerm = $('.search-input').val().toLowerCase();
        searchGames(searchTerm);
    });

    $(document).off('keypress', '.search-input').on('keypress', '.search-input', function(e) {
        if (e.which === 13) {
            const searchTerm = $(this).val().toLowerCase();
            searchGames(searchTerm);
        }
    });
}

/**
 * 검색어에 따라 게임 카드를 필터링하는 함수
 */
function searchGames(searchTerm) {
    $('.game-card').each(function() {
        const cardText = $(this).text().toLowerCase();
        if (cardText.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}