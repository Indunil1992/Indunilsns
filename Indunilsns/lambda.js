let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.publish({
        Message: 'test1',
        MessageAttributes: {
            'AWS.SNS.SMS.SMSType': {
                'DataType': 'String',
                'StringValue': 'Transactional'
            },
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': 'A1234123aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
        },
        PhoneNumber: '+94713245242'
    }).promise()
        .then(data => {
            // your code goes here
            console.log("paass");
        })
        .catch(err => {
            // error handling goes here
            console.log("failll");
            console.log(err);
        });

    callback(null, { "message": "Successfully executed" });
}