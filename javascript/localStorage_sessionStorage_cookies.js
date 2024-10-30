/*
localStorage and sessionStorage are both so-called WebStorages and features of HTML5.

localStorage stores information as long as the user does not delete them.

sessionStorage stores information as long as the session goes. Usually until the user closes the tab/browser.

cookies are simply cookies, which are supported by older browsers and usually are a fallback for frameworks that use the above mentioned WebStorages.


LOCAL STORAGE, SESSION STORAGE OR COOKIES IN ANGULAR?
Cookie, localStorage, and sessionStorage are all the simple data storage ways for client-side storage. Cookie is more like an old school way to handle the simple data stored on the client-side. In HTML5, web storage, such as localStorage or sessionStorage is introduced and it’s also easier to use.

These three are the basic ways to store data for the client side.

LocalStorage:-
1. localStorage is a way to store data on the client’s computer. It allows the saving of key/value pairs in a web browser and it stores data with no expiration date. We can clear this data by using the local Storage method.

2. We can access local Storage by using a simple method in angular as well as in JS. The user has the ability to clear the browser data/cache to erase all localStorage data. Web storage can be viewed simplistically as an improvement on cookies, providing much greater storage capacity The available size is 5MB(It may vary based on browser), which is more space to work with than a typical 4KB cookie. In addition with localStorage, the data is not sent back to the server for every HTTP request.

3. Here in localStorage we can store any type of data, even JSON format also,but while Storing this into localStorage implicitly all this data is converted into String datatype.

4. Data Handling Method of localStorage


localStorage.setItem('ss', JSON.stringify({a:212}))

localStorage.getItem(key);
JSON.parse(localStorage.getItem('ss'))

localStorage.removeItem(key);
localStorage.clear();

------------
SessionStorage:-
1)localStorage and sessionStorage accomplish the exact same thing and they use the same method for storing as well as retrieving the data.
2)The main difference between Sessionstorage and localStorage is in sessionStorage the data is persisted only until the window or tab is closed, while with localStorage the data is persisted until the user manually clears the browser cache or until your web app clears the data by manually or by using clear data method.

sessionStorage.setItem('ss', JSON.stringify({a:212}))

sessionStorage.getItem(key);
JSON.parse(sessionStorage.getItem('ss'))

sessionStorage.removeItem(key);
sessionStorage.clear();

Cookies:-
Cookies are small packages of information that are typically stored by your browser and websites tend to use cookies for multiple things. Cookies persist across multiple requests and browser sessions should you set them to and they can be a great method for authentication in some web apps.They hold a very small amount of data at a maximum capacity of 4KB(It may vary based on browser)for a single cookie.We can have no. of cookies for single web page but for single cookie we have limit of 4096 bytes per cookie.

For creating cookies in angular methods are given below:-

1) npm install ngx-cookie-service –save.
2) Add to your module: import { CookieService } from ‘ngx-cookie-service’;
3) Add CookieService to module’s providers.
4) Inject it into your constructor.
5) Use cookies. get(nameOfCookie) for getting a specific cookie, use cookies. set(nameOfCookie,cookieValue)
for adding a new cookie


*/