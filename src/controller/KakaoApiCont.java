package controller;

import java.util.UUID;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class KakaoApiCont {

	@RequestMapping(value="/{snsService}callback.do", method = {RequestMethod.GET, RequestMethod.POST})
	public String snsLoginCallback() {
		return "index/index";
	}
	
	public static void main(String[] args) {
		UUID id = UUID.randomUUID();
		System.out.println("New UUID = "+id.toString());
		
		
	}
}
