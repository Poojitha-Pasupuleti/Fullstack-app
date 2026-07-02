package com.codinghub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codinghub.Entity.Institute;
import com.codinghub.Repository.InstituteRepository;

@Service
public class InstituteService {

    @Autowired
    private InstituteRepository repo;

    public Institute save(Institute institute) 
    {
        return repo.save(institute);
    }

    public Iterable<Institute> findAll() 
    {
        return repo.findAll();
    }

    public Optional<Institute> findById(long id) 
    {
        return repo.findById(id);
    }

    public boolean existsById(long id) 
    {
        return repo.existsById(id);
    }

    public List<Institute> findByNameAndFee(String name,double fee) 
    {
        return repo.findByNameAndFee(name, fee);
    }

    public List<Institute> findByNameOrId(
            String name,
            long id) {

        return repo.findByNameOrId(name, id);
    }

    public List<Institute> findByIdBetween(long start,long end) 
    {
        return repo.findByIdBetween(start, end);
    }

    public List<Institute> findByIdGreaterThan(long num) 
    {
        return repo.findByIdGreaterThan(num);
    }

    public List<Institute> findByIdLessThan(long id) 
    {
        return repo.findByIdLessThan(id);
    }

    public List<Institute> findByNameLike(
            String name) {

        return repo.findByNameLike(name);
    }

    public List<Institute> sort(String field) {

        return repo.findAll(Sort.by(field));
    }

    public List<Institute> findByName(String name) {

        return repo.findByName(name);
    }

    public String deleteById(Long id) {

        repo.deleteById(id);

        return "Deleted Successfully";
    }

    public String deleteAll() {

        repo.deleteAll();

        return "All Records Deleted";
    }
    
    @Transactional
    public String deleteByName(String name) {

        repo.deleteByName(name);

        return "Deleted Successfully";
    }

    public Page<Institute> paginate(
            int page,
            int size) {

        return repo.findAll(
                PageRequest.of(page, size));
    }

    public Institute update(
            Long id,
            Institute institute) {

        Institute existing = repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Record Not Found"));

        existing.setName(institute.getName());
        existing.setLocation(institute.getLocation());
        existing.setFee(institute.getFee());
        existing.setFaculty(institute.getFaculty());
        existing.setAddress(institute.getAddress());

        return repo.save(existing);
    }

//	public Institute getInstitute(Long id) 
//	{
//		return repo.findById(id).orElse(null);
//	}
    
//    (OR)
    public Institute getInstitute(Long id)
    {
    	Optional<Institute> institute = repo.findById(id);
        if(institute.isPresent())
        { 
        	return institute.get();
        }
        else
        {
        	return null;
        }
    }
    
    

}