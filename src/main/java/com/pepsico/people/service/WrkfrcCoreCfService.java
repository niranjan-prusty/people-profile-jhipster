package com.pepsico.people.service;

import com.pepsico.people.domain.WrkfrcCoreCf;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link WrkfrcCoreCf}.
 */
public interface WrkfrcCoreCfService {

    /**
     * Save a wrkfrcCoreCf.
     *
     * @param wrkfrcCoreCf the entity to save.
     * @return the persisted entity.
     */
    WrkfrcCoreCf save(WrkfrcCoreCf wrkfrcCoreCf);

    /**
     * Get all the wrkfrcCoreCfs.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<WrkfrcCoreCf> findAll(Pageable pageable);


    /**
     * Get the "id" wrkfrcCoreCf.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<WrkfrcCoreCf> findOne(Long id);

    /**
     * Delete the "id" wrkfrcCoreCf.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
