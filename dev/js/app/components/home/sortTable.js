/*jshint esversion: 6 */
define('js/app/components/home/sortTable', [], function() {
    class homePage {
        constructor() {
            this.ascDesc = {};
            this.attachedSortListener = false;
        }
        sortFn(col) {
            const vm = this;
            const rows = document.querySelectorAll('.table-row');
            const tbody = document.querySelector('tbody');
            const setColumn = col;
            if (vm.ascDesc[col] === undefined) {
                vm.setDefaultSort(setColumn);
            }
            col = col + 1;
            var rlen = rows.length;
            var arr = [],
                i, j, cells, clen;
            // fill the array with values from the table
            for (i = 0; i < rlen; i++) {
                cells = rows[i].cells;
                clen = cells.length;
                arr[i] = [];
                for (j = 0; j < clen; j++) {
                    arr[i][j] = cells[j].innerHTML;
                }
            }
            // sort the array by the specified column number (col) and order (asc)
            arr.sort(function(a, b) {
                return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? vm.ascDesc[setColumn] : -1 * vm.ascDesc[setColumn]);
            });
            for (i = 0; i < rlen; i++) {
                arr[i] = "<td>" + arr[i].join("</td><td>") + "</td>";
            }
            tbody.innerHTML = "<tr class='table-row'>" + arr.join("</tr><tr class='table-row'>") + "</tr>";
            vm.changeStyleIcon(setColumn);

            if (vm.ascDesc[setColumn] === 1) {
                vm.ascDesc[setColumn] = -1;
            } else {
                vm.ascDesc[setColumn] = 1;
            }


        }

        changeStyleIcon(col) {
            const vm = this;
            const sortAsc = document.querySelectorAll('.sort-asc');
            const sortDesc = document.querySelectorAll('.sort-desc');

            if (vm.ascDesc[col] === 1) {
                sortAsc[col].style.display = 'none';
                sortDesc[col].style.display = 'block';
            }

            if (vm.ascDesc[col] === -1) {
                sortAsc[col].style.display = 'block';
                sortDesc[col].style.display = 'none';
            }

        }
        setDefaultSort(col) {
            const vm = this;
            vm.ascDesc[col] = 1;
        }
        defaultSortIcon() {
            const sortAsc = document.querySelectorAll('.sort-asc');
            const sortDesc = document.querySelectorAll('.sort-desc');
            sortAsc.forEach(function(btn, i) {
                btn.style.display = 'block';
            });

            sortDesc.forEach(function(btn, i) {
                btn.style.display = 'none';
            });
        }
        addSortIconClick() {
            const vm = this;
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
        }
    }
    return new homePage();
});
