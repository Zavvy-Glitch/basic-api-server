# Basic API Server
[PR](https://github.com/Zavvy-Glitch/basic-api-server/pull/3)
Version: 1.0.2 \
[Server Deployment](https://chattray-basic-api-server.herokuapp.com/)

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

