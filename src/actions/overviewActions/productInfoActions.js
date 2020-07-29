import axios from 'axios';

export const productInfo = (data) => ({
  type: "PRODUCT_INFO",
  productInfo: data,
});

export const fetchProductInfoAction = (id) => (dispatch) => {
  axios
    .get(`http://3.129.164.5/products/${id}`)
    .then(({ data }) => {
      dispatch(productInfo(data));
    })
    .catch((err) => console.log(err));
};

export const styleList = (data) => ({
  type: "PRODUCT_STYLE_LIST",
  styleList: data,
})

export const fetchProductStyleListAction = (id) => (dispatch) => {
  axios
    .get(`http://3.129.164.5/products/${id}/styles`)
    .then(({ data }) => {
      console.log(data);
      dispatch(styleList(data));
    })
    .catch((err) => console.log(err));
};

export const metaDataAction = (elementId) => ({
  type: "META DATA",
  metaData: elementId,
})