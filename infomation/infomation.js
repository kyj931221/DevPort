// 기본적으로 정보 화면의 인터랙션을 추가하는 스크립트
document.addEventListener('DOMContentLoaded', () => {
    console.log('Information page loaded successfully!');

    // 이름 섹션을 클릭하면 알림 메시지를 표시
    const nameSection = document.querySelector('.info-section h2');
    nameSection.addEventListener('click', () => {
        alert('안녕하세요! 김깜냥입니다.');
    });
});