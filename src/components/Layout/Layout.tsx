import React from "react";
import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
import styles from "./Layout.module.scss";

interface LayoutState {
  showSideDrawer: boolean;
}

class Layout extends React.Component {
  state: LayoutState = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState: LayoutState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Sidedrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
