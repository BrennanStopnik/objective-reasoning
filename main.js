// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

// IS ADMIN

console.log("\n");
console.log("IS ADMIN");

function isAdmin(user){
    if(user.userRole === "ADMIN"){
        return true;
    } else {
        return false;
    }
}
const user1 = {
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
}
const user2 = {
    firstName: 'Ian',
    lastName: 'Rogers', 
    userRole: 'USER_MANAGER'
}
const user3 = {
    firstName: 'Jeff',
    lastName: 'Wilson', 
    userRole: 'ADMIN'
}
console.log(isAdmin(user1));
console.log(isAdmin(user2));
console.log(isAdmin(user3));


// GET EMAIL

console.log("\n");
console.log("GET EMAIL");

function getEmail(user){
    return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`
}
const userName1 = {
    firstName: 'Brian',
    lastName: 'Carela'
}
const userName2 = {
    firstName: 'Anthony',
    lastName: 'DeRosa'
}
console.log(getEmail(userName1));
console.log(getEmail(userName2));


// GET PLAYLIST LENGTH

console.log("\n");
console.log("GET PLAYLIST LENGTH");

function getPlaylistLength(playlist){
    let count = playlist.songs.length;
    return count
}
const pl1 = {
    name: 'hits',
    songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road (remix)']
}
const pl2 = {
    name: 'empty playlist',
    songs: []
}
console.log(getPlaylistLength(pl1));
console.log(getPlaylistLength(pl2));


// GET HARDEST HOMEWORK

console.log("\n");
console.log("GET HARDEST HOMEWORK");

function getHardestHomework(homework){
    if (homework.length === 0){
        return "";
    }
    let lowest = homework[0].averageScore;
    let lowestHWName = homework[0].name;
    for (let i = 0; i < homework.length; i++){
        if (homework[i].averageScore < lowest){
            lowest = homework[i].averageScore;
            lowestHWName = homework[i].name;
        }
    } 
    return lowestHWName;
}
console.log(getHardestHomework([]));
console.log(getHardestHomework([
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }
]));
console.log(getHardestHomework([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
]));



// CREATE PHONEBOOK

console.log("\n");
console.log("CREATE PHONEBOOK");

function createPhonebook(name, number){
    if (name.length === 0){
        return {};
    }
    let phonebook = {};
    for (let i = 0; i < name.length; i++){
        phonebook[name[i]] = number[i];
    }
    return phonebook;
}

console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']));
console.log(createPhonebook(['Melissa', 'Andre'], ['206-111-2233', '321-123-2424']));
console.log(createPhonebook([], []));




// function createPhonebook(name, number){
//     if (name === 0 && number === 0){
//         return ""
//     }
//     let phonebook = {};
//     for (let i = 0; i< name.length; i++){
//         phonebook[name] = name[i];    
//     };
//     for (let i = 0; i< name.length; i++){
//         phonebook[phoneNumber] = number[i];    
//     };
//     return phonebook 
// }

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};