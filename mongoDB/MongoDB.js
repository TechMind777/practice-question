/*
Introduction to MongoDB

When dealing with data, there are two types of data as we know – 
(i) structured data and 
(ii) unstructured data. 
Structured data is usually stored in a tabular form whereas unstructured data is not. 
To manage huge sets of unstructured data like log or IoT data, a NoSQL database is used.

What is MongoDB ?
1. MongoDB is an open-source NoSQL database written in C++ language. It uses JSON-like documents with optional schemas.
2. It provides easy scalability and is a cross-platform, document-oriented database.
3. MongoDB works on the concept of Collection and Document.
4. It combines the ability to scale out with features such as secondary indexes, range queries, sorting, aggregations, and geospatial indexes.
5. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL)



1. What are some of the advantages of MongoDB?
Some advantages of MongoDB are as follows:

MongoDB supports field, range-based, string pattern matching type queries. for searching the data in the database 
MongoDB support primary and secondary index on any fields
MongoDB basically uses JavaScript objects in place of procedures
MongoDB uses a dynamic database schema
MongoDB is very easy to scale up or down
MongoDB has inbuilt support for data partitioning (Sharding).

Sharding is a method for distributing a single dataset across multiple databases, which can then be stored on multiple machines. This allows for larger datasets to be split into smaller chunks and stored in multiple data nodes, increasing the total storage capacity of the system.


2. What is a Document in MongoDB ?
A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary. In JavaScript, documents are represented as objects:
{"greeting" : "Hello world!"}

Complex documents will contain multiple key/value pairs:
{"greeting" : "Hello world!", "views" : 3}

3. What is a Collection in MongoDB?
A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table.
Documents within a single collection can have any number of different “shapes.”, i.e. collections have dynamic schemas. 
For example, both of the following documents could be stored in a single collection:

{"greeting" : "Hello world!", "views": 3}
{"signoff": "Good bye"}


4. What are Databases in MongoDB?
MongoDB groups collections into databases. MongoDB can host several databases, each grouping together collections. 
Some reserved database names are as follows:
admin
local
config

5. What is the Mongo Shell?
It is a JavaScript shell that allows interaction with a MongoDB instance from the command line. With that one can perform administrative functions, inspecting an instance, or exploring MongoDB. 

To start the shell, run the mongo executable:

$ mongod
$ mongo
MongoDB shell version: 4.2.0
connecting to: test


7. What are some features of MongoDB?
Indexing: It supports generic secondary indexes and provides unique, compound, geospatial, and full-text indexing capabilities as well.
Aggregation: It provides an aggregation framework based on the concept of data processing pipelines.
Special collection and index types: It supports time-to-live (TTL) collections for data that should expire at a certain time
File storage: It supports an easy-to-use protocol for storing large files and file metadata.
Sharding: Sharding is the process of splitting data up across machines.


...> In summary,  the _id field is a critical part of MongoDB's architecture, and it cannot be deleted or modified once set. If you need to work with data in ways that don't involve the _id field, consider using aggregation pipelines or other schema design approaches.









