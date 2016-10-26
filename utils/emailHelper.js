/*
 * Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

'use strict';
// The contents of the outbound email message that will be sent to the user
const emailContent = '<html><head> <meta http-equiv=\'Content-Type\' content=\'text/html; charset=us-ascii\'> <title></title> </head><body style=\'font-family:calibri\'> <p>Congratulations {{name}},</p> <p>This is a message from the Microsoft Graph Connect Sample. You are well on your way to incorporating Microsoft Graph endpoints in your apps.</p> <h3>What&#8217;s next?</h3> <ul><li>Check out <a href=\'https://graph.microsoft.io\' target=\'_blank\'>graph.microsoft.io</a> to start building Microsoft Graph apps today with all the latest tools, templates, and guidance to get started quickly.</li><li>Use the <a href=\'https://graph.microsoft.io/graph-explorer\' target=\'_blank\'>Graph explorer</a> to explore the rest of the APIs and start your testing.</li><li>Browse other <a href=\'https://github.com/microsoftgraph/\' target=\'_blank\'>samples on GitHub</a> to see more of the APIs in action.</li></ul> <h3>Give us feedback</h3> <p>If you have any trouble running this sample, please <a href=\'https://github.com/microsoftgraph/nodejs-connect-sample/issues\' target=\'_blank\'>log an issue</a>.</p><p>For general questions about the Microsoft Graph API, post to <a href=\'https://stackoverflow.com/questions/tagged/microsoftgraph\' target=\'blank\'>Stack Overflow</a>. Make sure that your questions or comments are tagged with [microsoftgraph].</p><p>Thanks and happy coding!<br>Your Microsoft Graph samples development team </p> <div style=\'text-align:center; font-family:calibri\'> <table style=\'width:100%; font-family:calibri\'> <tbody> <tr> <td><a href=\'https://github.com/microsoftgraph/nodejs-connect-sample\'>See on GitHub</a> </td> <td><a href=\'https://officespdev.uservoice.com\'>Suggest on UserVoice</a> </td> <td><a href=\'https://twitter.com/share?text=I%20just%20started%20developing%20apps%20for%20%23NodeJS%20using%20the%20%23MicrosoftGraph%20Connect%20app%20%40OfficeDev&amp;url=https://github.com/microsoftgraph/nodejs-connect-sample\'>Share on Twitter</a> </td> </tr> </tbody> </table> </div>  </body> </html>';;

var getEmailContent = (name) => {
	return emailContent.replace('{{name}}', name)
};

var wrapEmail = (content, recipient) => {
	var emailAsPayload = {
		Message: {
			Subject: 'Welcome to Microsoft Graph development with Node.js and the Connect sample',
			Body: {
				ContentType: 'HTML',
				Content: content
			},
			ToRecipients: [{
				EmailAddress: {
					Address: recipient
				}
			}]
		},
		SaveToSentItems: true
	};

	return emailAsPayload;
};

module.exports = {
	 generateMailBody: (name, recipient) => {
		return wrapEmail(getEmailContent(name), recipient);
	} 
};

