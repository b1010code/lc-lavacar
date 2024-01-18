package com.lc.backsys.service;

import com.lc.backsys.Entity.Employee;
import com.lc.backsys.Entity.PriceWashSimple;
import com.lc.backsys.dto.PriceWashSimpleDTO;
import com.lc.backsys.exception.ObjectNotFoundException;
import com.lc.backsys.repository.PriceWashSimpleRepository;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class PriceWashSimpleServiceImp implements PriceWashSimpleService {

    @Autowired
    private final PriceWashSimpleRepository priceWashSimpleRepository;

    @Override
    public PriceWashSimple create(PriceWashSimple priceWashSimple) {
        return priceWashSimpleRepository.save(priceWashSimple);
    }

    @Override
    public List<PriceWashSimpleDTO> findAll() {
        List<PriceWashSimple> priceWashSimples = priceWashSimpleRepository.findAll();
        return priceWashSimples.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PriceWashSimple findById(UUID id) {
        return priceWashSimpleRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException("Preço objeto não encontrado !"));
    }

    @Override
    public PriceWashSimple update(UUID id, PriceWashSimple priceWashSimple) {
        if (priceWashSimpleRepository.existsById(id)) {
            priceWashSimpleRepository.save(priceWashSimple);
        } else {
            throw new ObjectNotFoundException("Preço objeto não encontrado !");
        }

        return priceWashSimple;
    }

    private PriceWashSimpleDTO convertToDTO(PriceWashSimple priceWashSimple) {
        return PriceWashSimpleDTO.builder()
                .id(priceWashSimple.getId())
                .vehicleType(priceWashSimple.getVehicleType())
                .price(priceWashSimple.getPrice())
                .build();
    }
}