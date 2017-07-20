// AppRoot.jsx
import React from 'react';
import ListStore from '../stores/ListStore';

// Method to retrieve state from Stores
let getListState = () => {
  return {
    items: ListStore.getItems()
  };
}

class AppRoot extends React.Component {
  constructor() {
    super();
    this.state = getListState();
  }
  render(){
    let items = ListStore.getItems();
    let itemHtml = items.map(( listItem ) => {
      return <li key={ listItem.id }>
          { listItem.name }
        </li>;

    });
    return (
      <div>
        <ul>
          { itemHtml }
        </ul>
      </div>
    );
  }

}

export default AppRoot;
