package subways.mycloset.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000");
    }

    /*
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        logger.info("addInterceptors start");
        if(securityEnabled ) {

            // AuthInterceptor() : 권한 체크 Interceptor
            registry.addInterceptor(new AuthInterceptor())
                    .addPathPatterns("/*.action")
                    .addPathPatterns("/*.json")	// interceptor 패턴에 걸림
                    .excludePathPatterns("/test*.json", "/manifest.json","/findPasswordPage.json")	// interceptor 제외 패턴에 추가
                    .excludePathPatterns(loginPageUrl);


        }
    }

     */
}


