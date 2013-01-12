# Wordsmith

Node.js wordsmith client.

## API

### Wordsmith(token)

Initialize a wordsmith client with the given user `token`.

### wordsmith.base(url)

Prefix the routes with a base `url`.

### wordsmith.attach(server)

Attach wordsmith to a `server`. Wordsmith supports `express`, `connect`, and plain jane `http.server`.

Returns an EventEmitter instance.

### wordsmith.listen(port)

Create a server and bind to the given `port`.

Returns an EventEmitter instance.

### wordsmith.on(event, fn)

Listen to an `event` and call the supplied `fn`. Available events include:

- `publish` (note) : a new note has been published.
- `unpublish` (note) : a note has been unpublished.
- `update` (note) : a note has been updated.
- `delete` (note) : a `note` has been deleted.

## Creating your own client:

### Listen to the following requests:

* Add the tag: `PUT /publish`
* Remove the tag: `PUT /unpublish`
* Update the tag: `PUT /`
* Delete the tag: `DELETE /`

### The body of the response is the following:

```json
"body" : {
  "title" : ...
  "content" : ...
  "created_at" : ...
  "updated_at" : ...
  "tags" : ...
  "token" : ...
}
```

## License

(The MIT License)

Copyright (c) 2012 matthew mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
