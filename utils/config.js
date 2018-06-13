/*
 * Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

module.exports = {
    creds: {
        redirectUrl: 'http://localhost:3000/token',
        clientID: '<INSERT_YOUR_CLIENTID>',
        clientSecret: '<INSERT_YOUR_SECRET>',
        identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
        skipUserProfile: true,
        responseType: 'code',
        validateIssuer: false,
        responseMode: 'query',
        scope: ['User.Read', 'Mail.Send', 'profile'],
        allowHttpForRedirectUrl: true
    }
};