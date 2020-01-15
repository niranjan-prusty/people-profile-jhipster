package com.pepsico.people.repository;

import com.pepsico.people.domain.WrkfrcCoreCfExtn;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the WrkfrcCoreCfExtn entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WrkfrcCoreCfExtnRepository extends JpaRepository<WrkfrcCoreCfExtn, Long> {

}
