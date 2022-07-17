package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestApiController {
  boolean isClose = false;
  @GetMapping("/kill")
  public void kill(boolean isClose) throws Exception {
    System.out.println("isClose: " + isClose);
    this.isClose = isClose;

    if ( !isClose ) {
      System.out.println("refresh...");
      return;
    }

    Thread.sleep(5000);
    if ( this.isClose ) {
      System.out.println("kill session!!!");
    }
  }
}
