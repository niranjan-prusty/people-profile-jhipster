import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './wrkfrc-core-cf-extn.reducer';
import { IWrkfrcCoreCfExtn } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf-extn.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IWrkfrcCoreCfExtnDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WrkfrcCoreCfExtnDetail = (props: IWrkfrcCoreCfExtnDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { wrkfrcCoreCfExtnEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.detail.title">WrkfrcCoreCfExtn</Translate> [
          <b>{wrkfrcCoreCfExtnEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="idFk">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.idFk">Id Fk</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.idFk}</dd>
          <dt>
            <span id="funGroup">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.funGroup">Fun Group</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.funGroup}</dd>
          <dt>
            <span id="building">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.building">Building</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.building}</dd>
          <dt>
            <span id="floor">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.floor">Floor</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.floor}</dd>
          <dt>
            <span id="mailDrop">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.mailDrop">Mail Drop</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.mailDrop}</dd>
          <dt>
            <span id="assistant">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.assistant">Assistant</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.assistant}</dd>
          <dt>
            <span id="altContactMobile">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactMobile">Alt Contact Mobile</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.altContactMobile}</dd>
          <dt>
            <span id="altContactEmail">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactEmail">Alt Contact Email</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.altContactEmail}</dd>
          <dt>
            <span id="altContactName">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactName">Alt Contact Name</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.altContactName}</dd>
          <dt>
            <span id="altPhoneNum">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altPhoneNum">Alt Phone Num</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.altPhoneNum}</dd>
          <dt>
            <span id="altLocNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altLocNm">Alt Loc Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.altLocNm}</dd>
          <dt>
            <span id="ergMemberships">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.ergMemberships">Erg Memberships</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.ergMemberships}</dd>
          <dt>
            <span id="pepsicoNetworks">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.pepsicoNetworks">Pepsico Networks</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.pepsicoNetworks}</dd>
          <dt>
            <span id="hobbies">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hobbies">Hobbies</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.hobbies}</dd>
          <dt>
            <span id="birthday">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.birthday">Birthday</Translate>
            </span>
          </dt>
          <dd>
            <TextFormat value={wrkfrcCoreCfExtnEntity.birthday} type="date" format={APP_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="photo">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.photo">Photo</Translate>
            </span>
          </dt>
          <dd>
            {wrkfrcCoreCfExtnEntity.photo ? (
              <div>
                <a onClick={openFile(wrkfrcCoreCfExtnEntity.photoContentType, wrkfrcCoreCfExtnEntity.photo)}>
                  <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                </a>
                <span>
                  {wrkfrcCoreCfExtnEntity.photoContentType}, {byteSize(wrkfrcCoreCfExtnEntity.photo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="photoExt">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.photoExt">Photo Ext</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.photoExt}</dd>
          <dt>
            <span id="hometown">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hometown">Hometown</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.hometown}</dd>
          <dt>
            <span id="hireDate">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hireDate">Hire Date</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.hireDate}</dd>
          <dt>
            <span id="skills">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.skills">Skills</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.skills}</dd>
          <dt>
            <span id="interests">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.interests">Interests</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.interests}</dd>
          <dt>
            <span id="currentRole">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.currentRole">Current Role</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.currentRole}</dd>
          <dt>
            <span id="prjWorked">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.prjWorked">Prj Worked</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.prjWorked}</dd>
          <dt>
            <span id="education">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.education">Education</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.education}</dd>
          <dt>
            <span id="persNote">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.persNote">Pers Note</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.persNote}</dd>
          <dt>
            <span id="socialLinks">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.socialLinks">Social Links</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfExtnEntity.socialLinks}</dd>
        </dl>
        <Button tag={Link} to="/wrkfrc-core-cf-extn" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/wrkfrc-core-cf-extn/${wrkfrcCoreCfExtnEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ wrkfrcCoreCfExtn }: IRootState) => ({
  wrkfrcCoreCfExtnEntity: wrkfrcCoreCfExtn.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WrkfrcCoreCfExtnDetail);
