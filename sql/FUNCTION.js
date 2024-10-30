/**
 * 
 * 


 A stored function is a set of SQL statements that perform some operation and return a single value. 
 Just like Mysql in-built function, it can be called from within a Mysql statement

CREATE FUNCTION no_of_years(date1 date) RETURNS int DETERMINISTIC
BEGIN
 DECLARE date2 DATE;
  Select current_date()into date2;
  RETURN year(date2)-year(date1);
END 


Call function : Select emp_id, fname, lname, no_of_years(start_date) as 'years' from employee;
 */