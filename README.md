<h2>Project Setup and Configuration</h2>
<h3> Step 0: Clone repository </h3>
    
```bash
git clone https://github.com/AmbiakaTT/oauth2demo
```
    
<h3>Step 1: Register Google OAuth2</h3>
<p>Follow the instructions at <a href="https://developers.google.com/identity/protocols/oauth2" target="_blank">Google Identity Platform OAuth 2.0</a> to register your application and obtain the client registration ID and client secret.</p>

Create Credentials 
<p> + Add URI for Authorized JS script: http://localhost:3000  </p>
<p> + Add URI for Authorized redirect URIs: http://localhost:8080/login/oauth2/code/google </p>


<h3>Step 2: Open SecurityConfig.java</h3>
<p>In your project, open <code>SecurityConfig.java</code> and enter the obtained client registration ID and client secret in the <code>ClientRegistration</code> section to enable Google OAuth2 authentication.</p>

```java
    @Bean
    public ClientRegistration googleClientRegistration() {
        return ClientRegistration.withRegistrationId("google")
                .clientId("Fill in your client ID")
                .clientSecret("Fill in your client Secret")
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                    .redirectUri("http://localhost:8080/login/oauth2/code/google")
                    .scope("openid", "profile", "email", "address", "phone")
                    .authorizationUri("https://accounts.google.com/o/oauth2/v2/auth")
                    .tokenUri("https://www.googleapis.com/oauth2/v4/token")
                    .userInfoUri("https://www.googleapis.com/oauth2/v3/userinfo")
                    .userNameAttributeName(IdTokenClaimNames.SUB)
                    .jwkSetUri("https://www.googleapis.com/oauth2/v3/certs")
                    .clientName("Google")   
                    .build();
        }
```

Remember to replace , `"your-client-id"`, and `"your-client-secret"` with the values obtained during the Google OAuth2 registration process. 


### Step 3: Development Environment
##### Run the development server using the following command:

```bash
npm install
npm start
```
This command install the necessar packages and start the development environment for your project.

<h3> Step 4 Maven Build </h3>
To build your project using Maven, use the following command:

```bash
mvn clean install
```
This command will download dependencies, compile the code, and package your application.
