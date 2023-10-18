const accountId = 785445;
let accountEmail = "masum@gmail.com";
var accountPassword = "123654";
accountCity = "Kolkata";
//accountId = 455678;
let accountState;

accountEmail = "aasim@gmail.com";
accountPassword = "124578";
accountCity = "Delhi";
/*
    Never Use var due to issue in block scope 
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

