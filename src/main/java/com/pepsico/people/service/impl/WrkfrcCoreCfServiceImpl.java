package com.pepsico.people.service.impl;

import com.pepsico.people.service.WrkfrcCoreCfService;
import com.pepsico.people.domain.WrkfrcCoreCf;
import com.pepsico.people.repository.WrkfrcCoreCfRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link WrkfrcCoreCf}.
 */
@Service
@Transactional
public class WrkfrcCoreCfServiceImpl implements WrkfrcCoreCfService {

    private final Logger log = LoggerFactory.getLogger(WrkfrcCoreCfServiceImpl.class);

    private final WrkfrcCoreCfRepository wrkfrcCoreCfRepository;

    public WrkfrcCoreCfServiceImpl(WrkfrcCoreCfRepository wrkfrcCoreCfRepository) {
        this.wrkfrcCoreCfRepository = wrkfrcCoreCfRepository;
    }

    /**
     * Save a wrkfrcCoreCf.
     *
     * @param wrkfrcCoreCf the entity to save.
     * @return the persisted entity.
     */
    @Override
    public WrkfrcCoreCf save(WrkfrcCoreCf wrkfrcCoreCf) {
        log.debug("Request to save WrkfrcCoreCf : {}", wrkfrcCoreCf);
        return wrkfrcCoreCfRepository.save(wrkfrcCoreCf);
    }

    /**
     * Get all the wrkfrcCoreCfs.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<WrkfrcCoreCf> findAll(Pageable pageable) {
        log.debug("Request to get all WrkfrcCoreCfs");
        return wrkfrcCoreCfRepository.findAll(pageable);
    }


    /**
     * Get one wrkfrcCoreCf by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<WrkfrcCoreCf> findOne(Long id) {
        log.debug("Request to get WrkfrcCoreCf : {}", id);
        return wrkfrcCoreCfRepository.findById(id);
    }

    /**
     * Delete the wrkfrcCoreCf by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete WrkfrcCoreCf : {}", id);
        wrkfrcCoreCfRepository.deleteById(id);
    }
}
