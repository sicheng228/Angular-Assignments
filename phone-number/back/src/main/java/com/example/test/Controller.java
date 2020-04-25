package com.example.test;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class Controller {
    static ArrayList<String> result;
    static List<String[]>  list;
    static String phoneNumber;


    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("calculate")
    public ResponseEntity<?> calculate(@RequestParam(name = "input") String input){
        result = new ArrayList();
        phoneNumber=input;

        String[][] x={{"0"},{"1"},{"2","A","B","C"},{"3","D","E","F"},{"4","G","H","I"},{"5","J","K","L"},{"6","M","N","O"},{"7","P","Q","R","S"},{"8","T","U","V"},{"9","W","X","Y","Z"}};
        list= Arrays.asList(x);
//        int count=1;
//        for (int i=6;i<10;i++){
//            count*=list.get(Character.getNumericValue(phoneNumber.charAt(i))).length;
//        }
        DFS(6,input.substring(0,6),"");
//            System.out.println(String.join(",", result));

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    static void DFS(Integer level, String item,String str){
        str+=item;
        if(level==10){
            result.add(str);
            return;
        }
        for (String i : list.get(Character.getNumericValue(phoneNumber.charAt(level)))){
            DFS(level+1,i,str);
        }
    }

}
