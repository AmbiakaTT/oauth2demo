<h2>Project Setup and Configuration</h2>

<h3>Register Google OAuth2</h3>
<p>Follow the instructions at <a href="https://developers.google.com/identity/protocols/oauth2" target="_blank">Google Identity Platform OAuth 2.0</a> to register your application and obtain the client registration ID and client secret.</p>

<h3>Open SecurityConfig.java</h3>
<p>In your project, open <code>SecurityConfig.java</code> and enter the obtained client registration ID and client secret in the <code>ClientRegistration</code> section to enable Google OAuth2 authentication.</p>

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            // ... other configurations
            .oauth2Login()
                .clientRegistrationId("your-client-registration-id")
                .clientId("your-client-id")
                .clientSecret("your-client-secret")
                .redirectUriTemplate("{baseUrl}/{action}/oauth2/code/{registrationId}")
                .authorizationEndpoint()
                    .authorizationRequestResolver(new CustomAuthorizationRequestResolver(
                            clientRegistrationRepository(), "/oauth2/authorize-client"))
                .and()
            // ... other configurations
    }
}
```

Remember to replace , `"your-client-id"`, and `"your-client-secret"` with the values obtained during the Google OAuth2 registration process. 


Development Environment
Run the development server using the following command:
```bash
npm run dev
```
This command starts the development environment for your project.

Maven Build
To build your project using Maven, use the following command:

```bash
mvn clean install
```
This command will download dependencies, compile the code, and package your application.
