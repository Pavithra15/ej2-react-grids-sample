import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, 
  Filter , Inject , FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import './App.css';

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

export default class App extends React.Component<{}, {}> {
   public FilterOptions: FilterSettingsModel = { type: 'menu' };
    render() {
        return ( 
        <GridComponent dataSource={data} allowFiltering={true} filterSettings={this.FilterOptions}>
          <ColumnsDirective>
                <ColumnDirective field="OrderID" width="100" textAlign="right" />
                <ColumnDirective field="CustomerID" width="100"/>
                <ColumnDirective field="EmployeeID" width="100" />
            </ColumnsDirective>
          <Inject services={[Filter]} />
        </GridComponent>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('grid'));