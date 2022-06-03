package subways.mycloset;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication //(exclude = {DataSourceAutoConfiguration.class })
public class MyclosetApplication {
	public static void main(String[] args) {
		SpringApplication.run(MyclosetApplication.class, args);
	}

}
