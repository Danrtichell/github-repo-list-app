import { fromJS } from 'immutable';

const NAME = 'PERSIST';

export const FINISH_REHYDRATE = `${NAME}/FINISH_REHYDRATE`;

export const finishRehydrate = () => ({
  type: FINISH_REHYDRATE,
});

const initialState = fromJS({
  isRehydrated: false,
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FINISH_REHYDRATE:
      return state.set('isRehydrated', true);
    default:
      return state;
  }
}
