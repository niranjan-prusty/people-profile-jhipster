import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './wrkfrc-core-cf-extn.reducer';
import { IWrkfrcCoreCfExtn } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf-extn.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IWrkfrcCoreCfExtnUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WrkfrcCoreCfExtnUpdate = (props: IWrkfrcCoreCfExtnUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { wrkfrcCoreCfExtnEntity, loading, updating } = props;

  const { photo, photoContentType } = wrkfrcCoreCfExtnEntity;

  const handleClose = () => {
    props.history.push('/wrkfrc-core-cf-extn');
  };

  useEffect(() => {
    if (!isNew) {
      props.getEntity(props.match.params.id);
    }
  }, []);

  const onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => props.setBlob(name, data, contentType), isAnImage);
  };

  const clearBlob = name => () => {
    props.setBlob(name, undefined, undefined);
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.birthday = convertDateTimeToServer(values.birthday);

    if (errors.length === 0) {
      const entity = {
        ...wrkfrcCoreCfExtnEntity,
        ...values
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.home.createOrEditLabel">
            <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.home.createOrEditLabel">
              Create or edit a WrkfrcCoreCfExtn
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : wrkfrcCoreCfExtnEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="wrkfrc-core-cf-extn-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="wrkfrc-core-cf-extn-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="idFkLabel" for="wrkfrc-core-cf-extn-idFk">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.idFk">Id Fk</Translate>
                </Label>
                <AvField
                  id="wrkfrc-core-cf-extn-idFk"
                  type="string"
                  className="form-control"
                  name="idFk"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') }
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="funGroupLabel" for="wrkfrc-core-cf-extn-funGroup">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.funGroup">Fun Group</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-funGroup" type="text" name="funGroup" />
              </AvGroup>
              <AvGroup>
                <Label id="buildingLabel" for="wrkfrc-core-cf-extn-building">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.building">Building</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-building" type="text" name="building" />
              </AvGroup>
              <AvGroup>
                <Label id="floorLabel" for="wrkfrc-core-cf-extn-floor">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.floor">Floor</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-floor" type="text" name="floor" />
              </AvGroup>
              <AvGroup>
                <Label id="mailDropLabel" for="wrkfrc-core-cf-extn-mailDrop">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.mailDrop">Mail Drop</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-mailDrop" type="text" name="mailDrop" />
              </AvGroup>
              <AvGroup>
                <Label id="assistantLabel" for="wrkfrc-core-cf-extn-assistant">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.assistant">Assistant</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-assistant" type="text" name="assistant" />
              </AvGroup>
              <AvGroup>
                <Label id="altContactMobileLabel" for="wrkfrc-core-cf-extn-altContactMobile">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactMobile">
                    Alt Contact Mobile
                  </Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-altContactMobile" type="text" name="altContactMobile" />
              </AvGroup>
              <AvGroup>
                <Label id="altContactEmailLabel" for="wrkfrc-core-cf-extn-altContactEmail">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactEmail">Alt Contact Email</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-altContactEmail" type="text" name="altContactEmail" />
              </AvGroup>
              <AvGroup>
                <Label id="altContactNameLabel" for="wrkfrc-core-cf-extn-altContactName">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactName">Alt Contact Name</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-altContactName" type="text" name="altContactName" />
              </AvGroup>
              <AvGroup>
                <Label id="altPhoneNumLabel" for="wrkfrc-core-cf-extn-altPhoneNum">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altPhoneNum">Alt Phone Num</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-altPhoneNum" type="text" name="altPhoneNum" />
              </AvGroup>
              <AvGroup>
                <Label id="altLocNmLabel" for="wrkfrc-core-cf-extn-altLocNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altLocNm">Alt Loc Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-altLocNm" type="text" name="altLocNm" />
              </AvGroup>
              <AvGroup>
                <Label id="ergMembershipsLabel" for="wrkfrc-core-cf-extn-ergMemberships">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.ergMemberships">Erg Memberships</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-ergMemberships" type="text" name="ergMemberships" />
              </AvGroup>
              <AvGroup>
                <Label id="pepsicoNetworksLabel" for="wrkfrc-core-cf-extn-pepsicoNetworks">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.pepsicoNetworks">Pepsico Networks</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-pepsicoNetworks" type="text" name="pepsicoNetworks" />
              </AvGroup>
              <AvGroup>
                <Label id="hobbiesLabel" for="wrkfrc-core-cf-extn-hobbies">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hobbies">Hobbies</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-hobbies" type="text" name="hobbies" />
              </AvGroup>
              <AvGroup>
                <Label id="birthdayLabel" for="wrkfrc-core-cf-extn-birthday">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.birthday">Birthday</Translate>
                </Label>
                <AvInput
                  id="wrkfrc-core-cf-extn-birthday"
                  type="datetime-local"
                  className="form-control"
                  name="birthday"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? null : convertDateTimeFromServer(props.wrkfrcCoreCfExtnEntity.birthday)}
                />
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="photoLabel" for="photo">
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.photo">Photo</Translate>
                  </Label>
                  <br />
                  {photo ? (
                    <div>
                      <a onClick={openFile(photoContentType, photo)}>
                        <Translate contentKey="entity.action.open">Open</Translate>
                      </a>
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {photoContentType}, {byteSize(photo)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('photo')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input id="file_photo" type="file" onChange={onBlobChange(false, 'photo')} />
                  <AvInput type="hidden" name="photo" value={photo} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <Label id="photoExtLabel" for="wrkfrc-core-cf-extn-photoExt">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.photoExt">Photo Ext</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-photoExt" type="text" name="photoExt" />
              </AvGroup>
              <AvGroup>
                <Label id="hometownLabel" for="wrkfrc-core-cf-extn-hometown">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hometown">Hometown</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-hometown" type="text" name="hometown" />
              </AvGroup>
              <AvGroup>
                <Label id="hireDateLabel" for="wrkfrc-core-cf-extn-hireDate">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hireDate">Hire Date</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-hireDate" type="text" name="hireDate" />
              </AvGroup>
              <AvGroup>
                <Label id="skillsLabel" for="wrkfrc-core-cf-extn-skills">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.skills">Skills</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-skills" type="text" name="skills" />
              </AvGroup>
              <AvGroup>
                <Label id="interestsLabel" for="wrkfrc-core-cf-extn-interests">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.interests">Interests</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-interests" type="text" name="interests" />
              </AvGroup>
              <AvGroup>
                <Label id="currentRoleLabel" for="wrkfrc-core-cf-extn-currentRole">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.currentRole">Current Role</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-currentRole" type="text" name="currentRole" />
              </AvGroup>
              <AvGroup>
                <Label id="prjWorkedLabel" for="wrkfrc-core-cf-extn-prjWorked">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.prjWorked">Prj Worked</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-prjWorked" type="text" name="prjWorked" />
              </AvGroup>
              <AvGroup>
                <Label id="educationLabel" for="wrkfrc-core-cf-extn-education">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.education">Education</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-education" type="text" name="education" />
              </AvGroup>
              <AvGroup>
                <Label id="persNoteLabel" for="wrkfrc-core-cf-extn-persNote">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.persNote">Pers Note</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-persNote" type="text" name="persNote" />
              </AvGroup>
              <AvGroup>
                <Label id="socialLinksLabel" for="wrkfrc-core-cf-extn-socialLinks">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.socialLinks">Social Links</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-extn-socialLinks" type="text" name="socialLinks" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/wrkfrc-core-cf-extn" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  wrkfrcCoreCfExtnEntity: storeState.wrkfrcCoreCfExtn.entity,
  loading: storeState.wrkfrcCoreCfExtn.loading,
  updating: storeState.wrkfrcCoreCfExtn.updating,
  updateSuccess: storeState.wrkfrcCoreCfExtn.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  setBlob,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WrkfrcCoreCfExtnUpdate);
