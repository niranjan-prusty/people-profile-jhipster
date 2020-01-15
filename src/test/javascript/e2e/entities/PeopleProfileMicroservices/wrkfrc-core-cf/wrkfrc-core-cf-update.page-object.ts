import { element, by, ElementFinder } from 'protractor';

export default class WrkfrcCoreCfUpdatePage {
  pageTitle: ElementFinder = element(by.id('peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  wrkfrcUniqIdValInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-wrkfrcUniqIdVal'));
  crtdDtInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-crtdDt'));
  mdfdDInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-mdfdD'));
  frstNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-frstNm'));
  sevFrstNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-sevFrstNm'));
  midlNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-midlNm'));
  secLastNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-secLastNm'));
  lastNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-lastNm'));
  wrkfrcPrfrdNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-wrkfrcPrfrdNm'));
  wrkfrcPrfrdLmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-wrkfrcPrfrdLm'));
  pstnTtlNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-pstnTtlNm'));
  scrtrIdInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-scrtrId'));
  sctrNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-sctrNm'));
  divsnIdInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-divsnId'));
  divsnNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-divsnNm'));
  rgnIdInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-rgnId'));
  rgnNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-rgnNm'));
  buIdInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-buId'));
  buNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-buNm'));
  muIdInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-muId'));
  muNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-muNm'));
  jobFnctnCdvInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-jobFnctnCdv'));
  jobFnctnNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-jobFnctnNm'));
  jobSbfnctnCdvInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-jobSbfnctnCdv'));
  jobSbfnctnNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-jobSbfnctnNm'));
  mngrIdInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-mngrId'));
  busDeskTelnmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-busDeskTelnm'));
  busCellTelnmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-busCellTelnm'));
  faxTelnmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-faxTelnm'));
  wrkfrcEmailAddrValInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-wrkfrcEmailAddrVal'));
  locNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locNm'));
  locAddrLn1TxtInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locAddrLn1Txt'));
  locAddrLn2TxtInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locAddrLn2Txt'));
  locAddrLn3TxtInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locAddrLn3Txt'));
  locAddrLn4TxtInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locAddrLn4Txt'));
  locCityNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locCityNm'));
  locPstlAreaValInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locPstlAreaVal'));
  locTerrCdvInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locTerrCdv'));
  locTerrNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locTerrNm'));
  locCtryCdvInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locCtryCdv'));
  locCtryNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locCtryNm'));
  cntrctrWrksiteCtryValInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-cntrctrWrksiteCtryVal'));
  locTmznNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-locTmznNm'));
  langPrfrdIsoNmInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-langPrfrdIsoNm'));
  wrkfrcHireDtInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-wrkfrcHireDt'));
  wrkfrcOrignlHireDtInput: ElementFinder = element(by.css('input#wrkfrc-core-cf-wrkfrcOrignlHireDt'));
  wrkfrcCoreCfExtnSelect: ElementFinder = element(by.css('select#wrkfrc-core-cf-wrkfrcCoreCfExtn'));
  wrkfrcCoreCfSelect: ElementFinder = element(by.css('select#wrkfrc-core-cf-wrkfrcCoreCf'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setWrkfrcUniqIdValInput(wrkfrcUniqIdVal) {
    await this.wrkfrcUniqIdValInput.sendKeys(wrkfrcUniqIdVal);
  }

  async getWrkfrcUniqIdValInput() {
    return this.wrkfrcUniqIdValInput.getAttribute('value');
  }

  async setCrtdDtInput(crtdDt) {
    await this.crtdDtInput.sendKeys(crtdDt);
  }

  async getCrtdDtInput() {
    return this.crtdDtInput.getAttribute('value');
  }

  async setMdfdDInput(mdfdD) {
    await this.mdfdDInput.sendKeys(mdfdD);
  }

  async getMdfdDInput() {
    return this.mdfdDInput.getAttribute('value');
  }

  async setFrstNmInput(frstNm) {
    await this.frstNmInput.sendKeys(frstNm);
  }

  async getFrstNmInput() {
    return this.frstNmInput.getAttribute('value');
  }

  async setSevFrstNmInput(sevFrstNm) {
    await this.sevFrstNmInput.sendKeys(sevFrstNm);
  }

  async getSevFrstNmInput() {
    return this.sevFrstNmInput.getAttribute('value');
  }

  async setMidlNmInput(midlNm) {
    await this.midlNmInput.sendKeys(midlNm);
  }

  async getMidlNmInput() {
    return this.midlNmInput.getAttribute('value');
  }

  async setSecLastNmInput(secLastNm) {
    await this.secLastNmInput.sendKeys(secLastNm);
  }

  async getSecLastNmInput() {
    return this.secLastNmInput.getAttribute('value');
  }

  async setLastNmInput(lastNm) {
    await this.lastNmInput.sendKeys(lastNm);
  }

  async getLastNmInput() {
    return this.lastNmInput.getAttribute('value');
  }

  async setWrkfrcPrfrdNmInput(wrkfrcPrfrdNm) {
    await this.wrkfrcPrfrdNmInput.sendKeys(wrkfrcPrfrdNm);
  }

  async getWrkfrcPrfrdNmInput() {
    return this.wrkfrcPrfrdNmInput.getAttribute('value');
  }

  async setWrkfrcPrfrdLmInput(wrkfrcPrfrdLm) {
    await this.wrkfrcPrfrdLmInput.sendKeys(wrkfrcPrfrdLm);
  }

  async getWrkfrcPrfrdLmInput() {
    return this.wrkfrcPrfrdLmInput.getAttribute('value');
  }

  async setPstnTtlNmInput(pstnTtlNm) {
    await this.pstnTtlNmInput.sendKeys(pstnTtlNm);
  }

  async getPstnTtlNmInput() {
    return this.pstnTtlNmInput.getAttribute('value');
  }

  async setScrtrIdInput(scrtrId) {
    await this.scrtrIdInput.sendKeys(scrtrId);
  }

  async getScrtrIdInput() {
    return this.scrtrIdInput.getAttribute('value');
  }

  async setSctrNmInput(sctrNm) {
    await this.sctrNmInput.sendKeys(sctrNm);
  }

  async getSctrNmInput() {
    return this.sctrNmInput.getAttribute('value');
  }

  async setDivsnIdInput(divsnId) {
    await this.divsnIdInput.sendKeys(divsnId);
  }

  async getDivsnIdInput() {
    return this.divsnIdInput.getAttribute('value');
  }

  async setDivsnNmInput(divsnNm) {
    await this.divsnNmInput.sendKeys(divsnNm);
  }

  async getDivsnNmInput() {
    return this.divsnNmInput.getAttribute('value');
  }

  async setRgnIdInput(rgnId) {
    await this.rgnIdInput.sendKeys(rgnId);
  }

  async getRgnIdInput() {
    return this.rgnIdInput.getAttribute('value');
  }

  async setRgnNmInput(rgnNm) {
    await this.rgnNmInput.sendKeys(rgnNm);
  }

  async getRgnNmInput() {
    return this.rgnNmInput.getAttribute('value');
  }

  async setBuIdInput(buId) {
    await this.buIdInput.sendKeys(buId);
  }

  async getBuIdInput() {
    return this.buIdInput.getAttribute('value');
  }

  async setBuNmInput(buNm) {
    await this.buNmInput.sendKeys(buNm);
  }

  async getBuNmInput() {
    return this.buNmInput.getAttribute('value');
  }

  async setMuIdInput(muId) {
    await this.muIdInput.sendKeys(muId);
  }

  async getMuIdInput() {
    return this.muIdInput.getAttribute('value');
  }

  async setMuNmInput(muNm) {
    await this.muNmInput.sendKeys(muNm);
  }

  async getMuNmInput() {
    return this.muNmInput.getAttribute('value');
  }

  async setJobFnctnCdvInput(jobFnctnCdv) {
    await this.jobFnctnCdvInput.sendKeys(jobFnctnCdv);
  }

  async getJobFnctnCdvInput() {
    return this.jobFnctnCdvInput.getAttribute('value');
  }

  async setJobFnctnNmInput(jobFnctnNm) {
    await this.jobFnctnNmInput.sendKeys(jobFnctnNm);
  }

  async getJobFnctnNmInput() {
    return this.jobFnctnNmInput.getAttribute('value');
  }

  async setJobSbfnctnCdvInput(jobSbfnctnCdv) {
    await this.jobSbfnctnCdvInput.sendKeys(jobSbfnctnCdv);
  }

  async getJobSbfnctnCdvInput() {
    return this.jobSbfnctnCdvInput.getAttribute('value');
  }

  async setJobSbfnctnNmInput(jobSbfnctnNm) {
    await this.jobSbfnctnNmInput.sendKeys(jobSbfnctnNm);
  }

  async getJobSbfnctnNmInput() {
    return this.jobSbfnctnNmInput.getAttribute('value');
  }

  async setMngrIdInput(mngrId) {
    await this.mngrIdInput.sendKeys(mngrId);
  }

  async getMngrIdInput() {
    return this.mngrIdInput.getAttribute('value');
  }

  async setBusDeskTelnmInput(busDeskTelnm) {
    await this.busDeskTelnmInput.sendKeys(busDeskTelnm);
  }

  async getBusDeskTelnmInput() {
    return this.busDeskTelnmInput.getAttribute('value');
  }

  async setBusCellTelnmInput(busCellTelnm) {
    await this.busCellTelnmInput.sendKeys(busCellTelnm);
  }

  async getBusCellTelnmInput() {
    return this.busCellTelnmInput.getAttribute('value');
  }

  async setFaxTelnmInput(faxTelnm) {
    await this.faxTelnmInput.sendKeys(faxTelnm);
  }

  async getFaxTelnmInput() {
    return this.faxTelnmInput.getAttribute('value');
  }

  async setWrkfrcEmailAddrValInput(wrkfrcEmailAddrVal) {
    await this.wrkfrcEmailAddrValInput.sendKeys(wrkfrcEmailAddrVal);
  }

  async getWrkfrcEmailAddrValInput() {
    return this.wrkfrcEmailAddrValInput.getAttribute('value');
  }

  async setLocNmInput(locNm) {
    await this.locNmInput.sendKeys(locNm);
  }

  async getLocNmInput() {
    return this.locNmInput.getAttribute('value');
  }

  async setLocAddrLn1TxtInput(locAddrLn1Txt) {
    await this.locAddrLn1TxtInput.sendKeys(locAddrLn1Txt);
  }

  async getLocAddrLn1TxtInput() {
    return this.locAddrLn1TxtInput.getAttribute('value');
  }

  async setLocAddrLn2TxtInput(locAddrLn2Txt) {
    await this.locAddrLn2TxtInput.sendKeys(locAddrLn2Txt);
  }

  async getLocAddrLn2TxtInput() {
    return this.locAddrLn2TxtInput.getAttribute('value');
  }

  async setLocAddrLn3TxtInput(locAddrLn3Txt) {
    await this.locAddrLn3TxtInput.sendKeys(locAddrLn3Txt);
  }

  async getLocAddrLn3TxtInput() {
    return this.locAddrLn3TxtInput.getAttribute('value');
  }

  async setLocAddrLn4TxtInput(locAddrLn4Txt) {
    await this.locAddrLn4TxtInput.sendKeys(locAddrLn4Txt);
  }

  async getLocAddrLn4TxtInput() {
    return this.locAddrLn4TxtInput.getAttribute('value');
  }

  async setLocCityNmInput(locCityNm) {
    await this.locCityNmInput.sendKeys(locCityNm);
  }

  async getLocCityNmInput() {
    return this.locCityNmInput.getAttribute('value');
  }

  async setLocPstlAreaValInput(locPstlAreaVal) {
    await this.locPstlAreaValInput.sendKeys(locPstlAreaVal);
  }

  async getLocPstlAreaValInput() {
    return this.locPstlAreaValInput.getAttribute('value');
  }

  async setLocTerrCdvInput(locTerrCdv) {
    await this.locTerrCdvInput.sendKeys(locTerrCdv);
  }

  async getLocTerrCdvInput() {
    return this.locTerrCdvInput.getAttribute('value');
  }

  async setLocTerrNmInput(locTerrNm) {
    await this.locTerrNmInput.sendKeys(locTerrNm);
  }

  async getLocTerrNmInput() {
    return this.locTerrNmInput.getAttribute('value');
  }

  async setLocCtryCdvInput(locCtryCdv) {
    await this.locCtryCdvInput.sendKeys(locCtryCdv);
  }

  async getLocCtryCdvInput() {
    return this.locCtryCdvInput.getAttribute('value');
  }

  async setLocCtryNmInput(locCtryNm) {
    await this.locCtryNmInput.sendKeys(locCtryNm);
  }

  async getLocCtryNmInput() {
    return this.locCtryNmInput.getAttribute('value');
  }

  async setCntrctrWrksiteCtryValInput(cntrctrWrksiteCtryVal) {
    await this.cntrctrWrksiteCtryValInput.sendKeys(cntrctrWrksiteCtryVal);
  }

  async getCntrctrWrksiteCtryValInput() {
    return this.cntrctrWrksiteCtryValInput.getAttribute('value');
  }

  async setLocTmznNmInput(locTmznNm) {
    await this.locTmznNmInput.sendKeys(locTmznNm);
  }

  async getLocTmznNmInput() {
    return this.locTmznNmInput.getAttribute('value');
  }

  async setLangPrfrdIsoNmInput(langPrfrdIsoNm) {
    await this.langPrfrdIsoNmInput.sendKeys(langPrfrdIsoNm);
  }

  async getLangPrfrdIsoNmInput() {
    return this.langPrfrdIsoNmInput.getAttribute('value');
  }

  async setWrkfrcHireDtInput(wrkfrcHireDt) {
    await this.wrkfrcHireDtInput.sendKeys(wrkfrcHireDt);
  }

  async getWrkfrcHireDtInput() {
    return this.wrkfrcHireDtInput.getAttribute('value');
  }

  async setWrkfrcOrignlHireDtInput(wrkfrcOrignlHireDt) {
    await this.wrkfrcOrignlHireDtInput.sendKeys(wrkfrcOrignlHireDt);
  }

  async getWrkfrcOrignlHireDtInput() {
    return this.wrkfrcOrignlHireDtInput.getAttribute('value');
  }

  async wrkfrcCoreCfExtnSelectLastOption() {
    await this.wrkfrcCoreCfExtnSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async wrkfrcCoreCfExtnSelectOption(option) {
    await this.wrkfrcCoreCfExtnSelect.sendKeys(option);
  }

  getWrkfrcCoreCfExtnSelect() {
    return this.wrkfrcCoreCfExtnSelect;
  }

  async getWrkfrcCoreCfExtnSelectedOption() {
    return this.wrkfrcCoreCfExtnSelect.element(by.css('option:checked')).getText();
  }

  async wrkfrcCoreCfSelectLastOption() {
    await this.wrkfrcCoreCfSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async wrkfrcCoreCfSelectOption(option) {
    await this.wrkfrcCoreCfSelect.sendKeys(option);
  }

  getWrkfrcCoreCfSelect() {
    return this.wrkfrcCoreCfSelect;
  }

  async getWrkfrcCoreCfSelectedOption() {
    return this.wrkfrcCoreCfSelect.element(by.css('option:checked')).getText();
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
