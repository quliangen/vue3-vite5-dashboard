import service from '@/api/http';

const { VITE_APP_DOMAIN } = import.meta.env;

interface APII {
  [x: string]: string;
}

const API: APII = {
  test: `${VITE_APP_DOMAIN}/test`,
};

export function test() {
  return service.post(API.test);
}

export function soldCarList() {
  return {
    success: true,
    data: {
      list: [{}],
    },
    msg: '成功',
  };
}

export function onSaleCarList() {
  return {
    success: true,
    data: {},
    msg: '成功',
  };
}

export default API;
