import React from "react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

const menus = [];

class MM00_v extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [
        {
          menuName: "FREE BOARD",
          link: "",
        },

        {
          menuName: "DOCUMENTS BOARD",
          link: "",
        },

        {
          menuName: "GALLARY",
          link: "",
        },
      ],
    };
  }
  render() {
    const { menus } = this.state;
    return (
      <main className="MM00_v">
        <Reveal>
          <h1 className="MM00_v__title">GJ COMMUNITY</h1>
        </Reveal>
        <div className="MM00_v__menuBox">
          {menus.map((menu, idx) => {
            return (
              <Fade bottom delay={idx * 300} key={idx}>
                <div className="MM00_v__menuBox__menu">{menu.menuName}</div>
              </Fade>
            );
          })}
        </div>
      </main>
    );
  }
}

export default MM00_v;
