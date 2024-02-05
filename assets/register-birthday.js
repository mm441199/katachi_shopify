// =====================　生年月日 =====================
let time = new Date();
let year = time.getFullYear();

for (let i = year; i >= 1900; i--) {
  createOptionElements(i,'year');
}

for (let i = 1; i <= 12; i++) {
  createOptionElements(i,'month');
}

for (let i = 1; i <= 31; i++) {
  createOptionElements(i,'day');
}

function createOptionElements(num,parentId){
    let doc = document.createElement('option');
    doc.value = doc.innerHTML = num;
    document.getElementById(parentId).appendChild(doc);
}