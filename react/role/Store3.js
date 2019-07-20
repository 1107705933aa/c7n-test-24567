import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';


class Store3 {
  @observable data = [];

  @action
  setData(data) {
    this.data = data;
  }

  @computed
  get getData() {
    return this.data.slice();
  }

  @action
  loadData(){
    axios.get(
      `/iam/v1/menus/menu_config?code=choerodon.code.top.site`
    )
      .then((res) => {
        // this.data = res;
        console.log(res)
        function addKeyAndChildrens(obj) {
          obj.key = String(obj.id);
          if (!obj.subMenus) {
            return;
          } else {
            obj.children = obj.subMenus.slice();
            for (let subMenu of obj.subMenus) {
              addKeyAndChildrens(subMenu);
            }
          }
        }
        addKeyAndChildrens(res);
        this.setData(res.subMenus);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
}

const store3 = new Store3();

export default store3;
