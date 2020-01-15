import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities, reset } from './wrkfrc-core-cf.reducer';
import { IWrkfrcCoreCf } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IWrkfrcCoreCfProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const WrkfrcCoreCf = (props: IWrkfrcCoreCfProps) => {
  const [paginationState, setPaginationState] = useState(getSortState(props.location, ITEMS_PER_PAGE));
  const [sorting, setSorting] = useState(false);

  const getAllEntities = () => {
    props.getEntities(paginationState.activePage - 1, paginationState.itemsPerPage, `${paginationState.sort},${paginationState.order}`);
  };

  const resetAll = () => {
    props.reset();
    setPaginationState({
      ...paginationState,
      activePage: 1
    });
  };

  useEffect(() => {
    resetAll();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      getAllEntities();
    }
  });

  useEffect(() => {
    getAllEntities();
  }, [paginationState.activePage]);

  const handleLoadMore = () => {
    if (window.pageYOffset > 0) {
      setPaginationState({
        ...paginationState,
        activePage: paginationState.activePage + 1
      });
    }
  };

  useEffect(() => {
    if (sorting) {
      getAllEntities();
      setSorting(false);
    }
  }, [sorting]);

  const sort = p => () => {
    props.reset();
    setPaginationState({
      ...paginationState,
      activePage: 1,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p
    });
    setSorting(true);
  };

  const { wrkfrcCoreCfList, match } = props;
  return (
    <div>
      <h2 id="wrkfrc-core-cf-heading">
        <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.home.title">Wrkfrc Core Cfs</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.home.createLabel">Create new Wrkfrc Core Cf</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        <InfiniteScroll
          pageStart={paginationState.activePage}
          loadMore={handleLoadMore}
          hasMore={paginationState.activePage - 1 < props.links.next}
          loader={<div className="loader">Loading ...</div>}
          threshold={0}
          initialLoad={false}
        >
          {wrkfrcCoreCfList && wrkfrcCoreCfList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={sort('id')}>
                    <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('wrkfrcUniqIdVal')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcUniqIdVal">Wrkfrc Uniq Id Val</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('crtdDt')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.crtdDt">Crtd Dt</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('mdfdD')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.mdfdD">Mdfd D</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('frstNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.frstNm">Frst Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('sevFrstNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.sevFrstNm">Sev Frst Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('midlNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.midlNm">Midl Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('secLastNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.secLastNm">Sec Last Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('lastNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.lastNm">Last Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('wrkfrcPrfrdNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcPrfrdNm">Wrkfrc Prfrd Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('wrkfrcPrfrdLm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcPrfrdLm">Wrkfrc Prfrd Lm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('pstnTtlNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.pstnTtlNm">Pstn Ttl Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('scrtrId')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.scrtrId">Scrtr Id</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('sctrNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.sctrNm">Sctr Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('divsnId')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.divsnId">Divsn Id</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('divsnNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.divsnNm">Divsn Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('rgnId')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.rgnId">Rgn Id</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('rgnNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.rgnNm">Rgn Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('buId')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.buId">Bu Id</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('buNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.buNm">Bu Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('muId')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.muId">Mu Id</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('muNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.muNm">Mu Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('jobFnctnCdv')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobFnctnCdv">Job Fnctn Cdv</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('jobFnctnNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobFnctnNm">Job Fnctn Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('jobSbfnctnCdv')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobSbfnctnCdv">Job Sbfnctn Cdv</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('jobSbfnctnNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.jobSbfnctnNm">Job Sbfnctn Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('mngrId')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.mngrId">Mngr Id</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('busDeskTelnm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.busDeskTelnm">Bus Desk Telnm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('busCellTelnm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.busCellTelnm">Bus Cell Telnm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('faxTelnm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.faxTelnm">Fax Telnm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('wrkfrcEmailAddrVal')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcEmailAddrVal">
                      Wrkfrc Email Addr Val
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locNm">Loc Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locAddrLn1Txt')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn1Txt">Loc Addr Ln 1 Txt</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locAddrLn2Txt')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn2Txt">Loc Addr Ln 2 Txt</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locAddrLn3Txt')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn3Txt">Loc Addr Ln 3 Txt</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locAddrLn4Txt')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locAddrLn4Txt">Loc Addr Ln 4 Txt</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locCityNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCityNm">Loc City Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locPstlAreaVal')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locPstlAreaVal">Loc Pstl Area Val</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locTerrCdv')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTerrCdv">Loc Terr Cdv</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locTerrNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTerrNm">Loc Terr Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locCtryCdv')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCtryCdv">Loc Ctry Cdv</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locCtryNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locCtryNm">Loc Ctry Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('cntrctrWrksiteCtryVal')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.cntrctrWrksiteCtryVal">
                      Cntrctr Wrksite Ctry Val
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locTmznNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.locTmznNm">Loc Tmzn Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('langPrfrdIsoNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.langPrfrdIsoNm">Lang Prfrd Iso Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('wrkfrcHireDt')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcHireDt">Wrkfrc Hire Dt</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('wrkfrcOrignlHireDt')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcOrignlHireDt">
                      Wrkfrc Orignl Hire Dt
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcCoreCfExtn">
                      Wrkfrc Core Cf Extn
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.wrkfrcCoreCf">Wrkfrc Core Cf</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {wrkfrcCoreCfList.map((wrkfrcCoreCf, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${wrkfrcCoreCf.id}`} color="link" size="sm">
                        {wrkfrcCoreCf.id}
                      </Button>
                    </td>
                    <td>{wrkfrcCoreCf.wrkfrcUniqIdVal}</td>
                    <td>
                      <TextFormat type="date" value={wrkfrcCoreCf.crtdDt} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={wrkfrcCoreCf.mdfdD} format={APP_DATE_FORMAT} />
                    </td>
                    <td>{wrkfrcCoreCf.frstNm}</td>
                    <td>{wrkfrcCoreCf.sevFrstNm}</td>
                    <td>{wrkfrcCoreCf.midlNm}</td>
                    <td>{wrkfrcCoreCf.secLastNm}</td>
                    <td>{wrkfrcCoreCf.lastNm}</td>
                    <td>{wrkfrcCoreCf.wrkfrcPrfrdNm}</td>
                    <td>{wrkfrcCoreCf.wrkfrcPrfrdLm}</td>
                    <td>{wrkfrcCoreCf.pstnTtlNm}</td>
                    <td>{wrkfrcCoreCf.scrtrId}</td>
                    <td>{wrkfrcCoreCf.sctrNm}</td>
                    <td>{wrkfrcCoreCf.divsnId}</td>
                    <td>{wrkfrcCoreCf.divsnNm}</td>
                    <td>{wrkfrcCoreCf.rgnId}</td>
                    <td>{wrkfrcCoreCf.rgnNm}</td>
                    <td>{wrkfrcCoreCf.buId}</td>
                    <td>{wrkfrcCoreCf.buNm}</td>
                    <td>{wrkfrcCoreCf.muId}</td>
                    <td>{wrkfrcCoreCf.muNm}</td>
                    <td>{wrkfrcCoreCf.jobFnctnCdv}</td>
                    <td>{wrkfrcCoreCf.jobFnctnNm}</td>
                    <td>{wrkfrcCoreCf.jobSbfnctnCdv}</td>
                    <td>{wrkfrcCoreCf.jobSbfnctnNm}</td>
                    <td>{wrkfrcCoreCf.mngrId}</td>
                    <td>{wrkfrcCoreCf.busDeskTelnm}</td>
                    <td>{wrkfrcCoreCf.busCellTelnm}</td>
                    <td>{wrkfrcCoreCf.faxTelnm}</td>
                    <td>{wrkfrcCoreCf.wrkfrcEmailAddrVal}</td>
                    <td>{wrkfrcCoreCf.locNm}</td>
                    <td>{wrkfrcCoreCf.locAddrLn1Txt}</td>
                    <td>{wrkfrcCoreCf.locAddrLn2Txt}</td>
                    <td>{wrkfrcCoreCf.locAddrLn3Txt}</td>
                    <td>{wrkfrcCoreCf.locAddrLn4Txt}</td>
                    <td>{wrkfrcCoreCf.locCityNm}</td>
                    <td>{wrkfrcCoreCf.locPstlAreaVal}</td>
                    <td>{wrkfrcCoreCf.locTerrCdv}</td>
                    <td>{wrkfrcCoreCf.locTerrNm}</td>
                    <td>{wrkfrcCoreCf.locCtryCdv}</td>
                    <td>{wrkfrcCoreCf.locCtryNm}</td>
                    <td>{wrkfrcCoreCf.cntrctrWrksiteCtryVal}</td>
                    <td>{wrkfrcCoreCf.locTmznNm}</td>
                    <td>{wrkfrcCoreCf.langPrfrdIsoNm}</td>
                    <td>{wrkfrcCoreCf.wrkfrcHireDt}</td>
                    <td>{wrkfrcCoreCf.wrkfrcOrignlHireDt}</td>
                    <td>
                      {wrkfrcCoreCf.wrkfrcCoreCfExtn ? (
                        <Link to={`wrkfrc-core-cf-extn/${wrkfrcCoreCf.wrkfrcCoreCfExtn.id}`}>{wrkfrcCoreCf.wrkfrcCoreCfExtn.id}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {wrkfrcCoreCf.wrkfrcCoreCf ? (
                        <Link to={`wrkfrc-core-cf/${wrkfrcCoreCf.wrkfrcCoreCf.id}`}>{wrkfrcCoreCf.wrkfrcCoreCf.mngrId}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${wrkfrcCoreCf.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${wrkfrcCoreCf.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${wrkfrcCoreCf.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.home.notFound">No Wrkfrc Core Cfs found</Translate>
            </div>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

const mapStateToProps = ({ wrkfrcCoreCf }: IRootState) => ({
  wrkfrcCoreCfList: wrkfrcCoreCf.entities,
  totalItems: wrkfrcCoreCf.totalItems,
  links: wrkfrcCoreCf.links,
  entity: wrkfrcCoreCf.entity,
  updateSuccess: wrkfrcCoreCf.updateSuccess
});

const mapDispatchToProps = {
  getEntities,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WrkfrcCoreCf);
