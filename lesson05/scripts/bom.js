const input = document.querySelector('#favchap');
const button = document.querySelector('#chapter');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
        if (input.value != ''){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    };
    /*else {
        const li = document.createElement('li');
        const deleteButton = document.childElement('button');
        li.textContent = 'Add a chapter and verse';
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    }*/
});
