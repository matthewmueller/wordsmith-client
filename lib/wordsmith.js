/**
 * Module dependencies
 */

var http = require('http'),
    connect = require('connect'),
    emitter = require('events').EventEmitter;

/**
 * Expose `Wordsmith` middleware
 */

module.exports = Wordsmith;

/**
 * Initialize `Wordsmith`
 *
 * @param {String} token
 * @return {Wordsmith}
 * @api public
 */

function Wordsmith(token) {
  if (!(this instanceof Wordsmith)) return new Wordsmith(token);
  this.token = token;
  this.base = '/';
  this.note = new emitter();
}

/**
 * Add a base URL path
 *
 * @param {String} path
 * @return {Wordsmith}
 */

Wordsmith.prototype.base = function(path) {
  this.base = '/' + path.replace(/^\//, '');
  return this;
};

/**
 * Attach wordsmith to a server
 *
 * @param {http.Server} server
 * @return {Note}
 * @api public
 */

Wordsmith.prototype.attach = function(server) {
  var base = this.base;

  // TODO: check if middleware already present
  server.use(base, connect.json())
        .use(base, connect.query())
        .use(base, this.middleware.bind(this));

  return this.note;
};

/**
 * Bind to a port
 *
 * @param {Number} port
 * @return {Note}
 * @api public
 */

Wordsmith.prototype.listen = function(port) {
  var base = this.base;
  var app = connect()
    .use(base, connect.json())
    .use(base, this.middleware.bind(this))
    .use(base, invalid);

  http.createServer(app).listen(port);

  return this.note;
};

/**

/**
 * Wordsmith middleware
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */

Wordsmith.prototype.middleware = function(req, res, next) {

  var method = req.method,
      body = req.body,
      token = body.token,
      url = req.url.replace(/^\//, '');

  if (!/PUT|DELETE/.test(method)) return next();
  else if (!token || token !== this.token) return next();

  delete body.token;

  var event = (method == 'DELETE') ? 'delete' : ((url) ? url : 'update');
  this.note.emit(event, body);

  return next();
};

/**
 * Response if we pass through
 *
 * @param {Request} req
 * @param {Response} res
 */

function invalid(req, res) {
  res.end('invalid');
}
