import React, { Component } from "react";
import { withTranslation, Trans } from "react-i18next";
class About extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <Trans>
          {" "}
          <h1>{t("pages.about")}</h1>{" "}
        </Trans>
      </React.Fragment>
    );
  }
}

export default withTranslation("translations")(About);
