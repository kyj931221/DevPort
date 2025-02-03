document.addEventListener('DOMContentLoaded', function() {
    const resources = [
        {
            id: 1,
            title: 'AR 어린이 교통안전 카드 (1)',
            appName: 'ChildrenSafetyAR',
            type: 'image',
            category: 'AR 어린이 교통안전',
            thumbnail: 'https://raw.githubusercontent.com/kyj931221/Children-s-Safety-AR/main/AR_ChildrenSafety-main/Assets/Image/Card0.png',
            fileUrl: 'https://raw.githubusercontent.com/kyj931221/Children-s-Safety-AR/main/AR_ChildrenSafety-main/Assets/Image/Card0.png',
            description: '어린이 안전 교육용 카드 이미지'
        },
        {
            id: 2,
            title: 'AR 어린이 교통안전 카드 (2)',
            appName: 'ChildrenSafetyAR',
            type: 'image',
            category: 'AR 어린이 교통안전',
            thumbnail: 'https://raw.githubusercontent.com/kyj931221/Children-s-Safety-AR/refs/heads/main/AR_ChildrenSafety-main/Assets/Image/Card1.png',
            fileUrl: 'https://raw.githubusercontent.com/kyj931221/Children-s-Safety-AR/refs/heads/main/AR_ChildrenSafety-main/Assets/Image/Card1.png',
            description: '어린이 안전 교육용 카드 이미지'
        },
        {
            id: 3,
            title: 'AR 어린이 교통안전 카드 (3)',
            appName: 'ChildrenSafetyAR',
            type: 'image',
            category: 'AR 어린이 교통안전',
            thumbnail: 'https://raw.githubusercontent.com/kyj931221/Children-s-Safety-AR/refs/heads/main/AR_ChildrenSafety-main/Assets/Image/Card2.png',
            fileUrl: 'https://raw.githubusercontent.com/kyj931221/Children-s-Safety-AR/refs/heads/main/AR_ChildrenSafety-main/Assets/Image/Card2.png',
            description: '어린이 안전 교육용 카드 이미지'
        },
        {
            id: 4,
            title: 'AR 어린이 교통안전 카드 (4)',
            appName: 'ChildrenSafetyAR',
            type: 'image',
            category: 'AR 어린이 교통안전',
            thumbnail: 'https://raw.githubusercontent.com/kyj931221/Children-s-Safety-AR/refs/heads/main/AR_ChildrenSafety-main/Assets/Image/Card3.png',
            fileUrl: 'https://raw.githubusercontent.com/kyj931221/Children-s-Safety-AR/refs/heads/main/AR_ChildrenSafety-main/Assets/Image/Card3.png',
            description: '어린이 안전 교육용 카드 이미지'
        },

    ];

    const resourceGrid = document.getElementById('resourceGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    function renderResources(filteredResources) {
        resourceGrid.innerHTML = '';
        filteredResources.forEach(resource => {
            const card = document.createElement('div');
            card.classList.add('resource-card');
            card.innerHTML = `
                <img src="${resource.thumbnail}" alt="${resource.title}">
                <div class="resource-card-content">
                    <h3>${resource.title}</h3>
                    <div class="app-info">
                        <div class="app-tag">
                            <div class="tag-icon">📱</div>
                            <div class="tag-text">${resource.appName}</div>
                        </div>
                        <div class="category-tag">
                            <div class="tag-icon">🏷️</div>
                            <div class="tag-text">${resource.category}</div>
                        </div>
                    </div>
                </div>
                <button onclick="openImage('${resource.fileUrl}')">이미지 보기</button>
            `;
            resourceGrid.appendChild(card);
        });
    }

    function filterResources() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredResources = resources.filter(resource =>
            (selectedCategory === 'all' || resource.category === selectedCategory) &&
            (resource.title.toLowerCase().includes(searchTerm) ||
                resource.appName.toLowerCase().includes(searchTerm))
        );

        renderResources(filteredResources);
    }

    window.openImage = function(imageUrl) {
        window.open(imageUrl, '_blank');
    }

    searchInput.addEventListener('input', filterResources);
    categoryFilter.addEventListener('change', filterResources);

    // 초기 렌더링
    renderResources(resources);
});