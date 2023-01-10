package com.kaset.backendProject.repository;

import com.kaset.backendProject.entity.TbUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepo extends JpaRepository<TbUsers, Integer>{

}
