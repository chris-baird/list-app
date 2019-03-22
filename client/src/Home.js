import React, { Component } from "react";
import fire from "./config/Fire";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      games: {}
    };
  }

  logout() {
    fire.auth().signOut();
    this.props.changeView("landing");
  }

  componentDidMount() {
    axios.get("/api/todos").then(data => {
      console.log(data.data);
    });
    // console.log("Mounted");
    // const database = fire.database();
    // const userId = this.props.currentUser.uid;
    // database
    //   .ref(`/games/${userId}`)
    //   .once("value")
    //   .then(snap => this.setState({ games: snap.val() }));
  }

  componentDidUpdate() {
    // console.log("Updated");
    // console.log(this.state.games);
    // const database = fire.database();
    // const userId = this.props.currentUser.uid;
    // database.ref(`/games/${userId}`).once("value", function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     var childKey = childSnapshot.key;
    //     var childData = childSnapshot.val();
    //     console.log(childData);
    //     // ...
    //   });
    // });
  }

  handleAddGame = () => {
    // const database = fire.database();
    // const userId = this.props.currentUser.uid;
    // // let games = [...this.state.games];
    // database.ref(`/games/${userId}`).push({
    //   game: "I AM TUROK"
    // });
    // database
    //   .ref(`/games/${userId}`)
    //   .once("value")
    //   .then(snap => {
    //     // console.log(snap.val());
    //     this.setState({ games: snap.val() });
    //   });
  };

  render() {
    // let posts = this.state.posts.map(post => {
    //   return <p>{post.title}</p>;
    // });
    return (
      <div>
        <h1>Welcome to Home</h1>
        <button onClick={() => this.handleAddGame()}>Add Game</button>
        <button onClick={this.logout}>Logout</button>
        {/* {posts} */}
      </div>
    );
  }
}

export default Home;
