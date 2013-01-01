var express = require('express'),
    wordsmith = require('./')('gno3vu3y');
    app = express();

app.use(express.bodyParser());
app.use(wordsmith.middleware);

wordsmith.on('content', function(content) {
  console.log('content', content);
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
});
