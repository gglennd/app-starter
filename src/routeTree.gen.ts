/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createServerRootRoute } from '@tanstack/react-start/server'

import { Route as rootRouteImport } from './routes/__root'
import { Route as PageRouteImport } from './routes/_page'
import { Route as PageIndexRouteImport } from './routes/_page.index'
import { Route as PageSignupRouteImport } from './routes/_page.signup'
import { Route as PageLoginRouteImport } from './routes/_page.login'
import { ServerRoute as ApiAuthSplatServerRouteImport } from './routes/api/auth.$'

const rootServerRouteImport = createServerRootRoute()

const PageRoute = PageRouteImport.update({
  id: '/_page',
  getParentRoute: () => rootRouteImport,
} as any)
const PageIndexRoute = PageIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PageRoute,
} as any)
const PageSignupRoute = PageSignupRouteImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => PageRoute,
} as any)
const PageLoginRoute = PageLoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => PageRoute,
} as any)
const ApiAuthSplatServerRoute = ApiAuthSplatServerRouteImport.update({
  id: '/api/auth/$',
  path: '/api/auth/$',
  getParentRoute: () => rootServerRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/login': typeof PageLoginRoute
  '/signup': typeof PageSignupRoute
  '/': typeof PageIndexRoute
}
export interface FileRoutesByTo {
  '/login': typeof PageLoginRoute
  '/signup': typeof PageSignupRoute
  '/': typeof PageIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/_page': typeof PageRouteWithChildren
  '/_page/login': typeof PageLoginRoute
  '/_page/signup': typeof PageSignupRoute
  '/_page/': typeof PageIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/login' | '/signup' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/login' | '/signup' | '/'
  id: '__root__' | '/_page' | '/_page/login' | '/_page/signup' | '/_page/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  PageRoute: typeof PageRouteWithChildren
}
export interface FileServerRoutesByFullPath {
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRoutesByTo {
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/api/auth/$'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/api/auth/$'
  id: '__root__' | '/api/auth/$'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  ApiAuthSplatServerRoute: typeof ApiAuthSplatServerRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_page': {
      id: '/_page'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PageRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_page/': {
      id: '/_page/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof PageIndexRouteImport
      parentRoute: typeof PageRoute
    }
    '/_page/signup': {
      id: '/_page/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof PageSignupRouteImport
      parentRoute: typeof PageRoute
    }
    '/_page/login': {
      id: '/_page/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof PageLoginRouteImport
      parentRoute: typeof PageRoute
    }
  }
}
declare module '@tanstack/react-start/server' {
  interface ServerFileRoutesByPath {
    '/api/auth/$': {
      id: '/api/auth/$'
      path: '/api/auth/$'
      fullPath: '/api/auth/$'
      preLoaderRoute: typeof ApiAuthSplatServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
  }
}

interface PageRouteChildren {
  PageLoginRoute: typeof PageLoginRoute
  PageSignupRoute: typeof PageSignupRoute
  PageIndexRoute: typeof PageIndexRoute
}

const PageRouteChildren: PageRouteChildren = {
  PageLoginRoute: PageLoginRoute,
  PageSignupRoute: PageSignupRoute,
  PageIndexRoute: PageIndexRoute,
}

const PageRouteWithChildren = PageRoute._addFileChildren(PageRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  PageRoute: PageRouteWithChildren,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  ApiAuthSplatServerRoute: ApiAuthSplatServerRoute,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()
