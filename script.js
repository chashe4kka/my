document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Страница загружена!');

    const photos = document.querySelectorAll('.gallery-card');
    const countEl = document.getElementById('photo-count');
    if (countEl) countEl.textContent = photos.length;

    const likeButtons = document.querySelectorAll('.like-btn');
    const totalLikesEl = document.getElementById('total-likes');
    let totalLikes = 0;

    likeButtons.forEach(function(btn) {

        if (btn.closest('.tags-filter')) return;

        btn.addEventListener('click', function() {
            const likesSpan = this.querySelector('.likes');
            if (!likesSpan) return;

            let currentLikes = parseInt(likesSpan.textContent) || 0;

            if (this.classList.contains('liked')) {
                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
            } else {
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
            }

            likesSpan.textContent = currentLikes;
            if (totalLikesEl) totalLikesEl.textContent = totalLikes;

            this.style.transform = 'scale(1.2)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);
        });
    });
});