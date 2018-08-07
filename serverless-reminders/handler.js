'use strict';

module.exports.sendReminderDaily = (event, context, callback) => {

  const AWS = require('aws-sdk');
  AWS.config.update({region:'eu-west-1'});

  const ses = new AWS.SES();
  const fs = require('fs');

  const emailHtml = fs.readFileSync('./dailyReminder.html', 'utf-8');

  const toAndFromAddress = 'mike.alex.martinez@gmail.com';

  const params = {
    Destination: {
      ToAddresses: [toAndFromAddress]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Remember to continure helping the Woof Garden in your Pluralsight course!'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Woof Garden Reminder'
      }
    },
    ReplyToAddresses: [toAndFromAddress],
    Source: toAndFromAddress,
  };

  ses.sendEmail(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else callback(null, data);
  });
};

module.exports.sendReminderWeekend = (event, context, callback) => {

  const AWS = require('aws-sdk');
  AWS.config.update({region:'eu-west-1'});

  const ses = new AWS.SES();
  const fs = require('fs');

  const emailHtml = fs.readFileSync('./weekendReminder.html', 'utf-8');

  const toAndFromAddress = 'mike.alex.martinez@gmail.com';

  const params = {
    Destination: {
      ToAddresses: [toAndFromAddress]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Here\'s a weekend Remember that puppies are adorable!!'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Woof Garden Reminder'
      }
    },
    ReplyToAddresses: [toAndFromAddress],
    Source: toAndFromAddress,
  };

  ses.sendEmail(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else callback(null, data);
  });
};
