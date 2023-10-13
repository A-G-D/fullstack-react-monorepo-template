import { camelizeKeys } from "humps";
import ky from "ky";

import { API_URL } from "../constants";
import { type APIResponse } from "../types";

export interface SiteInfosData {
  created: string;
  modified: string;
  about: string;
  author: string;
}

export const getSiteInfos = async (): Promise<APIResponse<SiteInfosData>> => {
  const result = await ky.get(`${API_URL}/site-infos`);
  const json = await result.json();
  const status = result.status;
  const data = camelizeKeys(json) as SiteInfosData;
  return { data, status };
};
