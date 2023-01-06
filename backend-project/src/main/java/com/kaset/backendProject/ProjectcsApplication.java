package com.kaset.backendProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;



@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class ProjectcsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectcsApplication.class, args);
	}

}
