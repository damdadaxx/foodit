import useLocale from "../../hooks/useLocale";
import useSetLocale from "../../hooks/useSetLocale";
import Select from "../FormControls/Select";

export default function LocaleSelect() {
  const locale = useLocale();
  const setLocale = useSetLocale();

  return (
    <Select value={locale} onChange={(e) => setLocale(e.target.value)}>
      <option value='ko'>한국어</option>
      <option value='en'>English</option>
    </Select>
  );
}
