/*jshint esversion: 6 */
define('js/app/components/home/homePage', [], function() {
    class homePage {
        constructor() {
            this.searchUrl = "https://itunes.apple.com/search?";
            this.songsLimit = '50';
            this.value = '';
            this.url = '';
            this.myRequest = {};
            this.myHeaders = new Headers();
            this.myRequestInit = {
                method: 'GET',
                headers: this.myHeaders
            };
        }
        init() {
            const vm = this;
            vm.checkUrl();
            vm.addEventListeners();
        }
        addEventListeners() {
            const vm = this;
            const searchBtn = document.querySelector('.search-btn');
            const songLimitBtn = document.querySelector('#song-limit');
            window.addEventListener('keydown', function(e) {
                var key = e.which || e.keyCode;
                if (key === 13) { // 13 is enter
                    // code for enter
                    e.preventDefault();
                    vm.search();
                }
            });
            searchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                vm.search();
            });
            songLimitBtn.value = vm.songsLimit;
            songLimitBtn.addEventListener('input', function(evt) {
                vm.changeSongLimit(evt, this.value);
            });
        }
        changeSongLimit(e, songLimit) {
            const vm = this;
            let defaultSongsLimit = '200';
            const songLimitBtn = document.querySelector('#song-limit');
            const checkIsNumber = (n) => {
                return !isNaN(parseFloat(n)) && isFinite(n);
            };
            const changeToNumber = (number) => {
                return Number(number);
            };
            const isNumber = checkIsNumber(songLimit);

            if (isNumber) {
                if (songLimit === '0') {
                    vm.songsLimit = '1';
                    songLimitBtn.value = '1';
                } else {
                    vm.songsLimit = songLimit;
                }
            } else {
                if (songLimit === '') {
                    songLimitBtn.value = '';
                    vm.songsLimit = '200';
                } else {
                    vm.displayMessage('Not a number');
                }
            }

            songLimit = changeToNumber(songLimit);
            defaultSongsLimit = changeToNumber(defaultSongsLimit);
            if (songLimit > defaultSongsLimit) {
                vm.songsLimit = '200';
                songLimitBtn.value = vm.songsLimit;
                vm.clearContent();
                vm.displayMessage('200 is Max of SongsLimit');
            }
        }
        search() {
            const vm = this;
            const searchInput = document.querySelector('.search-input');
            const songLimitBtn = document.querySelector('#song-limit');
            vm.value = searchInput.value;
            const url = vm.searchUrl + 'limit=' + vm.songsLimit + '&term=' + vm.value;
            vm.myRequest = new Request(url, this.myRequestInit);
            vm.clearContent();
            if (songLimitBtn.value === '') {
                songLimitBtn.value = '200';
            }
            if (vm.value === '') {
                vm.displayMessage('Please type what you are looking');
            } else {
                vm.displaySpinner(true);
                vm.fetchData(vm.myRequest, vm.songsLimit, vm.value);
            }
        }
        fetchData(request, songsLimit, value) {
            const vm = this;
            fetch(request)
                .then(function(response) {
                    return response.json();
                })
                .then(function(songs) {
                    console.log(songs);
                    const songsNumber = songs.resultCount;
                    if (songsNumber > 0) {
                        songs = songs.results;
                        vm.buildUrl(songsLimit, value);
                        vm.displaySpinner(false);
                        vm.showTotalSongs(true, songsNumber);
                        songs.forEach(function(song, index) {
                            vm.buildTableRow(index);
                            vm.displayResults(song, index);
                        });
                    } else {
                        vm.displaySpinner(false);
                        vm.displayMessage('No Results Found');
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
            const songTable = document.querySelector('.song-table');
            const html = '<td class="song-index"></td><td class="artist-name"></td><td class="album"></td><td class="song-name"></td><td class="preview"><a href="" target="_blank">Preview</a></td><td class="listen"><a href="" target="_blank">Liten</a></td>';
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
                vm.insertAfter(row, tableRow);
            } else {
                vm.insertAfter(row, tableHeader);
            }
        }
        insertAfter(el, referenceNode) {
            if (referenceNode !== null) {
                referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
            }
        }
        displayMessage(msg) {
            const app = document.querySelector('#App');
            const noReulstsBox = document.createElement('h2');
            const songTable = document.querySelector('.song-table');
            noReulstsBox.classList.add('no-results-found');
            noReulstsBox.classList.add('fadeOut');
            if (noReulstsBox.length) {
                debugger;
            }
            noReulstsBox.innerHTML = msg;
            app.appendChild(noReulstsBox);
            songTable.style.display = 'none';
            noReulstsBox.style.display = 'block';
            setTimeout(function() {
                noReulstsBox.style.display = 'none';
                noReulstsBox.remove();
            }, 2400);
        }
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
        displaySpinner(display) {
            const spinner = document.querySelector('.iTune-Spinner');
            spinner.style.display = display ? 'block' : 'none';
        }
        buildUrl(songLimit, term) {
            if ('URLSearchParams' in window) {
                let url = '';
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set("limit", songLimit);
                searchParams.set("term", term);
                url = '/?' + searchParams.toString();
                window.history.pushState({}, '', url);
            }
        }

        checkUrl() {
            const vm = this;
            if (window.location.search !== '' && 'URLSearchParams' in window) {
                const searchParams = new URLSearchParams(window.location.search);
                vm.value = searchParams.get("term");
                vm.songsLimit = searchParams.get("limit");
                const url = vm.searchUrl + 'limit=' + vm.songsLimit + '&term=' + vm.value;
                vm.myRequest = new Request(url, this.myRequestInit);
                vm.fetchData(vm.myRequest, vm.songsLimit, vm.value);
            }
        }
    }
    return new homePage();
});
