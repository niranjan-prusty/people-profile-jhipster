import { Moment } from 'moment';

export interface IWrkfrcCoreCfExtn {
  id?: number;
  idFk?: number;
  funGroup?: string;
  building?: string;
  floor?: string;
  mailDrop?: string;
  assistant?: string;
  altContactMobile?: string;
  altContactEmail?: string;
  altContactName?: string;
  altPhoneNum?: string;
  altLocNm?: string;
  ergMemberships?: string;
  pepsicoNetworks?: string;
  hobbies?: string;
  birthday?: Moment;
  photoContentType?: string;
  photo?: any;
  photoExt?: string;
  hometown?: string;
  hireDate?: string;
  skills?: string;
  interests?: string;
  currentRole?: string;
  prjWorked?: string;
  education?: string;
  persNote?: string;
  socialLinks?: string;
}

export const defaultValue: Readonly<IWrkfrcCoreCfExtn> = {};
