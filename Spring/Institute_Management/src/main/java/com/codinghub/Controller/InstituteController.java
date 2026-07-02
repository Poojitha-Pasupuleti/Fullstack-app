package com.codinghub.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codinghub.Entity.Institute;
import com.codinghub.Service.InstituteService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/institutes")
public class InstituteController {

    @Autowired
    private InstituteService service;

    @PostMapping("/save")
    public Institute save(@RequestBody Institute institute) 
    {
        return service.save(institute);
    }

    @GetMapping("/findAll")
    public Iterable<Institute> findAll() 
    {
        return service.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<Institute> findById(@PathVariable long id) 
    {
        return service.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable Long id) 
    {
        return service.deleteById(id);
    }

    @DeleteMapping("/deleteAll")
    public String deleteAll() 
    {
        return service.deleteAll();
    }

    @DeleteMapping("/deleteByName/{name}")
    public String deleteByName(@PathVariable String name) 
    {
        return service.deleteByName(name);
    }
    
    @GetMapping("/get/{id}")
    public Institute getInstitute(@PathVariable Long id) 
    {
        return service.getInstitute(id); 
    }

    @PutMapping("/update/{id}")
    public Institute update(@PathVariable Long id,@RequestBody Institute institute) 
    {
        return service.update(id, institute);
    }

    @GetMapping("/exists/{id}")
    public boolean existsById(@PathVariable long id) 
    {
        return service.existsById(id);
    }

    @GetMapping("/or/{name}/{id}")
    public List<Institute> findByNameOrId(@PathVariable String name,@PathVariable long id) 
    {
        return service.findByNameOrId(name, id);
    }

    @GetMapping("/between/{start}/{end}")
    public List<Institute> findByIdBetween(@PathVariable long start,@PathVariable long end) 
    {
        return service.findByIdBetween(start, end);
    }

    @GetMapping("/greater/{num}")
    public List<Institute> findByIdGreaterThan(@PathVariable long num) 
    {
        return service.findByIdGreaterThan(num);
    }

    @GetMapping("/lessthan/{id}")
    public List<Institute> findByIdLessThan(@PathVariable long id) 
    {
        return service.findByIdLessThan(id);
    }

    @GetMapping("/like/{name}")
    public List<Institute> findByNameLike(@PathVariable String name) 
    {
        return service.findByNameLike(name);
    }

    @GetMapping("/sort/{field}")
    public List<Institute> sort(@PathVariable String field) 
    {
        return service.sort(field);
    }

    @GetMapping("/custom/{name}")
    public List<Institute> findByName(@PathVariable String name) 
    {
        return service.findByName(name);
    }

    @GetMapping("/page/{page}/{size}")
    public Page<Institute> paginate(@PathVariable int page,@PathVariable int size) 
    {
        return service.paginate(page, size);
    }
}