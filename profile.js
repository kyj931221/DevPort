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