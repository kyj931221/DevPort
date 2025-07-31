$(document).ready(function() {
    // 시작 메뉴(구 사이드바)와 헤더 로드
    $('#start-menu-container').load('./side-bar/sidebar.html', function() {
        // 메뉴 항목(a 태그) 클릭 이벤트 설정
        $('#start-menu-container a').on('click', function(e) {
            e.preventDefault();
            const pageUrl = $(this).attr('href');

            // 콘텐츠를 로드하고 시작 메뉴를 닫음
            loadContent(pageUrl);
            $('#start-menu-container').removeClass('open');
        });
    });
    $('#header-container').load('./header/header.html');

    // 시작 버튼 클릭 이벤트
    $('#start-button').on('click', function(e) {
        e.stopPropagation(); // 이벤트 버블링 방지
        $('#start-menu-container').toggleClass('open');
    });

    // 문서의 다른 곳을 클릭하면 시작 메뉴 닫기
    $(document).on('click', function() {
        $('#start-menu-container').removeClass('open');
    });

    // 시작 메뉴 자체를 클릭했을 때는 닫히지 않도록
    $('#start-menu-container').on('click', function(e) {
        e.stopPropagation();
    });

    // 초기 페이지 로드
    loadContent('./my-info.html');
});

function loadContent(url) {
    $('#main-content').load(url, function(response, status, xhr) {
        if (status === "error") {
            $('#main-content').html(`<h2>페이지 로딩 실패</h2><p>${url} 경로를 확인해주세요.</p>`);
        }
    });
}