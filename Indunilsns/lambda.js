let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.deleteEndpoint({
        EndpointArn: 'arn:aws:sns:us-east-1:318300609668:endpoint/MPNS/snsAppTestCafe/1'
    }).promise()
        .then(data => {
            console.log(data);
            // your code goes here
        })
        .catch(err => {
            console.log(err);
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}