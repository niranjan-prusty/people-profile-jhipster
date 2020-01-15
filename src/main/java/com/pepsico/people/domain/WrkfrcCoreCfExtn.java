package com.pepsico.people.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A WrkfrcCoreCfExtn.
 */
@Entity
@Table(name = "wrkfrc_core_cf_extn")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class WrkfrcCoreCfExtn implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "id_fk", nullable = false)
    private Long idFk;

    @Column(name = "fun_group")
    private String funGroup;

    @Column(name = "building")
    private String building;

    @Column(name = "floor")
    private String floor;

    @Column(name = "mail_drop")
    private String mailDrop;

    @Column(name = "assistant")
    private String assistant;

    @Column(name = "alt_contact_mobile")
    private String altContactMobile;

    @Column(name = "alt_contact_email")
    private String altContactEmail;

    @Column(name = "alt_contact_name")
    private String altContactName;

    @Column(name = "alt_phone_num")
    private String altPhoneNum;

    @Column(name = "alt_loc_nm")
    private String altLocNm;

    @Column(name = "erg_memberships")
    private String ergMemberships;

    @Column(name = "pepsico_networks")
    private String pepsicoNetworks;

    @Column(name = "hobbies")
    private String hobbies;

    @Column(name = "birthday")
    private Instant birthday;

    @Lob
    @Column(name = "photo")
    private byte[] photo;

    @Column(name = "photo_content_type")
    private String photoContentType;

    @Column(name = "photo_ext")
    private String photoExt;

    @Column(name = "hometown")
    private String hometown;

    @Column(name = "hire_date")
    private String hireDate;

    @Column(name = "skills")
    private String skills;

    @Column(name = "interests")
    private String interests;

    @Column(name = "current_role")
    private String currentRole;

    @Column(name = "prj_worked")
    private String prjWorked;

    @Column(name = "education")
    private String education;

    @Column(name = "pers_note")
    private String persNote;

    @Column(name = "social_links")
    private String socialLinks;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdFk() {
        return idFk;
    }

    public WrkfrcCoreCfExtn idFk(Long idFk) {
        this.idFk = idFk;
        return this;
    }

    public void setIdFk(Long idFk) {
        this.idFk = idFk;
    }

    public String getFunGroup() {
        return funGroup;
    }

    public WrkfrcCoreCfExtn funGroup(String funGroup) {
        this.funGroup = funGroup;
        return this;
    }

    public void setFunGroup(String funGroup) {
        this.funGroup = funGroup;
    }

    public String getBuilding() {
        return building;
    }

    public WrkfrcCoreCfExtn building(String building) {
        this.building = building;
        return this;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public String getFloor() {
        return floor;
    }

    public WrkfrcCoreCfExtn floor(String floor) {
        this.floor = floor;
        return this;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getMailDrop() {
        return mailDrop;
    }

    public WrkfrcCoreCfExtn mailDrop(String mailDrop) {
        this.mailDrop = mailDrop;
        return this;
    }

    public void setMailDrop(String mailDrop) {
        this.mailDrop = mailDrop;
    }

    public String getAssistant() {
        return assistant;
    }

    public WrkfrcCoreCfExtn assistant(String assistant) {
        this.assistant = assistant;
        return this;
    }

    public void setAssistant(String assistant) {
        this.assistant = assistant;
    }

    public String getAltContactMobile() {
        return altContactMobile;
    }

    public WrkfrcCoreCfExtn altContactMobile(String altContactMobile) {
        this.altContactMobile = altContactMobile;
        return this;
    }

    public void setAltContactMobile(String altContactMobile) {
        this.altContactMobile = altContactMobile;
    }

    public String getAltContactEmail() {
        return altContactEmail;
    }

    public WrkfrcCoreCfExtn altContactEmail(String altContactEmail) {
        this.altContactEmail = altContactEmail;
        return this;
    }

    public void setAltContactEmail(String altContactEmail) {
        this.altContactEmail = altContactEmail;
    }

    public String getAltContactName() {
        return altContactName;
    }

    public WrkfrcCoreCfExtn altContactName(String altContactName) {
        this.altContactName = altContactName;
        return this;
    }

    public void setAltContactName(String altContactName) {
        this.altContactName = altContactName;
    }

    public String getAltPhoneNum() {
        return altPhoneNum;
    }

    public WrkfrcCoreCfExtn altPhoneNum(String altPhoneNum) {
        this.altPhoneNum = altPhoneNum;
        return this;
    }

    public void setAltPhoneNum(String altPhoneNum) {
        this.altPhoneNum = altPhoneNum;
    }

    public String getAltLocNm() {
        return altLocNm;
    }

    public WrkfrcCoreCfExtn altLocNm(String altLocNm) {
        this.altLocNm = altLocNm;
        return this;
    }

    public void setAltLocNm(String altLocNm) {
        this.altLocNm = altLocNm;
    }

    public String getErgMemberships() {
        return ergMemberships;
    }

    public WrkfrcCoreCfExtn ergMemberships(String ergMemberships) {
        this.ergMemberships = ergMemberships;
        return this;
    }

    public void setErgMemberships(String ergMemberships) {
        this.ergMemberships = ergMemberships;
    }

    public String getPepsicoNetworks() {
        return pepsicoNetworks;
    }

    public WrkfrcCoreCfExtn pepsicoNetworks(String pepsicoNetworks) {
        this.pepsicoNetworks = pepsicoNetworks;
        return this;
    }

    public void setPepsicoNetworks(String pepsicoNetworks) {
        this.pepsicoNetworks = pepsicoNetworks;
    }

    public String getHobbies() {
        return hobbies;
    }

    public WrkfrcCoreCfExtn hobbies(String hobbies) {
        this.hobbies = hobbies;
        return this;
    }

    public void setHobbies(String hobbies) {
        this.hobbies = hobbies;
    }

    public Instant getBirthday() {
        return birthday;
    }

    public WrkfrcCoreCfExtn birthday(Instant birthday) {
        this.birthday = birthday;
        return this;
    }

    public void setBirthday(Instant birthday) {
        this.birthday = birthday;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public WrkfrcCoreCfExtn photo(byte[] photo) {
        this.photo = photo;
        return this;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public WrkfrcCoreCfExtn photoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
        return this;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public String getPhotoExt() {
        return photoExt;
    }

    public WrkfrcCoreCfExtn photoExt(String photoExt) {
        this.photoExt = photoExt;
        return this;
    }

    public void setPhotoExt(String photoExt) {
        this.photoExt = photoExt;
    }

    public String getHometown() {
        return hometown;
    }

    public WrkfrcCoreCfExtn hometown(String hometown) {
        this.hometown = hometown;
        return this;
    }

    public void setHometown(String hometown) {
        this.hometown = hometown;
    }

    public String getHireDate() {
        return hireDate;
    }

    public WrkfrcCoreCfExtn hireDate(String hireDate) {
        this.hireDate = hireDate;
        return this;
    }

    public void setHireDate(String hireDate) {
        this.hireDate = hireDate;
    }

    public String getSkills() {
        return skills;
    }

    public WrkfrcCoreCfExtn skills(String skills) {
        this.skills = skills;
        return this;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getInterests() {
        return interests;
    }

    public WrkfrcCoreCfExtn interests(String interests) {
        this.interests = interests;
        return this;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }

    public String getCurrentRole() {
        return currentRole;
    }

    public WrkfrcCoreCfExtn currentRole(String currentRole) {
        this.currentRole = currentRole;
        return this;
    }

    public void setCurrentRole(String currentRole) {
        this.currentRole = currentRole;
    }

    public String getPrjWorked() {
        return prjWorked;
    }

    public WrkfrcCoreCfExtn prjWorked(String prjWorked) {
        this.prjWorked = prjWorked;
        return this;
    }

    public void setPrjWorked(String prjWorked) {
        this.prjWorked = prjWorked;
    }

    public String getEducation() {
        return education;
    }

    public WrkfrcCoreCfExtn education(String education) {
        this.education = education;
        return this;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getPersNote() {
        return persNote;
    }

    public WrkfrcCoreCfExtn persNote(String persNote) {
        this.persNote = persNote;
        return this;
    }

    public void setPersNote(String persNote) {
        this.persNote = persNote;
    }

    public String getSocialLinks() {
        return socialLinks;
    }

    public WrkfrcCoreCfExtn socialLinks(String socialLinks) {
        this.socialLinks = socialLinks;
        return this;
    }

    public void setSocialLinks(String socialLinks) {
        this.socialLinks = socialLinks;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof WrkfrcCoreCfExtn)) {
            return false;
        }
        return id != null && id.equals(((WrkfrcCoreCfExtn) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "WrkfrcCoreCfExtn{" +
            "id=" + getId() +
            ", idFk=" + getIdFk() +
            ", funGroup='" + getFunGroup() + "'" +
            ", building='" + getBuilding() + "'" +
            ", floor='" + getFloor() + "'" +
            ", mailDrop='" + getMailDrop() + "'" +
            ", assistant='" + getAssistant() + "'" +
            ", altContactMobile='" + getAltContactMobile() + "'" +
            ", altContactEmail='" + getAltContactEmail() + "'" +
            ", altContactName='" + getAltContactName() + "'" +
            ", altPhoneNum='" + getAltPhoneNum() + "'" +
            ", altLocNm='" + getAltLocNm() + "'" +
            ", ergMemberships='" + getErgMemberships() + "'" +
            ", pepsicoNetworks='" + getPepsicoNetworks() + "'" +
            ", hobbies='" + getHobbies() + "'" +
            ", birthday='" + getBirthday() + "'" +
            ", photo='" + getPhoto() + "'" +
            ", photoContentType='" + getPhotoContentType() + "'" +
            ", photoExt='" + getPhotoExt() + "'" +
            ", hometown='" + getHometown() + "'" +
            ", hireDate='" + getHireDate() + "'" +
            ", skills='" + getSkills() + "'" +
            ", interests='" + getInterests() + "'" +
            ", currentRole='" + getCurrentRole() + "'" +
            ", prjWorked='" + getPrjWorked() + "'" +
            ", education='" + getEducation() + "'" +
            ", persNote='" + getPersNote() + "'" +
            ", socialLinks='" + getSocialLinks() + "'" +
            "}";
    }
}
