const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const player = this.closest('.audio-player');
        player.remove();
    });
});
