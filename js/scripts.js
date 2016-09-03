
+function(){
    'use strict';

    var studentsPerPage = 10;
    var currentPage = 1;

    function getStudentsNumber() {
        var students = document.getElementsByClassName('student-item');
        return students.length;
    }

    function setVisibility() {
        var students = document.getElementsByClassName('student-item');

        for (var i = (currentPage - 1) * studentsPerPage; i < currentPage * studentsPerPage; i++) {
            students[i].classList.toggle('visible');
        }
    }

    // Add the filter input 
    function initFilter() {
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

    // Add the pagination
    function initPagination() {
        var numberOfPages = Math.ceil(getStudentsNumber() / studentsPerPage);

        var pagination = document.createElement('div');
        pagination.className = 'pagination';
        var paginationList = document.createElement('ul');

        var page = document.getElementsByClassName('page')[0];

        var pageLink;
        var listItem;

        for (var i = 1; i <= numberOfPages; i++) {
            pageLink = document.createElement('a');
            pageLink.innerText = i;

            if (i === currentPage) {
                pageLink.className = 'active';
            }
            
            listItem = document.createElement('li');
            listItem.appendChild(pageLink);
            paginationList.appendChild(listItem);
        }
        
        pagination.appendChild(paginationList);
        page.appendChild(pagination);
    }

    initFilter();
    initPagination();
    setVisibility();

}();
