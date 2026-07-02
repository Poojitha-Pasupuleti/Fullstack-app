package com.codinghub.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.codinghub.Entity.Institute;

@Repository
public interface InstituteRepository extends JpaRepository<Institute, Long> {

    List<Institute> findByNameAndFee(String name,double fee);

    List<Institute> findByNameOrId(String name,long id); 

    List<Institute> findByIdBetween(long start,long end);

    List<Institute> findByIdGreaterThan(long num);

    List<Institute> findByIdLessThan(long id);

    List<Institute> findByNameLike(String name);

    List<Institute> findByName(String name);
     
    @Transactional
    @Modifying
    @Query("delete from Institute i where i.name=:name")
    long deleteByName(String name);
}