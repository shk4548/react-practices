package me.kickscar.mysite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
//@EnableTransactionManagement
public class MysiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(MysiteApplication.class, args);
	}
	
//	@Bean
//	public PlatformTransactionManager transactionManager(@Autowired DataSource dataSource) {
//		return new DataSourceTransactionManager(dataSource); 
//	}	

}
