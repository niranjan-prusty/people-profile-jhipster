package com.pepsico.people.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * The Employee entity.
 */
@ApiModel(description = "The Employee entity.")
@Entity
@Table(name = "wrkfrc_core_cf")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class WrkfrcCoreCf implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "wrkfrc_uniq_id_val")
    private String wrkfrcUniqIdVal;

    @Column(name = "crtd_dt")
    private Instant crtdDt;

    @Column(name = "mdfd_d")
    private Instant mdfdD;

    @Column(name = "frst_nm")
    private String frstNm;

    @Column(name = "sev_frst_nm")
    private String sevFrstNm;

    @Column(name = "midl_nm")
    private String midlNm;

    @Column(name = "sec_last_nm")
    private String secLastNm;

    @Column(name = "last_nm")
    private String lastNm;

    @Column(name = "wrkfrc_prfrd_nm")
    private String wrkfrcPrfrdNm;

    @Column(name = "wrkfrc_prfrd_lm")
    private String wrkfrcPrfrdLm;

    @Column(name = "pstn_ttl_nm")
    private String pstnTtlNm;

    @Column(name = "scrtr_id")
    private String scrtrId;

    @Column(name = "sctr_nm")
    private String sctrNm;

    @Column(name = "divsn_id")
    private String divsnId;

    @Column(name = "divsn_nm")
    private String divsnNm;

    @Column(name = "rgn_id")
    private String rgnId;

    @Column(name = "rgn_nm")
    private String rgnNm;

    @Column(name = "bu_id")
    private String buId;

    @Column(name = "bu_nm")
    private String buNm;

    @Column(name = "mu_id")
    private String muId;

    @Column(name = "mu_nm")
    private String muNm;

    @Column(name = "job_fnctn_cdv")
    private String jobFnctnCdv;

    @Column(name = "job_fnctn_nm")
    private String jobFnctnNm;

    @Column(name = "job_sbfnctn_cdv")
    private String jobSbfnctnCdv;

    @Column(name = "job_sbfnctn_nm")
    private String jobSbfnctnNm;

    @Column(name = "mngr_id")
    private String mngrId;

    @Column(name = "bus_desk_telnm")
    private String busDeskTelnm;

    @Column(name = "bus_cell_telnm")
    private String busCellTelnm;

    @Column(name = "fax_telnm")
    private String faxTelnm;

    @Column(name = "wrkfrc_email_addr_val")
    private String wrkfrcEmailAddrVal;

    @Column(name = "loc_nm")
    private String locNm;

    @Column(name = "loc_addr_ln_1_txt")
    private String locAddrLn1Txt;

    @Column(name = "loc_addr_ln_2_txt")
    private String locAddrLn2Txt;

    @Column(name = "loc_addr_ln_3_txt")
    private String locAddrLn3Txt;

    @Column(name = "loc_addr_ln_4_txt")
    private String locAddrLn4Txt;

    @Column(name = "loc_city_nm")
    private String locCityNm;

    @Column(name = "loc_pstl_area_val")
    private String locPstlAreaVal;

    @Column(name = "loc_terr_cdv")
    private String locTerrCdv;

    @Column(name = "loc_terr_nm")
    private String locTerrNm;

    @Column(name = "loc_ctry_cdv")
    private String locCtryCdv;

    @Column(name = "loc_ctry_nm")
    private String locCtryNm;

    @Column(name = "cntrctr_wrksite_ctry_val")
    private String cntrctrWrksiteCtryVal;

    @Column(name = "loc_tmzn_nm")
    private String locTmznNm;

    @Column(name = "lang_prfrd_iso_nm")
    private String langPrfrdIsoNm;

    @Column(name = "wrkfrc_hire_dt")
    private String wrkfrcHireDt;

    @Column(name = "wrkfrc_orignl_hire_dt")
    private String wrkfrcOrignlHireDt;

    @OneToOne
    @JoinColumn(unique = true)
    private WrkfrcCoreCfExtn wrkfrcCoreCfExtn;

    @ManyToOne
    @JsonIgnoreProperties("wrkfrcCoreCfs")
    private WrkfrcCoreCf wrkfrcCoreCf;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWrkfrcUniqIdVal() {
        return wrkfrcUniqIdVal;
    }

    public WrkfrcCoreCf wrkfrcUniqIdVal(String wrkfrcUniqIdVal) {
        this.wrkfrcUniqIdVal = wrkfrcUniqIdVal;
        return this;
    }

    public void setWrkfrcUniqIdVal(String wrkfrcUniqIdVal) {
        this.wrkfrcUniqIdVal = wrkfrcUniqIdVal;
    }

    public Instant getCrtdDt() {
        return crtdDt;
    }

    public WrkfrcCoreCf crtdDt(Instant crtdDt) {
        this.crtdDt = crtdDt;
        return this;
    }

    public void setCrtdDt(Instant crtdDt) {
        this.crtdDt = crtdDt;
    }

    public Instant getMdfdD() {
        return mdfdD;
    }

    public WrkfrcCoreCf mdfdD(Instant mdfdD) {
        this.mdfdD = mdfdD;
        return this;
    }

    public void setMdfdD(Instant mdfdD) {
        this.mdfdD = mdfdD;
    }

    public String getFrstNm() {
        return frstNm;
    }

    public WrkfrcCoreCf frstNm(String frstNm) {
        this.frstNm = frstNm;
        return this;
    }

    public void setFrstNm(String frstNm) {
        this.frstNm = frstNm;
    }

    public String getSevFrstNm() {
        return sevFrstNm;
    }

    public WrkfrcCoreCf sevFrstNm(String sevFrstNm) {
        this.sevFrstNm = sevFrstNm;
        return this;
    }

    public void setSevFrstNm(String sevFrstNm) {
        this.sevFrstNm = sevFrstNm;
    }

    public String getMidlNm() {
        return midlNm;
    }

    public WrkfrcCoreCf midlNm(String midlNm) {
        this.midlNm = midlNm;
        return this;
    }

    public void setMidlNm(String midlNm) {
        this.midlNm = midlNm;
    }

    public String getSecLastNm() {
        return secLastNm;
    }

    public WrkfrcCoreCf secLastNm(String secLastNm) {
        this.secLastNm = secLastNm;
        return this;
    }

    public void setSecLastNm(String secLastNm) {
        this.secLastNm = secLastNm;
    }

    public String getLastNm() {
        return lastNm;
    }

    public WrkfrcCoreCf lastNm(String lastNm) {
        this.lastNm = lastNm;
        return this;
    }

    public void setLastNm(String lastNm) {
        this.lastNm = lastNm;
    }

    public String getWrkfrcPrfrdNm() {
        return wrkfrcPrfrdNm;
    }

    public WrkfrcCoreCf wrkfrcPrfrdNm(String wrkfrcPrfrdNm) {
        this.wrkfrcPrfrdNm = wrkfrcPrfrdNm;
        return this;
    }

    public void setWrkfrcPrfrdNm(String wrkfrcPrfrdNm) {
        this.wrkfrcPrfrdNm = wrkfrcPrfrdNm;
    }

    public String getWrkfrcPrfrdLm() {
        return wrkfrcPrfrdLm;
    }

    public WrkfrcCoreCf wrkfrcPrfrdLm(String wrkfrcPrfrdLm) {
        this.wrkfrcPrfrdLm = wrkfrcPrfrdLm;
        return this;
    }

    public void setWrkfrcPrfrdLm(String wrkfrcPrfrdLm) {
        this.wrkfrcPrfrdLm = wrkfrcPrfrdLm;
    }

    public String getPstnTtlNm() {
        return pstnTtlNm;
    }

    public WrkfrcCoreCf pstnTtlNm(String pstnTtlNm) {
        this.pstnTtlNm = pstnTtlNm;
        return this;
    }

    public void setPstnTtlNm(String pstnTtlNm) {
        this.pstnTtlNm = pstnTtlNm;
    }

    public String getScrtrId() {
        return scrtrId;
    }

    public WrkfrcCoreCf scrtrId(String scrtrId) {
        this.scrtrId = scrtrId;
        return this;
    }

    public void setScrtrId(String scrtrId) {
        this.scrtrId = scrtrId;
    }

    public String getSctrNm() {
        return sctrNm;
    }

    public WrkfrcCoreCf sctrNm(String sctrNm) {
        this.sctrNm = sctrNm;
        return this;
    }

    public void setSctrNm(String sctrNm) {
        this.sctrNm = sctrNm;
    }

    public String getDivsnId() {
        return divsnId;
    }

    public WrkfrcCoreCf divsnId(String divsnId) {
        this.divsnId = divsnId;
        return this;
    }

    public void setDivsnId(String divsnId) {
        this.divsnId = divsnId;
    }

    public String getDivsnNm() {
        return divsnNm;
    }

    public WrkfrcCoreCf divsnNm(String divsnNm) {
        this.divsnNm = divsnNm;
        return this;
    }

    public void setDivsnNm(String divsnNm) {
        this.divsnNm = divsnNm;
    }

    public String getRgnId() {
        return rgnId;
    }

    public WrkfrcCoreCf rgnId(String rgnId) {
        this.rgnId = rgnId;
        return this;
    }

    public void setRgnId(String rgnId) {
        this.rgnId = rgnId;
    }

    public String getRgnNm() {
        return rgnNm;
    }

    public WrkfrcCoreCf rgnNm(String rgnNm) {
        this.rgnNm = rgnNm;
        return this;
    }

    public void setRgnNm(String rgnNm) {
        this.rgnNm = rgnNm;
    }

    public String getBuId() {
        return buId;
    }

    public WrkfrcCoreCf buId(String buId) {
        this.buId = buId;
        return this;
    }

    public void setBuId(String buId) {
        this.buId = buId;
    }

    public String getBuNm() {
        return buNm;
    }

    public WrkfrcCoreCf buNm(String buNm) {
        this.buNm = buNm;
        return this;
    }

    public void setBuNm(String buNm) {
        this.buNm = buNm;
    }

    public String getMuId() {
        return muId;
    }

    public WrkfrcCoreCf muId(String muId) {
        this.muId = muId;
        return this;
    }

    public void setMuId(String muId) {
        this.muId = muId;
    }

    public String getMuNm() {
        return muNm;
    }

    public WrkfrcCoreCf muNm(String muNm) {
        this.muNm = muNm;
        return this;
    }

    public void setMuNm(String muNm) {
        this.muNm = muNm;
    }

    public String getJobFnctnCdv() {
        return jobFnctnCdv;
    }

    public WrkfrcCoreCf jobFnctnCdv(String jobFnctnCdv) {
        this.jobFnctnCdv = jobFnctnCdv;
        return this;
    }

    public void setJobFnctnCdv(String jobFnctnCdv) {
        this.jobFnctnCdv = jobFnctnCdv;
    }

    public String getJobFnctnNm() {
        return jobFnctnNm;
    }

    public WrkfrcCoreCf jobFnctnNm(String jobFnctnNm) {
        this.jobFnctnNm = jobFnctnNm;
        return this;
    }

    public void setJobFnctnNm(String jobFnctnNm) {
        this.jobFnctnNm = jobFnctnNm;
    }

    public String getJobSbfnctnCdv() {
        return jobSbfnctnCdv;
    }

    public WrkfrcCoreCf jobSbfnctnCdv(String jobSbfnctnCdv) {
        this.jobSbfnctnCdv = jobSbfnctnCdv;
        return this;
    }

    public void setJobSbfnctnCdv(String jobSbfnctnCdv) {
        this.jobSbfnctnCdv = jobSbfnctnCdv;
    }

    public String getJobSbfnctnNm() {
        return jobSbfnctnNm;
    }

    public WrkfrcCoreCf jobSbfnctnNm(String jobSbfnctnNm) {
        this.jobSbfnctnNm = jobSbfnctnNm;
        return this;
    }

    public void setJobSbfnctnNm(String jobSbfnctnNm) {
        this.jobSbfnctnNm = jobSbfnctnNm;
    }

    public String getMngrId() {
        return mngrId;
    }

    public WrkfrcCoreCf mngrId(String mngrId) {
        this.mngrId = mngrId;
        return this;
    }

    public void setMngrId(String mngrId) {
        this.mngrId = mngrId;
    }

    public String getBusDeskTelnm() {
        return busDeskTelnm;
    }

    public WrkfrcCoreCf busDeskTelnm(String busDeskTelnm) {
        this.busDeskTelnm = busDeskTelnm;
        return this;
    }

    public void setBusDeskTelnm(String busDeskTelnm) {
        this.busDeskTelnm = busDeskTelnm;
    }

    public String getBusCellTelnm() {
        return busCellTelnm;
    }

    public WrkfrcCoreCf busCellTelnm(String busCellTelnm) {
        this.busCellTelnm = busCellTelnm;
        return this;
    }

    public void setBusCellTelnm(String busCellTelnm) {
        this.busCellTelnm = busCellTelnm;
    }

    public String getFaxTelnm() {
        return faxTelnm;
    }

    public WrkfrcCoreCf faxTelnm(String faxTelnm) {
        this.faxTelnm = faxTelnm;
        return this;
    }

    public void setFaxTelnm(String faxTelnm) {
        this.faxTelnm = faxTelnm;
    }

    public String getWrkfrcEmailAddrVal() {
        return wrkfrcEmailAddrVal;
    }

    public WrkfrcCoreCf wrkfrcEmailAddrVal(String wrkfrcEmailAddrVal) {
        this.wrkfrcEmailAddrVal = wrkfrcEmailAddrVal;
        return this;
    }

    public void setWrkfrcEmailAddrVal(String wrkfrcEmailAddrVal) {
        this.wrkfrcEmailAddrVal = wrkfrcEmailAddrVal;
    }

    public String getLocNm() {
        return locNm;
    }

    public WrkfrcCoreCf locNm(String locNm) {
        this.locNm = locNm;
        return this;
    }

    public void setLocNm(String locNm) {
        this.locNm = locNm;
    }

    public String getLocAddrLn1Txt() {
        return locAddrLn1Txt;
    }

    public WrkfrcCoreCf locAddrLn1Txt(String locAddrLn1Txt) {
        this.locAddrLn1Txt = locAddrLn1Txt;
        return this;
    }

    public void setLocAddrLn1Txt(String locAddrLn1Txt) {
        this.locAddrLn1Txt = locAddrLn1Txt;
    }

    public String getLocAddrLn2Txt() {
        return locAddrLn2Txt;
    }

    public WrkfrcCoreCf locAddrLn2Txt(String locAddrLn2Txt) {
        this.locAddrLn2Txt = locAddrLn2Txt;
        return this;
    }

    public void setLocAddrLn2Txt(String locAddrLn2Txt) {
        this.locAddrLn2Txt = locAddrLn2Txt;
    }

    public String getLocAddrLn3Txt() {
        return locAddrLn3Txt;
    }

    public WrkfrcCoreCf locAddrLn3Txt(String locAddrLn3Txt) {
        this.locAddrLn3Txt = locAddrLn3Txt;
        return this;
    }

    public void setLocAddrLn3Txt(String locAddrLn3Txt) {
        this.locAddrLn3Txt = locAddrLn3Txt;
    }

    public String getLocAddrLn4Txt() {
        return locAddrLn4Txt;
    }

    public WrkfrcCoreCf locAddrLn4Txt(String locAddrLn4Txt) {
        this.locAddrLn4Txt = locAddrLn4Txt;
        return this;
    }

    public void setLocAddrLn4Txt(String locAddrLn4Txt) {
        this.locAddrLn4Txt = locAddrLn4Txt;
    }

    public String getLocCityNm() {
        return locCityNm;
    }

    public WrkfrcCoreCf locCityNm(String locCityNm) {
        this.locCityNm = locCityNm;
        return this;
    }

    public void setLocCityNm(String locCityNm) {
        this.locCityNm = locCityNm;
    }

    public String getLocPstlAreaVal() {
        return locPstlAreaVal;
    }

    public WrkfrcCoreCf locPstlAreaVal(String locPstlAreaVal) {
        this.locPstlAreaVal = locPstlAreaVal;
        return this;
    }

    public void setLocPstlAreaVal(String locPstlAreaVal) {
        this.locPstlAreaVal = locPstlAreaVal;
    }

    public String getLocTerrCdv() {
        return locTerrCdv;
    }

    public WrkfrcCoreCf locTerrCdv(String locTerrCdv) {
        this.locTerrCdv = locTerrCdv;
        return this;
    }

    public void setLocTerrCdv(String locTerrCdv) {
        this.locTerrCdv = locTerrCdv;
    }

    public String getLocTerrNm() {
        return locTerrNm;
    }

    public WrkfrcCoreCf locTerrNm(String locTerrNm) {
        this.locTerrNm = locTerrNm;
        return this;
    }

    public void setLocTerrNm(String locTerrNm) {
        this.locTerrNm = locTerrNm;
    }

    public String getLocCtryCdv() {
        return locCtryCdv;
    }

    public WrkfrcCoreCf locCtryCdv(String locCtryCdv) {
        this.locCtryCdv = locCtryCdv;
        return this;
    }

    public void setLocCtryCdv(String locCtryCdv) {
        this.locCtryCdv = locCtryCdv;
    }

    public String getLocCtryNm() {
        return locCtryNm;
    }

    public WrkfrcCoreCf locCtryNm(String locCtryNm) {
        this.locCtryNm = locCtryNm;
        return this;
    }

    public void setLocCtryNm(String locCtryNm) {
        this.locCtryNm = locCtryNm;
    }

    public String getCntrctrWrksiteCtryVal() {
        return cntrctrWrksiteCtryVal;
    }

    public WrkfrcCoreCf cntrctrWrksiteCtryVal(String cntrctrWrksiteCtryVal) {
        this.cntrctrWrksiteCtryVal = cntrctrWrksiteCtryVal;
        return this;
    }

    public void setCntrctrWrksiteCtryVal(String cntrctrWrksiteCtryVal) {
        this.cntrctrWrksiteCtryVal = cntrctrWrksiteCtryVal;
    }

    public String getLocTmznNm() {
        return locTmznNm;
    }

    public WrkfrcCoreCf locTmznNm(String locTmznNm) {
        this.locTmznNm = locTmznNm;
        return this;
    }

    public void setLocTmznNm(String locTmznNm) {
        this.locTmznNm = locTmznNm;
    }

    public String getLangPrfrdIsoNm() {
        return langPrfrdIsoNm;
    }

    public WrkfrcCoreCf langPrfrdIsoNm(String langPrfrdIsoNm) {
        this.langPrfrdIsoNm = langPrfrdIsoNm;
        return this;
    }

    public void setLangPrfrdIsoNm(String langPrfrdIsoNm) {
        this.langPrfrdIsoNm = langPrfrdIsoNm;
    }

    public String getWrkfrcHireDt() {
        return wrkfrcHireDt;
    }

    public WrkfrcCoreCf wrkfrcHireDt(String wrkfrcHireDt) {
        this.wrkfrcHireDt = wrkfrcHireDt;
        return this;
    }

    public void setWrkfrcHireDt(String wrkfrcHireDt) {
        this.wrkfrcHireDt = wrkfrcHireDt;
    }

    public String getWrkfrcOrignlHireDt() {
        return wrkfrcOrignlHireDt;
    }

    public WrkfrcCoreCf wrkfrcOrignlHireDt(String wrkfrcOrignlHireDt) {
        this.wrkfrcOrignlHireDt = wrkfrcOrignlHireDt;
        return this;
    }

    public void setWrkfrcOrignlHireDt(String wrkfrcOrignlHireDt) {
        this.wrkfrcOrignlHireDt = wrkfrcOrignlHireDt;
    }

    public WrkfrcCoreCfExtn getWrkfrcCoreCfExtn() {
        return wrkfrcCoreCfExtn;
    }

    public WrkfrcCoreCf wrkfrcCoreCfExtn(WrkfrcCoreCfExtn wrkfrcCoreCfExtn) {
        this.wrkfrcCoreCfExtn = wrkfrcCoreCfExtn;
        return this;
    }

    public void setWrkfrcCoreCfExtn(WrkfrcCoreCfExtn wrkfrcCoreCfExtn) {
        this.wrkfrcCoreCfExtn = wrkfrcCoreCfExtn;
    }

    public WrkfrcCoreCf getWrkfrcCoreCf() {
        return wrkfrcCoreCf;
    }

    public WrkfrcCoreCf wrkfrcCoreCf(WrkfrcCoreCf wrkfrcCoreCf) {
        this.wrkfrcCoreCf = wrkfrcCoreCf;
        return this;
    }

    public void setWrkfrcCoreCf(WrkfrcCoreCf wrkfrcCoreCf) {
        this.wrkfrcCoreCf = wrkfrcCoreCf;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof WrkfrcCoreCf)) {
            return false;
        }
        return id != null && id.equals(((WrkfrcCoreCf) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "WrkfrcCoreCf{" +
            "id=" + getId() +
            ", wrkfrcUniqIdVal='" + getWrkfrcUniqIdVal() + "'" +
            ", crtdDt='" + getCrtdDt() + "'" +
            ", mdfdD='" + getMdfdD() + "'" +
            ", frstNm='" + getFrstNm() + "'" +
            ", sevFrstNm='" + getSevFrstNm() + "'" +
            ", midlNm='" + getMidlNm() + "'" +
            ", secLastNm='" + getSecLastNm() + "'" +
            ", lastNm='" + getLastNm() + "'" +
            ", wrkfrcPrfrdNm='" + getWrkfrcPrfrdNm() + "'" +
            ", wrkfrcPrfrdLm='" + getWrkfrcPrfrdLm() + "'" +
            ", pstnTtlNm='" + getPstnTtlNm() + "'" +
            ", scrtrId='" + getScrtrId() + "'" +
            ", sctrNm='" + getSctrNm() + "'" +
            ", divsnId='" + getDivsnId() + "'" +
            ", divsnNm='" + getDivsnNm() + "'" +
            ", rgnId='" + getRgnId() + "'" +
            ", rgnNm='" + getRgnNm() + "'" +
            ", buId='" + getBuId() + "'" +
            ", buNm='" + getBuNm() + "'" +
            ", muId='" + getMuId() + "'" +
            ", muNm='" + getMuNm() + "'" +
            ", jobFnctnCdv='" + getJobFnctnCdv() + "'" +
            ", jobFnctnNm='" + getJobFnctnNm() + "'" +
            ", jobSbfnctnCdv='" + getJobSbfnctnCdv() + "'" +
            ", jobSbfnctnNm='" + getJobSbfnctnNm() + "'" +
            ", mngrId='" + getMngrId() + "'" +
            ", busDeskTelnm='" + getBusDeskTelnm() + "'" +
            ", busCellTelnm='" + getBusCellTelnm() + "'" +
            ", faxTelnm='" + getFaxTelnm() + "'" +
            ", wrkfrcEmailAddrVal='" + getWrkfrcEmailAddrVal() + "'" +
            ", locNm='" + getLocNm() + "'" +
            ", locAddrLn1Txt='" + getLocAddrLn1Txt() + "'" +
            ", locAddrLn2Txt='" + getLocAddrLn2Txt() + "'" +
            ", locAddrLn3Txt='" + getLocAddrLn3Txt() + "'" +
            ", locAddrLn4Txt='" + getLocAddrLn4Txt() + "'" +
            ", locCityNm='" + getLocCityNm() + "'" +
            ", locPstlAreaVal='" + getLocPstlAreaVal() + "'" +
            ", locTerrCdv='" + getLocTerrCdv() + "'" +
            ", locTerrNm='" + getLocTerrNm() + "'" +
            ", locCtryCdv='" + getLocCtryCdv() + "'" +
            ", locCtryNm='" + getLocCtryNm() + "'" +
            ", cntrctrWrksiteCtryVal='" + getCntrctrWrksiteCtryVal() + "'" +
            ", locTmznNm='" + getLocTmznNm() + "'" +
            ", langPrfrdIsoNm='" + getLangPrfrdIsoNm() + "'" +
            ", wrkfrcHireDt='" + getWrkfrcHireDt() + "'" +
            ", wrkfrcOrignlHireDt='" + getWrkfrcOrignlHireDt() + "'" +
            "}";
    }
}
