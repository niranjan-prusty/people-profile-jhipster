import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IWrkfrcCoreCf } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './wrkfrc-core-cf.reducer';

export interface IWrkfrcCoreCfDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WrkfrcCoreCfDeleteDialog = (props: IWrkfrcCoreCfDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/wrkfrc-core-cf');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.wrkfrcCoreCfEntity.id);
  };

  const { wrkfrcCoreCfEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.delete.question">
        <Translate
          contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCf.delete.question"
          interpolate={{ id: wrkfrcCoreCfEntity.id }}
        >
          Are you sure you want to delete this WrkfrcCoreCf?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-wrkfrcCoreCf" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ wrkfrcCoreCf }: IRootState) => ({
  wrkfrcCoreCfEntity: wrkfrcCoreCf.entity,
  updateSuccess: wrkfrcCoreCf.updateSuccess
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WrkfrcCoreCfDeleteDialog);
