
const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = function(image) {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = function() {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver(function(items, imageObserver) {
    items.forEach(function(item) {
      if(item.isIntersecting) {
        loadImages(item.target);
        imageObserver.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach(function(img) {
    imageObserver.observe(img);
  });
}

else{
  imagesToLoad.forEach(function(img) {
    loadImages(img);
  });
}