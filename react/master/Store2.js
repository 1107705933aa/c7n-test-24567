import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';

class Store2 {
  @observable data = [];
  @observable datak={}
  @observable isLoading = true;
  @observable pagination = {
    current: 1,
    pageSize: 10,
    total: '',
  };

  @action
  setData(data) {
    this.data = data;
  }

  @action
  setIsLoading(data) {
    this.isLoading = data;
  }

  @computed
  get getData() {
    return this.data.slice();
  }

  @action
  loadData(page = this.pagination.current, size = this.pagination.pageSize) {
    const body = {};
    const sorter = [];
    this.isLoading = true;
    axios.post(
      `http://api.staging.saas.hand-china.com/iam/v1/users/self`,
      JSON.stringify(body),
    )
      .then((res) => {
        this.isLoading = false;
        this.data = res.list;
        // console.log('333333'+this.data)
        this.pagination = {
          current: res.pageNum,
          pageSize: res.pageSize,
          total: res.total,
        };
      });
  }
}

const store2 = new Store2();

export default store2;
