package com.lc.backsys.service;


import com.lc.backsys.Entity.PriceWashing;
import com.lc.backsys.dto.PriceWashingDTO;

import java.util.List;
import java.util.UUID;

public interface PriceWashingService {
    public PriceWashing create(PriceWashing priceWashing);
    public List<PriceWashingDTO> findAll();
    public PriceWashing findById(UUID id);
    public PriceWashing update(UUID id, PriceWashing priceWashing);
}
