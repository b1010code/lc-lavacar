package com.lc.backsys.service;

import com.lc.backsys.Entity.PriceWashing;
import com.lc.backsys.dto.PriceWashingDTO;
import com.lc.backsys.exception.ObjectNotFoundException;
import com.lc.backsys.repository.PriceWashingRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class PriceWashingServiceImp implements PriceWashingService {

    @Autowired
    private final PriceWashingRepository priceWashingRepository;

    @Override
    public PriceWashing create(PriceWashing priceWashing) {
        return priceWashingRepository.save(priceWashing);
    }

    @Override
    public List<PriceWashingDTO> findAll() {
        List<PriceWashing> priceWashing = priceWashingRepository.findAll();
        return priceWashing.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PriceWashing findById(UUID id) {
        return priceWashingRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException("Preço objeto não encontrado !"));
    }

    @Override
    public PriceWashing update(UUID id, PriceWashing priceWashing) {
        if (priceWashingRepository.existsById(id)) {
            priceWashingRepository.save(priceWashing);
        } else {
            throw new ObjectNotFoundException("Preço objeto não encontrado !");
        }

        return priceWashing;
    }


    private PriceWashingDTO convertToDTO(PriceWashing priceWashing) {
        PriceWashingDTO dto = PriceWashingDTO.builder()
                .id(priceWashing.getId())
                .price(priceWashing.getPrice())
                .build();

        if (priceWashing.getWashingType() != null) {
            dto.setWashingType(priceWashing.getWashingType());
        }

        if (priceWashing.getVehicleType() != null) {
            dto.setVehicleType(priceWashing.getVehicleType());
        }

        return dto;
    }


}