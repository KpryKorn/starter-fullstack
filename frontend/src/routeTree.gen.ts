/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthRouteImport } from './routes/_auth/route'
import { Route as AppRouteImport } from './routes/_app/route'
import { Route as IndexImport } from './routes/index'
import { Route as AuthRegisterImport } from './routes/_auth/register'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AppUsersIndexImport } from './routes/_app/users/index'
import { Route as AppPostsIndexImport } from './routes/_app/posts/index'
import { Route as AppPostsPostIdImport } from './routes/_app/posts/$postId'

// Create/Update Routes

const AuthRouteRoute = AuthRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AppRouteRoute = AppRouteImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AppUsersIndexRoute = AppUsersIndexImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppPostsIndexRoute = AppPostsIndexImport.update({
  id: '/posts/',
  path: '/posts/',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppPostsPostIdRoute = AppPostsPostIdImport.update({
  id: '/posts/$postId',
  path: '/posts/$postId',
  getParentRoute: () => AppRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/register': {
      id: '/_auth/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof AuthRouteImport
    }
    '/_app/posts/$postId': {
      id: '/_app/posts/$postId'
      path: '/posts/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof AppPostsPostIdImport
      parentRoute: typeof AppRouteImport
    }
    '/_app/posts/': {
      id: '/_app/posts/'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof AppPostsIndexImport
      parentRoute: typeof AppRouteImport
    }
    '/_app/users/': {
      id: '/_app/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof AppUsersIndexImport
      parentRoute: typeof AppRouteImport
    }
  }
}

// Create and export the route tree

interface AppRouteRouteChildren {
  AppPostsPostIdRoute: typeof AppPostsPostIdRoute
  AppPostsIndexRoute: typeof AppPostsIndexRoute
  AppUsersIndexRoute: typeof AppUsersIndexRoute
}

const AppRouteRouteChildren: AppRouteRouteChildren = {
  AppPostsPostIdRoute: AppPostsPostIdRoute,
  AppPostsIndexRoute: AppPostsIndexRoute,
  AppUsersIndexRoute: AppUsersIndexRoute,
}

const AppRouteRouteWithChildren = AppRouteRoute._addFileChildren(
  AppRouteRouteChildren,
)

interface AuthRouteRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/register': typeof AuthRegisterRoute
  '/posts/$postId': typeof AppPostsPostIdRoute
  '/posts': typeof AppPostsIndexRoute
  '/users': typeof AppUsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/register': typeof AuthRegisterRoute
  '/posts/$postId': typeof AppPostsPostIdRoute
  '/posts': typeof AppPostsIndexRoute
  '/users': typeof AppUsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_app': typeof AppRouteRouteWithChildren
  '/_auth': typeof AuthRouteRouteWithChildren
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/register': typeof AuthRegisterRoute
  '/_app/posts/$postId': typeof AppPostsPostIdRoute
  '/_app/posts/': typeof AppPostsIndexRoute
  '/_app/users/': typeof AppUsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/register'
    | '/posts/$postId'
    | '/posts'
    | '/users'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/login' | '/register' | '/posts/$postId' | '/posts' | '/users'
  id:
    | '__root__'
    | '/'
    | '/_app'
    | '/_auth'
    | '/_auth/login'
    | '/_auth/register'
    | '/_app/posts/$postId'
    | '/_app/posts/'
    | '/_app/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRouteRoute: typeof AppRouteRouteWithChildren
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRouteRoute: AppRouteRouteWithChildren,
  AuthRouteRoute: AuthRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_app",
        "/_auth"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app": {
      "filePath": "_app/route.tsx",
      "children": [
        "/_app/posts/$postId",
        "/_app/posts/",
        "/_app/users/"
      ]
    },
    "/_auth": {
      "filePath": "_auth/route.tsx",
      "children": [
        "/_auth/login",
        "/_auth/register"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/register": {
      "filePath": "_auth/register.tsx",
      "parent": "/_auth"
    },
    "/_app/posts/$postId": {
      "filePath": "_app/posts/$postId.tsx",
      "parent": "/_app"
    },
    "/_app/posts/": {
      "filePath": "_app/posts/index.tsx",
      "parent": "/_app"
    },
    "/_app/users/": {
      "filePath": "_app/users/index.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
