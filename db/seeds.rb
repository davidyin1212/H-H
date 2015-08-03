# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Add all the permissions
Permission.create(name: "UserPrivilege", description:"Allows viewing of all users")
Permission.create(name: "UserModifyPrivilege", description:"Allows creation and deletion of users")
Permission.create(name: "CarModifyPrivilege", description:"Allows creation, modification and deletion of cars")
Permission.create(name: "QueryUserCarsPrivilege", description:"Allows access to query all cars that belong to a user that is not the current user")
Permission.create(name: "QueryCarPrivilege", description:"Allows for query for status of the car")
Permission.create(name: "GeneralUsePrivilege", description:"Basic Use Privilege")

#Add Admin User


case Rails.env
when "development"
   #Add Users for testing
   User.create(first_name: "User1", last_name: "User1", email: "test1@email.com", password: "12345678")
   User.create(first_name: "User2", last_name: "User2", email: "test2@email.com", password: "12345678")
   User.create(first_name: "User3", last_name: "User3", email: "test3@email.com", password: "12345678")
   User.create(first_name: "User4", last_name: "User4", email: "test4@email.com", password: "12345678")
   User.create(first_name: "User5", last_name: "User5", email: "test5@email.com", password: "12345678")

   #Add Cars for testing
   Car.create(name: "Mercedes Benz GL450", make: "Mercedes Benz", model: "GL450", engine: "3.0L BlueTEC 4MATIC V6 Engine", status: 0)
   Car.create(name: "Mercedes Benz GL350", make: "Mercedes Benz", model: "GL450", engine: "3.0L BlueTEC 4MATIC V6 Engine", status: 1, user_id: 1)
   Car.create(name: "Range Rover Sport", make: "Land Rover", model: "Range Sport", engine: "V6", status: 0)
   Car.create(name: "Range Rover Fullsize", make: "Land Rover", model: "Range Fullsize", engine: "V6", status: 2, user_id: 1)
   Car.create(name: "Maserati Gran Turismo", make: "Maserati", model: "Gran Turismo", engine: "V8", status: 0)
   Car.create(name: "Jaguar XF", make: "Jaguar", model: "XF", engine: "V6", status: 0)
when "production"
   
end

