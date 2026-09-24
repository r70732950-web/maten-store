self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // دەتوانیت لێرەدا کشکردن (caching) زیاد بکەیت بۆ کارکردنی ئۆفلایین لە داهاتوودا
});
