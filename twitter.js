var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;
var x = document.getCookie("name");

//you need to put your own keys in here
var client = new Twitter({
    consumer_key: 'W0qmXQ9ZcZ331lRRSOH92vfoo',
    consumer_secret: 'ursoNPsoAPgBfLaAi4UvOqSoDO89fGAXRX2GrjIpOMeXWa4LPg',
    access_token_key: '389398408-Rq0ejKRxZNx1ymPIUXZwBqeBrM5MVvbeZ6RQimVa',
    access_token_secret: '1yAmkT8CDOIr1WcklgDioEYFv5KII9ye506EeCzNFblTH'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'  });
    //search for 10 tweets containing lolcats
    client.get('search/tweets', {q: x , count: '10'}, function(error, tweets){

        var json = [];
        for (var i =0; i< tweets.statuses.length ; i++)
        {
            json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
        }

        response.end(JSON.stringify(json));
    });
}).listen(port);


