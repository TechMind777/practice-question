/**
 * A MySQL trigger is a database object that is associated with a table. 
 * It will be activated when a defined action is executed for the table.
 * 
 * The main requirement for running such MySQL Triggers is having MySQL SUPERUSER privileges.
 * 
 * 
 * 
 *  delimiter //
 *  CREATE TRIGGER agecheck 
 * BEFORE INSERT 
 * ON people FOR EACH ROW 
    BEGIN
        IF NEW.age < 0 
        THEN SET NEW.age = 0; 
        END IF;// 
    END
 * 
 */