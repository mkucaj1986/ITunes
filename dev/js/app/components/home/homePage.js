/*jshint esversion: 6 */
define('js/app/components/home/homePage', [
    'js/app/components/home/tunesLimit',
    'js/app/components/home/Notifications',
    'js/app/components/home/searchParams',
    'js/app/components/home/buildTable',
    'js/app/components/home/contentHelpers',
    'js/app/components/home/sortTable',
    'js/app/components/home/groupTable'
], function(tunesLimit, Notifications, searchParams, buildTable, contentHelpers, sortTable, groupTable) {
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
        }
        init() {
            const vm = this;
            vm.checkUrl();
            vm.addEventListeners();
            vm.setAccordion();
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

            // window.onpopstate = function(event) {
            //     // vm.init();
            //     var currentState = history.state;
            //     var numberOfEntries = window.history.length;
            //     debugger;
            // };
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
                    sortTable.ascDesc = {};
                    vm.fetchData(vm.myRequest, tunesLimit.songsLimit, vm.value);
                }
            }
        }
        fetchData(request, songsLimit, value) {
            const vm = this;
            vm.procedRequest = false;
            groupTable.clearCategories();
            fetch(request)
                .then(function(response) {
                    return response.json();
                })
                .then(function(songs) {
                    console.log(songs);
                    // debugger;
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
                        groupTable.showCategories(true);
                        groupTable.addCategories(songs);
                        groupTable.diplayCategories(songs);
                    } else {
                        contentHelpers.displaySpinner(false);
                        Notifications.displayMessage('No Results Found');
                        contentHelpers.showTotalSongs(false);
                        groupTable.showCategories(false);
                    }
                })
                .then(function() {
                    if (!sortTable.attachedSortListener) {
                        sortTable.addSortIconClick();
                    }
                    sortTable.defaultSortIcon();
                    sortTable.attachedSortListener = true;
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
        setAccordion() {
            const accItem = document.getElementsByClassName('accordionItem');
            const accHD = document.getElementsByClassName('accordionItemHeading');
            for (let i = 0; i < accHD.length; i++) {
                accHD[i].addEventListener('click', toggleItem, false);
            }

            function toggleItem() {
                var itemClass = this.parentNode.className;
                for (let i = 0; i < accItem.length; i++) {
                    accItem[i].className = 'accordionItem close';
                }
                if (itemClass == 'accordionItem close') {
                    this.parentNode.className = 'accordionItem open';
                }
            }
        }
    }
    return new homePage();
});
