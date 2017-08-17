/*jshint esversion: 6 */
define('js/app/components/home/homePage', [
    'js/app/components/home/tunesLimit',
    'js/app/components/home/Notifications',
    'js/app/components/home/searchParams',
    'js/app/components/home/buildTable',
    'js/app/components/home/contentHelpers'
], function(tunesLimit, Notifications, searchParams, buildTable, contentHelpers) {
    class homePage {
        constructor() {
            this.searchUrl = "https://itunes.apple.com/search?";
            this.value = '';
            this.url = '';
            this.myRequest = {};
            this.myHeaders = new Headers();
            this.myRequestInit = {
                method: 'GET',
                headers: this.myHeaders
            };
            this.procedRequest = true;
            this.ascDesc = 1;
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
            songLimitBtn.value = tunesLimit.songsLimit;
            songLimitBtn.addEventListener('input', function(evt) {
                tunesLimit.changeSongLimit(evt, this.value);
            });

            window.onpopstate = function(event) {
                // vm.init();
                var currentState = history.state;
                var numberOfEntries = window.history.length;
                debugger;
            };
        }

        search() {
            const vm = this;
            const searchInput = document.querySelector('.search-input');
            const songLimitBtn = document.querySelector('#song-limit');
            vm.value = searchInput.value;
            const url = vm.searchUrl + 'limit=' + tunesLimit.songsLimit + '&term=' + vm.value;
            vm.myRequest = new Request(url, this.myRequestInit);
            contentHelpers.clearContent();
            if (songLimitBtn.value === '') {
                songLimitBtn.value = '200';
            }
            if (vm.value === '') {
                Notifications.displayMessage('Please type what you are looking');
            } else {
                contentHelpers.displaySpinner(true);
                if (vm.procedRequest === true) {
                    vm.fetchData(vm.myRequest, tunesLimit.songsLimit, vm.value);
                }
            }
        }
        fetchData(request, songsLimit, value) {
            const vm = this;
            vm.procedRequest = false;
            fetch(request)
                .then(function(response) {
                    return response.json();
                })
                .then(function(songs) {
                    console.log(songs);
                    const songsNumber = songs.resultCount;
                    if (songsNumber > 0) {
                        songs = songs.results;
                        searchParams.buildUrl(songsLimit, value);
                        contentHelpers.displaySpinner(false);
                        contentHelpers.showTotalSongs(true, songsNumber);
                        songs.forEach(function(song, index) {
                            buildTable.buildTableRow(index);
                            buildTable.displayResults(song, index);
                        });
                    } else {
                        contentHelpers.displaySpinner(false);
                        Notifications.displayMessage('No Results Found');
                        contentHelpers.showTotalSongs(false);
                    }
                })
                .then(function() {
                    const sortDesc = document.querySelectorAll('.sort-desc');
                    const sortAsc = document.querySelectorAll('.sort-asc');
                    sortDesc.forEach(function(btn, i) {
                        btn.addEventListener('click', function(e) {
                            vm.sortFn(i);
                        }, true);
                    });
                    sortAsc.forEach(function(btn, i) {
                        btn.addEventListener('click', function(e) {
                            vm.sortFn(i);
                        }, true);
                    });
                    vm.procedRequest = true;
                })
                .catch(function(err) {
                    // error handler
                    console.log(err);
                });
        }
        checkUrl() {
            const vm = this;
            if (window.location.search !== '' && 'URLSearchParams' in window) {
                const searchParams = new URLSearchParams(window.location.search);
                vm.value = searchParams.get("term");
                tunesLimit.songsLimit = searchParams.get("limit");
                const url = vm.searchUrl + 'limit=' + tunesLimit.songsLimit + '&term=' + vm.value;
                vm.myRequest = new Request(url, this.myRequestInit);
                vm.fetchData(vm.myRequest, tunesLimit.songsLimit, vm.value);
            }
        }
        sortFn(col) {
            const vm = this;
            const rows = document.querySelectorAll('.table-row');
            const songTable = document.querySelectorAll('.song-table');
            const tbody = document.querySelector('tbody');
            col = col + 1;
            var rlen = rows.length;
            var arr = new Array(),
                i, j, cells, clen;
            // fill the array with values from the table
            for (i = 0; i < rlen; i++) {
                cells = rows[i].cells;
                clen = cells.length;
                arr[i] = new Array();
                for (j = 0; j < clen; j++) {
                    arr[i][j] = cells[j].innerHTML;
                }
            }
            // sort the array by the specified column number (col) and order (asc)
            arr.sort(function(a, b) {
                return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? vm.ascDesc : -1 * vm.ascDesc);
            });
            for (i = 0; i < rlen; i++) {
                arr[i] = "<td>" + arr[i].join("</td><td>") + "</td>";
            }
            tbody.innerHTML = "<tr class='table-row'>" + arr.join("</tr><tr class='table-row'>") + "</tr>";
            vm.changeStyleIcon();
            if (vm.ascDesc === 1) {
                vm.ascDesc = -1;
            } else {
                vm.ascDesc = 1;
            }
        }

        changeStyleIcon() {
            const vm = this;
            const sortAsc = document.querySelectorAll('.sort-asc');
            const sortDesc = document.querySelectorAll('.sort-desc');

            if (vm.ascDesc === 1) {
                sortAsc.forEach(function(btn, i) {
                    btn.style.display = 'none';
                });

                sortDesc.forEach(function(btn, i) {
                    btn.style.display = 'block';
                });
            }

            if (vm.ascDesc === -1) {
                sortAsc.forEach(function(btn, i) {
                    btn.style.display = 'block';
                });

                sortDesc.forEach(function(btn, i) {
                    btn.style.display = 'none';
                });
            }

        }
    }
    return new homePage();
});
