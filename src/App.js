import React from "react";
import { componentPayload } from './payload'


const renderDynamicComponents = () => {
  return componentPayload.map((component) => {
    const { component: PeopleComponent } = component
    return <PeopleComponent children={component.children}></PeopleComponent>
  })
}
function App() {


  return (
    <React.Fragment>
      {renderDynamicComponents()}
    </React.Fragment>
  );
}

export default App;