package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.TaskVo;

@Repository
public class TaskRepository {

	@Autowired
	private SqlSession sqlSession;
	
	public List<TaskVo> findAll(Long no){
		return sqlSession.selectList("task.findAll", no);
	}


	
	public Boolean insert(TaskVo vo) {
		return sqlSession.insert("task.insert",vo) == 1;
	}
	
	public Boolean delete(Long no) {
		return sqlSession.delete("task.delete", no ) == 1;
	}
}
