/**
 * Module dependencies
 */

var Emitter = require('events').EventEmitter;

/**
 * Expose `Wordsmith` middleware
 */

module.exports = Wordsmith;

/**
 * Initialize `Wordsmith`
 *
 * @param {String} token
 */

function Wordsmith(token) {
  if(!(this instanceof Wordsmith)) return new Wordsmith(token);
  this.token = token;
  this.middleware = this.middleware.bind(this);
}

/**
 * Wordsmith middleware
 */

Wordsmith.prototype.middleware = function(req, res, next) {
  if(req.method != 'PUT') return next();

  var body = req.body;
  if(!body) throw new Error('Wordsmith: bodyParser required');

  var token = body.token;
  if(!token || token !== this.token) return next();

  var content = body.content;
  delete body.content;

  this.emit('content', content, body, req);
  return next();
};

/**
 * Mixin Emitter
 */

Wordsmith.prototype.__proto__ = Emitter.prototype;
