package com.pepsico.people.service.impl;

import com.pepsico.people.service.WrkfrcCoreCfExtnService;
import com.pepsico.people.domain.WrkfrcCoreCfExtn;
import com.pepsico.people.repository.WrkfrcCoreCfExtnRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link WrkfrcCoreCfExtn}.
 */
@Service
@Transactional
public class WrkfrcCoreCfExtnServiceImpl implements WrkfrcCoreCfExtnService {

    private final Logger log = LoggerFactory.getLogger(WrkfrcCoreCfExtnServiceImpl.class);

    private final WrkfrcCoreCfExtnRepository wrkfrcCoreCfExtnRepository;

    public WrkfrcCoreCfExtnServiceImpl(WrkfrcCoreCfExtnRepository wrkfrcCoreCfExtnRepository) {
        this.wrkfrcCoreCfExtnRepository = wrkfrcCoreCfExtnRepository;
    }

    /**
     * Save a wrkfrcCoreCfExtn.
     *
     * @param wrkfrcCoreCfExtn the entity to save.
     * @return the persisted entity.
     */
    @Override
    public WrkfrcCoreCfExtn save(WrkfrcCoreCfExtn wrkfrcCoreCfExtn) {
        log.debug("Request to save WrkfrcCoreCfExtn : {}", wrkfrcCoreCfExtn);
        return wrkfrcCoreCfExtnRepository.save(wrkfrcCoreCfExtn);
    }

    /**
     * Get all the wrkfrcCoreCfExtns.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<WrkfrcCoreCfExtn> findAll(Pageable pageable) {
        log.debug("Request to get all WrkfrcCoreCfExtns");
        return wrkfrcCoreCfExtnRepository.findAll(pageable);
    }


    /**
     * Get one wrkfrcCoreCfExtn by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<WrkfrcCoreCfExtn> findOne(Long id) {
        log.debug("Request to get WrkfrcCoreCfExtn : {}", id);
        return wrkfrcCoreCfExtnRepository.findById(id);
    }

    /**
     * Delete the wrkfrcCoreCfExtn by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete WrkfrcCoreCfExtn : {}", id);
        wrkfrcCoreCfExtnRepository.deleteById(id);
    }
}
