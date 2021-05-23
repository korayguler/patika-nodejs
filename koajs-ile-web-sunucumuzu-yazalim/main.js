const Koa = require('koa');
const app = new Koa();

app
  .use(async (ctx) => {
    if (ctx.req.url === '/') {
      ctx.body = '<h1>Index Sayfasına Hoşgeldiniz</h1>';
      ctx.status = 200;
    } else if (ctx.req.url === '/hakkimda') {
      ctx.body = '<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>';
      ctx.status = 200;
    } else if (ctx.req.url === '/iletisim') {
      ctx.body = '<h1>Iletisim Sayfasına Hoşgeldiniz</h1>';
      ctx.status = 200;
    } else {
      ctx.body = '<h1>404 Aradığınız sayfa bulunamadı</h1>';
      ctx.status = 404;
    }
  })
  .listen(3000);
