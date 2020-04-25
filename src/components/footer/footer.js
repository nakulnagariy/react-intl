import React from "react";
import { withTranslation, Trans } from "react-i18next";
const Footer = (props) => {
  const { t } = props;
  return (
    <footer>
      <Trans> {t("footer.created")} </Trans>
    </footer>
  );
};

export default withTranslation("translations")(Footer);
