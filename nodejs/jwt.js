/**
 * Why We Use JWT (JSON Web Tokens)
1.Stateless Authentication:

    -No Server-Side Storage: JWTs allow for stateless authentication, meaning the server does not need to store any session data. The token itself contains all the information needed for authentication and can be verified by the server using a secret key or public key (in the case of asymmetric encryption).
    -Scalability: Because JWTs are stateless, they are ideal for applications that need to scale horizontally across multiple servers or microservices. Since there’s no need to maintain a session store, new servers can be added without needing to share session data.

2.Self-Contained Tokens:

    -Payload: JWTs contain a payload that can include user information, roles, and other metadata necessary for authorization. This payload is base64-encoded and can be easily decoded to access this information, although it should not be considered secure on its own.
    -Integrity and Trust: The token is signed, ensuring that it has not been tampered with. The server can verify the signature to trust the content of the token.

3.Cross-Domain Authentication:

    -Single Sign-On (SSO): JWTs are often used in SSO implementations because they can be passed between different domains easily and securely.
    -API Security: JWTs are widely used to secure RESTful APIs, allowing the server to authenticate and authorize API requests without needing to store session state.

4.Flexibility:

    -Custom Claims: JWTs allow for custom claims, enabling developers to include any necessary information within the token, which can be used for specific use cases like setting token expiration times, roles, or other metadata.

When JWT is Decoded

JWTs can be decoded in two primary contexts:

1.Client-Side Decoding:

    -Accessing Payload Information: The client can decode the JWT to access the payload information (e.g., user roles, permissions). This is useful for making client-side decisions without needing to call the server. However, this decoded data should never be trusted for critical decisions because it can be tampered with if not verified.
    -Tools and Libraries: JWTs can be easily decoded using libraries like jwt-decode in JavaScript, or even manually by splitting the token at the . and base64-decoding the payload part.

    Example of decoding a JWT in JavaScript:

        const jwt = require('jwt-decode');
        const token = 'your.jwt.token.here';
        const decoded = jwt(token);
        console.log(decoded); // Output: Decoded payload
       
2.Server-Side Decoding and Verification:

    -Authentication: When the server receives a JWT, it first decodes the token to access the payload and then verifies the signature to ensure the token's integrity. If the token is valid, the server can use the information in the payload to authenticate and authorize the request.
    -Security: The server is responsible for verifying the token’s signature (using a secret key or public key), which ensures that the token was indeed issued by a trusted source and has not been altered.

    Example of decoding and verifying a JWT in Node.js:

        const jwt = require('jsonwebtoken');
        const token = 'your.jwt.token.here';
        const secretKey = 'your-secret-key';

        try {
        const decoded = jwt.verify(token, secretKey);
        console.log(decoded); // Output: Decoded and verified payload
        } catch (err) {
        console.error('Invalid token:', err.message);
        }

    Important Considerations
        -Decoding vs. Verification: Decoding a JWT does not verify its authenticity. While anyone can decode a JWT to read the payload, only the server should verify the token’s signature to confirm it hasn't been tampered with.
        -Security: Never store sensitive information in the JWT payload because it is only base64-encoded, not encrypted. The payload is visible to anyone who decodes the token.
        -Token Expiry: JWTs often include an expiration claim (exp) to ensure that tokens can only be used for a limited period, reducing the risk if a token is compromised.

    In summary, JWTs provide a flexible, scalable, and stateless way to manage authentication and authorization in modern web applications, especially when dealing with microservices or distributed systems.
 */