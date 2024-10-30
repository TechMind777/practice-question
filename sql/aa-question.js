/**
https://www.interviewbit.com/mongodb-interview-questions/

ACID 
Atomacity --> Entire transaction must finish Or revert the database to old state
Consistancy  --> This means that integrity constraints must be maintained so that the database is consistent before and after the transaction. It refers to the correctness of a database. Referring to the example above, 
The total amount before and after the transaction must be maintained. 

Isolation  --This property ensures that multiple transactions can occur concurrently without leading to the inconsistency of the database state. Transactions occur independently without interference. Changes occurring in a particular transaction will not be visible to any other transaction until that particular change in that transaction is written to memory or has been committed. This property ensures that the execution of transactions concurrently will result in a state that is equivalent to a state achieved these were executed serially in some order. 

Durability  --- This property ensures that once the transaction has completed execution, the updates and modifications to the database are stored in and written to disk and they persist even if a system failure occurs. These updates now become permanent and are stored in non-volatile memory. The effects of the transaction, thus, are never lost. 


1. What is SQL?
a. SQL (Structured Query Language) is a programming language used for managing
relational databases. It allows users to store, manipulate, and retrieve data from
databases.
2. What are the different types of SQL statements?
    a. SQL statements can be categorized into three types:
        i. Data Definition Language (DDL): Used for creating, altering, and dropping database objects.
        ii. Data Manipulation Language (DML): Used for querying, inserting, updating, and deleting data.
        iii. Data Control Language (DCL): Used for controlling access to the database, granting or revoking privileges.
3. What is a primary key?
    a. A primary key is a column or a set of columns that uniquely identifies each record in a table. It ensures data  integrity and allows efficient retrieval of data.
4. What is a foreign key?
    a. A foreign key is a column or a set of columns in a table that refers to the primary key of another table. It establishes a relationship between the two tables.
5. What is a composite key?
    a. A composite key is a primary key composed of two or more columns. Together, these columns uniquely identify each record in a table.
6. What is the difference between DELETE and TRUNCATE?
    a. DELETE is a DML statement used to remove specific rows from a table, whereas TRUNCATE is a DDL statement used to remove all rows from a table, effectively resetting the table.
7. What is a subquery?
a. A subquery is a query nested within another query. It can be used to retrieve data from one table based on values from another table or perform complex calculations.
8. What is the difference between a subquery and a join?
    a. A subquery is a query nested within another query, whereas a join is used to combine rows from two or more tables based on related columns.
9. What is a self-join?
    a. A self-join is a join operation where a table is joined with itself. It is useful when you want to compare rows within the same table.
10. What are the different types of JOIN operations?
    a. The different types of JOIN operations are:
    i. INNER JOIN: Returns only the matching rows from both tables.
    ii. LEFT JOIN: Returns all rows from the left table and matching rows from the right table.
    iii. RIGHT JOIN: Returns all rows from the right table and matching rows from the left table.
    iv. FULL JOIN: Returns all rows from both tables.
11. What is normalization in SQL?
    a. Normalization is the process of organizing data in a database to eliminate redundancy and dependency issues. It involves splitting tables into smaller, more manageable entities.
12. What are the different normal forms in database normalization?
    a. The different normal forms are:
        i. First Normal Form (1NF): Eliminates duplicate rows and ensures atomicity of values.
        ii. Second Normal Form (2NF): Ensures that each non-key column depends on the entire primary key.
        iii. Third Normal Form (3NF): Ensures that each non-key column depends only on the primary key and not on other non-key columns.
        iv. Fourth Normal Form (4NF): Eliminates multi-valued dependencies.
        v. Fifth Normal Form (5NF): Eliminates join dependencies.
13. What is an index?
a. An index is a database structure that improves the speed of data retrieval operations on database tables. It allows faster searching, sorting, and filtering of data.
14. What is a clustered index?
a. A clustered index determines the physical order of data in a table. Each table can have only one clustered index, and it is generally created on the primary key column(s).
15. What is a non-clustered index?
a. A non-clustered index is a separate structure from the table that contains a sorted list of selected columns. It enhances the performance of searching and filtering operations.
16. What is the difference between a primary key and a unique key?
a. A primary key is a column or a set of columns that uniquely identifies each record in a table and cannot contain NULL values. A unique key, on the other hand, allows NULL values and enforces uniqueness but does not automatically define the primary identifier of a table.
17. What is ACID in database transactions?
a. ACID stands for Atomicity, Consistency, Isolation, and Durability. It is a set of properties that ensure reliability and integrity in database transactions.
18. What is the difference between UNION and UNION ALL?
a. UNION combines the result sets of two or more SELECT statements and removes duplicates, whereas UNION ALL combines the result sets without removing
duplicates.
19. What is a view?
a. A view is a virtual table derived from one or more tables. It does not store data but provides a way to present data in a customized or simplified manner.
20. What is a stored procedure?
a. A stored procedure is a precompiled set of SQL statements that performs a specific task. It can be called and executed multiple times with different
parameters.
21. What is a trigger?
a. A trigger is a set of SQL statements that are automatically executed in response to
a specific event, such as INSERT, UPDATE, or DELETE operations on a table.
22. What is a transaction?
a. A transaction is a logical unit of work that consists of one or more database
operations. It ensures that all operations within the transaction are treated as a
single unit, either all succeeding or all failing.
23. What is a deadlock?
a. A deadlock is a situation where two or more transactions are unable to proceed
because each is waiting for a resource held by another transaction. This can
result in a perpetual wait state.
24. What is the difference between CHAR and VARCHAR data types?
a. CHAR is a fixed-length character data type that stores a specific number of
characters, while VARCHAR is a variable-length character data type that stores a
varying number of characters.
25. What is the difference between a function and a stored procedure?
a. A function returns a value and can be used in SQL statements, whereas a stored
procedure does not return a value directly but can perform various actions.
26. What is the difference between GROUP BY and HAVING clauses?
a. GROUP BY is used to group rows based on one or more columns, while HAVING is
used to filter grouped rows based on specific conditions.

27. What is the difference between a database and a schema?
a. A database is a collection of related data that is stored and organized. A schema,
on the other hand, is a logical container within a database that holds objects like
tables, views, and procedures.

28. What is a data warehouse?
a. A data warehouse is a large repository of data collected from various sources,
structured and organized to support business intelligence and reporting.

29. What is the difference between OLTP and OLAP?
a. OLTP (Online Transaction Processing) is used for day-to-day transactional
operations and focuses on real-time processing. OLAP (Online Analytical
Processing) is used for complex analytical queries and focuses on historical data
analysis.

30. What is a correlated subquery?
a. A correlated subquery is a subquery that references columns from the outer
query. It is executed for each row of the outer query, making it dependent on the
outer query's results.

31. What is the difference between a temporary table and a table variable?
a. A temporary table is a physical table that is created and used temporarily within
a session or a specific scope, whereas a table variable is a variable with a
structure similar to a table and exists only within the scope of a user-defined
function or a stored procedure.

32. What is the difference between UNION and JOIN?
a. UNION combines rows from two or more tables vertically, while JOIN combines
columns from two or more tables horizontally based on related columns.

33. What is the difference between WHERE and HAVING clauses?
a. WHERE is used to filter rows before grouping in a query, while HAVING is used to
filter grouped rows after grouping.

34. What is the difference between a database and a data warehouse?
a. A database is a collection of related data organized for transactional purposes,
while a data warehouse is a large repository of data organized for analytical
purposes.

35. What is the difference between a primary key and a candidate key?
a. A candidate key is a column or a set of columns that can uniquely identify each
record in a table. A primary key is a chosen candidate key that becomes the main
identifier for the table.

36. What is the difference between a schema and a database?
a. A database is a collection of related data, while a schema is a logical container
within a database that holds objects like tables, views, and procedures.

37. What is a self-join?
a. A self-join is a join operation where a table is joined with itself. It is used when you
want to compare rows within the same table.

38. What is a recursive SQL query?
a. A recursive SQL query is a query that refers to its own output in order to perform
additional operations. It is commonly used for hierarchical or tree-like data
structures.

39. What is the difference between a correlated subquery and a nested subquery?
a. A correlated subquery is a subquery that references columns from the outer
query, while a nested subquery is a subquery that is independent of the outer
query.

40. What is the difference between a natural join and an equijoin?
a. A natural join is a join operation that automatically matches columns with the
same name from both tables, whereas an equijoin is a join operation that
explicitly specifies the join condition using equality operators.

41. What is the difference between an outer join and an inner join?
a. An inner join returns only the matching rows from both tables, whereas an outer
join returns all rows from one table and matching rows from the other table(s).

42. What is the difference between a left join and a right join?
a. A left join returns all rows from the left table and matching rows from the right
table, whereas a right join returns all rows from the right table and matching rows
from the left table.

43. What is a full outer join?
a. A full outer join returns all rows from both tables, including unmatched rows, and
combines them based on the join condition.

44. What is a self-referencing foreign key?
a. A self-referencing foreign key is a foreign key that references the primary key of
the same table. It is used to establish hierarchical relationships within a single
table.

45. What is the purpose of the GROUP BY clause?
a. The GROUP BY clause is used to group rows based on one or more columns. It is
typically used with aggregate functions to perform calculations on each group.

46. What is the purpose of the HAVING clause?
a. The HAVING clause is used to filter grouped rows based on specific conditions. It
operates on the results of the GROUP BY clause.

47. What is the purpose of the ORDER BY clause?
a. The ORDER BY clause is used to sort the result set based on one or more columns
in ascending or descending order.

48. What is the purpose of the DISTINCT keyword?
a. The DISTINCT keyword is used to retrieve unique values from a column in a result
set, eliminating duplicate rows.

49. What is the purpose of the LIKE operator?
a. The LIKE operator is used in a WHERE clause to search for a specified pattern in a
column. It allows wildcard characters like % (matches any sequence of
characters) and _ (matches any single character).

50. What is the purpose of the IN operator?
a. The IN operator is used in a WHERE clause to check if a value matches any value in
a list or a subquery.



 */