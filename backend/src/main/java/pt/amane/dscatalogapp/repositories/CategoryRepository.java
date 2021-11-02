package pt.amane.dscatalogapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pt.amane.dscatalogapp.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
