// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Loads client secrets from a local file.
 * @return {Promise} A promise to return the secrets.
 */
const fs = require('fs');

module.exports.getClientSecrets = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('client_secret.json', (err, content) => {
      if (err) return reject('Error loading client secret file: ' + err);
      console.log('loaded secrets...');
      resolve(JSON.parse(content));
    });
  });
};

/**
 * Create an OAuth2 client promise with the given credentials.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback for the authorized client.
 * @return {Promise} A promise to return the OAuth client.
 */
module.exports.authorize = (credentials) => {
  return new Promise((resolve, reject) => {
    console.log('TODO: Authorize');
    resolve({});
  });
}
