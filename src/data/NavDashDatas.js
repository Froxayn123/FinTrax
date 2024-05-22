import Iconbudget from "../assets/iconbudget";
import IconOverview from "../assets/iconoverview";
import icontransaksi from "../assets/icontransaksi";
import Iconplanning from "../assets/iconplanning";
import iconnotif from "../assets/iconnotif";
import iconsettings from "../assets/iconsetting";

export const navDashDatas = [
  {
    id: "navDash1",
    title: "Overview",
    icon: IconOverview(),
    to: "/Overview",
  },
  {
    id: "navDash2",
    title: "Transaction",
    icon: icontransaksi(),
    to: "/Transaction",
  },
  {
    id: "navDash3",
    title: "Budget",
    icon: Iconbudget(),
    to: "/Budget",
  },
  {
    id: "navDash4",
    title: "Planning",
    icon: Iconplanning(),
    to: "/planning",
  },
  {
    id: "navDash5",
    title: "Notification",
    icon: iconnotif(),
    to: "/notification",
  },
  {
    id: "navDash6",
    title: "Setting",
    icon: iconsettings(),
    to: "/settings",
  },
];
