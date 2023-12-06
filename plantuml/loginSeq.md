@startuml loginSeq
User -> React : Login button
React -> User : Auth0 login screen
User -> Auth0 : Credentials
Auth0 -> React : JWT and user data
React -> Django : JWT
Django -> Auth0 : JWT validation
Auth0 -> Django : Validation Results
Django -> React : User roles and permissions
React -> User : Login feedback
@enduml
