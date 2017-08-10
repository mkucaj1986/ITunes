/*jshint esversion: 6 */

define('js/app/components/home/homePage', [], function() {

    class homePage {
        constructor() {
            this.searchUrl = "https://itunes.apple.com/search?limit=100&term=";
            this.myHeaders = new Headers();
            this.myRequestInit = {
                method: 'GET',
                headers: this.myHeaders,
            };
        }

        init() {
            const vm = this;
            vm.addEventListeners();
        }

        addEventListeners() {
            const vm = this;
            const link = document.querySelector('.search-btn');
            window.addEventListener('keydown', function(e) {
                var key = e.which || e.keyCode;
                if (key === 13) { // 13 is enter
                    // code for enter
                    e.preventDefault();
                    vm.search();
                }
            });

            link.addEventListener('click', function(e) {
                e.preventDefault();
                vm.search();
            });
        }

        search() {
            const vm = this;
            const searchInput = document.querySelector('.search-input');
            const value = searchInput.value;
            const url = vm.searchUrl + value;
            const myRequest = new Request(url, this.myRequestInit);

            vm.clearContent();

            fetch(myRequest)
                .then(function(response) {
                    return response.json();
                })
                .then(function(songs) {
                    console.log(songs);
                    const songsNumber = songs.resultCount;
                    if (songsNumber > 0) {
                        songs = songs.results;
                        vm.showTotalSongs(true, songsNumber);
                        songs.forEach(function(song, index) {
                            vm.buildTableRow(index);
                            vm.displayResults(song, index);
                        });
                    } else {
                        vm.noResults();
                        vm.showTotalSongs(false);
                    }

                }).catch(function(err) {
                    // error handler
                    console.log(err);
                });

        }

        buildTableRow(index) {
            const vm = this;
            const tableHeader = document.querySelector('.table-header');
            const html = '<td class="song-index"></td><td class="artist-name"></td><td class="album"></td><td class="song-name"></td><td class="preview"><a href="" target="_blank">Preview</a></td><td class="listen"><a href="" target="_blank">Liten</a></td>';
            const row = document.createElement('tr');
            index = index - 1;
            row.classList.add('table-row');
            row.innerHTML = html;
            if (tableHeader.nextElementSibling !== null) {
                let tableRow = document.querySelectorAll('.table-row');
                tableRow = tableRow[index];
                vm.insertAfter(row, tableRow);
            } else {
                vm.insertAfter(row, tableHeader);
            }
        }

        insertAfter(el, referenceNode) {
            referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        }

        noResults() {
            const app = document.querySelector('#App');
            const noReulstsBox = document.createElement('h2');
            noReulstsBox.classList.add('no-results-found');
            noReulstsBox.innerHTML = 'No Results Found';
            app.appendChild(noReulstsBox);
        }

        clearContent() {
            const noReulstsBox = document.querySelector('.no-results-found');
            const tableHeader = document.querySelector('.table-header');
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

        showTotalSongs(show, counts) {
            const totalSongs = document.querySelector('.total-songs');
            const totalSongsItems = document.querySelector('.total-songs-items');
            totalSongs.style.display = show ? 'block' : 'none';
            totalSongsItems.innerHTML = counts;
        }
    }

    return new homePage();


});
