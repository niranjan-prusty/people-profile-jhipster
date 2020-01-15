import { Moment } from 'moment';
import { IWrkfrcCoreCfExtn } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf-extn.model';
import { IWrkfrcCoreCf } from 'app/shared/model/PeopleProfileMicroservices/wrkfrc-core-cf.model';

export interface IWrkfrcCoreCf {
  id?: number;
  wrkfrcUniqIdVal?: string;
  crtdDt?: Moment;
  mdfdD?: Moment;
  frstNm?: string;
  sevFrstNm?: string;
  midlNm?: string;
  secLastNm?: string;
  lastNm?: string;
  wrkfrcPrfrdNm?: string;
  wrkfrcPrfrdLm?: string;
  pstnTtlNm?: string;
  scrtrId?: string;
  sctrNm?: string;
  divsnId?: string;
  divsnNm?: string;
  rgnId?: string;
  rgnNm?: string;
  buId?: string;
  buNm?: string;
  muId?: string;
  muNm?: string;
  jobFnctnCdv?: string;
  jobFnctnNm?: string;
  jobSbfnctnCdv?: string;
  jobSbfnctnNm?: string;
  mngrId?: string;
  busDeskTelnm?: string;
  busCellTelnm?: string;
  faxTelnm?: string;
  wrkfrcEmailAddrVal?: string;
  locNm?: string;
  locAddrLn1Txt?: string;
  locAddrLn2Txt?: string;
  locAddrLn3Txt?: string;
  locAddrLn4Txt?: string;
  locCityNm?: string;
  locPstlAreaVal?: string;
  locTerrCdv?: string;
  locTerrNm?: string;
  locCtryCdv?: string;
  locCtryNm?: string;
  cntrctrWrksiteCtryVal?: string;
  locTmznNm?: string;
  langPrfrdIsoNm?: string;
  wrkfrcHireDt?: string;
  wrkfrcOrignlHireDt?: string;
  wrkfrcCoreCfExtn?: IWrkfrcCoreCfExtn;
  wrkfrcCoreCf?: IWrkfrcCoreCf;
}

export const defaultValue: Readonly<IWrkfrcCoreCf> = {};
