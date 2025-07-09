package com.avinash.ecom.service;

import com.avinash.ecom.model.Product;
import com.avinash.ecom.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product getProductById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Product updateProduct(int id, Product updatedProduct) {
        Product existing = getProductById(id);
        existing.setName(updatedProduct.getName());
        existing.setPrice(updatedProduct.getPrice());
        existing.setBrand(updatedProduct.getBrand());
        existing.setCategory(updatedProduct.getCategory());
        existing.setAvailable(updatedProduct.isAvailable());
        existing.setQuantity(updatedProduct.getQuantity());
        existing.setReleaseDate(updatedProduct.getReleaseDate());
        existing.setDescription(updatedProduct.getDescription()); // assuming desc renamed
        return repo.save(existing);
    }

    public void deleteProduct(int id) {
        repo.deleteById(id);
    }
}
