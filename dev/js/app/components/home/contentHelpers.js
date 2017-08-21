/*jshint esversion: 6 */
define('js/app/components/home/contentHelpers', [], function() {
    class homePage {
        constructor() {}
        clearContent() {
            const noReulstsBox = document.querySelector('.no-results-found');
            const tableHeader = document.querySelector('thead');
            const tableBody = document.querySelector('tbody');
            const songTable = document.querySelector('.song-table');
            const totalSongs = document.querySelector('.total-songs');
            songTable.style.display = 'none';
            totalSongs.style.display = 'none';
            if (noReulstsBox !== null) {
                document.querySelector('.no-results-found').remove();
            }
            if (tableHeader.nextElementSibling !== null) {
                tableBody.remove();
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

        insertAfter(el, referenceNode) {
            if (referenceNode !== null) {
                referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
            }
        }
    }
    return new homePage();
});
