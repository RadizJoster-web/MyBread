export interface companyDataProps {
  address: string;
  phoneNumber: string;
  phoneNumber2: string;
  email1: string;
  email2: string;
  timeOperation: {
    dayNormal: string;
    dayWeekend: string;
  };
}

export const companyData: companyDataProps = {
  address: "Jl. Kemang Raya No. 88, Kebayoran Baru, Jakarta Selatan 12730",
  phoneNumber: "+62 812-3456-7890",
  phoneNumber2: "+62 21-7890-1234",
  email1: "mybread1959@mybread.id",
  email2: "order@mybread.id",
  timeOperation: {
    dayNormal: "Every Day: 07:00 – 21:00",
    dayWeekend: "Weekend: 06:00 – 22:00",
  },
};
