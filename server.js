const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

// /!\ Bind the router db to the app
app.db = router.db;

const rules = auth.rewriter({
  // Permission rules
  users: 600,
  messages: 640,
  // Other rules
  '/posts/:category': '/posts?category=:category',
});

// You must apply the auth middleware before the router
app.use(rules);
app.use(auth);
app.use(router);
app.listen(3000);
