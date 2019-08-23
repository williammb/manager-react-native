import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" titleStyle={{ alignSelf: 'center' }} hideNavBar >
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Adicionar"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Criando Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Editando Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
