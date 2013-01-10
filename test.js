var wordsmith = require('./')('a079yuww'),
    note = wordsmith.listen(8000);

console.log('listening on port 8000');

note.on('update', function(note) {
  console.log('updating note...', note);
});

note.on('publish', function(note) {
  console.log('publishing note...', note);
});

note.on('unpublish', function(note) {
  console.log('unpublishing note...', note);
});

note.on('delete', function(note) {
  console.log('deleting note...', note);
});
