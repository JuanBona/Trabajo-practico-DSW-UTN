// use donjulio ---> Name of the database
// managed with json -->> Name of the collection
// collections are like tables in SQL

// insert data
db.client.insertOne({
    name: "Julio",
    lastname: "Cesar",
    birthdate: "1993-07-01",
    email: "2@gmail.com",
    phone: "1234567890",
    addres: "Calle 123",
    city: "Bogota",
    country: "Colombia",
    postalCode: "12345",
    dni: "1234567890",
    password: "123",
})
db.client.insertOne({
    name: "Maria",
    lastname: "Gonzalez",
    birthdate: "1990-05-15",
    email: "maria@gmail.com",
    phone: "9876543210",
    addres: "Avenida 456",
    city: "Mexico City",
    country: "Mexico",
    postalCode: "54321",
    dni: "0987654321",
    password: "456",
})
// querys
db.client.find().pretty()
db.client.find({name: "Julio"}).pretty()
db.client.find({postalCode: {$gt: "12345"}}).pretty()
db.client.find({postalCode: {$gt: "12345"}}, {name: 1, lastname: 1, _id: 0}) 
// querys para modificar
db.client.updateOne({name: "Julio"}, {$set: {phone: "0987654321"}})
// querys para eliminar
db.client.deleteOne({name: "Maria"})



