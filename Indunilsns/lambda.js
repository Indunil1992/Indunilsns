let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    sns.createPlatformEndpoint({
        PlatformApplicationArn: 'arn:aws:sns:us-east-1:318300609668:app/MPNS/snsAppTestCafe',
        Token: '123456789',
        CustomUserData: 'Data',
        Attributes: {},
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}