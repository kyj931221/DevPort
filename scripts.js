$(document).ready(function() {

    // 사이드바 메뉴 로드
    $('#sidebar-container').load('./side-bar/sidebar.html', function() {
        const menuContainer = $(this);

        // 일반 메뉴 항목 클릭 (콘텐츠 교체)
        menuContainer.on('click', 'a:not(.submenu-toggle, .view-in-panel)', function(e) {
            e.preventDefault();
            loadContent($(this).attr('href'));
            closeAllMenus();
        });

        // 하위 메뉴가 있는 항목 클릭 (메뉴 열기/닫기)
        menuContainer.on('click', '.submenu-toggle', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const $container = $(this).closest('.submenu-container');
            $container.siblings().removeClass('open');
            $container.toggleClass('open');
        });

        // 뷰어를 여는 하위 메뉴 항목 클릭
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

    // 뷰어 닫기 버튼
    $('#viewer-close-btn').on('click', function() {
        $('#right-viewer-panel').removeClass('open');
    });

    // 화면의 다른 곳을 클릭하면 모든 메뉴 닫기
    $(document).on('click', function() {
        closeAllMenus();
    });

    // 메뉴 영역 클릭 시 닫히지 않도록 전파 방지
    $('#sidebar-container').on('click', function(e) {
        e.stopPropagation();
    });

    // 초기 페이지 로드
    loadContent('./my-info.html');
});


// === 함수 정의 ===
function loadContent(url) {
    if (!url || url === '#') return;
    $('#main-content').load(url, function(response, status, xhr) {
        if (status === "error") {
            $('#main-content').html(`<h2>페이지 로딩 실패</h2><p>${url} 경로를 확인해주세요.</p>`);
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
    $('.submenu-container').removeClass('open');
}