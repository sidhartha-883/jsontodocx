import jsforce from 'jsforce';
import { test } from './connectdb.js';
var channel = "/event/Account__e";
var user = 'absidhartha-m0zz@force.com';
var pass = 'Qazwsx#345';
var securityToken = 'iBMFj54slCtj5mIUziI8EbBgt';
var replayId = -2; // -1 = Only New messages | -2 = All Window and New 
var conn = new jsforce.Connection();

conn.login(user, pass + securityToken, function (err, res) {
    if (err) { return console.error(err); }

    var client = conn.streaming.createClient([
        new jsforce.StreamingExtension.Replay(channel, replayId),
        new jsforce.StreamingExtension.AuthFailure(
            function () {
                return process.exit(1);
            }
        )
    ]);
   
    client.subscribe(channel, function (data) {
        console.log("received data", data.payload.JSON_1__c);
        test(data.payload.JSON_1__c);
    });
});