import OverviewIcon from "@/components/svg/OverviewIcon";
import TransactionIcon from "@/components/svg/TransactionIcon";
import BudgetIcon from "@/components/svg/BudgetIcon";
import PlanningIcon from "@/components/svg/PlanningIcon";
import NotificationIcon from "@/components/svg/NotificationIcon";
import SettingsIcon from "@/components/svg/SettingsIcon";

export const navDashDatas = [
  {
    id: "navDash1",
    title: "Overview",
    icon: OverviewIcon("stroke-white group-hover:stroke-[#001833]"),
    iconSelected: OverviewIcon("stroke-[#001833] group-hover:stroke-[#001833]"),
    to: "/overview",
  },
  {
    id: "navDash2",
    title: "Transaction",
    icon: TransactionIcon("stroke-white group-hover:stroke-[#001833]"),
    iconSelected: TransactionIcon("stroke-[#001833] group-hover:stroke-[#001833]"),
    to: "/transaction",
  },
  {
    id: "navDash3",
    title: "Budget",
    icon: BudgetIcon("stroke-white group-hover:stroke-[#001833]"),
    iconSelected: BudgetIcon("stroke-[#001833] group-hover:stroke-[#001833]"),
    to: "/budget",
  },
  {
    id: "navDash4",
    title: "Planning",
    icon: PlanningIcon("stroke-white group-hover:stroke-[#001833]"),
    iconSelected: PlanningIcon("stroke-[#001833] group-hover:stroke-[#001833]"),
    to: "/planning",
  },
  {
    id: "navDash5",
    title: "Notification",
    icon: NotificationIcon("stroke-white group-hover:stroke-[#001833]"),
    iconSelected: NotificationIcon("stroke-[#001833] group-hover:stroke-[#001833]"),
    to: "/notification",
  },
  {
    id: "navDash6",
    title: "Setting",
    icon: SettingsIcon("stroke-white group-hover:stroke-[#001833]"),
    iconSelected: SettingsIcon("stroke-[#001833] group-hover:stroke-[#001833]"),
    to: "/setting",
  },
];
