import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation, Trans } from "react-i18next";

class Header extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    let newlang = event.target.value;
    this.setState({ value: newlang });
    this.props.i18n.changeLanguage(newlang);
  };

  getLanguageDropDown = () => {
    return (
      <select className="select" onChange={this.handleChange}>
        <option defaultValue value="en">
          English
        </option>
        <option value="hi">हिन्दी</option>
        <option value="ch">中文</option>
      </select>
    );
  };
  staticMenuItems = () => {
    const { t } = this.props;
    return (
      <header>
        <Link to="/">
          <Trans> {t("header.home")} </Trans>
        </Link>
        <Link to="/about">
          <Trans> {t("header.about")} </Trans>
        </Link>
        <Link to="/help">
          <Trans> {t("header.help")} </Trans>
        </Link>
        {this.getLanguageDropDown()}
      </header>
    );
  };
  render() {
    const menuItems = this.staticMenuItems();
    return menuItems;
  }
}
export default withTranslation("translations")(Header);
