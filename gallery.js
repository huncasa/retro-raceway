function getDirectories(path) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", path, false);
  xhr.send();
  let result = [];
  let parser = new DOMParser();
  let doc = parser.parseFromString(xhr.responseText, "text/html");
  let dirs = doc.querySelectorAll("a[href*='//']");
  for (let i = 0; i < dirs.length; i++) {
    let dirName = dirs[i].href.replace(/.*\//g, "");
    if (dirName != "..") {
      result.push(dirName);
    }
  }
  return result;
}

function getFiles(path) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", path, false);
  xhr.send();
  let result = [];
  let parser = new DOMParser();
  let doc = parser.parseFromString(xhr.responseText, "text/html");
  let files = doc.querySelectorAll("a[href*='.jpg'],a[href*='.jpeg'],a[href*='.png'],a[href*='.gif']");
  for (let i = 0; i < files.length; i++) {
    let fileName = files[i].href.replace(/.*\//g, "");
    result.push({
      name: fileName,
      path: path + fileName,
      alt: fileName.replace(/\.[^/.]+$/, "")
    });
  }
  return result;
}

function loadGallery() {
  let galleries = document.getElementsByClassName("gallery");
  for (let i = 0; i < galleries.length; i++) {
    let gallery = galleries[i];
    let galleryPath = gallery.getAttribute("data-path");
    let directories = getDirectories(galleryPath);
    let files = [];
    for (let j = 0; j < directories.length; j++) {
      let folderPath = galleryPath + directories[j] + "/";
      files = files.concat(getFiles(folderPath));
    }
    gallery.innerHTML = generateGalleryHTML(files);
  }
}

function generateGalleryHTML(files) {
  let html = "";
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    html += "<div class='gallery-item'><img src='" + file.path + "' alt='" + file.alt + "'></div>";
  }
  return html;
}

document.addEventListener("DOMContentLoaded", loadGallery);