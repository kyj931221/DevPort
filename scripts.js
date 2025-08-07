$(document).ready(function() {

    // --- 시작 메뉴 및 헤더 로드 ---
    $('#start-menu-container').load('./side-bar/sidebar.html', function() {

        const menuContainer = $(this);

        // 1. 일반 메뉴 항목 클릭 (콘텐츠 교체)
        menuContainer.on('click', 'a:not(.submenu-toggle, .view-in-panel)', function(e) {
            e.preventDefault();
            loadContent($(this).attr('href'));
            closeAllMenus();
        });

        // 2. 하위 메뉴가 있는 항목 클릭 (메뉴 열기/닫기)
        menuContainer.on('click', '.submenu-toggle', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const $container = $(this).parent(); // .submenu-container (li)
            const $submenu = $container.find('.submenu');

            // 다른 하위 메뉴들은 먼저 닫습니다.
            $container.siblings().removeClass('open');

            // --- 하위 메뉴 위치 계산 로직 ---
            const windowHeight = $(window).height();
            const togglePosition = this.getBoundingClientRect(); // 클릭된 메뉴의 화면상 위치
            const submenuHeight = $submenu.outerHeight(); // 하위 메뉴의 실제 높이

            // 만약 메뉴의 시작 위치 + 높이가 화면 높이를 넘어가면
            if (togglePosition.top + submenuHeight > windowHeight) {
                // 위로 여는 클래스를 추가합니다.
                $submenu.addClass('submenu-up');
            } else {
                // 그렇지 않으면 아래로 여는 클래스를 제거합니다 (기본값).
                $submenu.removeClass('submenu-up');
            }

            // 이제 실제로 메뉴를 열거나 닫습니다.
            $container.toggleClass('open');
        });

        // 3. 뷰어를 여는 하위 메뉴 항목 클릭
        menuContainer.on('click', '.view-in-panel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const fileId = $(this).data('fileid');
            if (fileId) {
                openRightViewer(fileId);
            }
            closeAllMenus();
        });
    });

    // --- '준비 중' 팝업 기능 ---
    $(document).on('click', '.coming-soon-btn', function(e) {
        // 아래 console.log 한 줄을 추가합니다.
        //console.log("버튼 클릭됨!");
        e.preventDefault();
        e.stopPropagation();
        $('.popup-notification').remove();
        const popup = $('<div class="popup-notification">서비스 준비 중입니다.</div>');
        $('body').append(popup);
        setTimeout(() => popup.css('opacity', 1), 10);
        setTimeout(() => {
            popup.css('opacity', 0);
            setTimeout(() => popup.remove(), 500);
        }, 2000);
    });

    // --- 전역 클릭 이벤트 처리 ---

    // 시작 버튼 클릭
    $('#start-button').on('click', function(e) {
        e.stopPropagation();
        $('#start-menu-container').toggleClass('open');
        if (!$('#start-menu-container').hasClass('open')) {
            $('.submenu-container').removeClass('open');
        }
    });

    // 뷰어 닫기 버튼
    $('#viewer-close-btn').on('click', function() {
        $('#right-viewer-panel').removeClass('open');
        $('#right-viewer-panel iframe').attr('src', ''); // Iframe 내용 초기화
    });

    // 화면의 다른 곳 클릭 시 메뉴 닫기
    $(document).on('click', function() {
        closeAllMenus();
    });

    // 메뉴 영역 클릭 시 전파 방지
    $('#start-menu-container').on('click', function(e) {
        e.stopPropagation();
    });

    // --- 초기 페이지 로드 ---
    loadContent('./my-info.html');
});


// === 함수 정의 ===

function loadContent(url) {
    if (!url || url === '#') return;
    $('#main-content').load(url, function(response, status, xhr) {
        if (status === "error") {
            $('#main-content').html(`<h2>페이지 로딩 실패</h2><p>${url} 경로를 확인해주세요.</p>`);
            return;
        }
        if (url.includes('game-cards.html')) {
            setupGameSearch();
        }
    });
}

function openRightViewer(fileId) {
    const viewerUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    const panel = $('#right-viewer-panel');
    panel.find('iframe').attr('src', viewerUrl);
    panel.addClass('open');
}

function closeAllMenus() {
    $('#start-menu-container').removeClass('open');
    $('.submenu-container').removeClass('open');
}

function setupGameSearch() {
    // 이벤트 중복 방지를 위해 기존 이벤트 제거 후 다시 설정
    $('#main-content').off('click', '.search-button').on('click', '.search-button', function() {
        const searchTerm = $('.search-input').val().toLowerCase();
        searchGames(searchTerm);
    });
    $('#main-content').off('keypress', '.search-input').on('keypress', '.search-input', function(e) {
        if (e.which === 13) {
            const searchTerm = $(this).val().toLowerCase();
            searchGames(searchTerm);
        }
    });
}

function searchGames(searchTerm) {
    $('.winxp-card').each(function() {
        const cardText = $(this).text().toLowerCase();
        if (cardText.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}