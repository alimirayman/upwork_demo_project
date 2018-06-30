// function to import pages
export const loadPage = (fileName = '') => () =>
  import(`@/pages/${fileName}.vue`)

// function to import layouts
const loadLayout = (fileName = '') => () =>
  import(`@/layouts/${fileName}.vue`)

// function to import components
export const loadComponent = (fileName = '') => () =>
  import(`@/components/${fileName}.vue`)

// function to create Route
export const createRoute = (path = '', fileName = '', children = [], redirect = '') => {
  return (children.length) ? {
    path,
    component: loadPage(fileName),
    children
  } : {
      path: path,
      name: fileName.replace('/', '.'),
      component: loadPage(fileName),
      redirect
    }
}

// function to create Layout
export const createLayout = (path = '', fileName = '', subRoutes = []) => {
  return {
    path,
    component: loadLayout(fileName),
    children: subRoutes
  }
}
