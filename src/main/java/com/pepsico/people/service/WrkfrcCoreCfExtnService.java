package com.pepsico.people.service;

import com.pepsico.people.domain.WrkfrcCoreCfExtn;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link WrkfrcCoreCfExtn}.
 */
public interface WrkfrcCoreCfExtnService {

    /**
     * Save a wrkfrcCoreCfExtn.
     *
     * @param wrkfrcCoreCfExtn the entity to save.
     * @return the persisted entity.
     */
    WrkfrcCoreCfExtn save(WrkfrcCoreCfExtn wrkfrcCoreCfExtn);

    /**
     * Get all the wrkfrcCoreCfExtns.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<WrkfrcCoreCfExtn> findAll(Pageable pageable);


    /**
     * Get the "id" wrkfrcCoreCfExtn.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<WrkfrcCoreCfExtn> findOne(Long id);

    /**
     * Delete the "id" wrkfrcCoreCfExtn.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
