import React from 'react';
import Tabs, { TabPane } from '@iso/components/uielements/tabs';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import TableDemoStyle from './Demo.styles';
import fakeData from '../data';
import fakeData2 from '../data2';
import { tableinfos } from './configs';
import * as TableViews from './TableViews/TableViews';

const dataList = new fakeData(10);
const dataList2 = new fakeData2(10);
console.log(dataList);
console.log(dataList2);
console.log(tableinfos);

export default function AntTable() {
  function renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
      case 'sortView':
        Component = TableViews.SortView;
        break;
      case 'filterView':
        Component = TableViews.FilterView;
        break;
      case 'editView':
        Component = TableViews.EditView;
        break;
      case 'groupView':
        Component = TableViews.GroupView;
        break;
      case 'customizedView':
        Component = TableViews.CustomizedView;
        break;
      default:
        Component = TableViews.SimpleView;
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  return (
    <LayoutContentWrapper>
      <TableDemoStyle className="isoLayoutContent">
        <Tabs className="isoTableDisplayTab">
          {tableinfos.map(tableInfo => (
            <TabPane tab={tableInfo.title} key={tableInfo.value}>
              {renderTable(tableInfo)}
            </TabPane>
          ))}
        </Tabs>
      </TableDemoStyle>
    </LayoutContentWrapper>
  );
}

export { TableViews, tableinfos, dataList };