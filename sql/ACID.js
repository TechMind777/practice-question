/*
ACID is a foundational concept in database management that ensures reliable processing of transactions. ACID stands for Atomicity, Consistency, Isolation, and Durability. These four properties work together to guarantee that database transactions are processed reliably and maintain the integrity of the data, even in the face of errors, system crashes, or concurrent operations.

1. Atomicity
    Definition:
    Atomicity ensures that each transaction is treated as a single, indivisible unit. This means that all the operations within a transaction must either complete successfully as a whole or fail entirely. If any part of the transaction fails, the entire transaction is rolled back, and the database remains unchanged.

    Key Points:

        All-or-Nothing: Either all operations succeed, or none do.
        Rollback Mechanism: If any operation within the transaction fails, the database reverts to its previous state.
    Example:
        Consider a bank transfer where $100 is moved from Account A to Account B:

        Debit Account A: Deduct $100.
        Credit Account B: Add $100.
        If the debit from Account A succeeds but the credit to Account B fails (due to a system error, for example), atomicity ensures that the debit is rolled back, leaving both accounts unchanged.

2. Consistency
    Definition:
        Consistency ensures that a transaction brings the database from one valid state to another, maintaining all predefined rules, such as constraints, cascades, and triggers. It guarantees that any transaction will only bring the database into a valid state, adhering to all rules and constraints.

    Key Points:

        Integrity Constraints: Enforces rules like unique keys, foreign keys, and data types.
        Valid State: Ensures that transactions do not violate database rules.
    Example:
        Using the same bank transfer example, consistency ensures that:

        The total amount of money in the system remains the same.
        Account balances do not become negative if that's a defined constraint.
        If transferring $100 would cause Account A to have a negative balance, the transaction would fail, preserving the consistency of the database.

3. Isolation
    Definition:
        Isolation ensures that concurrently executing transactions do not interfere with each other. Each transaction should operate as if it is the only transaction in the system, preventing issues like dirty reads, non-repeatable reads, and phantom reads.

    Key Points:

        Concurrent Transactions: Manages how transactions interact when they run simultaneously.
        Isolation Levels: Defines the degree to which transactions are isolated from each other (e.g., Read Uncommitted, Read Committed, Repeatable Read, Serializable).
    Example:
        Imagine two transactions running at the same time:

        Transaction 1: Transfers $100 from Account A to Account B.
        Transaction 2: Reads the balance of Account A.
        Isolation ensures that Transaction 2 either sees the balance before Transaction 1 starts or after it completes, but not a partial state where $100 has been deducted but not yet added to Account B.

4. Durability
    Definition:
        Durability ensures that once a transaction has been committed, it will remain so, even in the event of a system failure, crash, or power loss. Committed data is permanently stored in the database’s non-volatile memory.

    Key Points:

        Permanent Storage: Data is written to non-volatile storage (e.g., hard drives, SSDs) to survive crashes.
        Recovery Mechanisms: Techniques like transaction logs and backups ensure data can be recovered after failures.
    Example:
        After successfully transferring $100 from Account A to Account B and committing the transaction, durability guarantees that even if the server crashes immediately afterward, the transfer remains recorded in the database.

Why ACID Matters
    ACID properties are crucial for maintaining data integrity, especially in systems where accurate and reliable transactions are essential, such as banking systems, e-commerce platforms, and enterprise applications. They help prevent data anomalies, ensure reliable transaction processing, and maintain trust in the system's data.

ACID in Practice
    Most traditional relational databases (e.g., PostgreSQL, MySQL, Oracle) are designed to support ACID properties to ensure reliable transaction processing. Here's how they implement each property:

        -Atomicity: Managed through transaction logs and rollback mechanisms.
        -Consistency: Enforced via database constraints and rules.
        -Isolation: Controlled through locking mechanisms and isolation levels.
        -Durability: Achieved through write-ahead logging and persistent storage.

ACID vs. BASE
    While ACID focuses on strong consistency and reliability, some modern databases, particularly NoSQL databases (e.g., Cassandra, MongoDB), follow the BASE model, which stands for Basically Available, Soft state, Eventual consistency. BASE is designed for distributed systems where high availability and scalability are prioritized over immediate consistency. However, many NoSQL databases are evolving to support stronger consistency guarantees, sometimes incorporating ACID-like features.

Conclusion
    ACID properties are fundamental to ensuring that database transactions are processed reliably and that the integrity of the data is maintained. By adhering to Atomicity, Consistency, Isolation, and Durability, databases can provide a robust foundation for applications that require accurate and dependable data management.

    */