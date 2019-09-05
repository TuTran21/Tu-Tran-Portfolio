export const SEARCH = "SEARCH";

const search = text => {
  return {
    type: SEARCH,
    payload: text
  };
};

export default {
  search
};
// import actions from '../../redux/actions/actions'
