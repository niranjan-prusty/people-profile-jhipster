package com.pepsico.people.web.rest;

import com.pepsico.people.domain.WrkfrcCoreCf;
import com.pepsico.people.service.WrkfrcCoreCfService;
import com.pepsico.people.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.pepsico.people.domain.WrkfrcCoreCf}.
 */
@RestController
@RequestMapping("/api")
public class WrkfrcCoreCfResource {

    private final Logger log = LoggerFactory.getLogger(WrkfrcCoreCfResource.class);

    private static final String ENTITY_NAME = "peopleProfileMicroservicesWrkfrcCoreCf";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final WrkfrcCoreCfService wrkfrcCoreCfService;

    public WrkfrcCoreCfResource(WrkfrcCoreCfService wrkfrcCoreCfService) {
        this.wrkfrcCoreCfService = wrkfrcCoreCfService;
    }

    /**
     * {@code POST  /wrkfrc-core-cfs} : Create a new wrkfrcCoreCf.
     *
     * @param wrkfrcCoreCf the wrkfrcCoreCf to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new wrkfrcCoreCf, or with status {@code 400 (Bad Request)} if the wrkfrcCoreCf has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/wrkfrc-core-cfs")
    public ResponseEntity<WrkfrcCoreCf> createWrkfrcCoreCf(@RequestBody WrkfrcCoreCf wrkfrcCoreCf) throws URISyntaxException {
        log.debug("REST request to save WrkfrcCoreCf : {}", wrkfrcCoreCf);
        if (wrkfrcCoreCf.getId() != null) {
            throw new BadRequestAlertException("A new wrkfrcCoreCf cannot already have an ID", ENTITY_NAME, "idexists");
        }
        WrkfrcCoreCf result = wrkfrcCoreCfService.save(wrkfrcCoreCf);
        return ResponseEntity.created(new URI("/api/wrkfrc-core-cfs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /wrkfrc-core-cfs} : Updates an existing wrkfrcCoreCf.
     *
     * @param wrkfrcCoreCf the wrkfrcCoreCf to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated wrkfrcCoreCf,
     * or with status {@code 400 (Bad Request)} if the wrkfrcCoreCf is not valid,
     * or with status {@code 500 (Internal Server Error)} if the wrkfrcCoreCf couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/wrkfrc-core-cfs")
    public ResponseEntity<WrkfrcCoreCf> updateWrkfrcCoreCf(@RequestBody WrkfrcCoreCf wrkfrcCoreCf) throws URISyntaxException {
        log.debug("REST request to update WrkfrcCoreCf : {}", wrkfrcCoreCf);
        if (wrkfrcCoreCf.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        WrkfrcCoreCf result = wrkfrcCoreCfService.save(wrkfrcCoreCf);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, wrkfrcCoreCf.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /wrkfrc-core-cfs} : get all the wrkfrcCoreCfs.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of wrkfrcCoreCfs in body.
     */
    @GetMapping("/wrkfrc-core-cfs")
    public ResponseEntity<List<WrkfrcCoreCf>> getAllWrkfrcCoreCfs(Pageable pageable) {
        log.debug("REST request to get a page of WrkfrcCoreCfs");
        Page<WrkfrcCoreCf> page = wrkfrcCoreCfService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /wrkfrc-core-cfs/:id} : get the "id" wrkfrcCoreCf.
     *
     * @param id the id of the wrkfrcCoreCf to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the wrkfrcCoreCf, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/wrkfrc-core-cfs/{id}")
    public ResponseEntity<WrkfrcCoreCf> getWrkfrcCoreCf(@PathVariable Long id) {
        log.debug("REST request to get WrkfrcCoreCf : {}", id);
        Optional<WrkfrcCoreCf> wrkfrcCoreCf = wrkfrcCoreCfService.findOne(id);
        return ResponseUtil.wrapOrNotFound(wrkfrcCoreCf);
    }

    /**
     * {@code DELETE  /wrkfrc-core-cfs/:id} : delete the "id" wrkfrcCoreCf.
     *
     * @param id the id of the wrkfrcCoreCf to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/wrkfrc-core-cfs/{id}")
    public ResponseEntity<Void> deleteWrkfrcCoreCf(@PathVariable Long id) {
        log.debug("REST request to delete WrkfrcCoreCf : {}", id);
        wrkfrcCoreCfService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
