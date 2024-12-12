function togglePanel() {
    const panel = document.getElementById('rightPanel'); // 사이드 패널
    const profile = document.querySelector('.wrapper'); // 프로필 영역

    // 사이드 패널 열기/닫기
    panel.classList.toggle('open');

    // 프로필 영역 이동 처리
    if (panel.classList.contains('open')) {
        profile.classList.add('shift-left'); // 프로필 영역 왼쪽 이동
    } else {
        profile.classList.remove('shift-left'); // 프로필 영역 중앙 복귀
    }
}

function showTab(tabId) {
    // 모든 탭 버튼에서 active 클래스 제거
    const allTabs = document.querySelectorAll('.tab-button');
    allTabs.forEach((tab) => tab.classList.remove('active'));

    // 모든 탭 콘텐츠에서 active 클래스 제거
    const allContents = document.querySelectorAll('.tab-content');
    allContents.forEach((content) => content.classList.remove('active'));

    // 선택된 탭 버튼과 탭 콘텐츠에 active 클래스 추가
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}