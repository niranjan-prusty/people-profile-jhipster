import axios from 'axios';
import {
  parseHeaderForLinks,
  loadMoreDataWhenScrolled,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction
} from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IWrkfrcCoreCf, defaultValue } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf.model';

export const ACTION_TYPES = {
  FETCH_WRKFRCCORECF_LIST: 'wrkfrcCoreCf/FETCH_WRKFRCCORECF_LIST',
  FETCH_WRKFRCCORECF: 'wrkfrcCoreCf/FETCH_WRKFRCCORECF',
  CREATE_WRKFRCCORECF: 'wrkfrcCoreCf/CREATE_WRKFRCCORECF',
  UPDATE_WRKFRCCORECF: 'wrkfrcCoreCf/UPDATE_WRKFRCCORECF',
  DELETE_WRKFRCCORECF: 'wrkfrcCoreCf/DELETE_WRKFRCCORECF',
  RESET: 'wrkfrcCoreCf/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IWrkfrcCoreCf>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type WrkfrcCoreCfState = Readonly<typeof initialState>;

// Reducer

export default (state: WrkfrcCoreCfState = initialState, action): WrkfrcCoreCfState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_WRKFRCCORECF_LIST):
    case REQUEST(ACTION_TYPES.FETCH_WRKFRCCORECF):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_WRKFRCCORECF):
    case REQUEST(ACTION_TYPES.UPDATE_WRKFRCCORECF):
    case REQUEST(ACTION_TYPES.DELETE_WRKFRCCORECF):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_WRKFRCCORECF_LIST):
    case FAILURE(ACTION_TYPES.FETCH_WRKFRCCORECF):
    case FAILURE(ACTION_TYPES.CREATE_WRKFRCCORECF):
    case FAILURE(ACTION_TYPES.UPDATE_WRKFRCCORECF):
    case FAILURE(ACTION_TYPES.DELETE_WRKFRCCORECF):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_WRKFRCCORECF_LIST): {
      const links = parseHeaderForLinks(action.payload.headers.link);

      return {
        ...state,
        loading: false,
        links,
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links),
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    }
    case SUCCESS(ACTION_TYPES.FETCH_WRKFRCCORECF):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_WRKFRCCORECF):
    case SUCCESS(ACTION_TYPES.UPDATE_WRKFRCCORECF):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_WRKFRCCORECF):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/wrkfrc-core-cfs';

// Actions

export const getEntities: ICrudGetAllAction<IWrkfrcCoreCf> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_WRKFRCCORECF_LIST,
    payload: axios.get<IWrkfrcCoreCf>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<IWrkfrcCoreCf> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_WRKFRCCORECF,
    payload: axios.get<IWrkfrcCoreCf>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IWrkfrcCoreCf> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_WRKFRCCORECF,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const updateEntity: ICrudPutAction<IWrkfrcCoreCf> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_WRKFRCCORECF,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IWrkfrcCoreCf> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_WRKFRCCORECF,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
