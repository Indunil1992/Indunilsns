let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.publish({
        Message: 'test1',
        MessageAttributes: {
            'AWS.SNS.SMS.SMSType': {
                'DataType': 'String',
                'StringValue': 'Promotional'
            },
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': 'ID 1'
            }
        },
        PhoneNumber: '+94713245242'
    }).promise()
        .then(data => {
            // your code goes here
            console.log("pass");
        })
        .catch(err => {
            // error handling goes here
            console.log("fail");
        });

    callback(null, { "message": "Successfully executed" });
}