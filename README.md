# Basic API Server
[PR1 API Implementation](https://github.com/Zavvy-Glitch/basic-api-server/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed) \
[PR2 API Refactor](https://github.com/Zavvy-Glitch/basic-api-server/pull/2/commits) \
Version: 1.0.1 \
[Server Deployment](https://chattray-basic-api-server.herokuapp.com/)


## Express REST API 10/20/21

## Requirements:
 -  Build a REST API using Express.
 -  Must be able to perform CRUD operations, using REST standards
 -  Create 2 SQL Models of your choice by incorporating the `Sequelize` library.
 -  Models will need to be configured with selected SQL dialect.
 -  Should have appropraite naming with sequelize `DataTypes`.

## Data Modeling 10/21/21

## Requirements
 - Create 2 SQL data models using Sequelize, exported as Node Modules
 - Create a Collection Class that accepts a Sequelize Model into the constructor and assigns it as this.model
 - This class should have the following methods defined, to perform CRUD Operations
 - Each method should in turn call the appropriate Sequelize method for the model
   - `create()`
   - `get()` or `read()`
   - `update()`
   - `delete()`

### Routes
 - In your express server, create a router module for each data model that you’ve created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

 - For these examples, we’ll use ‘food`

#### Add a Record
 - CRUD Operation: Create
 - REST Method: POST
 - Path: /food
 - Input: JSON Object in the Request Body
 - Returns: The record that was added to the database.
 - You must generate an ID and attach it to the object.
 - You should verify that only the fields you define get saved as a record.

#### Get All Records
 - CRUD Operation: `Read`
 - REST Method: `GET`
 - Path: `/food`
 - Returns: An array of objects, each object being one entry from your database.

#### Get One Record
 - CRUD Operation: `Read`
 - REST Method: `GET`
 - Path: `/food/1`
 - Returns: The object from the database, which has the id matching that which is in the path.

#### Update A Record
 - CRUD Operation: `Update`
 - REST Method: `PUT`
 - Path: `/food/1`
 - Input: JSON Object in the Request Body
 - Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
 - You should verify that only the fields you define get saved as a record.

#### Delete A Record
 - CRUD Operation: `Destroy`
 - REST Method: `DELETE`
 - Path: `/food/1`
 - Returns: The record from the database as it exists after you delete it (i.e. null).

## Testing Requirements
- Assert the following
  - 404 on a bad route
  - 404 on a bad method
  - The correct status codes and returned data for each `REST` route
  - Create a record using `POST`
  - Read a list of records using `GET`
  - Read a record using `GET`
  - Update a record using `PUT`
  - Destroy a record using `DELETE`

