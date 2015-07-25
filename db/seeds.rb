# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Permission.create(name: "UserPrivilege", description:"Allows viewing of all users")
Permission.create(name: "UserModifyPrivilege", description:"Allows creation and deletion of users")
Permission.create(name: "CarModifyPrivilege", description:"Allows creation, modification and deletion of cars")
Permission.create(name: "QueryUserCarsPrivilege", description:"Allows access to query all cars that belong to a user that is not the current user")
Permission.create(name: "QueryCarPrivilege", description:"Allows for query for status of the car")
