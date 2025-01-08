document.addEventListener('DOMContentLoaded', () => {
    // 동적으로 로드된 콘텐츠에도 이벤트를 적용
    setTimeout(() => {
        const rows = document.querySelectorAll('.container tbody tr');
        const rowCount = rows.length;

        const rowCountDiv = document.getElementById('row-count');
        if (rowCountDiv) {
            rowCountDiv.textContent = `총 ${rowCount} 개의 콘텐츠가 있습니다.`;
        }
    }, 100); // 약간의 딜레이를 줘서 DOM이 완전히 로드되었는지 확인
});