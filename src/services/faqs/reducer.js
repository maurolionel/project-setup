import qa from './qa';

const initialState = {
  all: qa
};

function faqs(state = initialState, action = {}) {
  switch (action.types) {
    default:
      return state;
  }
}

export default faqs;
