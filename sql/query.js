/**
 * 
UNION – returns the records obtained by at least one of two queries (excluding duplicates)
UNION ALL – returns the records obtained by at least one of two queries (including duplicates)
INTERSECT – returns the records obtained by both queries 
EXCEPT (called MINUS in MySQL and Oracle) – returns only the records obtained by the first query but not the second one


 *  SELECT * FROM table_1
        INTERSECT
    SELECT * FROM table_1;


    SELECT * FROM Customers LIMIT 3 OFFSET 3; 

    SELECT * FROM EmployeeInfo WHERE EmpFname NOT IN ('Sanjay','Sonia');


    Write a query to create a new table which consists of data and structure copied from the other table.

    Using the SELECT INTO command:
        1. SELECT * INTO NewTable FROM EmployeeInfo WHERE 1 = 0;
    Using the CREATE command in MySQL:
        1.CREATE TABLE NewTable AS SELECT * FROM EmployeeInfo;


        Q18. Write a query to calculate the even and odd records from a table.
        To retrieve the even records from a table, you have to use the MOD() function as follows:
        1. SELECT EmpID FROM (SELECT rowno, EmpID from EmployeeInfo) WHERE MOD(rowno,2)=0;

        Similarly, to retrieve the odd records from a table, you can write a query as follows:
        1. SELECT EmpID FROM (SELECT rowno, EmpID from EmployeeInfo) WHERE MOD(rowno,2)=1;

        -------
        SELECT E.EmpId, E.Project, E.Salary
        FROM (
            SELECT *, Row_Number() OVER(ORDER BY EmpId) AS RowNumber
            FROM EmployeeSalary
        ) E
        WHERE E.RowNumber % 2 = 1;

        ------------
        SELECT (@row_number:=@row_number + 1) AS row_num, id   
        FROM service_provider_profile, (SELECT @row_number:=0) AS temp ORDER BY id;


        
    ALTER TABLE Customers ADD Email varchar(255); // add column
    ALTER TABLE Customers DROP COLUMN Email; // delete table column
    ALTER TABLE table_name RENAME COLUMN old_name to new_name; // rename table 
    ALTER TABLE table_name MODIFY COLUMN column_name datatype; // update column type

    CREATE TABLE Orders (
    OrderID int NOT NULL, 
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);

    ALTER TABLE Orders ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
    ALTER TABLE Orders DROP FOREIGN KEY FK_PersonOrder;
    
ELECT  *
FROM    ( SELECT    ROW_NUMBER() OVER ( ORDER BY OrderDate ) AS RowNum, *
          FROM      Orders
          WHERE     OrderDate >= '1980-01-01'
        ) AS RowConstrainedResult
WHERE   RowNum >= 1
    AND RowNum < 20
ORDER BY RowNum


 */