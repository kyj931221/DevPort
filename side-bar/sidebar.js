// 필요한 DOM 요소들을 선택합니다.
const toggleButton = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');

// 토글 버튼에 클릭 이벤트 리스너를 추가합니다.
toggleButton.addEventListener('click', () => {
    // 사이드바에 'collapsed' 클래스를 토글(추가/제거)합니다.
    sidebar.classList.toggle('collapsed');

    // 메인 콘텐츠의 마진을 조정하여 레이아웃을 맞춥니다.
    if (sidebar.classList.contains('collapsed')) {
        mainContent.style.marginLeft = '80px';
    } else {
        mainContent.style.marginLeft = '250px';
    }
});