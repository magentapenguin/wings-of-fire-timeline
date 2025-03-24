document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.timeline-item').forEach(i => {
            i.classList.remove('active');
            const content = i.querySelector('.timeline-content') as HTMLElement;
            if (content) {
                content.classList.remove('active');
                content.style.maxHeight = '0px';
            }
        });
        item.classList.toggle('active');
        const content = item.querySelector('.timeline-content') as HTMLElement;
        if (content) {
            content.classList.toggle('active');
            const isActive = content.classList.contains('active');
            content.style.maxHeight = isActive ? `${content.scrollHeight}px` : '0px';
        }
    });
});