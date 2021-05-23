const http = require('http');

http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    switch (url) {
      case '/': {
        res.write('<h2>Index Sayfasına Hoşgeldiniz</h2>', 'utf-8');
        res.end();

        break;
      }

      case '/hakkimda': {
        res.write('<h2>Hakkımda Sayfasına Hoşgeldiniz</h2>');
        res.end();

        break;
      }

      case '/iletisim': {
        res.write('<h2>İletişim Sayfasına Hoşgeldiniz</h2>');
        res.end();

        break;
      }

      default: {
        res.write('<h2>Aradığınız Sayfa Bulunamadı :((</h2>');
        res.end();

        break;
      }
    }
  })
  .listen(5000, () => {
    console.log('Server Listening !!');
  });
