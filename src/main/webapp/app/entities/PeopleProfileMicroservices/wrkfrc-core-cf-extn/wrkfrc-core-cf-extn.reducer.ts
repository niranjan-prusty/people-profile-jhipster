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

import { IWrkfrcCoreCfExtn, defaultValue } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf-extn.model';

export const ACTION_TYPES = {
  FETCH_WRKFRCCORECFEXTN_LIST: 'wrkfrcCoreCfExtn/FETCH_WRKFRCCORECFEXTN_LIST',
  FETCH_WRKFRCCORECFEXTN: 'wrkfrcCoreCfExtn/FETCH_WRKFRCCORECFEXTN',
  CREATE_WRKFRCCORECFEXTN: 'wrkfrcCoreCfExtn/CREATE_WRKFRCCORECFEXTN',
  UPDATE_WRKFRCCORECFEXTN: 'wrkfrcCoreCfExtn/UPDATE_WRKFRCCORECFEXTN',
  DELETE_WRKFRCCORECFEXTN: 'wrkfrcCoreCfExtn/DELETE_WRKFRCCORECFEXTN',
  SET_BLOB: 'wrkfrcCoreCfExtn/SET_BLOB',
  RESET: 'wrkfrcCoreCfExtn/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IWrkfrcCoreCfExtn>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type WrkfrcCoreCfExtnState = Readonly<typeof initialState>;

// Reducer

export default (state: WrkfrcCoreCfExtnState = initialState, action): WrkfrcCoreCfExtnState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_WRKFRCCORECFEXTN_LIST):
    case REQUEST(ACTION_TYPES.FETCH_WRKFRCCORECFEXTN):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_WRKFRCCORECFEXTN):
    case REQUEST(ACTION_TYPES.UPDATE_WRKFRCCORECFEXTN):
    case REQUEST(ACTION_TYPES.DELETE_WRKFRCCORECFEXTN):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_WRKFRCCORECFEXTN_LIST):
    case FAILURE(ACTION_TYPES.FETCH_WRKFRCCORECFEXTN):
    case FAILURE(ACTION_TYPES.CREATE_WRKFRCCORECFEXTN):
    case FAILURE(ACTION_TYPES.UPDATE_WRKFRCCORECFEXTN):
    case FAILURE(ACTION_TYPES.DELETE_WRKFRCCORECFEXTN):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_WRKFRCCORECFEXTN_LIST): {
      const links = parseHeaderForLinks(action.payload.headers.link);

      return {
        ...state,
        loading: false,
        links,
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links),
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    }
    case SUCCESS(ACTION_TYPES.FETCH_WRKFRCCORECFEXTN):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_WRKFRCCORECFEXTN):
    case SUCCESS(ACTION_TYPES.UPDATE_WRKFRCCORECFEXTN):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_WRKFRCCORECFEXTN):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.SET_BLOB: {
      const { name, data, contentType } = action.payload;
      return {
        ...state,
        entity: {
          ...state.entity,
          [name]: data,
          [name + 'ContentType']: contentType
        }
      };
    }
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/wrkfrc-core-cf-extns';

// Actions

export const getEntities: ICrudGetAllAction<IWrkfrcCoreCfExtn> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_WRKFRCCORECFEXTN_LIST,
    payload: axios.get<IWrkfrcCoreCfExtn>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<IWrkfrcCoreCfExtn> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_WRKFRCCORECFEXTN,
    payload: axios.get<IWrkfrcCoreCfExtn>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IWrkfrcCoreCfExtn> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_WRKFRCCORECFEXTN,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const updateEntity: ICrudPutAction<IWrkfrcCoreCfExtn> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_WRKFRCCORECFEXTN,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IWrkfrcCoreCfExtn> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_WRKFRCCORECFEXTN,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const setBlob = (name, data, contentType?) => ({
  type: ACTION_TYPES.SET_BLOB,
  payload: {
    name,
    data,
    contentType
  }
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
