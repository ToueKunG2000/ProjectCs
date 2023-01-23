package com.kaset.backendProject;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ImportResource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
//@ImportResource({ "com.kaset.backendProject.resources:persistence.xml" })
@Log4j2
public class ProjectApplication implements CommandLineRunner {
	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			// if you want to add more method insert here
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "PATCH").allowedOrigins("*");
			}
		};
	}
	@Override
	public void run(String... args) throws Exception {
//		String Text = "abc123";
//		SecretKey key = AESProvider.getSecretKeyFromPassword(Text,"ilovenavi");
//		String encodedKey = Base64.getEncoder().encodeToString(key.getEncoded());
//		log.info(encodedKey);
//
//		IvParameterSpec iv = AESProvider.generateIv();
//		String algorithm = "AES/CBC/PKCS5Padding";
//		String cipher = AESProvider.encrypt(algorithm, Text, key, iv);
//		log.info(cipher);
//
//		String text = AESProvider.decrypt(algorithm,cipher, key, iv);
//		log.info(text);
	}
}
