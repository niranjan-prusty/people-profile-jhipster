import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IWrkfrcCoreCfExtn } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf-extn.model';
import { getEntities as getWrkfrcCoreCfExtns } from 'app/entities/PeopleProfileMicroservices/wrkfrc-core-cf-extn/wrkfrc-core-cf-extn.reducer';
import { getEntities as getWrkfrcCoreCfs } from 'app/entities/PeopleProfileMicroservices/wrkfrc-core-cf/wrkfrc-core-cf.reducer';
import { getEntity, updateEntity, createEntity, reset } from './wrkfrc-core-cf.reducer';
import { IWrkfrcCoreCf } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IWrkfrcCoreCfUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WrkfrcCoreCfUpdate = (props: IWrkfrcCoreCfUpdateProps) => {
  const [wrkfrcCoreCfExtnId, setWrkfrcCoreCfExtnId] = useState('0');
  const [wrkfrcCoreCfId, setWrkfrcCoreCfId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { wrkfrcCoreCfEntity, wrkfrcCoreCfExtns, wrkfrcCoreCfs, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/wrkfrc-core-cf');
  };

  useEffect(() => {
    if (!isNew) {
      props.getEntity(props.match.params.id);
    }

    props.getWrkfrcCoreCfExtns();
    props.getWrkfrcCoreCfs();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.crtdDt = convertDateTimeToServer(values.crtdDt);
    values.mdfdD = convertDateTimeToServer(values.mdfdD);

    if (errors.length === 0) {
      const entity = {
        ...wrkfrcCoreCfEntity,
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
          <h2 id="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.home.createOrEditLabel">
            <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.home.createOrEditLabel">
              Create or edit a WrkfrcCoreCf
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : wrkfrcCoreCfEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="wrkfrc-core-cf-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="wrkfrc-core-cf-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="wrkfrcUniqIdValLabel" for="wrkfrc-core-cf-wrkfrcUniqIdVal">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcUniqIdVal">Wrkfrc Uniq Id Val</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-wrkfrcUniqIdVal" type="text" name="wrkfrcUniqIdVal" />
              </AvGroup>
              <AvGroup>
                <Label id="crtdDtLabel" for="wrkfrc-core-cf-crtdDt">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.crtdDt">Crtd Dt</Translate>
                </Label>
                <AvInput
                  id="wrkfrc-core-cf-crtdDt"
                  type="datetime-local"
                  className="form-control"
                  name="crtdDt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? null : convertDateTimeFromServer(props.wrkfrcCoreCfEntity.crtdDt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="mdfdDLabel" for="wrkfrc-core-cf-mdfdD">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.mdfdD">Mdfd D</Translate>
                </Label>
                <AvInput
                  id="wrkfrc-core-cf-mdfdD"
                  type="datetime-local"
                  className="form-control"
                  name="mdfdD"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? null : convertDateTimeFromServer(props.wrkfrcCoreCfEntity.mdfdD)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="frstNmLabel" for="wrkfrc-core-cf-frstNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.frstNm">Frst Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-frstNm" type="text" name="frstNm" />
              </AvGroup>
              <AvGroup>
                <Label id="sevFrstNmLabel" for="wrkfrc-core-cf-sevFrstNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.sevFrstNm">Sev Frst Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-sevFrstNm" type="text" name="sevFrstNm" />
              </AvGroup>
              <AvGroup>
                <Label id="midlNmLabel" for="wrkfrc-core-cf-midlNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.midlNm">Midl Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-midlNm" type="text" name="midlNm" />
              </AvGroup>
              <AvGroup>
                <Label id="secLastNmLabel" for="wrkfrc-core-cf-secLastNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.secLastNm">Sec Last Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-secLastNm" type="text" name="secLastNm" />
              </AvGroup>
              <AvGroup>
                <Label id="lastNmLabel" for="wrkfrc-core-cf-lastNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.lastNm">Last Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-lastNm" type="text" name="lastNm" />
              </AvGroup>
              <AvGroup>
                <Label id="wrkfrcPrfrdNmLabel" for="wrkfrc-core-cf-wrkfrcPrfrdNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcPrfrdNm">Wrkfrc Prfrd Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-wrkfrcPrfrdNm" type="text" name="wrkfrcPrfrdNm" />
              </AvGroup>
              <AvGroup>
                <Label id="wrkfrcPrfrdLmLabel" for="wrkfrc-core-cf-wrkfrcPrfrdLm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcPrfrdLm">Wrkfrc Prfrd Lm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-wrkfrcPrfrdLm" type="text" name="wrkfrcPrfrdLm" />
              </AvGroup>
              <AvGroup>
                <Label id="pstnTtlNmLabel" for="wrkfrc-core-cf-pstnTtlNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.pstnTtlNm">Pstn Ttl Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-pstnTtlNm" type="text" name="pstnTtlNm" />
              </AvGroup>
              <AvGroup>
                <Label id="scrtrIdLabel" for="wrkfrc-core-cf-scrtrId">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.scrtrId">Scrtr Id</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-scrtrId" type="text" name="scrtrId" />
              </AvGroup>
              <AvGroup>
                <Label id="sctrNmLabel" for="wrkfrc-core-cf-sctrNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.sctrNm">Sctr Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-sctrNm" type="text" name="sctrNm" />
              </AvGroup>
              <AvGroup>
                <Label id="divsnIdLabel" for="wrkfrc-core-cf-divsnId">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.divsnId">Divsn Id</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-divsnId" type="text" name="divsnId" />
              </AvGroup>
              <AvGroup>
                <Label id="divsnNmLabel" for="wrkfrc-core-cf-divsnNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.divsnNm">Divsn Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-divsnNm" type="text" name="divsnNm" />
              </AvGroup>
              <AvGroup>
                <Label id="rgnIdLabel" for="wrkfrc-core-cf-rgnId">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.rgnId">Rgn Id</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-rgnId" type="text" name="rgnId" />
              </AvGroup>
              <AvGroup>
                <Label id="rgnNmLabel" for="wrkfrc-core-cf-rgnNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.rgnNm">Rgn Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-rgnNm" type="text" name="rgnNm" />
              </AvGroup>
              <AvGroup>
                <Label id="buIdLabel" for="wrkfrc-core-cf-buId">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.buId">Bu Id</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-buId" type="text" name="buId" />
              </AvGroup>
              <AvGroup>
                <Label id="buNmLabel" for="wrkfrc-core-cf-buNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.buNm">Bu Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-buNm" type="text" name="buNm" />
              </AvGroup>
              <AvGroup>
                <Label id="muIdLabel" for="wrkfrc-core-cf-muId">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.muId">Mu Id</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-muId" type="text" name="muId" />
              </AvGroup>
              <AvGroup>
                <Label id="muNmLabel" for="wrkfrc-core-cf-muNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.muNm">Mu Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-muNm" type="text" name="muNm" />
              </AvGroup>
              <AvGroup>
                <Label id="jobFnctnCdvLabel" for="wrkfrc-core-cf-jobFnctnCdv">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobFnctnCdv">Job Fnctn Cdv</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-jobFnctnCdv" type="text" name="jobFnctnCdv" />
              </AvGroup>
              <AvGroup>
                <Label id="jobFnctnNmLabel" for="wrkfrc-core-cf-jobFnctnNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobFnctnNm">Job Fnctn Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-jobFnctnNm" type="text" name="jobFnctnNm" />
              </AvGroup>
              <AvGroup>
                <Label id="jobSbfnctnCdvLabel" for="wrkfrc-core-cf-jobSbfnctnCdv">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobSbfnctnCdv">Job Sbfnctn Cdv</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-jobSbfnctnCdv" type="text" name="jobSbfnctnCdv" />
              </AvGroup>
              <AvGroup>
                <Label id="jobSbfnctnNmLabel" for="wrkfrc-core-cf-jobSbfnctnNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobSbfnctnNm">Job Sbfnctn Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-jobSbfnctnNm" type="text" name="jobSbfnctnNm" />
              </AvGroup>
              <AvGroup>
                <Label id="mngrIdLabel" for="wrkfrc-core-cf-mngrId">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.mngrId">Mngr Id</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-mngrId" type="text" name="mngrId" />
              </AvGroup>
              <AvGroup>
                <Label id="busDeskTelnmLabel" for="wrkfrc-core-cf-busDeskTelnm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.busDeskTelnm">Bus Desk Telnm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-busDeskTelnm" type="text" name="busDeskTelnm" />
              </AvGroup>
              <AvGroup>
                <Label id="busCellTelnmLabel" for="wrkfrc-core-cf-busCellTelnm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.busCellTelnm">Bus Cell Telnm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-busCellTelnm" type="text" name="busCellTelnm" />
              </AvGroup>
              <AvGroup>
                <Label id="faxTelnmLabel" for="wrkfrc-core-cf-faxTelnm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.faxTelnm">Fax Telnm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-faxTelnm" type="text" name="faxTelnm" />
              </AvGroup>
              <AvGroup>
                <Label id="wrkfrcEmailAddrValLabel" for="wrkfrc-core-cf-wrkfrcEmailAddrVal">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcEmailAddrVal">
                    Wrkfrc Email Addr Val
                  </Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-wrkfrcEmailAddrVal" type="text" name="wrkfrcEmailAddrVal" />
              </AvGroup>
              <AvGroup>
                <Label id="locNmLabel" for="wrkfrc-core-cf-locNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locNm">Loc Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locNm" type="text" name="locNm" />
              </AvGroup>
              <AvGroup>
                <Label id="locAddrLn1TxtLabel" for="wrkfrc-core-cf-locAddrLn1Txt">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn1Txt">Loc Addr Ln 1 Txt</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locAddrLn1Txt" type="text" name="locAddrLn1Txt" />
              </AvGroup>
              <AvGroup>
                <Label id="locAddrLn2TxtLabel" for="wrkfrc-core-cf-locAddrLn2Txt">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn2Txt">Loc Addr Ln 2 Txt</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locAddrLn2Txt" type="text" name="locAddrLn2Txt" />
              </AvGroup>
              <AvGroup>
                <Label id="locAddrLn3TxtLabel" for="wrkfrc-core-cf-locAddrLn3Txt">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn3Txt">Loc Addr Ln 3 Txt</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locAddrLn3Txt" type="text" name="locAddrLn3Txt" />
              </AvGroup>
              <AvGroup>
                <Label id="locAddrLn4TxtLabel" for="wrkfrc-core-cf-locAddrLn4Txt">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn4Txt">Loc Addr Ln 4 Txt</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locAddrLn4Txt" type="text" name="locAddrLn4Txt" />
              </AvGroup>
              <AvGroup>
                <Label id="locCityNmLabel" for="wrkfrc-core-cf-locCityNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCityNm">Loc City Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locCityNm" type="text" name="locCityNm" />
              </AvGroup>
              <AvGroup>
                <Label id="locPstlAreaValLabel" for="wrkfrc-core-cf-locPstlAreaVal">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locPstlAreaVal">Loc Pstl Area Val</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locPstlAreaVal" type="text" name="locPstlAreaVal" />
              </AvGroup>
              <AvGroup>
                <Label id="locTerrCdvLabel" for="wrkfrc-core-cf-locTerrCdv">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTerrCdv">Loc Terr Cdv</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locTerrCdv" type="text" name="locTerrCdv" />
              </AvGroup>
              <AvGroup>
                <Label id="locTerrNmLabel" for="wrkfrc-core-cf-locTerrNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTerrNm">Loc Terr Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locTerrNm" type="text" name="locTerrNm" />
              </AvGroup>
              <AvGroup>
                <Label id="locCtryCdvLabel" for="wrkfrc-core-cf-locCtryCdv">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCtryCdv">Loc Ctry Cdv</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locCtryCdv" type="text" name="locCtryCdv" />
              </AvGroup>
              <AvGroup>
                <Label id="locCtryNmLabel" for="wrkfrc-core-cf-locCtryNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCtryNm">Loc Ctry Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locCtryNm" type="text" name="locCtryNm" />
              </AvGroup>
              <AvGroup>
                <Label id="cntrctrWrksiteCtryValLabel" for="wrkfrc-core-cf-cntrctrWrksiteCtryVal">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.cntrctrWrksiteCtryVal">
                    Cntrctr Wrksite Ctry Val
                  </Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-cntrctrWrksiteCtryVal" type="text" name="cntrctrWrksiteCtryVal" />
              </AvGroup>
              <AvGroup>
                <Label id="locTmznNmLabel" for="wrkfrc-core-cf-locTmznNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTmznNm">Loc Tmzn Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-locTmznNm" type="text" name="locTmznNm" />
              </AvGroup>
              <AvGroup>
                <Label id="langPrfrdIsoNmLabel" for="wrkfrc-core-cf-langPrfrdIsoNm">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.langPrfrdIsoNm">Lang Prfrd Iso Nm</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-langPrfrdIsoNm" type="text" name="langPrfrdIsoNm" />
              </AvGroup>
              <AvGroup>
                <Label id="wrkfrcHireDtLabel" for="wrkfrc-core-cf-wrkfrcHireDt">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcHireDt">Wrkfrc Hire Dt</Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-wrkfrcHireDt" type="text" name="wrkfrcHireDt" />
              </AvGroup>
              <AvGroup>
                <Label id="wrkfrcOrignlHireDtLabel" for="wrkfrc-core-cf-wrkfrcOrignlHireDt">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcOrignlHireDt">
                    Wrkfrc Orignl Hire Dt
                  </Translate>
                </Label>
                <AvField id="wrkfrc-core-cf-wrkfrcOrignlHireDt" type="text" name="wrkfrcOrignlHireDt" />
              </AvGroup>
              <AvGroup>
                <Label for="wrkfrc-core-cf-wrkfrcCoreCfExtn">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcCoreCfExtn">Wrkfrc Core Cf Extn</Translate>
                </Label>
                <AvInput id="wrkfrc-core-cf-wrkfrcCoreCfExtn" type="select" className="form-control" name="wrkfrcCoreCfExtn.id">
                  <option value="" key="0" />
                  {wrkfrcCoreCfExtns
                    ? wrkfrcCoreCfExtns.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="wrkfrc-core-cf-wrkfrcCoreCf">
                  <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcCoreCf">Wrkfrc Core Cf</Translate>
                </Label>
                <AvInput id="wrkfrc-core-cf-wrkfrcCoreCf" type="select" className="form-control" name="wrkfrcCoreCf.id">
                  <option value="" key="0" />
                  {wrkfrcCoreCfs
                    ? wrkfrcCoreCfs.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.mngrId}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/wrkfrc-core-cf" replace color="info">
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
  wrkfrcCoreCfExtns: storeState.wrkfrcCoreCfExtn.entities,
  wrkfrcCoreCfs: storeState.wrkfrcCoreCf.entities,
  wrkfrcCoreCfEntity: storeState.wrkfrcCoreCf.entity,
  loading: storeState.wrkfrcCoreCf.loading,
  updating: storeState.wrkfrcCoreCf.updating,
  updateSuccess: storeState.wrkfrcCoreCf.updateSuccess
});

const mapDispatchToProps = {
  getWrkfrcCoreCfExtns,
  getWrkfrcCoreCfs,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WrkfrcCoreCfUpdate);
