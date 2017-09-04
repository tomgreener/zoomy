function initGallery() {

    // Initialising options
    var gGallery, gImages, gImagesCollection = [];

    function getImages() {
        gGallery = document.getElementsByClassName("gallery")[0];
        gImages = gGallery.getElementsByTagName("img");
    }            
    getImages();

    if (gImages) {
        for (var i = 0; i < gImages.length; i++) {
            (function (index) {
                var el = gImages[index];
                el.addEventListener("mouseup", function () {
                    if (index!=0) {
                        var oldSrc = gImages[index].src;
                        gImages[index].src=gImages[0].src;
                        gImages[0].src=oldSrc;
                    }
                    // getImages();
                });
            })(i);
        }
    }
}
