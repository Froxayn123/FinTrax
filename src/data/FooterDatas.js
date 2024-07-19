import LocationIcon from "@/components/svg/LocationIcon";
import MailIcon from "@/components/svg/MailIcon";
import PhoneIcon from "@/components/svg/PhoneIcon";

export const FooterDatas = {
  id: "footerDatasCenter",
  head: [
    {
      name: "Contact Us",
      link: [
        {
          icon: LocationIcon("stroke-white"),
          text: "St. Sudirman 52361, Jakarta",
        },
        {
          icon: MailIcon("fill-white"),
          text: "fintraxsupport@gmailIcon.ac.id",
        },
        {
          icon: PhoneIcon("fill-white"),
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
          text: "Privacy policy",
          to: "/privacypolicy",
        },
        {
          text: "Terms & condition",
          to: "/terms",
        },
      ],
    },
  ],
};
