export interface Country {
  code: string;
  flag: string;
  nameKey: string;
}

export const countries: Country[] = [
  { code: "ve", flag: "https://flagcdn.com/w80/ve.png", nameKey: "venezuela" },
  { code: "at", flag: "https://flagcdn.com/w80/at.png", nameKey: "austria" },
  { code: "ar", flag: "https://flagcdn.com/w80/ar.png", nameKey: "argentina" },
  { code: "co", flag: "https://flagcdn.com/w80/co.png", nameKey: "colombia" },
  { code: "ec", flag: "https://flagcdn.com/w80/ec.png", nameKey: "ecuador" },
  { code: "us", flag: "https://flagcdn.com/w80/us.png", nameKey: "usa" },
  { code: "jp", flag: "https://flagcdn.com/w80/jp.png", nameKey: "japan" },
  { code: "cn", flag: "https://flagcdn.com/w80/cn.png", nameKey: "china" },
  { code: "ca", flag: "https://flagcdn.com/w80/ca.png", nameKey: "canada" },
  { code: "es", flag: "https://flagcdn.com/w80/es.png", nameKey: "spain" },
  { code: "cl", flag: "https://flagcdn.com/w80/cl.png", nameKey: "chile" },
];