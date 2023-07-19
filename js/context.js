/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    id: '@id',
    type: '@type',
    '@protected': true,
    Multikey: {
      '@id': 'https://w3id.org/security#Multikey',
      '@context': {
        '@protected': true,
        id: '@id',
        type: '@type',
        controller: {
          '@id': 'https://w3id.org/security#controller',
          '@type': '@id'
        },
        expires: {
          '@id': 'https://w3id.org/security#expires',
          '@type': 'http://www.w3.org/2001/XMLSchema#dateTime'
        },
        revoked: {
          '@id': 'https://w3id.org/security#revoked',
          '@type': 'http://www.w3.org/2001/XMLSchema#dateTime'
        },
        publicKeyMultibase: {
          '@id': 'https://w3id.org/security#publicKeyMultibase',
          '@type': 'https://w3id.org/security#multibase'
        },
        secretKeyMultibase: {
          '@id': 'https://w3id.org/security#secretKeyMultibase',
          '@type': 'https://w3id.org/security#multibase'
        }
      }
    }
  }
};
