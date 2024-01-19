package com.lc.backsys.service;

import com.lc.backsys.Entity.Washing;
import com.lc.backsys.exception.ObjectNotFoundException;
import com.lc.backsys.repository.WashingRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@AllArgsConstructor
@Service
public class WashingServiceImp implements WashingService{

    @Autowired
    private final WashingRepository washingRepository;
    @Override
    public Washing create(Washing washing) {
        return washingRepository.save(washing);
    }

    @Override
    public List<Washing> findAll() {
        return washingRepository.findAll();
    }

    @Override
    public Washing findById(UUID id) {
        return washingRepository.findById(id).get();
    }

    @Override
    public Washing update(UUID id, Washing washing) {
        Optional<Washing> washingExists = washingRepository.findById(id);

        if(washingExists != null){
            washingRepository.save(washing);
        }else {
            throw new ObjectNotFoundException("Cliente não encontrado !");
        }

        return washing;
    }

}
