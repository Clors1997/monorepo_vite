/* eslint-disable */
/* prettier-ignore */
// biome-ignore lint: disable
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { RouteKey, RoutePath, RoutePathMap } from '@elegant-router/types';

const routePathMap: RoutePathMap = {
  "Root": "/",
  "NotFound": "/:pathMatch(.*)*",
  "_builtin403": "/_builtin/403",
  "_builtin404": "/_builtin/404",
  "_builtin500": "/_builtin/500",
  "_builtinIframePageUrl": "/_builtin/iframe-page/:url",
  "_builtinLogin": "/_builtin/login",
  "Home": "/home",
  "List": "/list",
};

export function getRoutePath(key: RouteKey) {
  return routePathMap[key];
}

export function getRouteName(path: RoutePath) {
  return Object.keys(routePathMap).find(key => routePathMap[key as RouteKey] === path) as RouteKey;
}
