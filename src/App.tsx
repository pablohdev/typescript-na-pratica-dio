import * as React from "react";

import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

export default function Album() {
  return (
    <>
      <Header />
      <AddItem />
      <ListItem />
    </>
  );
}
