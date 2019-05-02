import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          store: "Target",
          items: ["Cookies", "Toothpaste"]
        },
        {
          store: "CVS",
          items: ["Bandaids", "Soda"]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.lists.map(list => (
          <div>
            <h2 key={list.store}>{list.store}</h2>
            {list.items.map(item => (
              <p>{item}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;
