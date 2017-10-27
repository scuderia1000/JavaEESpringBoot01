package com.valentin.ershov;

import com.valentin.ershov.config.JpaConfig;
import com.valentin.ershov.stocks.BroadcastHandler;
import com.valentin.ershov.stocks.StockWebSocketHandler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.handler.PerConnectionWebSocketHandler;

@SpringBootApplication
//@EnableAutoConfiguration
//@EnableWebSocket
//@EnableScheduling
public class Application extends SpringBootServletInitializer {

	/*@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(stockWebSocketHandler(), "/stocks").setAllowedOrigins("*").withSockJS();
	}

	@Bean
	public WebSocketHandler stockWebSocketHandler() {
		return new PerConnectionWebSocketHandler(StockWebSocketHandler.class);
	}

	@Bean
	public BroadcastHandler createBroadcastHandler() {
		return new BroadcastHandler();
	}*/


	public static void main(String[] args) {
		SpringApplication.run(new Class<?>[] {Application.class, JpaConfig.class}, args);
	}
}
