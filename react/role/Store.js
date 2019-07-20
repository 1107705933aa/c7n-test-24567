import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';


class Store {
  @observable data = [];
  @observable isLoading = true;
  @observable pagination = {
    current: 1,
    pageSize: 10,
    total: '',
  };
  @observable levelvalue = '';

  @action
  setLevelvalue(levelvalue) {
    this.levelvalue = levelvalue;
  }

  // @action
  // setPagination(pagination) {
  //   this.pagination = pagination;
  // }

  @action
  setPageNation(pagination) {
    this.pagination = {
      current: pagination.current,
      pageSize: pagination.pageSize,
      total: pagination.total
    }
  }


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
    // alert(1111)
    const body = {};
    const sorter = [];
    const arr = [];
    this.isLoading = true;
    console.log('99999999999' + this.pagination)
    Object.assign(body,
      {
        level: this.levelvalue,
        param: []
      })
    axios.post(
      `/iam/v1/roles/search?page=${page}&size=${size}&sort=${sorter.join(',')}`,
      JSON.stringify(body),
    )
      .then((res) => {
        this.isLoading = false;
        this.data = res.list;
        console.log(this.data)

        // this.data.map(
        //   function () {
        //     if (this.levelvalue === 'organization') {
        //       arr.push(value);
        //       this.data = arr;
        //       return this.data
        //     } else if (this.levelvalue === 'site') {
        //       arr.push(value);
        //       this.data = arr;
        //       return this.data
        //     } else {
        //       arr.push(value);
        //       this.data = arr;
        //       return this.data
        //     }
        //   }
        // )

        this.pagination = {
          current: res.pageNum,
          pageSize: res.pageSize,
          total: res.total,
        };
      });
  }
}

const store = new Store();

export default store;
