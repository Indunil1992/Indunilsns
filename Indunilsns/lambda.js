let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.getTopicAttributes({
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:testSNSGetTA'
    }).promise()
        .then(data => {
            console.log(data);
            console.log("passs");
            // your code goes here
        })
        .catch(err => {
            console.log(err);
            console.log("fails");
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}