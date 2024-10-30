/*
Authentication and Authorization are two essential concepts in securing access to systems, applications, and data.

Authentication

    Authentication verifies the identity of a user, device, or system. It ensures that the entity requesting access is who it claims to be.

    Types of Authentication:

        1. Username/Password: Traditional method using login credentials.
        2. Multi-Factor Authentication (MFA): Combines multiple factors, such as password, biometrics, or tokens.
        3. Single Sign-On (SSO): Allows access to multiple systems with a single login.
        4. Token-based: Uses tokens, like JSON Web Tokens (JWT), for authentication.
        5. Biometric: Uses unique physical characteristics, like fingerprints or facial recognition.

    Success:

        Status Code: 200 OK (HTTP)
        Message: "Authentication successful."
        Action: The user is granted access to the system or application, and a session token (such as JWT or session ID) is issued.

    Failure:

        Status Code: 401 Unauthorized (HTTP)
        Message: "Authentication failed. Invalid username or password."
        Action: The user is denied access. They might be prompted to retry or recover their account if too many failed attempts occur.


Authorization

    Authorization determines the level of access and privileges granted to an authenticated entity.

    Types of Authorization:

        1. Role-Based Access Control (RBAC): Assigns roles with specific permissions.
        2. Attribute-Based Access Control (ABAC): Grants access based on user attributes.
        3. Discretionary Access Control (DAC): Owners control access to resources.
        4. Mandatory Access Control (MAC): Strict, rule-based access control.
        5. OAuth: Delegates authorization for specific resources.

    Key differences:

        1. Purpose: Authentication verifies identity, while Authorization determines access.
        2. Process: Authentication occurs before Authorization.
        3. Scope: Authentication focuses on identity, while Authorization focuses on access control.

    Best practices:

        1. Implement robust authentication mechanisms.
        2. Use least privilege access principles.
        3. Regularly review and update access controls.
        4. Use encryption for sensitive data.
        5. Monitor and audit access logs.

    Success:

        Status Code: 200 OK or 204 No Content (HTTP)
        Message: Authorization successful.
        Action: The user is granted access to the requested resource or allowed to perform the intended action.

    Failure:

        Status Code: 403 Forbidden (HTTP)
        Message: "Authorization failed. You do not have permission to access this resource."
        Action: Access is denied. The user may be redirected or given an option to request additional permissions


Common authentication and authorization protocols:

1. OAuth 2.0
2. OpenID Connect
3. SAML (Security Assertion Markup Language)
4. Kerberos
5. LDAP (Lightweight Directory Access Protocol)

In summary:

Authentication verifies identity, while Authorization determines access. Implementing robust authentication and authorization mechanisms ensures secure access to systems, applications, and data.

*/