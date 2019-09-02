let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.publish({
        Message: 'msg2',
        Subject: 'subjct2',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:testIndunilSNS1'
    }).promise()
        .then(data => {
                        console.log("pass");
            // your code goes here
        })
        .catch(err => {
            console.log("fail");
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}