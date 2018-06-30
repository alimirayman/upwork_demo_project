import {
  createLayout,
  createRoute
} from '@/helpers/importer'

const homePaths = [
  createRoute('/program', 'Program')
]

const views = [
  createRoute('/', 'Home', homePaths)
]

export const routes = [
  // Base Layout
  createLayout('/', 'base', views),
  // 404 page
  createRoute('*', '404')
]
