import { API_WX_CONFIG } from "@/api/config";
import http from "@/api/ajax";

export const getJssdkConfig = function(data) {
    
  return http("get", API_WX_CONFIG, data).then(rt => rt);
};
