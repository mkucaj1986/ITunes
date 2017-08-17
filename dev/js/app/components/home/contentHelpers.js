/*jshint esversion: 6 */
define('js/app/components/home/contentHelpers', [], function() {
    class homePage {
        constructor() {}
        clearContent() {
            const noReulstsBox = document.querySelector('.no-results-found');
            const tableHeader = document.querySelector('.table-header');
            const songTable = document.querySelector('.song-table');
            const totalSongs = document.querySelector('.total-songs');
            songTable.style.display = 'none';
            totalSongs.style.display = 'none';
            if (noReulstsBox !== null) {
                document.querySelector('.no-results-found').remove();
            }
            if (tableHeader.nextElementSibling !== null) {
                let tableRow = document.querySelectorAll('.table-row');
                while (tableHeader.nextElementSibling) {
                    tableHeader.nextElementSibling.remove();
                }
            }
        }

        showTotalSongs(show, counts) {
            const totalSongs = document.querySelector('.total-songs');
            const totalSongsItems = document.querySelector('.total-songs-items');
            totalSongs.style.display = show ? 'block' : 'none';
            totalSongsItems.innerHTML = counts;
        }
        displaySpinner(display) {
            const spinner = document.querySelector('.iTune-Spinner');
            spinner.style.display = display ? 'block' : 'none';
        }
    }
    return new homePage();
});
