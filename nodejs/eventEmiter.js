// event emitur is used to raise and handle custom event
/**
 * An Event Emitter is a Node.js module that facilitates communication between objects in a Node.js application. 
 * It is an instance of the EventEmitter class, which provides a set of methods to listen for and emit events.
 *  In Node.js, events are a core part of the platform, and they are used to handle asynchronous operations.
 */
const events = require('events');

let em = new events.EventEmitter();


let myEventListener = (data)=>{
    console.log("my fun--->", data);
}

em.on('FirestEvent',myEventListener ); // ctreate lisner
// ev.on('FirestEvent',myEventListener );


em.emit('FirestEvent', {a1:'data'});// listener is invoked or event is listning
em.emit('SecondEvent');// listener is not invoked or event is not listning, ther is no SecondEvent


// em.removeListener('FirestEvent' , myEventListener); // remove single listener
em.removeAllListeners() // remove all listener
em.emit('FirestEvent', {a1:'data'});// listener is invoked or event is listning
