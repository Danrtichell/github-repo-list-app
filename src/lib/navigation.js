import { NavigationActions } from 'react-navigation';

export const listeners = {};

let $navigator;

export const getActiveRoute = state => {
  if (!state) {
    return null;
  }

  const { index, routes } = state;

  const route = routes[index];

  if (route.routes) {
    return getActiveRoute(route);
  }

  return route;
};

export const setTopLevelNavigator = ref => {
  $navigator = ref;
};

export const dispatch = actions => $navigator.dispatch(actions);

export const navigate = (routeName, params) => {
  dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

export const goBack = key => dispatch(NavigationActions.back({ key }));

export const dispatchChange = (prevState, currentState) => {
  Object.keys(listeners).forEach(index => {
    listeners[index](getActiveRoute(prevState), getActiveRoute(currentState));
  });
};
