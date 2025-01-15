class GameSearchManager {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.searchButton = document.getElementById('searchButton');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.searchButton.addEventListener('click', () => this.performSearch());
        this.searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });
    }

    performSearch() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const gameCards = document.querySelectorAll('.game-card');

        gameCards.forEach(card => {
            const title = card.querySelector('.game-title').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag'))
                .map(tag => tag.textContent.toLowerCase());

            const matchesSearch = title.includes(searchTerm) ||
                tags.some(tag => tag.includes(searchTerm));

            card.style.display = matchesSearch ? 'block' : 'none';
        });
    }
}