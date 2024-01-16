package com.lc.backsys.repository;

import com.lc.backsys.Entity.PriceWashSimple;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PriceWashSimpleRepository extends MongoRepository<PriceWashSimple, UUID> {
}
