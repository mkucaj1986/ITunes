/*jshint esversion: 6 */
define('js/app/components/home/Notifications', [], function() {
    class homePage {
        constructor() {}
        displayMessage(msg) {
            const app = document.querySelector('#App');
            const noReulstsBox = document.createElement('h2');
            const songTable = document.querySelector('.song-table');
            noReulstsBox.classList.add('no-results-found');
            noReulstsBox.classList.add('fadeOut');
            noReulstsBox.innerHTML = msg;
            app.appendChild(noReulstsBox);
            songTable.style.display = 'none';
            noReulstsBox.style.display = 'block';
            setTimeout(function() {
                noReulstsBox.style.display = 'none';
                noReulstsBox.remove();
            }, 2400);
        }
    }
    return new homePage();
});
