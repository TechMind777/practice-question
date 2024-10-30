/*

Background processing using web workers
Web workers allow you to run CPU-intensive computations in a background thread, freeing the main thread to update the user interface. If you find your application performs a lot of computations, such as generating CAD drawings or doing heavy geometrical calculations, using web workers can help increase your application's performance.

ng generate web-worker app

if (typeof Worker !== 'undefined') {
    // Create a new
    const worker = new Worker('./app.worker', { type: 'module' });
    worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
    };
    worker.postMessage('hello');
} else {
// Web workers are not supported in this environment.
// You should add a fallback so that your program still executes correctly.
}