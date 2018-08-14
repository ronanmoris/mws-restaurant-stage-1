//Open cache
this.addEventListener("install", event => {
  var urlsToCache = [
    "/",
    "index.html",
    "restaurant.html",
    "js/main.js",
    "js/dbhelper",
    "js/restaurant_info.js",
    "css/styles.css",
    "data/restaurants.json",
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg"
  ];
  event.waitUntil(
    // Cache the urls from urlsToCache
    caches
      .open("reviews-static-v1")
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => {
        console.log(err);
      })
  );
});

//Fetch client requests
this.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
