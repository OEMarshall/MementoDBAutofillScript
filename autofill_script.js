var jsonresult = http().get("https://api.upcitemdb.com/prod/trial/lookup?upc=” + query);


var name = JSON.parse(jsonresult.body)["items"]["title"];
var details = JSON.parse(jsonresult.body)["items"]["description"];
var model = JSON.parse(jsonresult.body)["items"]["model"];

result(name)
