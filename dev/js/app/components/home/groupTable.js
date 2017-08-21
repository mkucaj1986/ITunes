/*jshint esversion: 6 */
define('js/app/components/home/groupTable', [
    'js/app/components/home/contentHelpers'
], function(contentHelpers) {
    class homePage {
        constructor() {
            this.groupsItems = {};
        }
        showCategories(display){
            const accordion = document.querySelector('.accordionWrapper');
            accordion.style.display = display ? 'block' : 'none';
        }
        clearCategories() {
            const categoryEl = document.querySelector('.artists-content ul');
            const categorAlbumsEl = document.querySelector('.albums-content ul');
            if (categoryEl !== null || categorAlbumsEl !== null) {
                categoryEl.remove();
                categorAlbumsEl.remove();
            }
            const catHeader = document.querySelector('.artists-heading');
            const catAlbumsHeader = document.querySelector('.albums-heading');
            catHeader.innerHTML = 'Artists';
            catAlbumsHeader.innerHTML = 'Albums';
        }
        addCategories(data) {
            const vm = this;
            vm.groupsItems = [];
            Object.defineProperty(Array.prototype, 'group', {
                enumerable: false,
                configurable: true,
                value: function(key) {
                    let map = {};
                    this.map(e => ({ k: key(e), d: e })).forEach(e => {
                        map[e.k] = map[e.k] || [];
                        map[e.k].push(e.d);
                    });
                    return Object.keys(map).map(k => ({ key: k, data: map[k] }));
                }
            });

            vm.groupsItems.artists = data.group(item => item.artistName);
            vm.groupsItems.albums = data.group(item => item.collectionName);
        }

        diplayCategories() {
            const vm = this;
            const ul = document.createElement('ul');
            const categoryContent = document.querySelector('.artists-content');
            const categoryAlbumsContent = document.querySelector('.albums-content');
            categoryContent.append(ul);
            const categoryEl = document.querySelector('.artists-content ul');
            vm.groupsItems.artists.forEach(function(item, index) {
                const li = document.createElement('li');
                categoryEl.append(li);
                const catAnchor = document.querySelectorAll('.artists-content ul li');
                catAnchor[index].innerHTML = '<a href="">' + item.key + '</a>';
            });
            const catHeader = document.querySelector('.artists-heading');
            catHeader.innerHTML = catHeader.innerHTML + ' ' + vm.groupsItems.artists.length;
            const ull = document.createElement('ul');
            categoryAlbumsContent.append(ull);
            const categoryAlbumEl = document.querySelector('.albums-content ul');
            vm.groupsItems.albums.forEach(function(item, index) {
                const li = document.createElement('li');
                categoryAlbumEl.append(li);
                const catAnchor = document.querySelectorAll('.albums-content ul li');
                catAnchor[index].innerHTML = '<a href="">' + item.key + '</a>';
            });
            const catAlbumsHeader = document.querySelector('.albums-heading');
            catAlbumsHeader.innerHTML = catAlbumsHeader.innerHTML + ' ' + vm.groupsItems.albums.length;
        }
    }
    return new homePage();
});
