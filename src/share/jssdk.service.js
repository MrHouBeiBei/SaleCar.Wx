import { API_WX_CONFIG } from "@/api/config";
import http from "@/api/ajax";

export const getJssdkConfig = function() {
    
  return http("get", API_WX_CONFIG).then(rt => rt);
};
