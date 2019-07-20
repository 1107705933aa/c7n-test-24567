import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import { asyncRouter, nomatch } from '@choerodon/boot';

const r1 = asyncRouter(() => import('./role/r1'));
const r2 = asyncRouter(() => import('./role/r2'));
const index = asyncRouter(() => import('./role/index'));
const insert = asyncRouter(() => import('./role/insert'));
const update = asyncRouter(() => import('./role/update'));

@inject('AppState')
class DEMOIndex extends React.Component {
  render() {
    const { match, AppState } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/r1`} component={r1} />
        <Route path={`${match.url}/r2`} component={r2} />
        <Route exact path={`${match.url}/index`} component={index} />
        <Route exact path={`${match.url}/index/insert`} component={insert} />
        <Route path={`${match.url}/index/update`} component={update} />
        <Route path="*" component={nomatch} />
      </Switch>
    );
  }
}

export default DEMOIndex;
