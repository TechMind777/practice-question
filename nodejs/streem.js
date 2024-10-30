/**
 * There are four types of streams available in Node.js, including 
 * readable streams, 
 * writable streams, 
 * duplex streams, and 
 * transform streams.
 * 
 * 
 1. Readable Streams
    These are used for reading data from a source, such as a file or network connection. Readable streams can be consumed in two ways: by listening to data events or by using the readable.read() method. The data events are emitted whenever there is data available to be read from the stream, and the readable.read() method can be used to read a specified number of bytes from the stream.

2. Writable Streams
    Writable streams are used for writing data to a destination, such as a file or network connection. best Writable streams can be consumed by writing data to them using the write() method. Additionally, writable streams have a method called end() that is used to signal the end of data to be written to the stream.

3. Duplex Streams
    Duplex streams are streams that allow both reading and writing of data. They are essentially a combination of Readable and Writable streams. Duplex streams are commonly used for network communication and other scenarios where both reading and writing are necessary.

4. Transform Streams
    Transform streams are a special type of Duplex stream that allows data to be modified as it flows through the stream. They can be used for tasks such as compression, encryption, or data manipulation. Transform streams have a writable side and a readable side, allowing data to be modified as it is being read from the source.

 */

