var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');
var fetch = require('node-fetch');
var githubUsername
var githubUserDetailsUrl
var githubUserDetails

defineSupportCode(function({Given, When, Then}) {
  Given('I have an user with name {stringInDoubleQuotes} for github', function(username) {
    githubUsername = username;
    githubUserDetailsUrl = 'https://api.github.com/users/'+username;
  });

  When('I call github endpoint to get user details', function () {
    githubUserDetails = fetch(githubUserDetailsUrl)
  });

  Then('The name property in user details should have {stringInDoubleQuotes}', function (name,callback) {
        githubUserDetails.then(function(response){
        return response.json();
    }).then(function(json){
      let actualName = json.name;
      expect(actualName).to.equal(name);
      callback();
    }).catch(function(error){
      callback(error)
    })
  });
});