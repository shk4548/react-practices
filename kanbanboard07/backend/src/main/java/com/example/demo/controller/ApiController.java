package com.example.demo.controller;


import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.vo.TaskVo;

@RequestMapping("/api")
@RestController
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll(keyword)));
	}	
	
	@GetMapping("/card/{no}")
	public ResponseEntity<JsonResult> findTask(@PathVariable(value="no") Long no) {
		
//		System.out.println("-----------------------");
//		System.out.println(no);
//		System.out.println("-----------------------");
//		System.out.println(taskRepository.findAll(no));
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAll(no)));
	}
	
	@PostMapping("/card/{no}")
	public ResponseEntity<JsonResult> createTask(@RequestBody TaskVo taskVo) {
//		taskVo.setCard_no(cardVo.getNo());
		
		taskRepository.insert(taskVo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}
	
	@DeleteMapping("/task/delete/{no}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable (value ="no") Long no){
		System.out.println(no);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.delete(no)));
	}
	
	@SuppressWarnings("serial")
	@PutMapping("/task/update/{no}")
	public ResponseEntity<JsonResult> updateTask(@PathVariable (value = "no") Long no, String done){
		
		System.out.println("--------------------------------------------");
		System.out.println(no + "  " +  done);
		System.out.println("--------------------------------------------");
		
		taskRepository.update(no, done);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(new HashMap<String, Object>() {{
				    put("no", no);
				    put("done", done);
				}}));
	}
}