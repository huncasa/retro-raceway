var base_path = "/images/";
var image_list = [];

function loadImages(path) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var images = JSON.parse(xhr.responseText);
      for (var i = 0; i < images.length; i++) {
        image_list.push(base_path + path + "/" + images[i]);
      }
      if (image_list.length === 450) {
        createGallery(image_list);
      }
    }
  };
  xhr.open("GET", path + "/images.json", true);
  xhr.send();
}

function createGallery(images) {
  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery-container");

  images.forEach((image) => {
    const galleryItem = document.createElement("a");
    galleryItem.href = image.src;
    galleryItem.setAttribute("data-lightbox", "gallery");
    const imageElement = document.createElement("img");
    imageElement.src = image.src;
    imageElement.alt = image.alt;
    galleryItem.appendChild(imageElement);
    galleryContainer.appendChild(galleryItem);
  });

  const body = document.querySelector("body");
  body.appendChild(galleryContainer);

  const lightbox = new Lightbox();
  lightbox.load();
}

loadImages("folder1");
loadImages("folder2");
loadImages("folder3");

