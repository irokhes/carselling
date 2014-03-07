db = db.getSiblingDB('carselling');
db.dropDatabase();
var seedUser ={
  firstName:'Azat',
  lastName:"Mardanov", 
  username:"AzatM",
  password:'1',
  email:'1@1.com',
  role:'admin',
  approved: true, 
  admin: true
};
db.users.save(seedUser);