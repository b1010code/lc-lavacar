package com.lc.backsys.service;

import com.lc.backsys.Entity.Employee;
import com.lc.backsys.Entity.PriceWashSimple;
import com.lc.backsys.exception.ObjectNotFoundException;
import com.lc.backsys.repository.PriceWashSimpleRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Data
@AllArgsConstructor
@Service
public class PriceWashSimpleServiceImp implements PriceWashSimpleService{

    @Autowired
    private PriceWashSimpleRepository priceWashSimpleRepository;

    @Override
    public PriceWashSimple create(PriceWashSimple priceWashSimple) {
        return priceWashSimpleRepository.save(priceWashSimple);
    }

    @Override
    public List<PriceWashSimple> findAll() {
        return priceWashSimpleRepository.findAll();
    }

    @Override
    public PriceWashSimple findById(UUID id) {
        return priceWashSimpleRepository.findById(id).get();
    }

    @Override
    public PriceWashSimple update(UUID id, PriceWashSimple priceWashSimple) {
        Optional<PriceWashSimple> washSimpleExists = priceWashSimpleRepository.findById(id);

        if(washSimpleExists != null){
            priceWashSimpleRepository.save(priceWashSimple);
        }else {
            throw new ObjectNotFoundException("Preço objeto não encontrado !");
        }

        return priceWashSimple;
    }
}
