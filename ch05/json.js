var accountObj = {
  name: "Baggins",
  number: 10645,
  members: ["Frodo, Bilbo"],
  location: "Shire"
};
var accountStr = JSON.stringify(accountObj);
console.log(accountStr);
var accountStr = '{"name":"Jedi", "members":["Yoda","Obi Wan"], \
                   "number":34512, "location": "A galaxy far, far a way"}';
var accountObj = JSON.parse(accountStr);  
console.log(accountObj.name);  
console.log(accountObj.members);