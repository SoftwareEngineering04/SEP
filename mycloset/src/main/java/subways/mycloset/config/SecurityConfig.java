package subways.mycloset.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsUtils;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests() //HttpServletRequest를 사용하는 요청들에 대해서 접근제한을 설정
                .antMatchers("/**").permitAll()
                .requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers("/api/test").permitAll()//url에 대한 요청은 인증없이 접근을 허용
                .anyRequest().authenticated().and()
                .cors().and(); //나머지 요청들에 대해서는 모두 인증을 받아야한다.
    }
}