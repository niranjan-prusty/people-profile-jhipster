import { element, by, ElementFinder } from 'protractor';

export default class WrkfrcCoreCfExtnUpdatePage {
  pageTitle: ElementFinder = element(by.id('peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  idFkInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-idFk'));
  funGroupInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-funGroup'));
  buildingInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-building'));
  floorInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-floor'));
  mailDropInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-mailDrop'));
  assistantInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-assistant'));
  altContactMobileInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-altContactMobile'));
  altContactEmailInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-altContactEmail'));
  altContactNameInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-altContactName'));
  altPhoneNumInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-altPhoneNum'));
  altLocNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-altLocNm'));
  ergMembershipsInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-ergMemberships'));
  pepsicoNetworksInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-pepsicoNetworks'));
  hobbiesInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-hobbies'));
  birthdayInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-birthday'));
  photoInput: ElementFinder = element(by.css('input#file_photo'));
  photoExtInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-photoExt'));
  hometownInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-hometown'));
  hireDateInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-hireDate'));
  skillsInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-skills'));
  interestsInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-interests'));
  currentRoleInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-currentRole'));
  prjWorkedInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-prjWorked'));
  educationInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-education'));
  persNoteInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-persNote'));
  socialLinksInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-extn-socialLinks'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setIdFkInput(idFk) {
    await this.idFkInput.sendKeys(idFk);
  }

  async getIdFkInput() {
    return this.idFkInput.getAttribute('value');
  }

  async setFunGroupInput(funGroup) {
    await this.funGroupInput.sendKeys(funGroup);
  }

  async getFunGroupInput() {
    return this.funGroupInput.getAttribute('value');
  }

  async setBuildingInput(building) {
    await this.buildingInput.sendKeys(building);
  }

  async getBuildingInput() {
    return this.buildingInput.getAttribute('value');
  }

  async setFloorInput(floor) {
    await this.floorInput.sendKeys(floor);
  }

  async getFloorInput() {
    return this.floorInput.getAttribute('value');
  }

  async setMailDropInput(mailDrop) {
    await this.mailDropInput.sendKeys(mailDrop);
  }

  async getMailDropInput() {
    return this.mailDropInput.getAttribute('value');
  }

  async setAssistantInput(assistant) {
    await this.assistantInput.sendKeys(assistant);
  }

  async getAssistantInput() {
    return this.assistantInput.getAttribute('value');
  }

  async setAltContactMobileInput(altContactMobile) {
    await this.altContactMobileInput.sendKeys(altContactMobile);
  }

  async getAltContactMobileInput() {
    return this.altContactMobileInput.getAttribute('value');
  }

  async setAltContactEmailInput(altContactEmail) {
    await this.altContactEmailInput.sendKeys(altContactEmail);
  }

  async getAltContactEmailInput() {
    return this.altContactEmailInput.getAttribute('value');
  }

  async setAltContactNameInput(altContactName) {
    await this.altContactNameInput.sendKeys(altContactName);
  }

  async getAltContactNameInput() {
    return this.altContactNameInput.getAttribute('value');
  }

  async setAltPhoneNumInput(altPhoneNum) {
    await this.altPhoneNumInput.sendKeys(altPhoneNum);
  }

  async getAltPhoneNumInput() {
    return this.altPhoneNumInput.getAttribute('value');
  }

  async setAltLocNmInput(altLocNm) {
    await this.altLocNmInput.sendKeys(altLocNm);
  }

  async getAltLocNmInput() {
    return this.altLocNmInput.getAttribute('value');
  }

  async setErgMembershipsInput(ergMemberships) {
    await this.ergMembershipsInput.sendKeys(ergMemberships);
  }

  async getErgMembershipsInput() {
    return this.ergMembershipsInput.getAttribute('value');
  }

  async setPepsicoNetworksInput(pepsicoNetworks) {
    await this.pepsicoNetworksInput.sendKeys(pepsicoNetworks);
  }

  async getPepsicoNetworksInput() {
    return this.pepsicoNetworksInput.getAttribute('value');
  }

  async setHobbiesInput(hobbies) {
    await this.hobbiesInput.sendKeys(hobbies);
  }

  async getHobbiesInput() {
    return this.hobbiesInput.getAttribute('value');
  }

  async setBirthdayInput(birthday) {
    await this.birthdayInput.sendKeys(birthday);
  }

  async getBirthdayInput() {
    return this.birthdayInput.getAttribute('value');
  }

  async setPhotoInput(photo) {
    await this.photoInput.sendKeys(photo);
  }

  async getPhotoInput() {
    return this.photoInput.getAttribute('value');
  }

  async setPhotoExtInput(photoExt) {
    await this.photoExtInput.sendKeys(photoExt);
  }

  async getPhotoExtInput() {
    return this.photoExtInput.getAttribute('value');
  }

  async setHometownInput(hometown) {
    await this.hometownInput.sendKeys(hometown);
  }

  async getHometownInput() {
    return this.hometownInput.getAttribute('value');
  }

  async setHireDateInput(hireDate) {
    await this.hireDateInput.sendKeys(hireDate);
  }

  async getHireDateInput() {
    return this.hireDateInput.getAttribute('value');
  }

  async setSkillsInput(skills) {
    await this.skillsInput.sendKeys(skills);
  }

  async getSkillsInput() {
    return this.skillsInput.getAttribute('value');
  }

  async setInterestsInput(interests) {
    await this.interestsInput.sendKeys(interests);
  }

  async getInterestsInput() {
    return this.interestsInput.getAttribute('value');
  }

  async setCurrentRoleInput(currentRole) {
    await this.currentRoleInput.sendKeys(currentRole);
  }

  async getCurrentRoleInput() {
    return this.currentRoleInput.getAttribute('value');
  }

  async setPrjWorkedInput(prjWorked) {
    await this.prjWorkedInput.sendKeys(prjWorked);
  }

  async getPrjWorkedInput() {
    return this.prjWorkedInput.getAttribute('value');
  }

  async setEducationInput(education) {
    await this.educationInput.sendKeys(education);
  }

  async getEducationInput() {
    return this.educationInput.getAttribute('value');
  }

  async setPersNoteInput(persNote) {
    await this.persNoteInput.sendKeys(persNote);
  }

  async getPersNoteInput() {
    return this.persNoteInput.getAttribute('value');
  }

  async setSocialLinksInput(socialLinks) {
    await this.socialLinksInput.sendKeys(socialLinks);
  }

  async getSocialLinksInput() {
    return this.socialLinksInput.getAttribute('value');
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
