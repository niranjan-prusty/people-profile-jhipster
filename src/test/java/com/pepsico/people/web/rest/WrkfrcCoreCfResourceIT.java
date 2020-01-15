package com.pepsico.people.web.rest;

import com.pepsico.people.PeopleApp;
import com.pepsico.people.domain.WrkfrcCoreCf;
import com.pepsico.people.repository.WrkfrcCoreCfRepository;
import com.pepsico.people.service.WrkfrcCoreCfService;
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
 * Integration tests for the {@link WrkfrcCoreCfResource} REST controller.
 */
@SpringBootTest(classes = PeopleApp.class)
public class WrkfrcCoreCfResourceIT {

    private static final String DEFAULT_WRKFRC_UNIQ_ID_VAL = "AAAAAAAAAA";
    private static final String UPDATED_WRKFRC_UNIQ_ID_VAL = "BBBBBBBBBB";

    private static final Instant DEFAULT_CRTD_DT = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_CRTD_DT = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final Instant DEFAULT_MDFD_D = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_MDFD_D = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final String DEFAULT_FRST_NM = "AAAAAAAAAA";
    private static final String UPDATED_FRST_NM = "BBBBBBBBBB";

    private static final String DEFAULT_SEV_FRST_NM = "AAAAAAAAAA";
    private static final String UPDATED_SEV_FRST_NM = "BBBBBBBBBB";

    private static final String DEFAULT_MIDL_NM = "AAAAAAAAAA";
    private static final String UPDATED_MIDL_NM = "BBBBBBBBBB";

    private static final String DEFAULT_SEC_LAST_NM = "AAAAAAAAAA";
    private static final String UPDATED_SEC_LAST_NM = "BBBBBBBBBB";

    private static final String DEFAULT_LAST_NM = "AAAAAAAAAA";
    private static final String UPDATED_LAST_NM = "BBBBBBBBBB";

    private static final String DEFAULT_WRKFRC_PRFRD_NM = "AAAAAAAAAA";
    private static final String UPDATED_WRKFRC_PRFRD_NM = "BBBBBBBBBB";

    private static final String DEFAULT_WRKFRC_PRFRD_LM = "AAAAAAAAAA";
    private static final String UPDATED_WRKFRC_PRFRD_LM = "BBBBBBBBBB";

    private static final String DEFAULT_PSTN_TTL_NM = "AAAAAAAAAA";
    private static final String UPDATED_PSTN_TTL_NM = "BBBBBBBBBB";

    private static final String DEFAULT_SCRTR_ID = "AAAAAAAAAA";
    private static final String UPDATED_SCRTR_ID = "BBBBBBBBBB";

    private static final String DEFAULT_SCTR_NM = "AAAAAAAAAA";
    private static final String UPDATED_SCTR_NM = "BBBBBBBBBB";

    private static final String DEFAULT_DIVSN_ID = "AAAAAAAAAA";
    private static final String UPDATED_DIVSN_ID = "BBBBBBBBBB";

    private static final String DEFAULT_DIVSN_NM = "AAAAAAAAAA";
    private static final String UPDATED_DIVSN_NM = "BBBBBBBBBB";

    private static final String DEFAULT_RGN_ID = "AAAAAAAAAA";
    private static final String UPDATED_RGN_ID = "BBBBBBBBBB";

    private static final String DEFAULT_RGN_NM = "AAAAAAAAAA";
    private static final String UPDATED_RGN_NM = "BBBBBBBBBB";

    private static final String DEFAULT_BU_ID = "AAAAAAAAAA";
    private static final String UPDATED_BU_ID = "BBBBBBBBBB";

    private static final String DEFAULT_BU_NM = "AAAAAAAAAA";
    private static final String UPDATED_BU_NM = "BBBBBBBBBB";

    private static final String DEFAULT_MU_ID = "AAAAAAAAAA";
    private static final String UPDATED_MU_ID = "BBBBBBBBBB";

    private static final String DEFAULT_MU_NM = "AAAAAAAAAA";
    private static final String UPDATED_MU_NM = "BBBBBBBBBB";

    private static final String DEFAULT_JOB_FNCTN_CDV = "AAAAAAAAAA";
    private static final String UPDATED_JOB_FNCTN_CDV = "BBBBBBBBBB";

    private static final String DEFAULT_JOB_FNCTN_NM = "AAAAAAAAAA";
    private static final String UPDATED_JOB_FNCTN_NM = "BBBBBBBBBB";

    private static final String DEFAULT_JOB_SBFNCTN_CDV = "AAAAAAAAAA";
    private static final String UPDATED_JOB_SBFNCTN_CDV = "BBBBBBBBBB";

    private static final String DEFAULT_JOB_SBFNCTN_NM = "AAAAAAAAAA";
    private static final String UPDATED_JOB_SBFNCTN_NM = "BBBBBBBBBB";

    private static final String DEFAULT_MNGR_ID = "AAAAAAAAAA";
    private static final String UPDATED_MNGR_ID = "BBBBBBBBBB";

    private static final String DEFAULT_BUS_DESK_TELNM = "AAAAAAAAAA";
    private static final String UPDATED_BUS_DESK_TELNM = "BBBBBBBBBB";

    private static final String DEFAULT_BUS_CELL_TELNM = "AAAAAAAAAA";
    private static final String UPDATED_BUS_CELL_TELNM = "BBBBBBBBBB";

    private static final String DEFAULT_FAX_TELNM = "AAAAAAAAAA";
    private static final String UPDATED_FAX_TELNM = "BBBBBBBBBB";

    private static final String DEFAULT_WRKFRC_EMAIL_ADDR_VAL = "AAAAAAAAAA";
    private static final String UPDATED_WRKFRC_EMAIL_ADDR_VAL = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_NM = "AAAAAAAAAA";
    private static final String UPDATED_LOC_NM = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_ADDR_LN_1_TXT = "AAAAAAAAAA";
    private static final String UPDATED_LOC_ADDR_LN_1_TXT = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_ADDR_LN_2_TXT = "AAAAAAAAAA";
    private static final String UPDATED_LOC_ADDR_LN_2_TXT = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_ADDR_LN_3_TXT = "AAAAAAAAAA";
    private static final String UPDATED_LOC_ADDR_LN_3_TXT = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_ADDR_LN_4_TXT = "AAAAAAAAAA";
    private static final String UPDATED_LOC_ADDR_LN_4_TXT = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_CITY_NM = "AAAAAAAAAA";
    private static final String UPDATED_LOC_CITY_NM = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_PSTL_AREA_VAL = "AAAAAAAAAA";
    private static final String UPDATED_LOC_PSTL_AREA_VAL = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_TERR_CDV = "AAAAAAAAAA";
    private static final String UPDATED_LOC_TERR_CDV = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_TERR_NM = "AAAAAAAAAA";
    private static final String UPDATED_LOC_TERR_NM = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_CTRY_CDV = "AAAAAAAAAA";
    private static final String UPDATED_LOC_CTRY_CDV = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_CTRY_NM = "AAAAAAAAAA";
    private static final String UPDATED_LOC_CTRY_NM = "BBBBBBBBBB";

    private static final String DEFAULT_CNTRCTR_WRKSITE_CTRY_VAL = "AAAAAAAAAA";
    private static final String UPDATED_CNTRCTR_WRKSITE_CTRY_VAL = "BBBBBBBBBB";

    private static final String DEFAULT_LOC_TMZN_NM = "AAAAAAAAAA";
    private static final String UPDATED_LOC_TMZN_NM = "BBBBBBBBBB";

    private static final String DEFAULT_LANG_PRFRD_ISO_NM = "AAAAAAAAAA";
    private static final String UPDATED_LANG_PRFRD_ISO_NM = "BBBBBBBBBB";

    private static final String DEFAULT_WRKFRC_HIRE_DT = "AAAAAAAAAA";
    private static final String UPDATED_WRKFRC_HIRE_DT = "BBBBBBBBBB";

    private static final String DEFAULT_WRKFRC_ORIGNL_HIRE_DT = "AAAAAAAAAA";
    private static final String UPDATED_WRKFRC_ORIGNL_HIRE_DT = "BBBBBBBBBB";

    @Autowired
    private WrkfrcCoreCfRepository wrkfrcCoreCfRepository;

    @Autowired
    private WrkfrcCoreCfService wrkfrcCoreCfService;

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

    private MockMvc restWrkfrcCoreCfMockMvc;

    private WrkfrcCoreCf wrkfrcCoreCf;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final WrkfrcCoreCfResource wrkfrcCoreCfResource = new WrkfrcCoreCfResource(wrkfrcCoreCfService);
        this.restWrkfrcCoreCfMockMvc = MockMvcBuilders.standaloneSetup(wrkfrcCoreCfResource)
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
    public static WrkfrcCoreCf createEntity(EntityManager em) {
        WrkfrcCoreCf wrkfrcCoreCf = new WrkfrcCoreCf()
            .wrkfrcUniqIdVal(DEFAULT_WRKFRC_UNIQ_ID_VAL)
            .crtdDt(DEFAULT_CRTD_DT)
            .mdfdD(DEFAULT_MDFD_D)
            .frstNm(DEFAULT_FRST_NM)
            .sevFrstNm(DEFAULT_SEV_FRST_NM)
            .midlNm(DEFAULT_MIDL_NM)
            .secLastNm(DEFAULT_SEC_LAST_NM)
            .lastNm(DEFAULT_LAST_NM)
            .wrkfrcPrfrdNm(DEFAULT_WRKFRC_PRFRD_NM)
            .wrkfrcPrfrdLm(DEFAULT_WRKFRC_PRFRD_LM)
            .pstnTtlNm(DEFAULT_PSTN_TTL_NM)
            .scrtrId(DEFAULT_SCRTR_ID)
            .sctrNm(DEFAULT_SCTR_NM)
            .divsnId(DEFAULT_DIVSN_ID)
            .divsnNm(DEFAULT_DIVSN_NM)
            .rgnId(DEFAULT_RGN_ID)
            .rgnNm(DEFAULT_RGN_NM)
            .buId(DEFAULT_BU_ID)
            .buNm(DEFAULT_BU_NM)
            .muId(DEFAULT_MU_ID)
            .muNm(DEFAULT_MU_NM)
            .jobFnctnCdv(DEFAULT_JOB_FNCTN_CDV)
            .jobFnctnNm(DEFAULT_JOB_FNCTN_NM)
            .jobSbfnctnCdv(DEFAULT_JOB_SBFNCTN_CDV)
            .jobSbfnctnNm(DEFAULT_JOB_SBFNCTN_NM)
            .mngrId(DEFAULT_MNGR_ID)
            .busDeskTelnm(DEFAULT_BUS_DESK_TELNM)
            .busCellTelnm(DEFAULT_BUS_CELL_TELNM)
            .faxTelnm(DEFAULT_FAX_TELNM)
            .wrkfrcEmailAddrVal(DEFAULT_WRKFRC_EMAIL_ADDR_VAL)
            .locNm(DEFAULT_LOC_NM)
            .locAddrLn1Txt(DEFAULT_LOC_ADDR_LN_1_TXT)
            .locAddrLn2Txt(DEFAULT_LOC_ADDR_LN_2_TXT)
            .locAddrLn3Txt(DEFAULT_LOC_ADDR_LN_3_TXT)
            .locAddrLn4Txt(DEFAULT_LOC_ADDR_LN_4_TXT)
            .locCityNm(DEFAULT_LOC_CITY_NM)
            .locPstlAreaVal(DEFAULT_LOC_PSTL_AREA_VAL)
            .locTerrCdv(DEFAULT_LOC_TERR_CDV)
            .locTerrNm(DEFAULT_LOC_TERR_NM)
            .locCtryCdv(DEFAULT_LOC_CTRY_CDV)
            .locCtryNm(DEFAULT_LOC_CTRY_NM)
            .cntrctrWrksiteCtryVal(DEFAULT_CNTRCTR_WRKSITE_CTRY_VAL)
            .locTmznNm(DEFAULT_LOC_TMZN_NM)
            .langPrfrdIsoNm(DEFAULT_LANG_PRFRD_ISO_NM)
            .wrkfrcHireDt(DEFAULT_WRKFRC_HIRE_DT)
            .wrkfrcOrignlHireDt(DEFAULT_WRKFRC_ORIGNL_HIRE_DT);
        return wrkfrcCoreCf;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static WrkfrcCoreCf createUpdatedEntity(EntityManager em) {
        WrkfrcCoreCf wrkfrcCoreCf = new WrkfrcCoreCf()
            .wrkfrcUniqIdVal(UPDATED_WRKFRC_UNIQ_ID_VAL)
            .crtdDt(UPDATED_CRTD_DT)
            .mdfdD(UPDATED_MDFD_D)
            .frstNm(UPDATED_FRST_NM)
            .sevFrstNm(UPDATED_SEV_FRST_NM)
            .midlNm(UPDATED_MIDL_NM)
            .secLastNm(UPDATED_SEC_LAST_NM)
            .lastNm(UPDATED_LAST_NM)
            .wrkfrcPrfrdNm(UPDATED_WRKFRC_PRFRD_NM)
            .wrkfrcPrfrdLm(UPDATED_WRKFRC_PRFRD_LM)
            .pstnTtlNm(UPDATED_PSTN_TTL_NM)
            .scrtrId(UPDATED_SCRTR_ID)
            .sctrNm(UPDATED_SCTR_NM)
            .divsnId(UPDATED_DIVSN_ID)
            .divsnNm(UPDATED_DIVSN_NM)
            .rgnId(UPDATED_RGN_ID)
            .rgnNm(UPDATED_RGN_NM)
            .buId(UPDATED_BU_ID)
            .buNm(UPDATED_BU_NM)
            .muId(UPDATED_MU_ID)
            .muNm(UPDATED_MU_NM)
            .jobFnctnCdv(UPDATED_JOB_FNCTN_CDV)
            .jobFnctnNm(UPDATED_JOB_FNCTN_NM)
            .jobSbfnctnCdv(UPDATED_JOB_SBFNCTN_CDV)
            .jobSbfnctnNm(UPDATED_JOB_SBFNCTN_NM)
            .mngrId(UPDATED_MNGR_ID)
            .busDeskTelnm(UPDATED_BUS_DESK_TELNM)
            .busCellTelnm(UPDATED_BUS_CELL_TELNM)
            .faxTelnm(UPDATED_FAX_TELNM)
            .wrkfrcEmailAddrVal(UPDATED_WRKFRC_EMAIL_ADDR_VAL)
            .locNm(UPDATED_LOC_NM)
            .locAddrLn1Txt(UPDATED_LOC_ADDR_LN_1_TXT)
            .locAddrLn2Txt(UPDATED_LOC_ADDR_LN_2_TXT)
            .locAddrLn3Txt(UPDATED_LOC_ADDR_LN_3_TXT)
            .locAddrLn4Txt(UPDATED_LOC_ADDR_LN_4_TXT)
            .locCityNm(UPDATED_LOC_CITY_NM)
            .locPstlAreaVal(UPDATED_LOC_PSTL_AREA_VAL)
            .locTerrCdv(UPDATED_LOC_TERR_CDV)
            .locTerrNm(UPDATED_LOC_TERR_NM)
            .locCtryCdv(UPDATED_LOC_CTRY_CDV)
            .locCtryNm(UPDATED_LOC_CTRY_NM)
            .cntrctrWrksiteCtryVal(UPDATED_CNTRCTR_WRKSITE_CTRY_VAL)
            .locTmznNm(UPDATED_LOC_TMZN_NM)
            .langPrfrdIsoNm(UPDATED_LANG_PRFRD_ISO_NM)
            .wrkfrcHireDt(UPDATED_WRKFRC_HIRE_DT)
            .wrkfrcOrignlHireDt(UPDATED_WRKFRC_ORIGNL_HIRE_DT);
        return wrkfrcCoreCf;
    }

    @BeforeEach
    public void initTest() {
        wrkfrcCoreCf = createEntity(em);
    }

    @Test
    @Transactional
    public void createWrkfrcCoreCf() throws Exception {
        int databaseSizeBeforeCreate = wrkfrcCoreCfRepository.findAll().size();

        // Create the WrkfrcCoreCf
        restWrkfrcCoreCfMockMvc.perform(post("/api/wrkfrc-core-cfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(wrkfrcCoreCf)))
            .andExpect(status().isCreated());

        // Validate the WrkfrcCoreCf in the database
        List<WrkfrcCoreCf> wrkfrcCoreCfList = wrkfrcCoreCfRepository.findAll();
        assertThat(wrkfrcCoreCfList).hasSize(databaseSizeBeforeCreate + 1);
        WrkfrcCoreCf testWrkfrcCoreCf = wrkfrcCoreCfList.get(wrkfrcCoreCfList.size() - 1);
        assertThat(testWrkfrcCoreCf.getWrkfrcUniqIdVal()).isEqualTo(DEFAULT_WRKFRC_UNIQ_ID_VAL);
        assertThat(testWrkfrcCoreCf.getCrtdDt()).isEqualTo(DEFAULT_CRTD_DT);
        assertThat(testWrkfrcCoreCf.getMdfdD()).isEqualTo(DEFAULT_MDFD_D);
        assertThat(testWrkfrcCoreCf.getFrstNm()).isEqualTo(DEFAULT_FRST_NM);
        assertThat(testWrkfrcCoreCf.getSevFrstNm()).isEqualTo(DEFAULT_SEV_FRST_NM);
        assertThat(testWrkfrcCoreCf.getMidlNm()).isEqualTo(DEFAULT_MIDL_NM);
        assertThat(testWrkfrcCoreCf.getSecLastNm()).isEqualTo(DEFAULT_SEC_LAST_NM);
        assertThat(testWrkfrcCoreCf.getLastNm()).isEqualTo(DEFAULT_LAST_NM);
        assertThat(testWrkfrcCoreCf.getWrkfrcPrfrdNm()).isEqualTo(DEFAULT_WRKFRC_PRFRD_NM);
        assertThat(testWrkfrcCoreCf.getWrkfrcPrfrdLm()).isEqualTo(DEFAULT_WRKFRC_PRFRD_LM);
        assertThat(testWrkfrcCoreCf.getPstnTtlNm()).isEqualTo(DEFAULT_PSTN_TTL_NM);
        assertThat(testWrkfrcCoreCf.getScrtrId()).isEqualTo(DEFAULT_SCRTR_ID);
        assertThat(testWrkfrcCoreCf.getSctrNm()).isEqualTo(DEFAULT_SCTR_NM);
        assertThat(testWrkfrcCoreCf.getDivsnId()).isEqualTo(DEFAULT_DIVSN_ID);
        assertThat(testWrkfrcCoreCf.getDivsnNm()).isEqualTo(DEFAULT_DIVSN_NM);
        assertThat(testWrkfrcCoreCf.getRgnId()).isEqualTo(DEFAULT_RGN_ID);
        assertThat(testWrkfrcCoreCf.getRgnNm()).isEqualTo(DEFAULT_RGN_NM);
        assertThat(testWrkfrcCoreCf.getBuId()).isEqualTo(DEFAULT_BU_ID);
        assertThat(testWrkfrcCoreCf.getBuNm()).isEqualTo(DEFAULT_BU_NM);
        assertThat(testWrkfrcCoreCf.getMuId()).isEqualTo(DEFAULT_MU_ID);
        assertThat(testWrkfrcCoreCf.getMuNm()).isEqualTo(DEFAULT_MU_NM);
        assertThat(testWrkfrcCoreCf.getJobFnctnCdv()).isEqualTo(DEFAULT_JOB_FNCTN_CDV);
        assertThat(testWrkfrcCoreCf.getJobFnctnNm()).isEqualTo(DEFAULT_JOB_FNCTN_NM);
        assertThat(testWrkfrcCoreCf.getJobSbfnctnCdv()).isEqualTo(DEFAULT_JOB_SBFNCTN_CDV);
        assertThat(testWrkfrcCoreCf.getJobSbfnctnNm()).isEqualTo(DEFAULT_JOB_SBFNCTN_NM);
        assertThat(testWrkfrcCoreCf.getMngrId()).isEqualTo(DEFAULT_MNGR_ID);
        assertThat(testWrkfrcCoreCf.getBusDeskTelnm()).isEqualTo(DEFAULT_BUS_DESK_TELNM);
        assertThat(testWrkfrcCoreCf.getBusCellTelnm()).isEqualTo(DEFAULT_BUS_CELL_TELNM);
        assertThat(testWrkfrcCoreCf.getFaxTelnm()).isEqualTo(DEFAULT_FAX_TELNM);
        assertThat(testWrkfrcCoreCf.getWrkfrcEmailAddrVal()).isEqualTo(DEFAULT_WRKFRC_EMAIL_ADDR_VAL);
        assertThat(testWrkfrcCoreCf.getLocNm()).isEqualTo(DEFAULT_LOC_NM);
        assertThat(testWrkfrcCoreCf.getLocAddrLn1Txt()).isEqualTo(DEFAULT_LOC_ADDR_LN_1_TXT);
        assertThat(testWrkfrcCoreCf.getLocAddrLn2Txt()).isEqualTo(DEFAULT_LOC_ADDR_LN_2_TXT);
        assertThat(testWrkfrcCoreCf.getLocAddrLn3Txt()).isEqualTo(DEFAULT_LOC_ADDR_LN_3_TXT);
        assertThat(testWrkfrcCoreCf.getLocAddrLn4Txt()).isEqualTo(DEFAULT_LOC_ADDR_LN_4_TXT);
        assertThat(testWrkfrcCoreCf.getLocCityNm()).isEqualTo(DEFAULT_LOC_CITY_NM);
        assertThat(testWrkfrcCoreCf.getLocPstlAreaVal()).isEqualTo(DEFAULT_LOC_PSTL_AREA_VAL);
        assertThat(testWrkfrcCoreCf.getLocTerrCdv()).isEqualTo(DEFAULT_LOC_TERR_CDV);
        assertThat(testWrkfrcCoreCf.getLocTerrNm()).isEqualTo(DEFAULT_LOC_TERR_NM);
        assertThat(testWrkfrcCoreCf.getLocCtryCdv()).isEqualTo(DEFAULT_LOC_CTRY_CDV);
        assertThat(testWrkfrcCoreCf.getLocCtryNm()).isEqualTo(DEFAULT_LOC_CTRY_NM);
        assertThat(testWrkfrcCoreCf.getCntrctrWrksiteCtryVal()).isEqualTo(DEFAULT_CNTRCTR_WRKSITE_CTRY_VAL);
        assertThat(testWrkfrcCoreCf.getLocTmznNm()).isEqualTo(DEFAULT_LOC_TMZN_NM);
        assertThat(testWrkfrcCoreCf.getLangPrfrdIsoNm()).isEqualTo(DEFAULT_LANG_PRFRD_ISO_NM);
        assertThat(testWrkfrcCoreCf.getWrkfrcHireDt()).isEqualTo(DEFAULT_WRKFRC_HIRE_DT);
        assertThat(testWrkfrcCoreCf.getWrkfrcOrignlHireDt()).isEqualTo(DEFAULT_WRKFRC_ORIGNL_HIRE_DT);
    }

    @Test
    @Transactional
    public void createWrkfrcCoreCfWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = wrkfrcCoreCfRepository.findAll().size();

        // Create the WrkfrcCoreCf with an existing ID
        wrkfrcCoreCf.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restWrkfrcCoreCfMockMvc.perform(post("/api/wrkfrc-core-cfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(wrkfrcCoreCf)))
            .andExpect(status().isBadRequest());

        // Validate the WrkfrcCoreCf in the database
        List<WrkfrcCoreCf> wrkfrcCoreCfList = wrkfrcCoreCfRepository.findAll();
        assertThat(wrkfrcCoreCfList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllWrkfrcCoreCfs() throws Exception {
        // Initialize the database
        wrkfrcCoreCfRepository.saveAndFlush(wrkfrcCoreCf);

        // Get all the wrkfrcCoreCfList
        restWrkfrcCoreCfMockMvc.perform(get("/api/wrkfrc-core-cfs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(wrkfrcCoreCf.getId().intValue())))
            .andExpect(jsonPath("$.[*].wrkfrcUniqIdVal").value(hasItem(DEFAULT_WRKFRC_UNIQ_ID_VAL)))
            .andExpect(jsonPath("$.[*].crtdDt").value(hasItem(DEFAULT_CRTD_DT.toString())))
            .andExpect(jsonPath("$.[*].mdfdD").value(hasItem(DEFAULT_MDFD_D.toString())))
            .andExpect(jsonPath("$.[*].frstNm").value(hasItem(DEFAULT_FRST_NM)))
            .andExpect(jsonPath("$.[*].sevFrstNm").value(hasItem(DEFAULT_SEV_FRST_NM)))
            .andExpect(jsonPath("$.[*].midlNm").value(hasItem(DEFAULT_MIDL_NM)))
            .andExpect(jsonPath("$.[*].secLastNm").value(hasItem(DEFAULT_SEC_LAST_NM)))
            .andExpect(jsonPath("$.[*].lastNm").value(hasItem(DEFAULT_LAST_NM)))
            .andExpect(jsonPath("$.[*].wrkfrcPrfrdNm").value(hasItem(DEFAULT_WRKFRC_PRFRD_NM)))
            .andExpect(jsonPath("$.[*].wrkfrcPrfrdLm").value(hasItem(DEFAULT_WRKFRC_PRFRD_LM)))
            .andExpect(jsonPath("$.[*].pstnTtlNm").value(hasItem(DEFAULT_PSTN_TTL_NM)))
            .andExpect(jsonPath("$.[*].scrtrId").value(hasItem(DEFAULT_SCRTR_ID)))
            .andExpect(jsonPath("$.[*].sctrNm").value(hasItem(DEFAULT_SCTR_NM)))
            .andExpect(jsonPath("$.[*].divsnId").value(hasItem(DEFAULT_DIVSN_ID)))
            .andExpect(jsonPath("$.[*].divsnNm").value(hasItem(DEFAULT_DIVSN_NM)))
            .andExpect(jsonPath("$.[*].rgnId").value(hasItem(DEFAULT_RGN_ID)))
            .andExpect(jsonPath("$.[*].rgnNm").value(hasItem(DEFAULT_RGN_NM)))
            .andExpect(jsonPath("$.[*].buId").value(hasItem(DEFAULT_BU_ID)))
            .andExpect(jsonPath("$.[*].buNm").value(hasItem(DEFAULT_BU_NM)))
            .andExpect(jsonPath("$.[*].muId").value(hasItem(DEFAULT_MU_ID)))
            .andExpect(jsonPath("$.[*].muNm").value(hasItem(DEFAULT_MU_NM)))
            .andExpect(jsonPath("$.[*].jobFnctnCdv").value(hasItem(DEFAULT_JOB_FNCTN_CDV)))
            .andExpect(jsonPath("$.[*].jobFnctnNm").value(hasItem(DEFAULT_JOB_FNCTN_NM)))
            .andExpect(jsonPath("$.[*].jobSbfnctnCdv").value(hasItem(DEFAULT_JOB_SBFNCTN_CDV)))
            .andExpect(jsonPath("$.[*].jobSbfnctnNm").value(hasItem(DEFAULT_JOB_SBFNCTN_NM)))
            .andExpect(jsonPath("$.[*].mngrId").value(hasItem(DEFAULT_MNGR_ID)))
            .andExpect(jsonPath("$.[*].busDeskTelnm").value(hasItem(DEFAULT_BUS_DESK_TELNM)))
            .andExpect(jsonPath("$.[*].busCellTelnm").value(hasItem(DEFAULT_BUS_CELL_TELNM)))
            .andExpect(jsonPath("$.[*].faxTelnm").value(hasItem(DEFAULT_FAX_TELNM)))
            .andExpect(jsonPath("$.[*].wrkfrcEmailAddrVal").value(hasItem(DEFAULT_WRKFRC_EMAIL_ADDR_VAL)))
            .andExpect(jsonPath("$.[*].locNm").value(hasItem(DEFAULT_LOC_NM)))
            .andExpect(jsonPath("$.[*].locAddrLn1Txt").value(hasItem(DEFAULT_LOC_ADDR_LN_1_TXT)))
            .andExpect(jsonPath("$.[*].locAddrLn2Txt").value(hasItem(DEFAULT_LOC_ADDR_LN_2_TXT)))
            .andExpect(jsonPath("$.[*].locAddrLn3Txt").value(hasItem(DEFAULT_LOC_ADDR_LN_3_TXT)))
            .andExpect(jsonPath("$.[*].locAddrLn4Txt").value(hasItem(DEFAULT_LOC_ADDR_LN_4_TXT)))
            .andExpect(jsonPath("$.[*].locCityNm").value(hasItem(DEFAULT_LOC_CITY_NM)))
            .andExpect(jsonPath("$.[*].locPstlAreaVal").value(hasItem(DEFAULT_LOC_PSTL_AREA_VAL)))
            .andExpect(jsonPath("$.[*].locTerrCdv").value(hasItem(DEFAULT_LOC_TERR_CDV)))
            .andExpect(jsonPath("$.[*].locTerrNm").value(hasItem(DEFAULT_LOC_TERR_NM)))
            .andExpect(jsonPath("$.[*].locCtryCdv").value(hasItem(DEFAULT_LOC_CTRY_CDV)))
            .andExpect(jsonPath("$.[*].locCtryNm").value(hasItem(DEFAULT_LOC_CTRY_NM)))
            .andExpect(jsonPath("$.[*].cntrctrWrksiteCtryVal").value(hasItem(DEFAULT_CNTRCTR_WRKSITE_CTRY_VAL)))
            .andExpect(jsonPath("$.[*].locTmznNm").value(hasItem(DEFAULT_LOC_TMZN_NM)))
            .andExpect(jsonPath("$.[*].langPrfrdIsoNm").value(hasItem(DEFAULT_LANG_PRFRD_ISO_NM)))
            .andExpect(jsonPath("$.[*].wrkfrcHireDt").value(hasItem(DEFAULT_WRKFRC_HIRE_DT)))
            .andExpect(jsonPath("$.[*].wrkfrcOrignlHireDt").value(hasItem(DEFAULT_WRKFRC_ORIGNL_HIRE_DT)));
    }
    
    @Test
    @Transactional
    public void getWrkfrcCoreCf() throws Exception {
        // Initialize the database
        wrkfrcCoreCfRepository.saveAndFlush(wrkfrcCoreCf);

        // Get the wrkfrcCoreCf
        restWrkfrcCoreCfMockMvc.perform(get("/api/wrkfrc-core-cfs/{id}", wrkfrcCoreCf.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(wrkfrcCoreCf.getId().intValue()))
            .andExpect(jsonPath("$.wrkfrcUniqIdVal").value(DEFAULT_WRKFRC_UNIQ_ID_VAL))
            .andExpect(jsonPath("$.crtdDt").value(DEFAULT_CRTD_DT.toString()))
            .andExpect(jsonPath("$.mdfdD").value(DEFAULT_MDFD_D.toString()))
            .andExpect(jsonPath("$.frstNm").value(DEFAULT_FRST_NM))
            .andExpect(jsonPath("$.sevFrstNm").value(DEFAULT_SEV_FRST_NM))
            .andExpect(jsonPath("$.midlNm").value(DEFAULT_MIDL_NM))
            .andExpect(jsonPath("$.secLastNm").value(DEFAULT_SEC_LAST_NM))
            .andExpect(jsonPath("$.lastNm").value(DEFAULT_LAST_NM))
            .andExpect(jsonPath("$.wrkfrcPrfrdNm").value(DEFAULT_WRKFRC_PRFRD_NM))
            .andExpect(jsonPath("$.wrkfrcPrfrdLm").value(DEFAULT_WRKFRC_PRFRD_LM))
            .andExpect(jsonPath("$.pstnTtlNm").value(DEFAULT_PSTN_TTL_NM))
            .andExpect(jsonPath("$.scrtrId").value(DEFAULT_SCRTR_ID))
            .andExpect(jsonPath("$.sctrNm").value(DEFAULT_SCTR_NM))
            .andExpect(jsonPath("$.divsnId").value(DEFAULT_DIVSN_ID))
            .andExpect(jsonPath("$.divsnNm").value(DEFAULT_DIVSN_NM))
            .andExpect(jsonPath("$.rgnId").value(DEFAULT_RGN_ID))
            .andExpect(jsonPath("$.rgnNm").value(DEFAULT_RGN_NM))
            .andExpect(jsonPath("$.buId").value(DEFAULT_BU_ID))
            .andExpect(jsonPath("$.buNm").value(DEFAULT_BU_NM))
            .andExpect(jsonPath("$.muId").value(DEFAULT_MU_ID))
            .andExpect(jsonPath("$.muNm").value(DEFAULT_MU_NM))
            .andExpect(jsonPath("$.jobFnctnCdv").value(DEFAULT_JOB_FNCTN_CDV))
            .andExpect(jsonPath("$.jobFnctnNm").value(DEFAULT_JOB_FNCTN_NM))
            .andExpect(jsonPath("$.jobSbfnctnCdv").value(DEFAULT_JOB_SBFNCTN_CDV))
            .andExpect(jsonPath("$.jobSbfnctnNm").value(DEFAULT_JOB_SBFNCTN_NM))
            .andExpect(jsonPath("$.mngrId").value(DEFAULT_MNGR_ID))
            .andExpect(jsonPath("$.busDeskTelnm").value(DEFAULT_BUS_DESK_TELNM))
            .andExpect(jsonPath("$.busCellTelnm").value(DEFAULT_BUS_CELL_TELNM))
            .andExpect(jsonPath("$.faxTelnm").value(DEFAULT_FAX_TELNM))
            .andExpect(jsonPath("$.wrkfrcEmailAddrVal").value(DEFAULT_WRKFRC_EMAIL_ADDR_VAL))
            .andExpect(jsonPath("$.locNm").value(DEFAULT_LOC_NM))
            .andExpect(jsonPath("$.locAddrLn1Txt").value(DEFAULT_LOC_ADDR_LN_1_TXT))
            .andExpect(jsonPath("$.locAddrLn2Txt").value(DEFAULT_LOC_ADDR_LN_2_TXT))
            .andExpect(jsonPath("$.locAddrLn3Txt").value(DEFAULT_LOC_ADDR_LN_3_TXT))
            .andExpect(jsonPath("$.locAddrLn4Txt").value(DEFAULT_LOC_ADDR_LN_4_TXT))
            .andExpect(jsonPath("$.locCityNm").value(DEFAULT_LOC_CITY_NM))
            .andExpect(jsonPath("$.locPstlAreaVal").value(DEFAULT_LOC_PSTL_AREA_VAL))
            .andExpect(jsonPath("$.locTerrCdv").value(DEFAULT_LOC_TERR_CDV))
            .andExpect(jsonPath("$.locTerrNm").value(DEFAULT_LOC_TERR_NM))
            .andExpect(jsonPath("$.locCtryCdv").value(DEFAULT_LOC_CTRY_CDV))
            .andExpect(jsonPath("$.locCtryNm").value(DEFAULT_LOC_CTRY_NM))
            .andExpect(jsonPath("$.cntrctrWrksiteCtryVal").value(DEFAULT_CNTRCTR_WRKSITE_CTRY_VAL))
            .andExpect(jsonPath("$.locTmznNm").value(DEFAULT_LOC_TMZN_NM))
            .andExpect(jsonPath("$.langPrfrdIsoNm").value(DEFAULT_LANG_PRFRD_ISO_NM))
            .andExpect(jsonPath("$.wrkfrcHireDt").value(DEFAULT_WRKFRC_HIRE_DT))
            .andExpect(jsonPath("$.wrkfrcOrignlHireDt").value(DEFAULT_WRKFRC_ORIGNL_HIRE_DT));
    }

    @Test
    @Transactional
    public void getNonExistingWrkfrcCoreCf() throws Exception {
        // Get the wrkfrcCoreCf
        restWrkfrcCoreCfMockMvc.perform(get("/api/wrkfrc-core-cfs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateWrkfrcCoreCf() throws Exception {
        // Initialize the database
        wrkfrcCoreCfService.save(wrkfrcCoreCf);

        int databaseSizeBeforeUpdate = wrkfrcCoreCfRepository.findAll().size();

        // Update the wrkfrcCoreCf
        WrkfrcCoreCf updatedWrkfrcCoreCf = wrkfrcCoreCfRepository.findById(wrkfrcCoreCf.getId()).get();
        // Disconnect from session so that the updates on updatedWrkfrcCoreCf are not directly saved in db
        em.detach(updatedWrkfrcCoreCf);
        updatedWrkfrcCoreCf
            .wrkfrcUniqIdVal(UPDATED_WRKFRC_UNIQ_ID_VAL)
            .crtdDt(UPDATED_CRTD_DT)
            .mdfdD(UPDATED_MDFD_D)
            .frstNm(UPDATED_FRST_NM)
            .sevFrstNm(UPDATED_SEV_FRST_NM)
            .midlNm(UPDATED_MIDL_NM)
            .secLastNm(UPDATED_SEC_LAST_NM)
            .lastNm(UPDATED_LAST_NM)
            .wrkfrcPrfrdNm(UPDATED_WRKFRC_PRFRD_NM)
            .wrkfrcPrfrdLm(UPDATED_WRKFRC_PRFRD_LM)
            .pstnTtlNm(UPDATED_PSTN_TTL_NM)
            .scrtrId(UPDATED_SCRTR_ID)
            .sctrNm(UPDATED_SCTR_NM)
            .divsnId(UPDATED_DIVSN_ID)
            .divsnNm(UPDATED_DIVSN_NM)
            .rgnId(UPDATED_RGN_ID)
            .rgnNm(UPDATED_RGN_NM)
            .buId(UPDATED_BU_ID)
            .buNm(UPDATED_BU_NM)
            .muId(UPDATED_MU_ID)
            .muNm(UPDATED_MU_NM)
            .jobFnctnCdv(UPDATED_JOB_FNCTN_CDV)
            .jobFnctnNm(UPDATED_JOB_FNCTN_NM)
            .jobSbfnctnCdv(UPDATED_JOB_SBFNCTN_CDV)
            .jobSbfnctnNm(UPDATED_JOB_SBFNCTN_NM)
            .mngrId(UPDATED_MNGR_ID)
            .busDeskTelnm(UPDATED_BUS_DESK_TELNM)
            .busCellTelnm(UPDATED_BUS_CELL_TELNM)
            .faxTelnm(UPDATED_FAX_TELNM)
            .wrkfrcEmailAddrVal(UPDATED_WRKFRC_EMAIL_ADDR_VAL)
            .locNm(UPDATED_LOC_NM)
            .locAddrLn1Txt(UPDATED_LOC_ADDR_LN_1_TXT)
            .locAddrLn2Txt(UPDATED_LOC_ADDR_LN_2_TXT)
            .locAddrLn3Txt(UPDATED_LOC_ADDR_LN_3_TXT)
            .locAddrLn4Txt(UPDATED_LOC_ADDR_LN_4_TXT)
            .locCityNm(UPDATED_LOC_CITY_NM)
            .locPstlAreaVal(UPDATED_LOC_PSTL_AREA_VAL)
            .locTerrCdv(UPDATED_LOC_TERR_CDV)
            .locTerrNm(UPDATED_LOC_TERR_NM)
            .locCtryCdv(UPDATED_LOC_CTRY_CDV)
            .locCtryNm(UPDATED_LOC_CTRY_NM)
            .cntrctrWrksiteCtryVal(UPDATED_CNTRCTR_WRKSITE_CTRY_VAL)
            .locTmznNm(UPDATED_LOC_TMZN_NM)
            .langPrfrdIsoNm(UPDATED_LANG_PRFRD_ISO_NM)
            .wrkfrcHireDt(UPDATED_WRKFRC_HIRE_DT)
            .wrkfrcOrignlHireDt(UPDATED_WRKFRC_ORIGNL_HIRE_DT);

        restWrkfrcCoreCfMockMvc.perform(put("/api/wrkfrc-core-cfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedWrkfrcCoreCf)))
            .andExpect(status().isOk());

        // Validate the WrkfrcCoreCf in the database
        List<WrkfrcCoreCf> wrkfrcCoreCfList = wrkfrcCoreCfRepository.findAll();
        assertThat(wrkfrcCoreCfList).hasSize(databaseSizeBeforeUpdate);
        WrkfrcCoreCf testWrkfrcCoreCf = wrkfrcCoreCfList.get(wrkfrcCoreCfList.size() - 1);
        assertThat(testWrkfrcCoreCf.getWrkfrcUniqIdVal()).isEqualTo(UPDATED_WRKFRC_UNIQ_ID_VAL);
        assertThat(testWrkfrcCoreCf.getCrtdDt()).isEqualTo(UPDATED_CRTD_DT);
        assertThat(testWrkfrcCoreCf.getMdfdD()).isEqualTo(UPDATED_MDFD_D);
        assertThat(testWrkfrcCoreCf.getFrstNm()).isEqualTo(UPDATED_FRST_NM);
        assertThat(testWrkfrcCoreCf.getSevFrstNm()).isEqualTo(UPDATED_SEV_FRST_NM);
        assertThat(testWrkfrcCoreCf.getMidlNm()).isEqualTo(UPDATED_MIDL_NM);
        assertThat(testWrkfrcCoreCf.getSecLastNm()).isEqualTo(UPDATED_SEC_LAST_NM);
        assertThat(testWrkfrcCoreCf.getLastNm()).isEqualTo(UPDATED_LAST_NM);
        assertThat(testWrkfrcCoreCf.getWrkfrcPrfrdNm()).isEqualTo(UPDATED_WRKFRC_PRFRD_NM);
        assertThat(testWrkfrcCoreCf.getWrkfrcPrfrdLm()).isEqualTo(UPDATED_WRKFRC_PRFRD_LM);
        assertThat(testWrkfrcCoreCf.getPstnTtlNm()).isEqualTo(UPDATED_PSTN_TTL_NM);
        assertThat(testWrkfrcCoreCf.getScrtrId()).isEqualTo(UPDATED_SCRTR_ID);
        assertThat(testWrkfrcCoreCf.getSctrNm()).isEqualTo(UPDATED_SCTR_NM);
        assertThat(testWrkfrcCoreCf.getDivsnId()).isEqualTo(UPDATED_DIVSN_ID);
        assertThat(testWrkfrcCoreCf.getDivsnNm()).isEqualTo(UPDATED_DIVSN_NM);
        assertThat(testWrkfrcCoreCf.getRgnId()).isEqualTo(UPDATED_RGN_ID);
        assertThat(testWrkfrcCoreCf.getRgnNm()).isEqualTo(UPDATED_RGN_NM);
        assertThat(testWrkfrcCoreCf.getBuId()).isEqualTo(UPDATED_BU_ID);
        assertThat(testWrkfrcCoreCf.getBuNm()).isEqualTo(UPDATED_BU_NM);
        assertThat(testWrkfrcCoreCf.getMuId()).isEqualTo(UPDATED_MU_ID);
        assertThat(testWrkfrcCoreCf.getMuNm()).isEqualTo(UPDATED_MU_NM);
        assertThat(testWrkfrcCoreCf.getJobFnctnCdv()).isEqualTo(UPDATED_JOB_FNCTN_CDV);
        assertThat(testWrkfrcCoreCf.getJobFnctnNm()).isEqualTo(UPDATED_JOB_FNCTN_NM);
        assertThat(testWrkfrcCoreCf.getJobSbfnctnCdv()).isEqualTo(UPDATED_JOB_SBFNCTN_CDV);
        assertThat(testWrkfrcCoreCf.getJobSbfnctnNm()).isEqualTo(UPDATED_JOB_SBFNCTN_NM);
        assertThat(testWrkfrcCoreCf.getMngrId()).isEqualTo(UPDATED_MNGR_ID);
        assertThat(testWrkfrcCoreCf.getBusDeskTelnm()).isEqualTo(UPDATED_BUS_DESK_TELNM);
        assertThat(testWrkfrcCoreCf.getBusCellTelnm()).isEqualTo(UPDATED_BUS_CELL_TELNM);
        assertThat(testWrkfrcCoreCf.getFaxTelnm()).isEqualTo(UPDATED_FAX_TELNM);
        assertThat(testWrkfrcCoreCf.getWrkfrcEmailAddrVal()).isEqualTo(UPDATED_WRKFRC_EMAIL_ADDR_VAL);
        assertThat(testWrkfrcCoreCf.getLocNm()).isEqualTo(UPDATED_LOC_NM);
        assertThat(testWrkfrcCoreCf.getLocAddrLn1Txt()).isEqualTo(UPDATED_LOC_ADDR_LN_1_TXT);
        assertThat(testWrkfrcCoreCf.getLocAddrLn2Txt()).isEqualTo(UPDATED_LOC_ADDR_LN_2_TXT);
        assertThat(testWrkfrcCoreCf.getLocAddrLn3Txt()).isEqualTo(UPDATED_LOC_ADDR_LN_3_TXT);
        assertThat(testWrkfrcCoreCf.getLocAddrLn4Txt()).isEqualTo(UPDATED_LOC_ADDR_LN_4_TXT);
        assertThat(testWrkfrcCoreCf.getLocCityNm()).isEqualTo(UPDATED_LOC_CITY_NM);
        assertThat(testWrkfrcCoreCf.getLocPstlAreaVal()).isEqualTo(UPDATED_LOC_PSTL_AREA_VAL);
        assertThat(testWrkfrcCoreCf.getLocTerrCdv()).isEqualTo(UPDATED_LOC_TERR_CDV);
        assertThat(testWrkfrcCoreCf.getLocTerrNm()).isEqualTo(UPDATED_LOC_TERR_NM);
        assertThat(testWrkfrcCoreCf.getLocCtryCdv()).isEqualTo(UPDATED_LOC_CTRY_CDV);
        assertThat(testWrkfrcCoreCf.getLocCtryNm()).isEqualTo(UPDATED_LOC_CTRY_NM);
        assertThat(testWrkfrcCoreCf.getCntrctrWrksiteCtryVal()).isEqualTo(UPDATED_CNTRCTR_WRKSITE_CTRY_VAL);
        assertThat(testWrkfrcCoreCf.getLocTmznNm()).isEqualTo(UPDATED_LOC_TMZN_NM);
        assertThat(testWrkfrcCoreCf.getLangPrfrdIsoNm()).isEqualTo(UPDATED_LANG_PRFRD_ISO_NM);
        assertThat(testWrkfrcCoreCf.getWrkfrcHireDt()).isEqualTo(UPDATED_WRKFRC_HIRE_DT);
        assertThat(testWrkfrcCoreCf.getWrkfrcOrignlHireDt()).isEqualTo(UPDATED_WRKFRC_ORIGNL_HIRE_DT);
    }

    @Test
    @Transactional
    public void updateNonExistingWrkfrcCoreCf() throws Exception {
        int databaseSizeBeforeUpdate = wrkfrcCoreCfRepository.findAll().size();

        // Create the WrkfrcCoreCf

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restWrkfrcCoreCfMockMvc.perform(put("/api/wrkfrc-core-cfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(wrkfrcCoreCf)))
            .andExpect(status().isBadRequest());

        // Validate the WrkfrcCoreCf in the database
        List<WrkfrcCoreCf> wrkfrcCoreCfList = wrkfrcCoreCfRepository.findAll();
        assertThat(wrkfrcCoreCfList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteWrkfrcCoreCf() throws Exception {
        // Initialize the database
        wrkfrcCoreCfService.save(wrkfrcCoreCf);

        int databaseSizeBeforeDelete = wrkfrcCoreCfRepository.findAll().size();

        // Delete the wrkfrcCoreCf
        restWrkfrcCoreCfMockMvc.perform(delete("/api/wrkfrc-core-cfs/{id}", wrkfrcCoreCf.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<WrkfrcCoreCf> wrkfrcCoreCfList = wrkfrcCoreCfRepository.findAll();
        assertThat(wrkfrcCoreCfList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
