/*jshint esversion: 6 */
define('js/app/components/home/buildTable', [
    'js/app/components/home/contentHelpers'
], function(contentHelpers) {
    class homePage {
        constructor() {}
        buildTableRow(index) {
            const vm = this;
            const tableHeader = document.querySelector('thead');
            const songTable = document.querySelector('.song-table');
            const html = '<td class="song-index"></td><td class="artist-name"></td><td class="album"></td><td class="song-name"></td><td class="preview"><a href="" target="_blank">Preview</a></td><td class="listen"><a href="" target="_blank">Listen</a></td>';
            const row = document.createElement('tr');
            songTable.style.display = 'block';
            row.classList.add('table-row');
            row.innerHTML = html;
            if (tableHeader.nextElementSibling !== null) {
                let tableRow = document.querySelectorAll('.table-row');
                if (index !== 0) {
                    index = index - 1;
                }
                tableRow = tableRow[index];
                contentHelpers.insertAfter(row, tableRow);
            } else {
                contentHelpers.insertAfter(row, tableHeader);
                const org_html = document.querySelector('.table-row').outerHTML;
                const new_html = "<tbody>" + org_html + "</tbody>";
                const el = document.querySelector('.table-row');
                el.outerHTML = new_html;
            }
        }

        displayResults(song, index) {
            const artistName = document.querySelectorAll('.artist-name');
            const album = document.querySelectorAll('.album');
            const listenBox = document.querySelectorAll('.listen a');
            const songName = document.querySelectorAll('.song-name');
            const songPreview = document.querySelectorAll('.preview a');
            const songIndex = document.querySelectorAll('.song-index');
            artistName[index].innerHTML = song.artistName;
            album[index].innerHTML = song.collectionName;
            listenBox[index].href = song.previewUrl;
            songPreview[index].href = song.collectionViewUrl;
            songName[index].innerHTML = song.trackName;
            songIndex[index].innerHTML = index + 1;
        }

    }
    return new homePage();
});
