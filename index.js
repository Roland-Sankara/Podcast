
function playNext(id,descript){
    let vid = document.getElementById(id).getAttribute('src');
    let note = document.getElementById(descript).innerText;
    document.getElementById('playNext').setAttribute('src',vid);
    document.getElementById('description').innerText = `${note}.....is Playing`;
}