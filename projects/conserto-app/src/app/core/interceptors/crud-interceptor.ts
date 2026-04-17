import { HttpInterceptorFn } from '@angular/common/http';

export const crudInterceptor: HttpInterceptorFn = (req, next) => {

  // Switch req.url '/api/*' to 'http://localhost:5050/*'
  if (req.url.startsWith('/api/')) {
    const newUrl = `http://localhost:5050${req.url.substring(4)}`;
    // Add fake bearer header
    const fakeToken = 'fake-token';
    req = req.clone({ url: newUrl, setHeaders: { Authorization: `Bearer ${fakeToken}` } });
  }

  return next(req);
};
