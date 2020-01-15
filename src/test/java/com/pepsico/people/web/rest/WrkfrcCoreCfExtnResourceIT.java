package com.pepsico.people.web.rest;

import com.pepsico.people.PeopleApp;
import com.pepsico.people.domain.WrkfrcCoreCfExtn;
import com.pepsico.people.repository.WrkfrcCoreCfExtnRepository;
import com.pepsico.people.service.WrkfrcCoreCfExtnService;
import com.pepsico.people.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Base64Utils;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

import static com.pepsico.people.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link WrkfrcCoreCfExtnResource} REST controller.
 */
@SpringBootTest(classes = PeopleApp.class)
public class WrkfrcCoreCfExtnResourceIT {

    private static final Long DEFAULT_ID_FK = 1L;
    private static final Long UPDATED_ID_FK = 2L;

    private static final String DEFAULT_FUN_GROUP = "AAAAAAAAAA";
    private static final String UPDATED_FUN_GROUP = "BBBBBBBBBB";

    private static final String DEFAULT_BUILDING = "AAAAAAAAAA";
    private static final String UPDATED_BUILDING = "BBBBBBBBBB";

    private static final String DEFAULT_FLOOR = "AAAAAAAAAA";
    private static final String UPDATED_FLOOR = "BBBBBBBBBB";

    private static final String DEFAULT_MAIL_DROP = "AAAAAAAAAA";
    private static final String UPDATED_MAIL_DROP = "BBBBBBBBBB";

    private static final String DEFAULT_ASSISTANT = "AAAAAAAAAA";
    private static final String UPDATED_ASSISTANT = "BBBBBBBBBB";

    private static final String DEFAULT_ALT_CONTACT_MOBILE = "AAAAAAAAAA";
    private static final String UPDATED_ALT_CONTACT_MOBILE = "BBBBBBBBBB";

    private static final String DEFAULT_ALT_CONTACT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_ALT_CONTACT_EMAIL = "BBBBBBBBBB";

    private static final String DEFAULT_ALT_CONTACT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_ALT_CONTACT_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_ALT_PHONE_NUM = "AAAAAAAAAA";
    private static final String UPDATED_ALT_PHONE_NUM = "BBBBBBBBBB";

    private static final String DEFAULT_ALT_LOC_NM = "AAAAAAAAAA";
    private static final String UPDATED_ALT_LOC_NM = "BBBBBBBBBB";

    private static final String DEFAULT_ERG_MEMBERSHIPS = "AAAAAAAAAA";
    private static final String UPDATED_ERG_MEMBERSHIPS = "BBBBBBBBBB";

    private static final String DEFAULT_PEPSICO_NETWORKS = "AAAAAAAAAA";
    private static final String UPDATED_PEPSICO_NETWORKS = "BBBBBBBBBB";

    private static final String DEFAULT_HOBBIES = "AAAAAAAAAA";
    private static final String UPDATED_HOBBIES = "BBBBBBBBBB";

    private static final Instant DEFAULT_BIRTHDAY = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_BIRTHDAY = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final byte[] DEFAULT_PHOTO = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_PHOTO = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_PHOTO_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_PHOTO_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_PHOTO_EXT = "AAAAAAAAAA";
    private static final String UPDATED_PHOTO_EXT = "BBBBBBBBBB";

    private static final String DEFAULT_HOMETOWN = "AAAAAAAAAA";
    private static final String UPDATED_HOMETOWN = "BBBBBBBBBB";

    private static final String DEFAULT_HIRE_DATE = "AAAAAAAAAA";
    private static final String UPDATED_HIRE_DATE = "BBBBBBBBBB";

    private static final String DEFAULT_SKILLS = "AAAAAAAAAA";
    private static final String UPDATED_SKILLS = "BBBBBBBBBB";

    private static final String DEFAULT_INTERESTS = "AAAAAAAAAA";
    private static final String UPDATED_INTERESTS = "BBBBBBBBBB";

    private static final String DEFAULT_CURRENT_ROLE = "AAAAAAAAAA";
    private static final String UPDATED_CURRENT_ROLE = "BBBBBBBBBB";

    private static final String DEFAULT_PRJ_WORKED = "AAAAAAAAAA";
    private static final String UPDATED_PRJ_WORKED = "BBBBBBBBBB";

    private static final String DEFAULT_EDUCATION = "AAAAAAAAAA";
    private static final String UPDATED_EDUCATION = "BBBBBBBBBB";

    private static final String DEFAULT_PERS_NOTE = "AAAAAAAAAA";
    private static final String UPDATED_PERS_NOTE = "BBBBBBBBBB";

    private static final String DEFAULT_SOCIAL_LINKS = "AAAAAAAAAA";
    private static final String UPDATED_SOCIAL_LINKS = "BBBBBBBBBB";

    @Autowired
    private WrkfrcCoreCfExtnRepository wrkfrcCoreCfExtnRepository;

    @Autowired
    private WrkfrcCoreCfExtnService wrkfrcCoreCfExtnService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restWrkfrcCoreCfExtnMockMvc;

    private WrkfrcCoreCfExtn wrkfrcCoreCfExtn;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final WrkfrcCoreCfExtnResource wrkfrcCoreCfExtnResource = new WrkfrcCoreCfExtnResource(wrkfrcCoreCfExtnService);
        this.restWrkfrcCoreCfExtnMockMvc = MockMvcBuilders.standaloneSetup(wrkfrcCoreCfExtnResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static WrkfrcCoreCfExtn createEntity(EntityManager em) {
        WrkfrcCoreCfExtn wrkfrcCoreCfExtn = new WrkfrcCoreCfExtn()
            .idFk(DEFAULT_ID_FK)
            .funGroup(DEFAULT_FUN_GROUP)
            .building(DEFAULT_BUILDING)
            .floor(DEFAULT_FLOOR)
            .mailDrop(DEFAULT_MAIL_DROP)
            .assistant(DEFAULT_ASSISTANT)
            .altContactMobile(DEFAULT_ALT_CONTACT_MOBILE)
            .altContactEmail(DEFAULT_ALT_CONTACT_EMAIL)
            .altContactName(DEFAULT_ALT_CONTACT_NAME)
            .altPhoneNum(DEFAULT_ALT_PHONE_NUM)
            .altLocNm(DEFAULT_ALT_LOC_NM)
            .ergMemberships(DEFAULT_ERG_MEMBERSHIPS)
            .pepsicoNetworks(DEFAULT_PEPSICO_NETWORKS)
            .hobbies(DEFAULT_HOBBIES)
            .birthday(DEFAULT_BIRTHDAY)
            .photo(DEFAULT_PHOTO)
            .photoContentType(DEFAULT_PHOTO_CONTENT_TYPE)
            .photoExt(DEFAULT_PHOTO_EXT)
            .hometown(DEFAULT_HOMETOWN)
            .hireDate(DEFAULT_HIRE_DATE)
            .skills(DEFAULT_SKILLS)
            .interests(DEFAULT_INTERESTS)
            .currentRole(DEFAULT_CURRENT_ROLE)
            .prjWorked(DEFAULT_PRJ_WORKED)
            .education(DEFAULT_EDUCATION)
            .persNote(DEFAULT_PERS_NOTE)
            .socialLinks(DEFAULT_SOCIAL_LINKS);
        return wrkfrcCoreCfExtn;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static WrkfrcCoreCfExtn createUpdatedEntity(EntityManager em) {
        WrkfrcCoreCfExtn wrkfrcCoreCfExtn = new WrkfrcCoreCfExtn()
            .idFk(UPDATED_ID_FK)
            .funGroup(UPDATED_FUN_GROUP)
            .building(UPDATED_BUILDING)
            .floor(UPDATED_FLOOR)
            .mailDrop(UPDATED_MAIL_DROP)
            .assistant(UPDATED_ASSISTANT)
            .altContactMobile(UPDATED_ALT_CONTACT_MOBILE)
            .altContactEmail(UPDATED_ALT_CONTACT_EMAIL)
            .altContactName(UPDATED_ALT_CONTACT_NAME)
            .altPhoneNum(UPDATED_ALT_PHONE_NUM)
            .altLocNm(UPDATED_ALT_LOC_NM)
            .ergMemberships(UPDATED_ERG_MEMBERSHIPS)
            .pepsicoNetworks(UPDATED_PEPSICO_NETWORKS)
            .hobbies(UPDATED_HOBBIES)
            .birthday(UPDATED_BIRTHDAY)
            .photo(UPDATED_PHOTO)
            .photoContentType(UPDATED_PHOTO_CONTENT_TYPE)
            .photoExt(UPDATED_PHOTO_EXT)
            .hometown(UPDATED_HOMETOWN)
            .hireDate(UPDATED_HIRE_DATE)
            .skills(UPDATED_SKILLS)
            .interests(UPDATED_INTERESTS)
            .currentRole(UPDATED_CURRENT_ROLE)
            .prjWorked(UPDATED_PRJ_WORKED)
            .education(UPDATED_EDUCATION)
            .persNote(UPDATED_PERS_NOTE)
            .socialLinks(UPDATED_SOCIAL_LINKS);
        return wrkfrcCoreCfExtn;
    }

    @BeforeEach
    public void initTest() {
        wrkfrcCoreCfExtn = createEntity(em);
    }

    @Test
    @Transactional
    public void createWrkfrcCoreCfExtn() throws Exception {
        int databaseSizeBeforeCreate = wrkfrcCoreCfExtnRepository.findAll().size();

        // Create the WrkfrcCoreCfExtn
        restWrkfrcCoreCfExtnMockMvc.perform(post("/api/wrkfrc-core-cf-extns")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(wrkfrcCoreCfExtn)))
            .andExpect(status().isCreated());

        // Validate the WrkfrcCoreCfExtn in the database
        List<WrkfrcCoreCfExtn> wrkfrcCoreCfExtnList = wrkfrcCoreCfExtnRepository.findAll();
        assertThat(wrkfrcCoreCfExtnList).hasSize(databaseSizeBeforeCreate + 1);
        WrkfrcCoreCfExtn testWrkfrcCoreCfExtn = wrkfrcCoreCfExtnList.get(wrkfrcCoreCfExtnList.size() - 1);
        assertThat(testWrkfrcCoreCfExtn.getIdFk()).isEqualTo(DEFAULT_ID_FK);
        assertThat(testWrkfrcCoreCfExtn.getFunGroup()).isEqualTo(DEFAULT_FUN_GROUP);
        assertThat(testWrkfrcCoreCfExtn.getBuilding()).isEqualTo(DEFAULT_BUILDING);
        assertThat(testWrkfrcCoreCfExtn.getFloor()).isEqualTo(DEFAULT_FLOOR);
        assertThat(testWrkfrcCoreCfExtn.getMailDrop()).isEqualTo(DEFAULT_MAIL_DROP);
        assertThat(testWrkfrcCoreCfExtn.getAssistant()).isEqualTo(DEFAULT_ASSISTANT);
        assertThat(testWrkfrcCoreCfExtn.getAltContactMobile()).isEqualTo(DEFAULT_ALT_CONTACT_MOBILE);
        assertThat(testWrkfrcCoreCfExtn.getAltContactEmail()).isEqualTo(DEFAULT_ALT_CONTACT_EMAIL);
        assertThat(testWrkfrcCoreCfExtn.getAltContactName()).isEqualTo(DEFAULT_ALT_CONTACT_NAME);
        assertThat(testWrkfrcCoreCfExtn.getAltPhoneNum()).isEqualTo(DEFAULT_ALT_PHONE_NUM);
        assertThat(testWrkfrcCoreCfExtn.getAltLocNm()).isEqualTo(DEFAULT_ALT_LOC_NM);
        assertThat(testWrkfrcCoreCfExtn.getErgMemberships()).isEqualTo(DEFAULT_ERG_MEMBERSHIPS);
        assertThat(testWrkfrcCoreCfExtn.getPepsicoNetworks()).isEqualTo(DEFAULT_PEPSICO_NETWORKS);
        assertThat(testWrkfrcCoreCfExtn.getHobbies()).isEqualTo(DEFAULT_HOBBIES);
        assertThat(testWrkfrcCoreCfExtn.getBirthday()).isEqualTo(DEFAULT_BIRTHDAY);
        assertThat(testWrkfrcCoreCfExtn.getPhoto()).isEqualTo(DEFAULT_PHOTO);
        assertThat(testWrkfrcCoreCfExtn.getPhotoContentType()).isEqualTo(DEFAULT_PHOTO_CONTENT_TYPE);
        assertThat(testWrkfrcCoreCfExtn.getPhotoExt()).isEqualTo(DEFAULT_PHOTO_EXT);
        assertThat(testWrkfrcCoreCfExtn.getHometown()).isEqualTo(DEFAULT_HOMETOWN);
        assertThat(testWrkfrcCoreCfExtn.getHireDate()).isEqualTo(DEFAULT_HIRE_DATE);
        assertThat(testWrkfrcCoreCfExtn.getSkills()).isEqualTo(DEFAULT_SKILLS);
        assertThat(testWrkfrcCoreCfExtn.getInterests()).isEqualTo(DEFAULT_INTERESTS);
        assertThat(testWrkfrcCoreCfExtn.getCurrentRole()).isEqualTo(DEFAULT_CURRENT_ROLE);
        assertThat(testWrkfrcCoreCfExtn.getPrjWorked()).isEqualTo(DEFAULT_PRJ_WORKED);
        assertThat(testWrkfrcCoreCfExtn.getEducation()).isEqualTo(DEFAULT_EDUCATION);
        assertThat(testWrkfrcCoreCfExtn.getPersNote()).isEqualTo(DEFAULT_PERS_NOTE);
        assertThat(testWrkfrcCoreCfExtn.getSocialLinks()).isEqualTo(DEFAULT_SOCIAL_LINKS);
    }

    @Test
    @Transactional
    public void createWrkfrcCoreCfExtnWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = wrkfrcCoreCfExtnRepository.findAll().size();

        // Create the WrkfrcCoreCfExtn with an existing ID
        wrkfrcCoreCfExtn.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restWrkfrcCoreCfExtnMockMvc.perform(post("/api/wrkfrc-core-cf-extns")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(wrkfrcCoreCfExtn)))
            .andExpect(status().isBadRequest());

        // Validate the WrkfrcCoreCfExtn in the database
        List<WrkfrcCoreCfExtn> wrkfrcCoreCfExtnList = wrkfrcCoreCfExtnRepository.findAll();
        assertThat(wrkfrcCoreCfExtnList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkIdFkIsRequired() throws Exception {
        int databaseSizeBeforeTest = wrkfrcCoreCfExtnRepository.findAll().size();
        // set the field null
        wrkfrcCoreCfExtn.setIdFk(null);

        // Create the WrkfrcCoreCfExtn, which fails.

        restWrkfrcCoreCfExtnMockMvc.perform(post("/api/wrkfrc-core-cf-extns")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(wrkfrcCoreCfExtn)))
            .andExpect(status().isBadRequest());

        List<WrkfrcCoreCfExtn> wrkfrcCoreCfExtnList = wrkfrcCoreCfExtnRepository.findAll();
        assertThat(wrkfrcCoreCfExtnList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllWrkfrcCoreCfExtns() throws Exception {
        // Initialize the database
        wrkfrcCoreCfExtnRepository.saveAndFlush(wrkfrcCoreCfExtn);

        // Get all the wrkfrcCoreCfExtnList
        restWrkfrcCoreCfExtnMockMvc.perform(get("/api/wrkfrc-core-cf-extns?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(wrkfrcCoreCfExtn.getId().intValue())))
            .andExpect(jsonPath("$.[*].idFk").value(hasItem(DEFAULT_ID_FK.intValue())))
            .andExpect(jsonPath("$.[*].funGroup").value(hasItem(DEFAULT_FUN_GROUP)))
            .andExpect(jsonPath("$.[*].building").value(hasItem(DEFAULT_BUILDING)))
            .andExpect(jsonPath("$.[*].floor").value(hasItem(DEFAULT_FLOOR)))
            .andExpect(jsonPath("$.[*].mailDrop").value(hasItem(DEFAULT_MAIL_DROP)))
            .andExpect(jsonPath("$.[*].assistant").value(hasItem(DEFAULT_ASSISTANT)))
            .andExpect(jsonPath("$.[*].altContactMobile").value(hasItem(DEFAULT_ALT_CONTACT_MOBILE)))
            .andExpect(jsonPath("$.[*].altContactEmail").value(hasItem(DEFAULT_ALT_CONTACT_EMAIL)))
            .andExpect(jsonPath("$.[*].altContactName").value(hasItem(DEFAULT_ALT_CONTACT_NAME)))
            .andExpect(jsonPath("$.[*].altPhoneNum").value(hasItem(DEFAULT_ALT_PHONE_NUM)))
            .andExpect(jsonPath("$.[*].altLocNm").value(hasItem(DEFAULT_ALT_LOC_NM)))
            .andExpect(jsonPath("$.[*].ergMemberships").value(hasItem(DEFAULT_ERG_MEMBERSHIPS)))
            .andExpect(jsonPath("$.[*].pepsicoNetworks").value(hasItem(DEFAULT_PEPSICO_NETWORKS)))
            .andExpect(jsonPath("$.[*].hobbies").value(hasItem(DEFAULT_HOBBIES)))
            .andExpect(jsonPath("$.[*].birthday").value(hasItem(DEFAULT_BIRTHDAY.toString())))
            .andExpect(jsonPath("$.[*].photoContentType").value(hasItem(DEFAULT_PHOTO_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].photo").value(hasItem(Base64Utils.encodeToString(DEFAULT_PHOTO))))
            .andExpect(jsonPath("$.[*].photoExt").value(hasItem(DEFAULT_PHOTO_EXT)))
            .andExpect(jsonPath("$.[*].hometown").value(hasItem(DEFAULT_HOMETOWN)))
            .andExpect(jsonPath("$.[*].hireDate").value(hasItem(DEFAULT_HIRE_DATE)))
            .andExpect(jsonPath("$.[*].skills").value(hasItem(DEFAULT_SKILLS)))
            .andExpect(jsonPath("$.[*].interests").value(hasItem(DEFAULT_INTERESTS)))
            .andExpect(jsonPath("$.[*].currentRole").value(hasItem(DEFAULT_CURRENT_ROLE)))
            .andExpect(jsonPath("$.[*].prjWorked").value(hasItem(DEFAULT_PRJ_WORKED)))
            .andExpect(jsonPath("$.[*].education").value(hasItem(DEFAULT_EDUCATION)))
            .andExpect(jsonPath("$.[*].persNote").value(hasItem(DEFAULT_PERS_NOTE)))
            .andExpect(jsonPath("$.[*].socialLinks").value(hasItem(DEFAULT_SOCIAL_LINKS)));
    }
    
    @Test
    @Transactional
    public void getWrkfrcCoreCfExtn() throws Exception {
        // Initialize the database
        wrkfrcCoreCfExtnRepository.saveAndFlush(wrkfrcCoreCfExtn);

        // Get the wrkfrcCoreCfExtn
        restWrkfrcCoreCfExtnMockMvc.perform(get("/api/wrkfrc-core-cf-extns/{id}", wrkfrcCoreCfExtn.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(wrkfrcCoreCfExtn.getId().intValue()))
            .andExpect(jsonPath("$.idFk").value(DEFAULT_ID_FK.intValue()))
            .andExpect(jsonPath("$.funGroup").value(DEFAULT_FUN_GROUP))
            .andExpect(jsonPath("$.building").value(DEFAULT_BUILDING))
            .andExpect(jsonPath("$.floor").value(DEFAULT_FLOOR))
            .andExpect(jsonPath("$.mailDrop").value(DEFAULT_MAIL_DROP))
            .andExpect(jsonPath("$.assistant").value(DEFAULT_ASSISTANT))
            .andExpect(jsonPath("$.altContactMobile").value(DEFAULT_ALT_CONTACT_MOBILE))
            .andExpect(jsonPath("$.altContactEmail").value(DEFAULT_ALT_CONTACT_EMAIL))
            .andExpect(jsonPath("$.altContactName").value(DEFAULT_ALT_CONTACT_NAME))
            .andExpect(jsonPath("$.altPhoneNum").value(DEFAULT_ALT_PHONE_NUM))
            .andExpect(jsonPath("$.altLocNm").value(DEFAULT_ALT_LOC_NM))
            .andExpect(jsonPath("$.ergMemberships").value(DEFAULT_ERG_MEMBERSHIPS))
            .andExpect(jsonPath("$.pepsicoNetworks").value(DEFAULT_PEPSICO_NETWORKS))
            .andExpect(jsonPath("$.hobbies").value(DEFAULT_HOBBIES))
            .andExpect(jsonPath("$.birthday").value(DEFAULT_BIRTHDAY.toString()))
            .andExpect(jsonPath("$.photoContentType").value(DEFAULT_PHOTO_CONTENT_TYPE))
            .andExpect(jsonPath("$.photo").value(Base64Utils.encodeToString(DEFAULT_PHOTO)))
            .andExpect(jsonPath("$.photoExt").value(DEFAULT_PHOTO_EXT))
            .andExpect(jsonPath("$.hometown").value(DEFAULT_HOMETOWN))
            .andExpect(jsonPath("$.hireDate").value(DEFAULT_HIRE_DATE))
            .andExpect(jsonPath("$.skills").value(DEFAULT_SKILLS))
            .andExpect(jsonPath("$.interests").value(DEFAULT_INTERESTS))
            .andExpect(jsonPath("$.currentRole").value(DEFAULT_CURRENT_ROLE))
            .andExpect(jsonPath("$.prjWorked").value(DEFAULT_PRJ_WORKED))
            .andExpect(jsonPath("$.education").value(DEFAULT_EDUCATION))
            .andExpect(jsonPath("$.persNote").value(DEFAULT_PERS_NOTE))
            .andExpect(jsonPath("$.socialLinks").value(DEFAULT_SOCIAL_LINKS));
    }

    @Test
    @Transactional
    public void getNonExistingWrkfrcCoreCfExtn() throws Exception {
        // Get the wrkfrcCoreCfExtn
        restWrkfrcCoreCfExtnMockMvc.perform(get("/api/wrkfrc-core-cf-extns/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateWrkfrcCoreCfExtn() throws Exception {
        // Initialize the database
        wrkfrcCoreCfExtnService.save(wrkfrcCoreCfExtn);

        int databaseSizeBeforeUpdate = wrkfrcCoreCfExtnRepository.findAll().size();

        // Update the wrkfrcCoreCfExtn
        WrkfrcCoreCfExtn updatedWrkfrcCoreCfExtn = wrkfrcCoreCfExtnRepository.findById(wrkfrcCoreCfExtn.getId()).get();
        // Disconnect from session so that the updates on updatedWrkfrcCoreCfExtn are not directly saved in db
        em.detach(updatedWrkfrcCoreCfExtn);
        updatedWrkfrcCoreCfExtn
            .idFk(UPDATED_ID_FK)
            .funGroup(UPDATED_FUN_GROUP)
            .building(UPDATED_BUILDING)
            .floor(UPDATED_FLOOR)
            .mailDrop(UPDATED_MAIL_DROP)
            .assistant(UPDATED_ASSISTANT)
            .altContactMobile(UPDATED_ALT_CONTACT_MOBILE)
            .altContactEmail(UPDATED_ALT_CONTACT_EMAIL)
            .altContactName(UPDATED_ALT_CONTACT_NAME)
            .altPhoneNum(UPDATED_ALT_PHONE_NUM)
            .altLocNm(UPDATED_ALT_LOC_NM)
            .ergMemberships(UPDATED_ERG_MEMBERSHIPS)
            .pepsicoNetworks(UPDATED_PEPSICO_NETWORKS)
            .hobbies(UPDATED_HOBBIES)
            .birthday(UPDATED_BIRTHDAY)
            .photo(UPDATED_PHOTO)
            .photoContentType(UPDATED_PHOTO_CONTENT_TYPE)
            .photoExt(UPDATED_PHOTO_EXT)
            .hometown(UPDATED_HOMETOWN)
            .hireDate(UPDATED_HIRE_DATE)
            .skills(UPDATED_SKILLS)
            .interests(UPDATED_INTERESTS)
            .currentRole(UPDATED_CURRENT_ROLE)
            .prjWorked(UPDATED_PRJ_WORKED)
            .education(UPDATED_EDUCATION)
            .persNote(UPDATED_PERS_NOTE)
            .socialLinks(UPDATED_SOCIAL_LINKS);

        restWrkfrcCoreCfExtnMockMvc.perform(put("/api/wrkfrc-core-cf-extns")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedWrkfrcCoreCfExtn)))
            .andExpect(status().isOk());

        // Validate the WrkfrcCoreCfExtn in the database
        List<WrkfrcCoreCfExtn> wrkfrcCoreCfExtnList = wrkfrcCoreCfExtnRepository.findAll();
        assertThat(wrkfrcCoreCfExtnList).hasSize(databaseSizeBeforeUpdate);
        WrkfrcCoreCfExtn testWrkfrcCoreCfExtn = wrkfrcCoreCfExtnList.get(wrkfrcCoreCfExtnList.size() - 1);
        assertThat(testWrkfrcCoreCfExtn.getIdFk()).isEqualTo(UPDATED_ID_FK);
        assertThat(testWrkfrcCoreCfExtn.getFunGroup()).isEqualTo(UPDATED_FUN_GROUP);
        assertThat(testWrkfrcCoreCfExtn.getBuilding()).isEqualTo(UPDATED_BUILDING);
        assertThat(testWrkfrcCoreCfExtn.getFloor()).isEqualTo(UPDATED_FLOOR);
        assertThat(testWrkfrcCoreCfExtn.getMailDrop()).isEqualTo(UPDATED_MAIL_DROP);
        assertThat(testWrkfrcCoreCfExtn.getAssistant()).isEqualTo(UPDATED_ASSISTANT);
        assertThat(testWrkfrcCoreCfExtn.getAltContactMobile()).isEqualTo(UPDATED_ALT_CONTACT_MOBILE);
        assertThat(testWrkfrcCoreCfExtn.getAltContactEmail()).isEqualTo(UPDATED_ALT_CONTACT_EMAIL);
        assertThat(testWrkfrcCoreCfExtn.getAltContactName()).isEqualTo(UPDATED_ALT_CONTACT_NAME);
        assertThat(testWrkfrcCoreCfExtn.getAltPhoneNum()).isEqualTo(UPDATED_ALT_PHONE_NUM);
        assertThat(testWrkfrcCoreCfExtn.getAltLocNm()).isEqualTo(UPDATED_ALT_LOC_NM);
        assertThat(testWrkfrcCoreCfExtn.getErgMemberships()).isEqualTo(UPDATED_ERG_MEMBERSHIPS);
        assertThat(testWrkfrcCoreCfExtn.getPepsicoNetworks()).isEqualTo(UPDATED_PEPSICO_NETWORKS);
        assertThat(testWrkfrcCoreCfExtn.getHobbies()).isEqualTo(UPDATED_HOBBIES);
        assertThat(testWrkfrcCoreCfExtn.getBirthday()).isEqualTo(UPDATED_BIRTHDAY);
        assertThat(testWrkfrcCoreCfExtn.getPhoto()).isEqualTo(UPDATED_PHOTO);
        assertThat(testWrkfrcCoreCfExtn.getPhotoContentType()).isEqualTo(UPDATED_PHOTO_CONTENT_TYPE);
        assertThat(testWrkfrcCoreCfExtn.getPhotoExt()).isEqualTo(UPDATED_PHOTO_EXT);
        assertThat(testWrkfrcCoreCfExtn.getHometown()).isEqualTo(UPDATED_HOMETOWN);
        assertThat(testWrkfrcCoreCfExtn.getHireDate()).isEqualTo(UPDATED_HIRE_DATE);
        assertThat(testWrkfrcCoreCfExtn.getSkills()).isEqualTo(UPDATED_SKILLS);
        assertThat(testWrkfrcCoreCfExtn.getInterests()).isEqualTo(UPDATED_INTERESTS);
        assertThat(testWrkfrcCoreCfExtn.getCurrentRole()).isEqualTo(UPDATED_CURRENT_ROLE);
        assertThat(testWrkfrcCoreCfExtn.getPrjWorked()).isEqualTo(UPDATED_PRJ_WORKED);
        assertThat(testWrkfrcCoreCfExtn.getEducation()).isEqualTo(UPDATED_EDUCATION);
        assertThat(testWrkfrcCoreCfExtn.getPersNote()).isEqualTo(UPDATED_PERS_NOTE);
        assertThat(testWrkfrcCoreCfExtn.getSocialLinks()).isEqualTo(UPDATED_SOCIAL_LINKS);
    }

    @Test
    @Transactional
    public void updateNonExistingWrkfrcCoreCfExtn() throws Exception {
        int databaseSizeBeforeUpdate = wrkfrcCoreCfExtnRepository.findAll().size();

        // Create the WrkfrcCoreCfExtn

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restWrkfrcCoreCfExtnMockMvc.perform(put("/api/wrkfrc-core-cf-extns")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(wrkfrcCoreCfExtn)))
            .andExpect(status().isBadRequest());

        // Validate the WrkfrcCoreCfExtn in the database
        List<WrkfrcCoreCfExtn> wrkfrcCoreCfExtnList = wrkfrcCoreCfExtnRepository.findAll();
        assertThat(wrkfrcCoreCfExtnList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteWrkfrcCoreCfExtn() throws Exception {
        // Initialize the database
        wrkfrcCoreCfExtnService.save(wrkfrcCoreCfExtn);

        int databaseSizeBeforeDelete = wrkfrcCoreCfExtnRepository.findAll().size();

        // Delete the wrkfrcCoreCfExtn
        restWrkfrcCoreCfExtnMockMvc.perform(delete("/api/wrkfrc-core-cf-extns/{id}", wrkfrcCoreCfExtn.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<WrkfrcCoreCfExtn> wrkfrcCoreCfExtnList = wrkfrcCoreCfExtnRepository.findAll();
        assertThat(wrkfrcCoreCfExtnList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
