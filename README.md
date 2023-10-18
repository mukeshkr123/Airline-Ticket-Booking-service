## Creating a booking model

run the following command `npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum`

then creat `npx sequelize db:migrate`
