const input = document.querySelector('#favchap');
const button = document.querySelector('#chapter');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    const chapterName = input.value.trim();
    console.log('Input', chapterName) // for testing
    if (chapterName !== ''){
        displayList(chapterName);
        chaptersArray.push(chapterName);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    input.focus();
    input.value = '';
};

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

function setChapterList(){
    localStorage.setItem('chapterList', JSON.stringify(chaptersArray));
    console.log('Chapters saved to localStorage:', chaptersArray); // for testing
}

function getChapterList() {
    const chapterListJSON = localStorage.getItem('chapterList');
    const chapters = chapterListJSON ? JSON.parse(chapterListJSON) : [];
    console.log('Chapters loaded from localStorage:', chapters); // for testing
    return chapters;
}