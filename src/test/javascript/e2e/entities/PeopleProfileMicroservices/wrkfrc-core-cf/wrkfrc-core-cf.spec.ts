import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import SignInPage from './../../../page-objects/signin-page';
import WrkfrcCoreCfComponentsPage, { WrkfrcCoreCfDeleteDialog } from './wrkfrc-core-cf.page-object';
import WrkfrcCoreCfUpdatePage from './wrkfrc-core-cf-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../../util/utils';

const expect = chai.expect;

describe('WrkfrcCoreCf e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let wrkfrcCoreCfComponentsPage: WrkfrcCoreCfComponentsPage;
  let wrkfrcCoreCfUpdatePage: WrkfrcCoreCfUpdatePage;
  let wrkfrcCoreCfDeleteDialog: WrkfrcCoreCfDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  it('should load WrkfrcCoreCfs', async () => {
    await navBarPage.getEntityPage('wrkfrc-core-cf');
    wrkfrcCoreCfComponentsPage = new WrkfrcCoreCfComponentsPage();
    expect(await wrkfrcCoreCfComponentsPage.getTitle().getText()).to.match(/Wrkfrc Core Cfs/);
  });

  it('should load create WrkfrcCoreCf page', async () => {
    await wrkfrcCoreCfComponentsPage.clickOnCreateButton();
    wrkfrcCoreCfUpdatePage = new WrkfrcCoreCfUpdatePage();
    expect(await wrkfrcCoreCfUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.home.createOrEditLabel/
    );
    await wrkfrcCoreCfUpdatePage.cancel();
  });

  it('should create and save WrkfrcCoreCfs', async () => {
    async function createWrkfrcCoreCf() {
      await wrkfrcCoreCfComponentsPage.clickOnCreateButton();
      await wrkfrcCoreCfUpdatePage.setWrkfrcUniqIdValInput('wrkfrcUniqIdVal');
      expect(await wrkfrcCoreCfUpdatePage.getWrkfrcUniqIdValInput()).to.match(/wrkfrcUniqIdVal/);
      await wrkfrcCoreCfUpdatePage.setCrtdDtInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await wrkfrcCoreCfUpdatePage.getCrtdDtInput()).to.contain('2001-01-01T02:30');
      await wrkfrcCoreCfUpdatePage.setMdfdDInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await wrkfrcCoreCfUpdatePage.getMdfdDInput()).to.contain('2001-01-01T02:30');
      await wrkfrcCoreCfUpdatePage.setFrstNmInput('frstNm');
      expect(await wrkfrcCoreCfUpdatePage.getFrstNmInput()).to.match(/frstNm/);
      await wrkfrcCoreCfUpdatePage.setSevFrstNmInput('sevFrstNm');
      expect(await wrkfrcCoreCfUpdatePage.getSevFrstNmInput()).to.match(/sevFrstNm/);
      await wrkfrcCoreCfUpdatePage.setMidlNmInput('midlNm');
      expect(await wrkfrcCoreCfUpdatePage.getMidlNmInput()).to.match(/midlNm/);
      await wrkfrcCoreCfUpdatePage.setSecLastNmInput('secLastNm');
      expect(await wrkfrcCoreCfUpdatePage.getSecLastNmInput()).to.match(/secLastNm/);
      await wrkfrcCoreCfUpdatePage.setLastNmInput('lastNm');
      expect(await wrkfrcCoreCfUpdatePage.getLastNmInput()).to.match(/lastNm/);
      await wrkfrcCoreCfUpdatePage.setWrkfrcPrfrdNmInput('wrkfrcPrfrdNm');
      expect(await wrkfrcCoreCfUpdatePage.getWrkfrcPrfrdNmInput()).to.match(/wrkfrcPrfrdNm/);
      await wrkfrcCoreCfUpdatePage.setWrkfrcPrfrdLmInput('wrkfrcPrfrdLm');
      expect(await wrkfrcCoreCfUpdatePage.getWrkfrcPrfrdLmInput()).to.match(/wrkfrcPrfrdLm/);
      await wrkfrcCoreCfUpdatePage.setPstnTtlNmInput('pstnTtlNm');
      expect(await wrkfrcCoreCfUpdatePage.getPstnTtlNmInput()).to.match(/pstnTtlNm/);
      await wrkfrcCoreCfUpdatePage.setScrtrIdInput('scrtrId');
      expect(await wrkfrcCoreCfUpdatePage.getScrtrIdInput()).to.match(/scrtrId/);
      await wrkfrcCoreCfUpdatePage.setSctrNmInput('sctrNm');
      expect(await wrkfrcCoreCfUpdatePage.getSctrNmInput()).to.match(/sctrNm/);
      await wrkfrcCoreCfUpdatePage.setDivsnIdInput('divsnId');
      expect(await wrkfrcCoreCfUpdatePage.getDivsnIdInput()).to.match(/divsnId/);
      await wrkfrcCoreCfUpdatePage.setDivsnNmInput('divsnNm');
      expect(await wrkfrcCoreCfUpdatePage.getDivsnNmInput()).to.match(/divsnNm/);
      await wrkfrcCoreCfUpdatePage.setRgnIdInput('rgnId');
      expect(await wrkfrcCoreCfUpdatePage.getRgnIdInput()).to.match(/rgnId/);
      await wrkfrcCoreCfUpdatePage.setRgnNmInput('rgnNm');
      expect(await wrkfrcCoreCfUpdatePage.getRgnNmInput()).to.match(/rgnNm/);
      await wrkfrcCoreCfUpdatePage.setBuIdInput('buId');
      expect(await wrkfrcCoreCfUpdatePage.getBuIdInput()).to.match(/buId/);
      await wrkfrcCoreCfUpdatePage.setBuNmInput('buNm');
      expect(await wrkfrcCoreCfUpdatePage.getBuNmInput()).to.match(/buNm/);
      await wrkfrcCoreCfUpdatePage.setMuIdInput('muId');
      expect(await wrkfrcCoreCfUpdatePage.getMuIdInput()).to.match(/muId/);
      await wrkfrcCoreCfUpdatePage.setMuNmInput('muNm');
      expect(await wrkfrcCoreCfUpdatePage.getMuNmInput()).to.match(/muNm/);
      await wrkfrcCoreCfUpdatePage.setJobFnctnCdvInput('jobFnctnCdv');
      expect(await wrkfrcCoreCfUpdatePage.getJobFnctnCdvInput()).to.match(/jobFnctnCdv/);
      await wrkfrcCoreCfUpdatePage.setJobFnctnNmInput('jobFnctnNm');
      expect(await wrkfrcCoreCfUpdatePage.getJobFnctnNmInput()).to.match(/jobFnctnNm/);
      await wrkfrcCoreCfUpdatePage.setJobSbfnctnCdvInput('jobSbfnctnCdv');
      expect(await wrkfrcCoreCfUpdatePage.getJobSbfnctnCdvInput()).to.match(/jobSbfnctnCdv/);
      await wrkfrcCoreCfUpdatePage.setJobSbfnctnNmInput('jobSbfnctnNm');
      expect(await wrkfrcCoreCfUpdatePage.getJobSbfnctnNmInput()).to.match(/jobSbfnctnNm/);
      await wrkfrcCoreCfUpdatePage.setMngrIdInput('mngrId');
      expect(await wrkfrcCoreCfUpdatePage.getMngrIdInput()).to.match(/mngrId/);
      await wrkfrcCoreCfUpdatePage.setBusDeskTelnmInput('busDeskTelnm');
      expect(await wrkfrcCoreCfUpdatePage.getBusDeskTelnmInput()).to.match(/busDeskTelnm/);
      await wrkfrcCoreCfUpdatePage.setBusCellTelnmInput('busCellTelnm');
      expect(await wrkfrcCoreCfUpdatePage.getBusCellTelnmInput()).to.match(/busCellTelnm/);
      await wrkfrcCoreCfUpdatePage.setFaxTelnmInput('faxTelnm');
      expect(await wrkfrcCoreCfUpdatePage.getFaxTelnmInput()).to.match(/faxTelnm/);
      await wrkfrcCoreCfUpdatePage.setWrkfrcEmailAddrValInput('wrkfrcEmailAddrVal');
      expect(await wrkfrcCoreCfUpdatePage.getWrkfrcEmailAddrValInput()).to.match(/wrkfrcEmailAddrVal/);
      await wrkfrcCoreCfUpdatePage.setLocNmInput('locNm');
      expect(await wrkfrcCoreCfUpdatePage.getLocNmInput()).to.match(/locNm/);
      await wrkfrcCoreCfUpdatePage.setLocAddrLn1TxtInput('locAddrLn1Txt');
      expect(await wrkfrcCoreCfUpdatePage.getLocAddrLn1TxtInput()).to.match(/locAddrLn1Txt/);
      await wrkfrcCoreCfUpdatePage.setLocAddrLn2TxtInput('locAddrLn2Txt');
      expect(await wrkfrcCoreCfUpdatePage.getLocAddrLn2TxtInput()).to.match(/locAddrLn2Txt/);
      await wrkfrcCoreCfUpdatePage.setLocAddrLn3TxtInput('locAddrLn3Txt');
      expect(await wrkfrcCoreCfUpdatePage.getLocAddrLn3TxtInput()).to.match(/locAddrLn3Txt/);
      await wrkfrcCoreCfUpdatePage.setLocAddrLn4TxtInput('locAddrLn4Txt');
      expect(await wrkfrcCoreCfUpdatePage.getLocAddrLn4TxtInput()).to.match(/locAddrLn4Txt/);
      await wrkfrcCoreCfUpdatePage.setLocCityNmInput('locCityNm');
      expect(await wrkfrcCoreCfUpdatePage.getLocCityNmInput()).to.match(/locCityNm/);
      await wrkfrcCoreCfUpdatePage.setLocPstlAreaValInput('locPstlAreaVal');
      expect(await wrkfrcCoreCfUpdatePage.getLocPstlAreaValInput()).to.match(/locPstlAreaVal/);
      await wrkfrcCoreCfUpdatePage.setLocTerrCdvInput('locTerrCdv');
      expect(await wrkfrcCoreCfUpdatePage.getLocTerrCdvInput()).to.match(/locTerrCdv/);
      await wrkfrcCoreCfUpdatePage.setLocTerrNmInput('locTerrNm');
      expect(await wrkfrcCoreCfUpdatePage.getLocTerrNmInput()).to.match(/locTerrNm/);
      await wrkfrcCoreCfUpdatePage.setLocCtryCdvInput('locCtryCdv');
      expect(await wrkfrcCoreCfUpdatePage.getLocCtryCdvInput()).to.match(/locCtryCdv/);
      await wrkfrcCoreCfUpdatePage.setLocCtryNmInput('locCtryNm');
      expect(await wrkfrcCoreCfUpdatePage.getLocCtryNmInput()).to.match(/locCtryNm/);
      await wrkfrcCoreCfUpdatePage.setCntrctrWrksiteCtryValInput('cntrctrWrksiteCtryVal');
      expect(await wrkfrcCoreCfUpdatePage.getCntrctrWrksiteCtryValInput()).to.match(/cntrctrWrksiteCtryVal/);
      await wrkfrcCoreCfUpdatePage.setLocTmznNmInput('locTmznNm');
      expect(await wrkfrcCoreCfUpdatePage.getLocTmznNmInput()).to.match(/locTmznNm/);
      await wrkfrcCoreCfUpdatePage.setLangPrfrdIsoNmInput('langPrfrdIsoNm');
      expect(await wrkfrcCoreCfUpdatePage.getLangPrfrdIsoNmInput()).to.match(/langPrfrdIsoNm/);
      await wrkfrcCoreCfUpdatePage.setWrkfrcHireDtInput('wrkfrcHireDt');
      expect(await wrkfrcCoreCfUpdatePage.getWrkfrcHireDtInput()).to.match(/wrkfrcHireDt/);
      await wrkfrcCoreCfUpdatePage.setWrkfrcOrignlHireDtInput('wrkfrcOrignlHireDt');
      expect(await wrkfrcCoreCfUpdatePage.getWrkfrcOrignlHireDtInput()).to.match(/wrkfrcOrignlHireDt/);
      await wrkfrcCoreCfUpdatePage.wrkfrcCoreCfExtnSelectLastOption();
      await wrkfrcCoreCfUpdatePage.wrkfrcCoreCfSelectLastOption();
      await waitUntilDisplayed(wrkfrcCoreCfUpdatePage.getSaveButton());
      await wrkfrcCoreCfUpdatePage.save();
      await waitUntilHidden(wrkfrcCoreCfUpdatePage.getSaveButton());
      expect(await wrkfrcCoreCfUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createWrkfrcCoreCf();
    await wrkfrcCoreCfComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await wrkfrcCoreCfComponentsPage.countDeleteButtons();
    await createWrkfrcCoreCf();
    await wrkfrcCoreCfComponentsPage.waitUntilLoaded();

    await wrkfrcCoreCfComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await wrkfrcCoreCfComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last WrkfrcCoreCf', async () => {
    await wrkfrcCoreCfComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await wrkfrcCoreCfComponentsPage.countDeleteButtons();
    await wrkfrcCoreCfComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    wrkfrcCoreCfDeleteDialog = new WrkfrcCoreCfDeleteDialog();
    expect(await wrkfrcCoreCfDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.delete.question/
    );
    await wrkfrcCoreCfDeleteDialog.clickOnConfirmButton();

    await wrkfrcCoreCfComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await wrkfrcCoreCfComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
