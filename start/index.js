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

require('dotenv').config();
const auth = require('./auth');
const slides = require('./slides');
const license = require('./license');

/**
 * Generates slides using the Google Slides, Drive, and BigQuery APIs.
 */
console.log('-- Start generating slides. --')
auth.getClientSecrets()
  // read OAuth credentials from client secret file
  .then(auth.authorize)
  // call the authorize function with the returned credentials - authorizes the OAuth2 client to approve users
  .then(license.getLicenseData)
  // takes in the returned credentials from the oauth client (oauth2 client object with secret, redirectURI, and token stored under 'credentials')
  // returns an array with with the auth data and resulting license data from query
  .then(slides.createSlides)
  // takes in the auth and license data, and interacts with drive / slides as needed
  .then(slides.openSlidesInBrowser)
  .then(() => {
    console.log('-- Finished generating slides. --');
  });
