import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IWrkfrcCoreCfExtn } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf-extn.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './wrkfrc-core-cf-extn.reducer';

export interface IWrkfrcCoreCfExtnDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WrkfrcCoreCfExtnDeleteDialog = (props: IWrkfrcCoreCfExtnDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/wrkfrc-core-cf-extn');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.wrkfrcCoreCfExtnEntity.id);
  };

  const { wrkfrcCoreCfExtnEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.delete.question">
        <Translate
          contentKey="peopleApp.peopleProfileMicroservicesWrkfrcCoreCfExtn.delete.question"
          interpolate={{ id: wrkfrcCoreCfExtnEntity.id }}
        >
          Are you sure you want to delete this WrkfrcCoreCfExtn?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-wrkfrcCoreCfExtn" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ wrkfrcCoreCfExtn }: IRootState) => ({
  wrkfrcCoreCfExtnEntity: wrkfrcCoreCfExtn.entity,
  updateSuccess: wrkfrcCoreCfExtn.updateSuccess
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WrkfrcCoreCfExtnDeleteDialog);
