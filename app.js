'use strict';

const userProfile = {
    username : 'patrick kane',
    email : 'patrickkane@gmail.ru',
    age : 25,
    isLoggedIn : true
};

console.log(userProfile.email);

userProfile.age = 26;

userProfile['user location'] = 'New York';

console.log(userProfile['user location']);