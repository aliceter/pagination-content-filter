
+function(){
    'use strict';

    function initPagination() {
        var studentSearch = document.createElement('div');
        studentSearch.className = 'student-search'; 
        
        var studentSearchInput = document.createElement('input');
        studentSearchInput.placeholder = 'Search for students...';
        
        var studentSearchButton = document.createElement('button');
        studentSearchButton.innerText = 'Search';

        studentSearch.appendChild(studentSearchInput);
        studentSearch.appendChild(studentSearchButton);

        var page = document.getElementsByClassName('page')[0];
        var pageHeader = page.getElementsByClassName('page-header')[0];

        pageHeader.appendChild(studentSearch);

    }
   
    initPagination();
}();
