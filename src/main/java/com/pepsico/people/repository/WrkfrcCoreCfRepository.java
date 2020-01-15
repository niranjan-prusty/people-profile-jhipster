package com.pepsico.people.repository;

import com.pepsico.people.domain.WrkfrcCoreCf;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the WrkfrcCoreCf entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WrkfrcCoreCfRepository extends JpaRepository<WrkfrcCoreCf, Long> {

}
