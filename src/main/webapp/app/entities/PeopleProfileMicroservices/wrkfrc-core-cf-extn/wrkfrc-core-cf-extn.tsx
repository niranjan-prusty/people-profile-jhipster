import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities, reset } from './wrkfrc-core-cf-extn.reducer';
import { IWrkfrcCoreCfExtn } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf-extn.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IWrkfrcCoreCfExtnProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const WrkfrcCoreCfExtn = (props: IWrkfrcCoreCfExtnProps) => {
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

  const { wrkfrcCoreCfExtnList, match } = props;
  return (
    <div>
      <h2 id="wrkfrc-core-cf-extn-heading">
        <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.home.title">Wrkfrc Core Cf Extns</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.home.createLabel">
            Create new Wrkfrc Core Cf Extn
          </Translate>
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
          {wrkfrcCoreCfExtnList && wrkfrcCoreCfExtnList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={sort('id')}>
                    <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('idFk')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.idFk">Id Fk</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('funGroup')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.funGroup">Fun Group</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('building')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.building">Building</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('floor')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.floor">Floor</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('mailDrop')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.mailDrop">Mail Drop</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('assistant')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.assistant">Assistant</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('altContactMobile')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactMobile">
                      Alt Contact Mobile
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('altContactEmail')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactEmail">
                      Alt Contact Email
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('altContactName')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altContactName">Alt Contact Name</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('altPhoneNum')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altPhoneNum">Alt Phone Num</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('altLocNm')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.altLocNm">Alt Loc Nm</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('ergMemberships')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.ergMemberships">Erg Memberships</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('pepsicoNetworks')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.pepsicoNetworks">
                      Pepsico Networks
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('hobbies')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hobbies">Hobbies</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('birthday')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.birthday">Birthday</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('photo')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.photo">Photo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('photoExt')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.photoExt">Photo Ext</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('hometown')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hometown">Hometown</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('hireDate')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.hireDate">Hire Date</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('skills')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.skills">Skills</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('interests')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.interests">Interests</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('currentRole')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.currentRole">Current Role</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('prjWorked')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.prjWorked">Prj Worked</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('education')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.education">Education</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('persNote')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.persNote">Pers Note</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('socialLinks')}>
                    <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.socialLinks">Social Links</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {wrkfrcCoreCfExtnList.map((wrkfrcCoreCfExtn, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${wrkfrcCoreCfExtn.id}`} color="link" size="sm">
                        {wrkfrcCoreCfExtn.id}
                      </Button>
                    </td>
                    <td>{wrkfrcCoreCfExtn.idFk}</td>
                    <td>{wrkfrcCoreCfExtn.funGroup}</td>
                    <td>{wrkfrcCoreCfExtn.building}</td>
                    <td>{wrkfrcCoreCfExtn.floor}</td>
                    <td>{wrkfrcCoreCfExtn.mailDrop}</td>
                    <td>{wrkfrcCoreCfExtn.assistant}</td>
                    <td>{wrkfrcCoreCfExtn.altContactMobile}</td>
                    <td>{wrkfrcCoreCfExtn.altContactEmail}</td>
                    <td>{wrkfrcCoreCfExtn.altContactName}</td>
                    <td>{wrkfrcCoreCfExtn.altPhoneNum}</td>
                    <td>{wrkfrcCoreCfExtn.altLocNm}</td>
                    <td>{wrkfrcCoreCfExtn.ergMemberships}</td>
                    <td>{wrkfrcCoreCfExtn.pepsicoNetworks}</td>
                    <td>{wrkfrcCoreCfExtn.hobbies}</td>
                    <td>
                      <TextFormat type="date" value={wrkfrcCoreCfExtn.birthday} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      {wrkfrcCoreCfExtn.photo ? (
                        <div>
                          <a onClick={openFile(wrkfrcCoreCfExtn.photoContentType, wrkfrcCoreCfExtn.photo)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {wrkfrcCoreCfExtn.photoContentType}, {byteSize(wrkfrcCoreCfExtn.photo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>{wrkfrcCoreCfExtn.photoExt}</td>
                    <td>{wrkfrcCoreCfExtn.hometown}</td>
                    <td>{wrkfrcCoreCfExtn.hireDate}</td>
                    <td>{wrkfrcCoreCfExtn.skills}</td>
                    <td>{wrkfrcCoreCfExtn.interests}</td>
                    <td>{wrkfrcCoreCfExtn.currentRole}</td>
                    <td>{wrkfrcCoreCfExtn.prjWorked}</td>
                    <td>{wrkfrcCoreCfExtn.education}</td>
                    <td>{wrkfrcCoreCfExtn.persNote}</td>
                    <td>{wrkfrcCoreCfExtn.socialLinks}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${wrkfrcCoreCfExtn.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${wrkfrcCoreCfExtn.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${wrkfrcCoreCfExtn.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.home.notFound">
                No Wrkfrc Core Cf Extns found
              </Translate>
            </div>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

const mapStateToProps = ({ wrkfrcCoreCfExtn }: IRootState) => ({
  wrkfrcCoreCfExtnList: wrkfrcCoreCfExtn.entities,
  totalItems: wrkfrcCoreCfExtn.totalItems,
  links: wrkfrcCoreCfExtn.links,
  entity: wrkfrcCoreCfExtn.entity,
  updateSuccess: wrkfrcCoreCfExtn.updateSuccess
});

const mapDispatchToProps = {
  getEntities,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WrkfrcCoreCfExtn);
