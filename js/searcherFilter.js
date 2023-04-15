function searchItem() {
    let filter = document.getElementById('search').value.toLowerCase();
    let gallery = document.getElementsByClassName('gallery')[0];
    let photoList = gallery.getElementsByTagName('a');

    for (i = 0; i < photoList.length; i++) {
        let photo = photoList[i];
        let caption = photo.getAttribute("data-caption").toLowerCase();
        if (caption.includes(filter)) {
            photo.style.display = "";
        } else {
            photo.style.display = "none";
        };
    };
}