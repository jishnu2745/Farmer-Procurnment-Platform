import { useTranslation } from "react-i18next";
import "../style/Login.css";
function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <select
      className="language-selector"
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="ta">தமிழ்</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
}

export default LanguageSelector;