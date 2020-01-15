import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import SignInPage from './../../../page-objects/signin-page';
import WrkfrcCoreCfExtnComponentsPage, { WrkfrcCoreCfExtnDeleteDialog } from './wrkfrc-core-cf-extn.page-object';
import WrkfrcCoreCfExtnUpdatePage from './wrkfrc-core-cf-extn-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('WrkfrcCoreCfExtn e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let wrkfrcCoreCfExtnComponentsPage: WrkfrcCoreCfExtnComponentsPage;
  let wrkfrcCoreCfExtnUpdatePage: WrkfrcCoreCfExtnUpdatePage;
  let wrkfrcCoreCfExtnDeleteDialog: WrkfrcCoreCfExtnDeleteDialog;
  const fileToUpload = '../../../../../../../src/main/webapp/content/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

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

  it('should load WrkfrcCoreCfExtns', async () => {
    await navBarPage.getEntityPage('wrkfrc-core-cf-extn');
    wrkfrcCoreCfExtnComponentsPage = new WrkfrcCoreCfExtnComponentsPage();
    expect(await wrkfrcCoreCfExtnComponentsPage.getTitle().getText()).to.match(/Wrkfrc Core Cf Extns/);
  });

  it('should load create WrkfrcCoreCfExtn page', async () => {
    await wrkfrcCoreCfExtnComponentsPage.clickOnCreateButton();
    wrkfrcCoreCfExtnUpdatePage = new WrkfrcCoreCfExtnUpdatePage();
    expect(await wrkfrcCoreCfExtnUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.home.createOrEditLabel/
    );
    await wrkfrcCoreCfExtnUpdatePage.cancel();
  });

  it('should create and save WrkfrcCoreCfExtns', async () => {
    async function createWrkfrcCoreCfExtn() {
      await wrkfrcCoreCfExtnComponentsPage.clickOnCreateButton();
      await wrkfrcCoreCfExtnUpdatePage.setIdFkInput('5');
      expect(await wrkfrcCoreCfExtnUpdatePage.getIdFkInput()).to.eq('5');
      await wrkfrcCoreCfExtnUpdatePage.setFunGroupInput('funGroup');
      expect(await wrkfrcCoreCfExtnUpdatePage.getFunGroupInput()).to.match(/funGroup/);
      await wrkfrcCoreCfExtnUpdatePage.setBuildingInput('building');
      expect(await wrkfrcCoreCfExtnUpdatePage.getBuildingInput()).to.match(/building/);
      await wrkfrcCoreCfExtnUpdatePage.setFloorInput('floor');
      expect(await wrkfrcCoreCfExtnUpdatePage.getFloorInput()).to.match(/floor/);
      await wrkfrcCoreCfExtnUpdatePage.setMailDropInput('mailDrop');
      expect(await wrkfrcCoreCfExtnUpdatePage.getMailDropInput()).to.match(/mailDrop/);
      await wrkfrcCoreCfExtnUpdatePage.setAssistantInput('assistant');
      expect(await wrkfrcCoreCfExtnUpdatePage.getAssistantInput()).to.match(/assistant/);
      await wrkfrcCoreCfExtnUpdatePage.setAltContactMobileInput('altContactMobile');
      expect(await wrkfrcCoreCfExtnUpdatePage.getAltContactMobileInput()).to.match(/altContactMobile/);
      await wrkfrcCoreCfExtnUpdatePage.setAltContactEmailInput('altContactEmail');
      expect(await wrkfrcCoreCfExtnUpdatePage.getAltContactEmailInput()).to.match(/altContactEmail/);
      await wrkfrcCoreCfExtnUpdatePage.setAltContactNameInput('altContactName');
      expect(await wrkfrcCoreCfExtnUpdatePage.getAltContactNameInput()).to.match(/altContactName/);
      await wrkfrcCoreCfExtnUpdatePage.setAltPhoneNumInput('altPhoneNum');
      expect(await wrkfrcCoreCfExtnUpdatePage.getAltPhoneNumInput()).to.match(/altPhoneNum/);
      await wrkfrcCoreCfExtnUpdatePage.setAltLocNmInput('altLocNm');
      expect(await wrkfrcCoreCfExtnUpdatePage.getAltLocNmInput()).to.match(/altLocNm/);
      await wrkfrcCoreCfExtnUpdatePage.setErgMembershipsInput('ergMemberships');
      expect(await wrkfrcCoreCfExtnUpdatePage.getErgMembershipsInput()).to.match(/ergMemberships/);
      await wrkfrcCoreCfExtnUpdatePage.setPepsicoNetworksInput('pepsicoNetworks');
      expect(await wrkfrcCoreCfExtnUpdatePage.getPepsicoNetworksInput()).to.match(/pepsicoNetworks/);
      await wrkfrcCoreCfExtnUpdatePage.setHobbiesInput('hobbies');
      expect(await wrkfrcCoreCfExtnUpdatePage.getHobbiesInput()).to.match(/hobbies/);
      await wrkfrcCoreCfExtnUpdatePage.setBirthdayInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await wrkfrcCoreCfExtnUpdatePage.getBirthdayInput()).to.contain('2001-01-01T02:30');
      await wrkfrcCoreCfExtnUpdatePage.setPhotoInput(absolutePath);
      await wrkfrcCoreCfExtnUpdatePage.setPhotoExtInput('photoExt');
      expect(await wrkfrcCoreCfExtnUpdatePage.getPhotoExtInput()).to.match(/photoExt/);
      await wrkfrcCoreCfExtnUpdatePage.setHometownInput('hometown');
      expect(await wrkfrcCoreCfExtnUpdatePage.getHometownInput()).to.match(/hometown/);
      await wrkfrcCoreCfExtnUpdatePage.setHireDateInput('hireDate');
      expect(await wrkfrcCoreCfExtnUpdatePage.getHireDateInput()).to.match(/hireDate/);
      await wrkfrcCoreCfExtnUpdatePage.setSkillsInput('skills');
      expect(await wrkfrcCoreCfExtnUpdatePage.getSkillsInput()).to.match(/skills/);
      await wrkfrcCoreCfExtnUpdatePage.setInterestsInput('interests');
      expect(await wrkfrcCoreCfExtnUpdatePage.getInterestsInput()).to.match(/interests/);
      await wrkfrcCoreCfExtnUpdatePage.setCurrentRoleInput('currentRole');
      expect(await wrkfrcCoreCfExtnUpdatePage.getCurrentRoleInput()).to.match(/currentRole/);
      await wrkfrcCoreCfExtnUpdatePage.setPrjWorkedInput('prjWorked');
      expect(await wrkfrcCoreCfExtnUpdatePage.getPrjWorkedInput()).to.match(/prjWorked/);
      await wrkfrcCoreCfExtnUpdatePage.setEducationInput('education');
      expect(await wrkfrcCoreCfExtnUpdatePage.getEducationInput()).to.match(/education/);
      await wrkfrcCoreCfExtnUpdatePage.setPersNoteInput('persNote');
      expect(await wrkfrcCoreCfExtnUpdatePage.getPersNoteInput()).to.match(/persNote/);
      await wrkfrcCoreCfExtnUpdatePage.setSocialLinksInput('socialLinks');
      expect(await wrkfrcCoreCfExtnUpdatePage.getSocialLinksInput()).to.match(/socialLinks/);
      await waitUntilDisplayed(wrkfrcCoreCfExtnUpdatePage.getSaveButton());
      await wrkfrcCoreCfExtnUpdatePage.save();
      await waitUntilHidden(wrkfrcCoreCfExtnUpdatePage.getSaveButton());
      expect(await wrkfrcCoreCfExtnUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createWrkfrcCoreCfExtn();
    await wrkfrcCoreCfExtnComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await wrkfrcCoreCfExtnComponentsPage.countDeleteButtons();
    await createWrkfrcCoreCfExtn();
    await wrkfrcCoreCfExtnComponentsPage.waitUntilLoaded();

    await wrkfrcCoreCfExtnComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await wrkfrcCoreCfExtnComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last WrkfrcCoreCfExtn', async () => {
    await wrkfrcCoreCfExtnComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await wrkfrcCoreCfExtnComponentsPage.countDeleteButtons();
    await wrkfrcCoreCfExtnComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    wrkfrcCoreCfExtnDeleteDialog = new WrkfrcCoreCfExtnDeleteDialog();
    expect(await wrkfrcCoreCfExtnDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.delete.question/
    );
    await wrkfrcCoreCfExtnDeleteDialog.clickOnConfirmButton();

    await wrkfrcCoreCfExtnComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await wrkfrcCoreCfExtnComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
