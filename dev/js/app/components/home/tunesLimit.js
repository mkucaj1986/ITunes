/*jshint esversion: 6 */
define('js/app/components/home/tunesLimit', [
    'js/app/components/home/Notifications',
    'js/app/components/home/contentHelpers'
    ], function(Notifications, contentHelpers) {
    class homePage {
        constructor() {
            this.songsLimit = '50';
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
                    contentHelpers.displayMessage('Not a number');
                }
            }

            songLimit = changeToNumber(songLimit);
            defaultSongsLimit = changeToNumber(defaultSongsLimit);
            if (songLimit > defaultSongsLimit) {
                vm.songsLimit = '200';
                songLimitBtn.value = vm.songsLimit;
                contentHelpers.clearContent();
                Notifications.displayMessage('200 is Max of SongsLimit');
            }
        }
    }
    return new homePage();
});
