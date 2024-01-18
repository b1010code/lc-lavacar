package com.lc.backsys.controller;

import com.lc.backsys.Entity.Customer;
import com.lc.backsys.Entity.PriceWashSimple;
import com.lc.backsys.dto.PriceWashSimpleDTO;
import com.lc.backsys.service.PriceWashSimpleService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Data
@RestController
@RequestMapping("/priceWashSimple")
@AllArgsConstructor
public class PriceWashSimpleController {

    @Autowired
    private PriceWashSimpleService priceWashSimpleService;

    @PostMapping("/save")
    public ResponseEntity<PriceWashSimple> create(@RequestBody PriceWashSimple priceWashSimple){
        PriceWashSimple createdWashSimple = priceWashSimpleService.create(priceWashSimple);
        return ResponseEntity.ok(createdWashSimple);
    }

    @GetMapping("/get")
    public ResponseEntity<List<PriceWashSimpleDTO>> findAll(){
        List<PriceWashSimpleDTO> priceWashSimples = priceWashSimpleService.findAll();
        return ResponseEntity.ok(priceWashSimples);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<PriceWashSimple> findById(@PathVariable(value = "id") UUID id){
        PriceWashSimple priceWashSimple = priceWashSimpleService.findById(id);

        return (priceWashSimple != null) ?
                ResponseEntity.ok(priceWashSimple) :
                ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<PriceWashSimple> update(@PathVariable(value = "id")  UUID id, @RequestBody PriceWashSimple priceWashSimple) {
        PriceWashSimple updatedWashSimple = priceWashSimpleService.update(id, priceWashSimple);

        return (updatedWashSimple != null) ?
                ResponseEntity.ok(updatedWashSimple) :
                ResponseEntity.badRequest().build();
    }
}
