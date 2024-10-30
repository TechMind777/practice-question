/**
Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries.

Note: Updating a table with indexes takes more time than updating a table without (because the indexes also need an update). So, only create indexes on columns that will be frequently searched against.


Creates an index on a table. Duplicate values are allowed:
    CREATE INDEX index_name ON table_name (column1, column2, ...);

Creates a unique index on a table. Duplicate values are not allowed:
    CREATE UNIQUE INDEX index_name ON table_name (column1, column2, ...);


 */