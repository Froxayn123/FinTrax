import LocationIcon from "../assets/LocationIcon";
import MailIcon from "../assets/MailIcon";
import CallIcon from "../assets/CallIcon";

export const FooterDatas = {
  id: "footerDatasCenter",
  head: [
    {
      name: "Contact Us",
      link: [
        {
          icon: LocationIcon(),
          text: "St. Sudirman 52361, Jakarta",
        },
        {
          icon: MailIcon(),
          text: "fintraxsupport@gmail.ac.id",
        },
        {
          icon: CallIcon(),
          text: "+62 88765432109",
        },
      ],
    },
    {
      name: "Features",
      link: [
        {
          text: "Record income & expenses",
        },
        {
          text: "Transaction summary",
        },
        {
          text: "Plan your budget",
        },
        {
          text: "Reminders",
        },
        {
          text: "Saving plan",
        },
        {
          text: "Financial articles & tips",
        },
      ],
    },
    {
      name: "Link",
      link: [
        {
          text: "User guide",
        },
        {
          text: "Privacy policy",
        },
        {
          text: "Terms & condition",
        },
      ],
    },
  ],
};
