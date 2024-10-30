/**
 * A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it.


CREATE PROCEDURE procedure_name
AS 
SELECT * FROM Customers
GO;

Execute a Stored Procedure: 
    EXEC procedure_name;


    CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
    AS
    SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
    GO;

    Execute the stored procedure above as follows:
    EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';


);
 */