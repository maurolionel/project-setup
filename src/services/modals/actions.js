import {
  MODAL_SCHEDULES_OPEN,
  MODAL_SCHEDULES_CLOSE,
  MODAL_SHIPPINGS_OPEN,
  MODAL_SHIPPINGS_CLOSE,
  MODAL_CLOSE_ALL
} from './actionTypes';

const modalSchedulesOpen = () => ({
  type: MODAL_SCHEDULES_OPEN
});

const modalSchedulesClose = () => ({
  type: MODAL_SCHEDULES_CLOSE
});

const modalShippingsOpen = () => ({
  type: MODAL_SHIPPINGS_OPEN
});

const modalShippingsClose = () => ({
  type: MODAL_SHIPPINGS_CLOSE
});

const modalCloseAll = () => ({
  type: MODAL_CLOSE_ALL
});

export {
  modalSchedulesOpen,
  modalSchedulesClose,
  modalShippingsOpen,
  modalShippingsClose,
  modalCloseAll
};
