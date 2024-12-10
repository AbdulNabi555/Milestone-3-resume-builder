var editButton = document.getElementById('edit-btn');
var resume = document.getElementById('resume');
var editableSections = ['name', 'email', 'education', 'work-experience', 'skills'];

function enableEditing() {
    editableSections.forEach(function (id) {
        var section = document.getElementById(id);
        if (section) {
            section.contentEditable = 'true';
            section.style.border = '1px solid #ccc';
        }
    });
    editButton.textContent = 'Save Changes';
    editButton.removeEventListener('click', enableEditing);
    editButton.addEventListener('click', saveChanges);
}

function saveChanges() {
    editableSections.forEach(function (id) {
        var section = document.getElementById(id);
        if (section) {
            section.contentEditable = 'false';
            section.style.border = 'none';
        }
    });
    editButton.textContent = 'Enable Editing';
    editButton.removeEventListener('click', saveChanges);
    editButton.addEventListener('click', enableEditing);
}

editButton.addEventListener('click', enableEditing);

editableSections.forEach(function (id) {
    var section = document.getElementById(id);
    if (section) {
        section.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                saveChanges();
            }
        });
    }
});
