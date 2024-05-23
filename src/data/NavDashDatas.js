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
    icon: IconOverview("#ffffff"),
    iconSelected: IconOverview("#001833"),
    to: "/overview",
  },
  {
    id: "navDash2",
    title: "Transaction",
    icon: icontransaksi("#ffffff"),
    iconSelected: icontransaksi("#001833"),
    to: "/transaction",
  },
  {
    id: "navDash3",
    title: "Budget",
    icon: Iconbudget("#ffffff"),
    iconSelected: Iconbudget("#001833"),
    to: "/budget",
  },
  {
    id: "navDash4",
    title: "Planning",
    icon: Iconplanning("#ffffff"),
    iconSelected: Iconplanning("#001833"),
    to: "/planning",
  },
  {
    id: "navDash5",
    title: "Notification",
    icon: iconnotif("#ffffff"),
    iconSelected: iconnotif("#001833"),
    to: "/notification",
  },
  {
    id: "navDash6",
    title: "Setting",
    icon: iconsettings("#ffffff"),
    iconSelected: iconsettings("#001833"),
    to: "/settings",
  },
];
