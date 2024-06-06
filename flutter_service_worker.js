'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/FETCH_HEAD": "aa57c836e9aab228c5a3530061de9154",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a304a5502ddbdff08400feebcc93c6e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "090a67d51ab035f5baecb5d96febdbdb",
".git/logs/refs/heads/main": "39778c8044cf4fea1b7e47653f217457",
".git/logs/refs/heads/master": "090a67d51ab035f5baecb5d96febdbdb",
".git/logs/refs/remotes/origin/main": "62cc227d2ceb8f61200e05e3ce5d359c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/3f25720ce3cfe243621599d9aa8b03a5bd71d0": "6aefbc345afb0a4a4211c0925278454e",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b48f353ce7a11e63faacdf4ca1ac0e0a03ac92": "6d259d5bfe5ee1afac75872b18eeb379",
".git/objects/24/8674ac860ca152f422e7a1e06bccbc61857e97": "606bb55f452517858565fb180888979c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/b103c95b5db77a4c017589be905f000610f133": "e6b9b17b6b1967e6944e70a2745e53ef",
".git/objects/37/f8649d9736aea0e4f336d6d663e61992f5a85e": "3678d2b6ac439a9eb4407d335e25adea",
".git/objects/39/5590980f06f8f51ecd37ddd5be48d512ae7e68": "fadb11d58a284d80f2a1553d5d51c935",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/3dc15952ddc4c35b323635c64412383fbdb205": "471ce4214d37d8690d007f6294eb11a3",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/037ceefbe941669737b6c7a0af85fa08bcb004": "3ae3912ed31b02896379b384031eb35f",
".git/objects/4d/dcf1ac14b56dd783d3222b3298e402760761a0": "e00620e0d5c0e4c1fed7ce1f47ec69f0",
".git/objects/51/dbeb1dde0d8ef9a1b9c3eeb3cc4bdbbb7a1c78": "776c946fd5f473dede5a68bd8701fd42",
".git/objects/53/2c406a02ecd3ae0d695d51186d1cc9cccc531c": "9f1be5d99330da268184ccc142846f1b",
".git/objects/54/2202fcee91e9331b7924973ae7b854b4117728": "7347b497292484ae5ec163010d46b3c5",
".git/objects/56/0f5180bf72e9e90ae8af7ff8d7c23b658cf932": "9fee06455e58bf78b9c86d74b4f65819",
".git/objects/56/aacd5ffe3e53ce836fa2590227cc153c50297e": "7c9a156eee67f20903d76d7e02a6b612",
".git/objects/57/82c703b383e1d2f0e634729229ae9f7a172d1e": "f6fabae131e2ead7ad24a7993b2c0750",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/49b0c6295648f4c428b2c89270c354a38ebba4": "d8382f99312c8749b90c2dd35aa1ad05",
".git/objects/61/2bbb835f30bb222961859cb21ccbfe7c578d8b": "d7d69c063108f91d0fceea9a213584cb",
".git/objects/6b/85c2e94658b3ddf5f2321f455b3b8c905b2c46": "d81cd562a4a220cb9db2c964e5666885",
".git/objects/6b/af06539dc2341ee8ac109bcf7ddfbfb7507a1e": "20ab98e26789b6000f10088809515606",
".git/objects/6f/59bfb32710eac457790e99affb53fb5a040919": "03b873ca2a3c3590c0548948d363d414",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/cae366982063f2e3113c6cb6b4ae04926e917d": "b1f36d89a26b407cf4be880ebeabb678",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/1445553e27551f6afa0bf01c4ac743a2e051f4": "c56b06f85121315120ee1183b36d57ac",
".git/objects/78/9eae563828af79a39270a0e501820c8c170ccf": "3249d25caa95d40836505398fef9345b",
".git/objects/7a/db21be9aa70827eaa3abf0e83669cb5f75ad7f": "9048413a3d73bc7b6a222605e2e0b197",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/8c24bea1c635f873f194bacbd9af7796b4a9fa": "0107cbcff030d0a26da2527e1db34983",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/41f9d4b5f8f018e2aa7b51ba7c56fe87dbe8b4": "82cd15a65eea0741394d1957101bd49e",
".git/objects/92/84e9b85056225bb3f1d76f344a0cab526c7be5": "8382adc2701edbc99daa3e1ec4f0a9a2",
".git/objects/94/183675a453ae2655459eb2a146e0aef89150ae": "ef2c243bdcb87dcb81d034d0024c1adf",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/651d454d521f997e4292669262b3c3bbc2b19a": "cfbf6c3639e714c291db4f8b0438da8c",
".git/objects/98/a0d66a3293017cb2e838207e21d84d357c2f98": "32672e0103985615bae559522df8dd75",
".git/objects/9d/b4ddcf338b408a53c563283e607b79342b483d": "0101874cb84c4a29487b14f7d876acfd",
".git/objects/a6/ab2e32284dbaf83b36b5fb8f1032d4f5672d12": "59473ff5dbbf9d4edf6f611812270f88",
".git/objects/a6/c714b6ea2cecc4a964da2d6e1d63796d7d4c42": "eb07da3d8301a4c58237f11fd56ac335",
".git/objects/a8/9ce55a42d928c5b657e75bf1df90e866b6f6fe": "f635cdad21bf1e753280f78d7f61562b",
".git/objects/ac/40b90ff902549fa198e99c47df1cb6c0c70587": "10d9e7f159bb5cd29f66cd8cffb100e1",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/1d33b15764cef31de3a0bc1469d33416f91e35": "9c2c7b5bda44cb0af231555274075b7f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f36886d852d34fbdb892e1532db11e79e77d45": "a0f0a61ca87a8887f6257b91d1613f6d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/d83f392d17bba7648de7f706ccf9f09466f8e5": "3d32df384a3a4301ee9b1324a33e3702",
".git/objects/c4/7462cb301acc66b41996eb414a6bf581c11620": "26abb49207f5653757bafaeac30a1a47",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ebfe6c2d5bbac41d55650731bea660900d2dee": "30b1e133b50eedc0548ef8e316c3f9ba",
".git/objects/df/326ae77f6cbd57b647d8fed0eba1de8db4da64": "a0d983b4908b78fec525f46977526b0d",
".git/objects/e1/350d55527cba93490894085f6e15fbc4da825f": "07925d32acc544b4c951bf9068a06966",
".git/objects/e1/cde07281bbac7646bdcdb56d6627c7cd9a84f4": "6d6b1b21b983f48b3480c014f98fc6f0",
".git/objects/e5/78a2b1b6a8ba0cdf9d3e44196ee8b8df76ed7d": "73a33608b1e296a4aa5235237320df50",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/f5488341725062feb878dd3074b38faf866f01": "daf0da6d5379ca6d542b702b79d03278",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/af21e01740dc5e46f194fb1f0235c9899de885": "b75dc2aca95263ef85f7ddd9a356248a",
".git/objects/ee/5eab7e46342aef2dcb0ad6c2e32190b3ea02d1": "581d98c6068bc429d49318bfd0c0d32e",
".git/objects/ee/b389e5361cd3c3d20b2abb6930028cd6c99d15": "6448b7ff3946d1634b0edbfa1550ad0f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/595cabfcebf2880938875af3259b9e050bb2e4": "4c6b097fe11133d1f8643d6ef9cd6180",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fc/e8259d3a88a0a72f5b0aebb6de00e242e1598b": "936825a8ed74f926895264eaa4a35bd9",
".git/refs/heads/main": "31ddbaadfe63663bbb3489769b05382a",
".git/refs/heads/master": "5aba610f232fd48d75cfcb64abb426bd",
".git/refs/remotes/origin/main": "bf86f295ef3bd1c244b122f9d8443533",
"assets/AssetManifest.bin": "346ac48411f725e61a0e13fc8f57e5e3",
"assets/AssetManifest.bin.json": "78e1ed768d9387d14add33265f33670d",
"assets/AssetManifest.json": "8727f7f80652f577a7211af37f70b21a",
"assets/assets/audio/audio1.mp3": "53484e74ef2ff46538f87f77c315d430",
"assets/assets/images/hero.jpg": "1a1cb798b09e4730ee43d78d1c729980",
"assets/assets/images/muqimiy.png": "2bcb80f44553cbe32ebac82ec209cf14",
"assets/assets/images/text.png": "0c77a1c6fe060c57e4874053ae50f387",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "acec0641180ff6e717f33cc368811032",
"assets/NOTICES": "d124a9e84951e4e5d2b4a99befbe188b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"gazal1.m4a": "545bc178e1ae6d68076e829bfbaf0546",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "259f152820bf18fd6cf4d0d3f8e4bff0",
"/": "259f152820bf18fd6cf4d0d3f8e4bff0",
"main.dart.js": "e3e89a89cbaba5b49b59226c6955a223",
"manifest.json": "1a5bc30515597b6fc69104b457c0184f",
"murabba1.m4a": "d1f6b8e580613e4d5714ba86eaddb787",
"muxammas1.m4a": "5587a40ccc2272cd171871ff8fd086b5",
"muxammas2.m4a": "9e8f0f0df2675399160bffe96ae7506c",
"satira1.m4a": "3cfd2b477313003c639959065a679af6",
"satira2.m4a": "b44e5defa6d6f52c0302ebb220fd85dd",
"sayohatnoma1.m4a": "af4733a66016baefb434a8f7832f69c1",
"sayohatnoma2.m4a": "41a8e019c7f8ff6663ad32ba343ae8ab",
"sayohatnoma3.m4a": "597b2e8f2801a94f341903597405f399",
"sayohatnoma4.m4a": "8eed64fb4abb837f51e36d1df385dd39",
"version.json": "289ae42b80aee4c2c7bce15adee1bc78"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
