/**
 * 1. What do you mean by Transactions?
A transaction is a logical unit of processing in a database that includes one or more database operations, which can be read or write operations. Transactions provide a useful feature in MongoDB to ensure consistency.

MongoDB provides two APIs to use transactions. 

Core API: It is a similar syntax to relational databases (e.g., start_transaction and commit_transaction)
Call-back API: This is the recommended approach to using transactions. It starts a transaction, executes the specified operations, and commits (or aborts on the error). It also automatically incorporates error handling logic for "TransientTransactionError" and"UnknownTransactionCommitResult"



 */