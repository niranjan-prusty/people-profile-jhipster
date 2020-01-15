import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './wrkfrc-core-cf.reducer';
import { IWrkfrcCoreCf } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IWrkfrcCoreCfDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WrkfrcCoreCfDetail = (props: IWrkfrcCoreCfDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { wrkfrcCoreCfEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.detail.title">WrkfrcCoreCf</Translate> [
          <b>{wrkfrcCoreCfEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="wrkfrcUniqIdVal">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcUniqIdVal">Wrkfrc Uniq Id Val</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.wrkfrcUniqIdVal}</dd>
          <dt>
            <span id="crtdDt">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.crtdDt">Crtd Dt</Translate>
            </span>
          </dt>
          <dd>
            <TextFormat value={wrkfrcCoreCfEntity.crtdDt} type="date" format={APP_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="mdfdD">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.mdfdD">Mdfd D</Translate>
            </span>
          </dt>
          <dd>
            <TextFormat value={wrkfrcCoreCfEntity.mdfdD} type="date" format={APP_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="frstNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.frstNm">Frst Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.frstNm}</dd>
          <dt>
            <span id="sevFrstNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.sevFrstNm">Sev Frst Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.sevFrstNm}</dd>
          <dt>
            <span id="midlNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.midlNm">Midl Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.midlNm}</dd>
          <dt>
            <span id="secLastNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.secLastNm">Sec Last Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.secLastNm}</dd>
          <dt>
            <span id="lastNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.lastNm">Last Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.lastNm}</dd>
          <dt>
            <span id="wrkfrcPrfrdNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcPrfrdNm">Wrkfrc Prfrd Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.wrkfrcPrfrdNm}</dd>
          <dt>
            <span id="wrkfrcPrfrdLm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcPrfrdLm">Wrkfrc Prfrd Lm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.wrkfrcPrfrdLm}</dd>
          <dt>
            <span id="pstnTtlNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.pstnTtlNm">Pstn Ttl Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.pstnTtlNm}</dd>
          <dt>
            <span id="scrtrId">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.scrtrId">Scrtr Id</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.scrtrId}</dd>
          <dt>
            <span id="sctrNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.sctrNm">Sctr Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.sctrNm}</dd>
          <dt>
            <span id="divsnId">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.divsnId">Divsn Id</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.divsnId}</dd>
          <dt>
            <span id="divsnNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.divsnNm">Divsn Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.divsnNm}</dd>
          <dt>
            <span id="rgnId">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.rgnId">Rgn Id</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.rgnId}</dd>
          <dt>
            <span id="rgnNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.rgnNm">Rgn Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.rgnNm}</dd>
          <dt>
            <span id="buId">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.buId">Bu Id</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.buId}</dd>
          <dt>
            <span id="buNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.buNm">Bu Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.buNm}</dd>
          <dt>
            <span id="muId">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.muId">Mu Id</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.muId}</dd>
          <dt>
            <span id="muNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.muNm">Mu Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.muNm}</dd>
          <dt>
            <span id="jobFnctnCdv">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobFnctnCdv">Job Fnctn Cdv</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.jobFnctnCdv}</dd>
          <dt>
            <span id="jobFnctnNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobFnctnNm">Job Fnctn Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.jobFnctnNm}</dd>
          <dt>
            <span id="jobSbfnctnCdv">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobSbfnctnCdv">Job Sbfnctn Cdv</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.jobSbfnctnCdv}</dd>
          <dt>
            <span id="jobSbfnctnNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobSbfnctnNm">Job Sbfnctn Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.jobSbfnctnNm}</dd>
          <dt>
            <span id="mngrId">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.mngrId">Mngr Id</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.mngrId}</dd>
          <dt>
            <span id="busDeskTelnm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.busDeskTelnm">Bus Desk Telnm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.busDeskTelnm}</dd>
          <dt>
            <span id="busCellTelnm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.busCellTelnm">Bus Cell Telnm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.busCellTelnm}</dd>
          <dt>
            <span id="faxTelnm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.faxTelnm">Fax Telnm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.faxTelnm}</dd>
          <dt>
            <span id="wrkfrcEmailAddrVal">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcEmailAddrVal">Wrkfrc Email Addr Val</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.wrkfrcEmailAddrVal}</dd>
          <dt>
            <span id="locNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locNm">Loc Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locNm}</dd>
          <dt>
            <span id="locAddrLn1Txt">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn1Txt">Loc Addr Ln 1 Txt</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locAddrLn1Txt}</dd>
          <dt>
            <span id="locAddrLn2Txt">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn2Txt">Loc Addr Ln 2 Txt</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locAddrLn2Txt}</dd>
          <dt>
            <span id="locAddrLn3Txt">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn3Txt">Loc Addr Ln 3 Txt</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locAddrLn3Txt}</dd>
          <dt>
            <span id="locAddrLn4Txt">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn4Txt">Loc Addr Ln 4 Txt</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locAddrLn4Txt}</dd>
          <dt>
            <span id="locCityNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCityNm">Loc City Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locCityNm}</dd>
          <dt>
            <span id="locPstlAreaVal">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locPstlAreaVal">Loc Pstl Area Val</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locPstlAreaVal}</dd>
          <dt>
            <span id="locTerrCdv">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTerrCdv">Loc Terr Cdv</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locTerrCdv}</dd>
          <dt>
            <span id="locTerrNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTerrNm">Loc Terr Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locTerrNm}</dd>
          <dt>
            <span id="locCtryCdv">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCtryCdv">Loc Ctry Cdv</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locCtryCdv}</dd>
          <dt>
            <span id="locCtryNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCtryNm">Loc Ctry Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locCtryNm}</dd>
          <dt>
            <span id="cntrctrWrksiteCtryVal">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.cntrctrWrksiteCtryVal">
                Cntrctr Wrksite Ctry Val
              </Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.cntrctrWrksiteCtryVal}</dd>
          <dt>
            <span id="locTmznNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTmznNm">Loc Tmzn Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.locTmznNm}</dd>
          <dt>
            <span id="langPrfrdIsoNm">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.langPrfrdIsoNm">Lang Prfrd Iso Nm</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.langPrfrdIsoNm}</dd>
          <dt>
            <span id="wrkfrcHireDt">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcHireDt">Wrkfrc Hire Dt</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.wrkfrcHireDt}</dd>
          <dt>
            <span id="wrkfrcOrignlHireDt">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcOrignlHireDt">Wrkfrc Orignl Hire Dt</Translate>
            </span>
          </dt>
          <dd>{wrkfrcCoreCfEntity.wrkfrcOrignlHireDt}</dd>
          <dt>
            <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcCoreCfExtn">Wrkfrc Core Cf Extn</Translate>
          </dt>
          <dd>{wrkfrcCoreCfEntity.wrkfrcCoreCfExtn ? wrkfrcCoreCfEntity.wrkfrcCoreCfExtn.id : ''}</dd>
          <dt>
            <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcCoreCf">Wrkfrc Core Cf</Translate>
          </dt>
          <dd>{wrkfrcCoreCfEntity.wrkfrcCoreCf ? wrkfrcCoreCfEntity.wrkfrcCoreCf.mngrId : ''}</dd>
        </dl>
        <Button tag={Link} to="/wrkfrc-core-cf" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/wrkfrc-core-cf/${wrkfrcCoreCfEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ wrkfrcCoreCf }: IRootState) => ({
  wrkfrcCoreCfEntity: wrkfrcCoreCf.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WrkfrcCoreCfDetail);
