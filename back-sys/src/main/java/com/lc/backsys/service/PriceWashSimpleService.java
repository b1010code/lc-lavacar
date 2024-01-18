package com.lc.backsys.service;

import com.lc.backsys.Entity.PriceWashSimple;
import com.lc.backsys.dto.PriceWashSimpleDTO;

import java.util.List;
import java.util.UUID;

public interface PriceWashSimpleService {
    public PriceWashSimple create(PriceWashSimple priceWashSimple);
    public List<PriceWashSimpleDTO> findAll();
    public PriceWashSimple findById(UUID id);
    public PriceWashSimple update(UUID id, PriceWashSimple priceWashSimple);
}
