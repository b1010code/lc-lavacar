package com.lc.backsys.controller;

import com.lc.backsys.Entity.PriceWashing;
import com.lc.backsys.dto.PriceWashingDTO;
import com.lc.backsys.service.PriceWashingService;
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
@RequestMapping("/priceWashing")
@AllArgsConstructor
public class PriceWashingController {

    @Autowired
    private PriceWashingService priceWashingService;

    @PostMapping("/save")
    public ResponseEntity<PriceWashing> create(@RequestBody PriceWashing priceWashing){
        PriceWashing createdWashing = priceWashingService.create(priceWashing);
        return ResponseEntity.ok(createdWashing);
    }

    @GetMapping("/get")
    public ResponseEntity<List<PriceWashingDTO>> findAll(){
        List<PriceWashingDTO> priceWashing = priceWashingService.findAll();
        return ResponseEntity.ok(priceWashing);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<PriceWashing> findById(@PathVariable(value = "id") UUID id){
        PriceWashing priceWashing = priceWashingService.findById(id);

        return (priceWashing != null) ?
                ResponseEntity.ok(priceWashing) :
                ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<PriceWashing> update(@PathVariable(value = "id")  UUID id, @RequestBody PriceWashing priceWashing) {
        PriceWashing updatedPriceWashing = priceWashingService.update(id, priceWashing);

        return (updatedPriceWashing != null) ?
                ResponseEntity.ok(updatedPriceWashing) :
                ResponseEntity.badRequest().build();
    }
}
