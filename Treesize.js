document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    console.log(toggles);
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            let ulList = this.nextElementSibling;
            if (ulList && ulList.tagName === 'UL') {          
                if (ulList.style.display === 'none' || ulList.style.display === '') {
                    ulList.style.display = 'block';
                    this.classList.add('toggleplus');
                    this.classList.remove('open');
                } else {
                    ulList.style.display = 'none';
                    this.classList.add('open');
                    this.classList.remove('toggleplus');
                }
            }
        });
    });

    
    document.querySelectorAll('#tree ul').forEach(ul => {
        ul.style.display = 'block';
    });

    document.querySelectorAll('.node-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            let parentLi = this.closest('li');
            let childCheckboxes = parentLi.querySelectorAll('ul .node-checkbox');
            childCheckboxes.forEach(childCheckbox => {
                childCheckbox.checked = this.checked;
            });
        });
    });
});
