package pt.amane.dscatalogapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pt.amane.dscatalogapp.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}
