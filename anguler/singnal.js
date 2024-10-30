/*
What are signals?
    A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures.

    You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.

    Signals may be either writable or read-only.

    Writable signals

        Writable signals provide an API for updating their values directly. You create writable signals by calling the signal function with the signal's initial value:

        const count = signal(0);
        // Signals are getter functions - calling them reads their value.
        console.log('The count is: ' + count());

        To change the value of a writable signal, either .set() it directly:
        count.set(3);

        
        or use the .update() operation to compute a new value from the previous one:

        // Increment the count by 1.
        count.update(value => value + 1);
        
        Writable signals have the type WritableSignal.


        */