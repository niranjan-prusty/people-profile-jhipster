package com.pepsico.people.web.rest;

import com.pepsico.people.domain.WrkfrcCoreCfExtn;
import com.pepsico.people.service.WrkfrcCoreCfExtnService;
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

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.pepsico.people.domain.WrkfrcCoreCfExtn}.
 */
@RestController
@RequestMapping("/api")
public class WrkfrcCoreCfExtnResource {

    private final Logger log = LoggerFactory.getLogger(WrkfrcCoreCfExtnResource.class);

    private static final String ENTITY_NAME = "peopleProfileMicroservicesWrkfrcCoreCfExtn";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final WrkfrcCoreCfExtnService wrkfrcCoreCfExtnService;

    public WrkfrcCoreCfExtnResource(WrkfrcCoreCfExtnService wrkfrcCoreCfExtnService) {
        this.wrkfrcCoreCfExtnService = wrkfrcCoreCfExtnService;
    }

    /**
     * {@code POST  /wrkfrc-core-cf-extns} : Create a new wrkfrcCoreCfExtn.
     *
     * @param wrkfrcCoreCfExtn the wrkfrcCoreCfExtn to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new wrkfrcCoreCfExtn, or with status {@code 400 (Bad Request)} if the wrkfrcCoreCfExtn has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/wrkfrc-core-cf-extns")
    public ResponseEntity<WrkfrcCoreCfExtn> createWrkfrcCoreCfExtn(@Valid @RequestBody WrkfrcCoreCfExtn wrkfrcCoreCfExtn) throws URISyntaxException {
        log.debug("REST request to save WrkfrcCoreCfExtn : {}", wrkfrcCoreCfExtn);
        if (wrkfrcCoreCfExtn.getId() != null) {
            throw new BadRequestAlertException("A new wrkfrcCoreCfExtn cannot already have an ID", ENTITY_NAME, "idexists");
        }
        WrkfrcCoreCfExtn result = wrkfrcCoreCfExtnService.save(wrkfrcCoreCfExtn);
        return ResponseEntity.created(new URI("/api/wrkfrc-core-cf-extns/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /wrkfrc-core-cf-extns} : Updates an existing wrkfrcCoreCfExtn.
     *
     * @param wrkfrcCoreCfExtn the wrkfrcCoreCfExtn to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated wrkfrcCoreCfExtn,
     * or with status {@code 400 (Bad Request)} if the wrkfrcCoreCfExtn is not valid,
     * or with status {@code 500 (Internal Server Error)} if the wrkfrcCoreCfExtn couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/wrkfrc-core-cf-extns")
    public ResponseEntity<WrkfrcCoreCfExtn> updateWrkfrcCoreCfExtn(@Valid @RequestBody WrkfrcCoreCfExtn wrkfrcCoreCfExtn) throws URISyntaxException {
        log.debug("REST request to update WrkfrcCoreCfExtn : {}", wrkfrcCoreCfExtn);
        if (wrkfrcCoreCfExtn.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        WrkfrcCoreCfExtn result = wrkfrcCoreCfExtnService.save(wrkfrcCoreCfExtn);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, wrkfrcCoreCfExtn.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /wrkfrc-core-cf-extns} : get all the wrkfrcCoreCfExtns.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of wrkfrcCoreCfExtns in body.
     */
    @GetMapping("/wrkfrc-core-cf-extns")
    public ResponseEntity<List<WrkfrcCoreCfExtn>> getAllWrkfrcCoreCfExtns(Pageable pageable) {
        log.debug("REST request to get a page of WrkfrcCoreCfExtns");
        Page<WrkfrcCoreCfExtn> page = wrkfrcCoreCfExtnService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /wrkfrc-core-cf-extns/:id} : get the "id" wrkfrcCoreCfExtn.
     *
     * @param id the id of the wrkfrcCoreCfExtn to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the wrkfrcCoreCfExtn, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/wrkfrc-core-cf-extns/{id}")
    public ResponseEntity<WrkfrcCoreCfExtn> getWrkfrcCoreCfExtn(@PathVariable Long id) {
        log.debug("REST request to get WrkfrcCoreCfExtn : {}", id);
        Optional<WrkfrcCoreCfExtn> wrkfrcCoreCfExtn = wrkfrcCoreCfExtnService.findOne(id);
        return ResponseUtil.wrapOrNotFound(wrkfrcCoreCfExtn);
    }

    /**
     * {@code DELETE  /wrkfrc-core-cf-extns/:id} : delete the "id" wrkfrcCoreCfExtn.
     *
     * @param id the id of the wrkfrcCoreCfExtn to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/wrkfrc-core-cf-extns/{id}")
    public ResponseEntity<Void> deleteWrkfrcCoreCfExtn(@PathVariable Long id) {
        log.debug("REST request to delete WrkfrcCoreCfExtn : {}", id);
        wrkfrcCoreCfExtnService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
