import PropTypes from "prop-types";

const NotificationIcon = (className) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={className}>
      <g id="notification-4_svgrepo.com">
        <g id="Vector">
          <mask id="path-1-inside-1_3156_30623" fill="white">
            <path d="M14.6572 9.1757C15.1746 9.1579 15.5797 8.72399 15.5618 8.20652C15.5441 7.68906 15.1102 7.284 14.5927 7.3018L14.6572 9.1757ZM8.94797 14.4525L8.01092 14.4812C8.01125 14.4923 8.01178 14.5032 8.0125 14.5142L8.94797 14.4525ZM7.34775 18.7238L7.95977 19.4339C7.97653 19.4195 7.99278 19.4045 8.00848 19.3889L7.34775 18.7238ZM6.79932 19.1775L7.35002 19.9363C7.36549 19.925 7.38061 19.9132 7.39538 19.9011L6.79932 19.1775ZM12.1874 22.1875C12.7052 22.1875 13.1249 21.7677 13.1249 21.25C13.1249 20.7323 12.7052 20.3125 12.1874 20.3125V22.1875ZM14.6572 7.3018C14.1397 7.284 13.7058 7.68906 13.6879 8.20652C13.6702 8.72399 14.0752 9.1579 14.5927 9.1757L14.6572 7.3018ZM20.3018 14.4525L21.2373 14.5141C21.2381 14.5031 21.2386 14.4923 21.2389 14.4812L20.3018 14.4525ZM21.9021 18.7225L21.2413 19.3876C21.2571 19.4031 21.2733 19.4182 21.2901 19.4326L21.9021 18.7225ZM22.4506 19.1762L21.8544 19.8999C21.8689 19.9117 21.8837 19.9233 21.8988 19.9342L22.4506 19.1762ZM17.0624 20.3125C16.5447 20.3125 16.1249 20.7323 16.1249 21.25C16.1249 21.7677 16.5447 22.1875 17.0624 22.1875V20.3125ZM13.6874 8.23875C13.6874 8.75651 14.1072 9.17625 14.6249 9.17625C15.1427 9.17625 15.5624 8.75651 15.5624 8.23875H13.6874ZM15.5624 6.25C15.5624 5.73224 15.1427 5.3125 14.6249 5.3125C14.1072 5.3125 13.6874 5.73224 13.6874 6.25H15.5624ZM12.1874 20.3125C11.6696 20.3125 11.2499 20.7323 11.2499 21.25C11.2499 21.7677 11.6696 22.1875 12.1874 22.1875V20.3125ZM17.0624 22.1875C17.5802 22.1875 17.9999 21.7677 17.9999 21.25C17.9999 20.7323 17.5802 20.3125 17.0624 20.3125V22.1875ZM13.1249 21.25C13.1249 20.7323 12.7052 20.3125 12.1874 20.3125C11.6696 20.3125 11.2499 20.7323 11.2499 21.25H13.1249ZM17.9999 21.25C17.9999 20.7323 17.5802 20.3125 17.0624 20.3125C16.5447 20.3125 16.1249 20.7323 16.1249 21.25H17.9999ZM14.5927 7.3018C10.8154 7.43173 7.89379 10.665 8.01092 14.4812L9.88503 14.4237C9.79822 11.5952 11.9562 9.2686 14.6572 9.1757L14.5927 7.3018ZM8.0125 14.5142C8.10029 15.8435 7.61202 17.1398 6.68703 18.0586L8.00848 19.3889C9.32394 18.082 10.0064 16.2533 9.88343 14.3907L8.0125 14.5142ZM6.73574 18.0136C6.53988 18.1824 6.37525 18.3122 6.20324 18.4539L7.39538 19.9011C7.53293 19.7878 7.74368 19.6201 7.95977 19.4339L6.73574 18.0136ZM6.24862 18.4187C5.97454 18.6177 5.72549 18.902 5.53984 19.2021C5.35649 19.4984 5.18107 19.8972 5.15859 20.3385C5.134 20.8211 5.30025 21.3579 5.79414 21.7355C6.23599 22.0735 6.81823 22.1875 7.43428 22.1875V20.3125C7.23012 20.3125 7.09507 20.2925 7.01222 20.2714C6.93007 20.2505 6.91545 20.2326 6.93315 20.2461C6.95608 20.2637 6.99007 20.301 7.01248 20.3546C7.03283 20.4035 7.03108 20.4355 7.03117 20.434C7.03134 20.4304 7.03383 20.4041 7.05168 20.3549C7.06912 20.3067 7.09659 20.2496 7.13429 20.1887C7.17178 20.1281 7.21442 20.0718 7.25665 20.0247C7.30009 19.9763 7.33385 19.9479 7.35002 19.9363L6.24862 18.4187ZM7.43428 22.1875H12.1874V20.3125H7.43428V22.1875ZM14.5927 9.1757C17.2937 9.2686 19.4516 11.5952 19.3648 14.4237L21.2389 14.4812C21.3561 10.665 18.4344 7.43173 14.6572 7.3018L14.5927 9.1757ZM19.3664 14.3909C19.2438 16.253 19.9263 18.0811 21.2413 19.3876L22.5628 18.0574C21.6381 17.1388 21.1498 15.843 21.2373 14.5141L19.3664 14.3909ZM21.2901 19.4326C21.5062 19.6189 21.7169 19.7865 21.8544 19.8999L23.0466 18.4526C22.8746 18.311 22.7099 18.1811 22.5141 18.0124L21.2901 19.4326ZM21.8988 19.9342C21.9156 19.9464 21.9498 19.9753 21.9936 20.0241C22.0362 20.0716 22.0792 20.1282 22.1171 20.1892C22.1551 20.2505 22.1828 20.3079 22.2004 20.3562C22.2184 20.4058 22.2211 20.4321 22.2212 20.4356C22.2213 20.4371 22.2194 20.4048 22.2399 20.3555C22.2624 20.3013 22.2968 20.2638 22.3199 20.246C22.3377 20.2324 22.3231 20.2502 22.2406 20.2712C22.1573 20.2925 22.0217 20.3125 21.8168 20.3125V22.1875C22.4334 22.1875 23.0164 22.0736 23.4586 21.7356C23.9534 21.3574 24.1192 20.8196 24.0936 20.3366C24.0702 19.8951 23.8938 19.4965 23.7102 19.2005C23.5242 18.9008 23.2752 18.617 23.0022 18.4183L21.8988 19.9342ZM21.8168 20.3125H17.0624V22.1875H21.8168V20.3125ZM15.5624 8.23875V6.25H13.6874V8.23875H15.5624ZM12.1874 22.1875H17.0624V20.3125H12.1874V22.1875ZM11.2499 21.25C11.2499 23.126 12.7387 24.6875 14.6249 24.6875V22.8125C13.8187 22.8125 13.1249 22.1355 13.1249 21.25H11.2499ZM14.6249 24.6875C16.5111 24.6875 17.9999 23.126 17.9999 21.25H16.1249C16.1249 22.1355 15.4311 22.8125 14.6249 22.8125V24.6875Z" />
          </mask>
          <path
            d="M14.6572 9.1757C15.1746 9.1579 15.5797 8.72399 15.5618 8.20652C15.5441 7.68906 15.1102 7.284 14.5927 7.3018L14.6572 9.1757ZM8.94797 14.4525L8.01092 14.4812C8.01125 14.4923 8.01178 14.5032 8.0125 14.5142L8.94797 14.4525ZM7.34775 18.7238L7.95977 19.4339C7.97653 19.4195 7.99278 19.4045 8.00848 19.3889L7.34775 18.7238ZM6.79932 19.1775L7.35002 19.9363C7.36549 19.925 7.38061 19.9132 7.39538 19.9011L6.79932 19.1775ZM12.1874 22.1875C12.7052 22.1875 13.1249 21.7677 13.1249 21.25C13.1249 20.7323 12.7052 20.3125 12.1874 20.3125V22.1875ZM14.6572 7.3018C14.1397 7.284 13.7058 7.68906 13.6879 8.20652C13.6702 8.72399 14.0752 9.1579 14.5927 9.1757L14.6572 7.3018ZM20.3018 14.4525L21.2373 14.5141C21.2381 14.5031 21.2386 14.4923 21.2389 14.4812L20.3018 14.4525ZM21.9021 18.7225L21.2413 19.3876C21.2571 19.4031 21.2733 19.4182 21.2901 19.4326L21.9021 18.7225ZM22.4506 19.1762L21.8544 19.8999C21.8689 19.9117 21.8837 19.9233 21.8988 19.9342L22.4506 19.1762ZM17.0624 20.3125C16.5447 20.3125 16.1249 20.7323 16.1249 21.25C16.1249 21.7677 16.5447 22.1875 17.0624 22.1875V20.3125ZM13.6874 8.23875C13.6874 8.75651 14.1072 9.17625 14.6249 9.17625C15.1427 9.17625 15.5624 8.75651 15.5624 8.23875H13.6874ZM15.5624 6.25C15.5624 5.73224 15.1427 5.3125 14.6249 5.3125C14.1072 5.3125 13.6874 5.73224 13.6874 6.25H15.5624ZM12.1874 20.3125C11.6696 20.3125 11.2499 20.7323 11.2499 21.25C11.2499 21.7677 11.6696 22.1875 12.1874 22.1875V20.3125ZM17.0624 22.1875C17.5802 22.1875 17.9999 21.7677 17.9999 21.25C17.9999 20.7323 17.5802 20.3125 17.0624 20.3125V22.1875ZM13.1249 21.25C13.1249 20.7323 12.7052 20.3125 12.1874 20.3125C11.6696 20.3125 11.2499 20.7323 11.2499 21.25H13.1249ZM17.9999 21.25C17.9999 20.7323 17.5802 20.3125 17.0624 20.3125C16.5447 20.3125 16.1249 20.7323 16.1249 21.25H17.9999ZM14.5927 7.3018C10.8154 7.43173 7.89379 10.665 8.01092 14.4812L9.88503 14.4237C9.79822 11.5952 11.9562 9.2686 14.6572 9.1757L14.5927 7.3018ZM8.0125 14.5142C8.10029 15.8435 7.61202 17.1398 6.68703 18.0586L8.00848 19.3889C9.32394 18.082 10.0064 16.2533 9.88343 14.3907L8.0125 14.5142ZM6.73574 18.0136C6.53988 18.1824 6.37525 18.3122 6.20324 18.4539L7.39538 19.9011C7.53293 19.7878 7.74368 19.6201 7.95977 19.4339L6.73574 18.0136ZM6.24862 18.4187C5.97454 18.6177 5.72549 18.902 5.53984 19.2021C5.35649 19.4984 5.18107 19.8972 5.15859 20.3385C5.134 20.8211 5.30025 21.3579 5.79414 21.7355C6.23599 22.0735 6.81823 22.1875 7.43428 22.1875V20.3125C7.23012 20.3125 7.09507 20.2925 7.01222 20.2714C6.93007 20.2505 6.91545 20.2326 6.93315 20.2461C6.95608 20.2637 6.99007 20.301 7.01248 20.3546C7.03283 20.4035 7.03108 20.4355 7.03117 20.434C7.03134 20.4304 7.03383 20.4041 7.05168 20.3549C7.06912 20.3067 7.09659 20.2496 7.13429 20.1887C7.17178 20.1281 7.21442 20.0718 7.25665 20.0247C7.30009 19.9763 7.33385 19.9479 7.35002 19.9363L6.24862 18.4187ZM7.43428 22.1875H12.1874V20.3125H7.43428V22.1875ZM14.5927 9.1757C17.2937 9.2686 19.4516 11.5952 19.3648 14.4237L21.2389 14.4812C21.3561 10.665 18.4344 7.43173 14.6572 7.3018L14.5927 9.1757ZM19.3664 14.3909C19.2438 16.253 19.9263 18.0811 21.2413 19.3876L22.5628 18.0574C21.6381 17.1388 21.1498 15.843 21.2373 14.5141L19.3664 14.3909ZM21.2901 19.4326C21.5062 19.6189 21.7169 19.7865 21.8544 19.8999L23.0466 18.4526C22.8746 18.311 22.7099 18.1811 22.5141 18.0124L21.2901 19.4326ZM21.8988 19.9342C21.9156 19.9464 21.9498 19.9753 21.9936 20.0241C22.0362 20.0716 22.0792 20.1282 22.1171 20.1892C22.1551 20.2505 22.1828 20.3079 22.2004 20.3562C22.2184 20.4058 22.2211 20.4321 22.2212 20.4356C22.2213 20.4371 22.2194 20.4048 22.2399 20.3555C22.2624 20.3013 22.2968 20.2638 22.3199 20.246C22.3377 20.2324 22.3231 20.2502 22.2406 20.2712C22.1573 20.2925 22.0217 20.3125 21.8168 20.3125V22.1875C22.4334 22.1875 23.0164 22.0736 23.4586 21.7356C23.9534 21.3574 24.1192 20.8196 24.0936 20.3366C24.0702 19.8951 23.8938 19.4965 23.7102 19.2005C23.5242 18.9008 23.2752 18.617 23.0022 18.4183L21.8988 19.9342ZM21.8168 20.3125H17.0624V22.1875H21.8168V20.3125ZM15.5624 8.23875V6.25H13.6874V8.23875H15.5624ZM12.1874 22.1875H17.0624V20.3125H12.1874V22.1875ZM11.2499 21.25C11.2499 23.126 12.7387 24.6875 14.6249 24.6875V22.8125C13.8187 22.8125 13.1249 22.1355 13.1249 21.25H11.2499ZM14.6249 24.6875C16.5111 24.6875 17.9999 23.126 17.9999 21.25H16.1249C16.1249 22.1355 15.4311 22.8125 14.6249 22.8125V24.6875Z"
            fill="#ECEFF5"
          />
          <path
            d="M13.1249 21.25V21.5H13.3749V21.25H13.1249ZM16.1249 21.25H15.8749V21.5H16.1249V21.25ZM11.2499 21.25H10.9999V21.5H11.2499V21.25ZM17.9999 21.25V21.5H18.2499V21.25H17.9999ZM14.3428 7.3104L14.4073 9.1843L14.907 9.1671L14.8425 7.2932L14.3428 7.3104ZM13.3749 21.25C13.3749 20.5942 12.8432 20.0625 12.1874 20.0625V20.5625C12.5671 20.5625 12.8749 20.8703 12.8749 21.25H13.3749ZM11.9374 20.3125V22.1875H12.4374V20.3125H11.9374ZM14.8425 9.1843L14.907 7.3104L14.4073 7.2932L14.3428 9.1671L14.8425 9.1843ZM17.0624 20.0625C16.4066 20.0625 15.8749 20.5942 15.8749 21.25H16.3749C16.3749 20.8703 16.6827 20.5625 17.0624 20.5625V20.0625ZM17.3124 22.1875V20.3125H16.8124V22.1875H17.3124ZM15.5624 7.98875H13.6874V8.48875H15.5624V7.98875ZM13.6874 6.5H15.5624V6H13.6874V6.5ZM12.1874 20.0625C11.5316 20.0625 10.9999 20.5942 10.9999 21.25H11.4999C11.4999 20.8703 11.8077 20.5625 12.1874 20.5625V20.0625ZM18.2499 21.25C18.2499 20.5942 17.7182 20.0625 17.0624 20.0625V20.5625C17.4421 20.5625 17.7499 20.8703 17.7499 21.25H18.2499ZM11.2499 21.5H13.1249V21H11.2499V21.5ZM16.1249 21.5H17.9999V21H16.1249V21.5ZM7.68428 22.1875V20.3125H7.18428V22.1875H7.68428ZM21.5668 20.3125V22.1875H22.0668V20.3125H21.5668ZM14.8749 24.6875V22.8125H14.3749V24.6875H14.8749ZM14.6572 9.1757L14.6744 9.6754L14.6744 9.6754L14.6572 9.1757ZM15.5618 8.20652L15.0621 8.22367L15.0621 8.22379L15.5618 8.20652ZM14.5927 7.3018L14.5755 6.8021L14.5927 7.3018ZM8.94797 14.4525L8.9809 14.9514L8.93263 13.9527L8.94797 14.4525ZM8.0125 14.5142L7.51359 14.5471L7.51359 14.5472L8.0125 14.5142ZM7.34775 18.7238L7.70248 18.3714L6.969 19.0502L7.34775 18.7238ZM6.79932 19.1775L7.18524 18.8596L6.39466 19.4712L6.79932 19.1775ZM7.35002 19.9363L7.64197 20.3422L7.64402 20.3407L7.35002 19.9363ZM7.39538 19.9011L7.71273 20.2875L7.7134 20.287L7.39538 19.9011ZM14.6572 7.3018L14.6744 6.8021H14.6744L14.6572 7.3018ZM13.6879 8.20652L13.1882 8.18926L13.1882 8.18938L13.6879 8.20652ZM14.5927 9.1757L14.5755 9.6754H14.5755L14.5927 9.1757ZM20.3018 14.4525L20.3171 13.9527L20.2689 14.9514L20.3018 14.4525ZM21.2389 14.4812L21.7386 14.4983L21.7387 14.4966L21.2389 14.4812ZM21.9021 18.7225L22.2808 19.0489L21.5473 18.3701L21.9021 18.7225ZM21.2413 19.3876L20.8889 19.7423L20.8906 19.744L21.2413 19.3876ZM22.4506 19.1762L22.8548 19.4705L22.0646 18.8583L22.4506 19.1762ZM21.8544 19.8999L21.5363 20.2856L21.5376 20.2867L21.8544 19.8999ZM21.8988 19.9342L21.6047 20.3386L21.6056 20.3393L21.8988 19.9342ZM9.88503 14.4237L9.90036 14.9235L10.4001 14.9082L10.3848 14.4084L9.88503 14.4237ZM6.68703 18.0586L6.33465 17.7039L5.97993 18.0563L6.3323 18.411L6.68703 18.0586ZM9.88343 14.3907L10.3823 14.3578L10.3494 13.8589L9.85049 13.8918L9.88343 14.3907ZM6.73574 18.0136L7.11449 17.6872L6.78812 17.3085L6.40938 17.6348L6.73574 18.0136ZM6.20324 18.4539L5.88543 18.0679L5.49934 18.3858L5.81731 18.7718L6.20324 18.4539ZM6.24862 18.4187L6.65327 18.1251L6.35952 17.7203L5.95485 18.0142L6.24862 18.4187ZM5.53984 19.2021L5.965 19.4653L5.96506 19.4652L5.53984 19.2021ZM5.15859 20.3385L5.65794 20.3639L5.65794 20.3639L5.15859 20.3385ZM5.79414 21.7355L6.09793 21.3384L6.09784 21.3383L5.79414 21.7355ZM7.01222 20.2714L7.13575 19.7869L7.13536 19.7868L7.01222 20.2714ZM6.93315 20.2461L7.23791 19.8497L7.23638 19.8486L6.93315 20.2461ZM7.01248 20.3546L7.47407 20.1624L7.47381 20.1618L7.01248 20.3546ZM7.03117 20.434L7.53034 20.4631L7.53058 20.4581L7.03117 20.434ZM7.05168 20.3549L7.52176 20.5252L7.52177 20.5252L7.05168 20.3549ZM7.13429 20.1887L7.55937 20.452L7.55956 20.4517L7.13429 20.1887ZM7.25665 20.0247L7.62855 20.359L7.62911 20.3583L7.25665 20.0247ZM19.3648 14.4237L18.865 14.4084L18.8497 14.9082L19.3495 14.9235L19.3648 14.4237ZM19.3664 14.3909L19.3993 13.892L18.9004 13.8591L18.8675 14.358L19.3664 14.3909ZM22.5628 18.0574L22.9175 18.4098L23.2699 18.055L22.9152 17.7026L22.5628 18.0574ZM23.0466 18.4526L23.4325 18.7705L23.7504 18.3845L23.3644 18.0666L23.0466 18.4526ZM22.5141 18.0124L22.8404 17.6336L22.4617 17.3073L22.1353 17.686L22.5141 18.0124ZM21.9936 20.0241L21.621 20.3576L21.6214 20.3581L21.9936 20.0241ZM22.1171 20.1892L22.5419 19.9257L22.5418 19.9255L22.1171 20.1892ZM22.2004 20.3562L22.6703 20.1854L22.6702 20.1851L22.2004 20.3562ZM22.2212 20.4356L21.7215 20.4535L21.7219 20.4653L21.7229 20.4771L22.2212 20.4356ZM22.2399 20.3555L22.7015 20.5476L22.7018 20.5471L22.2399 20.3555ZM22.3199 20.246L22.6244 20.6426L22.6244 20.6426L22.3199 20.246ZM22.2406 20.2712L22.1172 19.7867L22.1169 19.7868L22.2406 20.2712ZM23.4586 21.7356L23.1549 21.3384L23.1549 21.3384L23.4586 21.7356ZM24.0936 20.3366L23.5943 20.3631L23.5943 20.3631L24.0936 20.3366ZM23.7102 19.2005L24.1351 18.9369L24.135 18.9369L23.7102 19.2005ZM23.0022 18.4183L23.2965 18.014L22.8922 17.7197L22.5979 18.124L23.0022 18.4183ZM14.6744 9.6754C15.4677 9.64811 16.0889 8.98279 16.0615 8.18926L15.0621 8.22379C15.0704 8.46518 14.8814 8.66769 14.64 8.676L14.6744 9.6754ZM16.0615 8.18938C16.0343 7.39591 15.369 6.7748 14.5755 6.8021L14.6099 7.8015C14.8514 7.7932 15.0538 7.98221 15.0621 8.22367L16.0615 8.18938ZM8.93263 13.9527L7.99558 13.9815L8.02625 14.981L8.9633 14.9523L8.93263 13.9527ZM7.51115 14.4966C7.51166 14.5133 7.51246 14.5301 7.51359 14.5471L8.51142 14.4814C8.51109 14.4764 8.51084 14.4712 8.51068 14.4659L7.51115 14.4966ZM8.04544 15.0132L8.9809 14.9514L8.91503 13.9536L7.97957 14.0153L8.04544 15.0132ZM6.969 19.0502L7.58102 19.7603L8.33851 19.1075L7.7265 18.3973L6.969 19.0502ZM8.28525 19.8134C8.31128 19.7911 8.33662 19.7677 8.36118 19.7433L7.65577 19.0345C7.64894 19.0413 7.64177 19.0479 7.63428 19.0543L8.28525 19.8134ZM8.3632 19.0365L7.70248 18.3714L6.99303 19.0761L7.65375 19.7413L8.3632 19.0365ZM6.39466 19.4712L6.94536 20.2299L7.75467 19.6426L7.20397 18.8838L6.39466 19.4712ZM7.64402 20.3407C7.66808 20.3232 7.69098 20.3054 7.71273 20.2875L7.07803 19.5147C7.07025 19.5211 7.0629 19.5268 7.05601 19.5318L7.64402 20.3407ZM7.78131 19.5832L7.18524 18.8596L6.41339 19.4954L7.00945 20.219L7.78131 19.5832ZM12.1874 22.6875C12.9813 22.6875 13.6249 22.0439 13.6249 21.25H12.6249C12.6249 21.4916 12.429 21.6875 12.1874 21.6875V22.6875ZM14.6744 6.8021C13.8809 6.7748 13.2156 7.39591 13.1882 8.18926L14.1876 8.22379C14.196 7.98221 14.3985 7.7932 14.64 7.8015L14.6744 6.8021ZM13.1882 8.18938C13.161 8.98275 13.782 9.64811 14.5755 9.6754L14.6099 8.676C14.3684 8.66769 14.1793 8.46522 14.1876 8.22367L13.1882 8.18938ZM20.2689 14.9514L21.2044 15.013L21.2702 14.0152L20.3347 13.9536L20.2689 14.9514ZM21.7361 14.5481C21.7374 14.5299 21.7381 14.5131 21.7386 14.4983L20.7392 14.4642C20.739 14.4714 20.7387 14.4764 20.7385 14.4801L21.7361 14.5481ZM21.2543 13.9815L20.3171 13.9527L20.2865 14.9523L21.2236 14.981L21.2543 13.9815ZM21.5473 18.3701L20.8866 19.0352L21.596 19.74L22.2568 19.0749L21.5473 18.3701ZM20.8906 19.744C20.9129 19.766 20.9376 19.789 20.9644 19.8121L21.6157 19.0532C21.609 19.0475 21.6012 19.0403 21.592 19.0313L20.8906 19.744ZM21.6688 19.759L22.2808 19.0489L21.5233 18.3961L20.9113 19.1062L21.6688 19.759ZM22.0646 18.8583L21.4685 19.582L22.2403 20.2178L22.8365 19.4942L22.0646 18.8583ZM21.5376 20.2867C21.5582 20.3036 21.5806 20.3211 21.6047 20.3386L22.1929 19.5299C22.1867 19.5254 22.1796 19.5199 22.1712 19.513L21.5376 20.2867ZM22.303 20.2285L22.8548 19.4705L22.0463 18.882L21.4946 19.64L22.303 20.2285ZM15.6249 21.25C15.6249 22.0439 16.2685 22.6875 17.0624 22.6875V21.6875C16.8208 21.6875 16.6249 21.4916 16.6249 21.25H15.6249ZM13.1874 8.23875C13.1874 9.03266 13.831 9.67625 14.6249 9.67625V8.67625C14.3833 8.67625 14.1874 8.48037 14.1874 8.23875H13.1874ZM14.6249 9.67625C15.4188 9.67625 16.0624 9.03266 16.0624 8.23875H15.0624C15.0624 8.48037 14.8665 8.67625 14.6249 8.67625V9.67625ZM16.0624 6.25C16.0624 5.45609 15.4188 4.8125 14.6249 4.8125V5.8125C14.8665 5.8125 15.0624 6.00838 15.0624 6.25H16.0624ZM14.6249 4.8125C13.831 4.8125 13.1874 5.45609 13.1874 6.25H14.1874C14.1874 6.00838 14.3833 5.8125 14.6249 5.8125V4.8125ZM10.7499 21.25C10.7499 22.0439 11.3935 22.6875 12.1874 22.6875V21.6875C11.9458 21.6875 11.7499 21.4916 11.7499 21.25H10.7499ZM17.0624 22.6875C17.8563 22.6875 18.4999 22.0439 18.4999 21.25H17.4999C17.4999 21.4916 17.304 21.6875 17.0624 21.6875V22.6875ZM14.5755 6.8021C10.5107 6.94191 7.38596 10.4175 7.51115 14.4966L8.51068 14.4659C8.40162 10.9126 11.1201 7.92154 14.6099 7.8015L14.5755 6.8021ZM8.02625 14.981L9.90036 14.9235L9.86969 13.924L7.99558 13.9815L8.02625 14.981ZM10.3848 14.4084C10.3061 11.8439 12.2597 9.75846 14.6744 9.6754L14.64 8.676C11.6526 8.77874 9.29035 11.3464 9.38526 14.4391L10.3848 14.4084ZM7.51359 14.5472C7.59198 15.7342 7.15552 16.8885 6.33465 17.7039L7.03941 18.4133C8.06851 17.391 8.6086 15.9528 8.51142 14.4813L7.51359 14.5472ZM6.3323 18.411L7.65375 19.7413L8.3632 19.0365L7.04175 17.7062L6.3323 18.411ZM8.36087 19.7436C9.78046 18.3333 10.5147 16.3625 10.3823 14.3578L9.38451 14.4237C9.49814 16.144 8.86742 17.8307 7.65608 19.0342L8.36087 19.7436ZM9.85049 13.8918L7.97957 14.0153L8.04544 15.0132L9.91636 14.8897L9.85049 13.8918ZM6.40938 17.6348C6.21892 17.7989 6.06684 17.9185 5.88543 18.0679L6.52105 18.8399C6.68366 18.706 6.86084 18.5658 7.0621 18.3924L6.40938 17.6348ZM5.81731 18.7718L7.00945 20.219L7.78131 19.5832L6.58917 18.136L5.81731 18.7718ZM7.7134 20.287C7.84186 20.1811 8.06478 20.0035 8.2862 19.8126L7.63333 19.0551C7.42258 19.2368 7.22399 19.3944 7.07736 19.5153L7.7134 20.287ZM8.33851 19.1075L7.11449 17.6872L6.35699 18.34L7.58102 19.7603L8.33851 19.1075ZM5.95485 18.0142C5.61916 18.2579 5.32808 18.594 5.11462 18.9391L5.96506 19.4652C6.1229 19.21 6.32992 18.9776 6.54238 18.8233L5.95485 18.0142ZM5.11468 18.939C4.9048 19.2781 4.68745 19.7592 4.65924 20.3131L5.65794 20.3639C5.67468 20.0353 5.80818 19.7186 5.965 19.4653L5.11468 18.939ZM4.65924 20.3131C4.62788 20.9286 4.8424 21.6372 5.49044 22.1327L6.09784 21.3383C5.7581 21.0785 5.64012 20.7137 5.65794 20.3639L4.65924 20.3131ZM5.49035 22.1326C6.05758 22.5665 6.76882 22.6875 7.43428 22.6875V21.6875C6.86763 21.6875 6.4144 21.5805 6.09793 21.3384L5.49035 22.1326ZM7.43428 19.8125C7.26068 19.8125 7.16873 19.7953 7.13575 19.7869L6.88868 20.7559C7.0214 20.7897 7.19955 20.8125 7.43428 20.8125V19.8125ZM7.13536 19.7868C7.12028 19.7829 7.12527 19.7829 7.14434 19.7917C7.14985 19.7942 7.16826 19.8028 7.19299 19.8184C7.19414 19.8191 7.19824 19.8217 7.20341 19.8251C7.20652 19.8272 7.21512 19.8332 7.22058 19.8371C7.23381 19.847 7.31523 19.927 7.36893 20.0085C7.32202 20.5473 6.76793 20.7156 6.72479 20.699C6.71397 20.694 6.69834 20.6864 6.69343 20.6838C6.68616 20.68 6.68055 20.6768 6.67954 20.6762C6.67361 20.6728 6.66899 20.67 6.66857 20.6698C6.66534 20.6678 6.66266 20.6662 6.66069 20.6649C6.65647 20.6623 6.65261 20.6598 6.64911 20.6574C6.64204 20.6527 6.63566 20.6481 6.62993 20.6437L7.23638 19.8486C7.22622 19.8408 7.21642 19.8338 7.20709 19.8275C7.20245 19.8244 7.19775 19.8214 7.19298 19.8184C7.19074 19.817 7.18786 19.8152 7.18451 19.8132C7.18404 19.8129 7.17938 19.8101 7.17343 19.8067C7.17242 19.8061 7.1668 19.8029 7.15953 19.7991C7.15462 19.7965 7.13899 19.7888 7.12817 19.7839C7.08503 19.7672 6.53094 19.9356 6.48403 20.4743C6.53772 20.5559 6.61914 20.6358 6.63238 20.6458C6.63784 20.6497 6.64644 20.6557 6.64955 20.6577C6.65472 20.6612 6.65883 20.6638 6.65998 20.6645C6.68505 20.6803 6.70892 20.6921 6.72614 20.7C6.76863 20.7196 6.822 20.7389 6.88907 20.756L7.13536 19.7868ZM6.6284 20.6425C6.60293 20.6229 6.58753 20.6057 6.57826 20.5938C6.56793 20.5805 6.55858 20.5652 6.55115 20.5474L7.47381 20.1618C7.41645 20.0246 7.32698 19.9182 7.2379 19.8497L6.6284 20.6425ZM6.55089 20.5468C6.54411 20.5305 6.53855 20.5111 6.5351 20.4884C6.53339 20.4771 6.53221 20.4652 6.53162 20.4525C6.53132 20.4461 6.53117 20.4397 6.53117 20.4332C6.53117 20.4299 6.53121 20.4269 6.53125 20.4246C6.53136 20.4187 6.5312 20.4268 6.53117 20.4306C6.53117 20.4317 6.53113 20.4361 6.53122 20.4417C6.53128 20.4449 6.53155 20.4537 6.5318 20.4592C6.53249 20.4704 6.53787 20.5157 6.54466 20.5495C6.76266 20.8558 7.37115 20.8007 7.51177 20.572C7.51886 20.5443 7.52591 20.5063 7.52726 20.4964C7.52886 20.4837 7.52961 20.4734 7.52963 20.4732C7.52985 20.4704 7.53 20.4681 7.53006 20.4672C7.53013 20.4661 7.53019 20.4653 7.53022 20.4648C7.53027 20.4639 7.53031 20.4632 7.53032 20.4631L6.53201 20.4049C6.53202 20.4048 6.53206 20.4042 6.53211 20.4033C6.53214 20.4028 6.53219 20.4019 6.53227 20.4008C6.53233 20.4 6.53247 20.3977 6.5327 20.3949C6.53271 20.3947 6.53347 20.3844 6.53506 20.3717C6.53641 20.3618 6.54347 20.3238 6.55056 20.2961C6.69117 20.0674 7.29967 20.0123 7.51766 20.3186C7.52445 20.3524 7.52984 20.3977 7.53053 20.4089C7.53077 20.4144 7.53104 20.4232 7.5311 20.4264C7.53119 20.432 7.53116 20.4364 7.53115 20.4375C7.53112 20.4412 7.53097 20.4493 7.53108 20.4432C7.53113 20.4405 7.53117 20.437 7.53117 20.4329C7.53117 20.4247 7.53099 20.4157 7.53052 20.4057C7.5296 20.386 7.52757 20.3632 7.52374 20.338C7.51605 20.2875 7.5012 20.2276 7.47407 20.1624L6.55089 20.5468ZM7.53058 20.4581C7.53004 20.4693 7.52924 20.4779 7.52873 20.4828C7.52813 20.4887 7.52748 20.4937 7.52686 20.4981C7.52562 20.5067 7.52433 20.5134 7.52329 20.5182C7.52121 20.5277 7.51999 20.5301 7.52176 20.5252L6.5816 20.1845C6.55081 20.2694 6.53485 20.3456 6.53175 20.4099L7.53058 20.4581ZM7.52177 20.5252C7.52589 20.5138 7.53727 20.4877 7.55937 20.452L6.70921 19.9255C6.65591 20.0115 6.61234 20.0997 6.58159 20.1845L7.52177 20.5252ZM7.55956 20.4517C7.58149 20.4162 7.60629 20.3837 7.62855 20.359L6.88476 19.6905C6.82254 19.7598 6.76206 19.84 6.70903 19.9258L7.55956 20.4517ZM7.62911 20.3583C7.6403 20.3458 7.64825 20.3382 7.65196 20.3348C7.65381 20.3331 7.65425 20.3327 7.65315 20.3337C7.65234 20.3343 7.64858 20.3374 7.64197 20.3422L7.05806 19.5303C7.00663 19.5673 6.94638 19.6217 6.8842 19.6912L7.62911 20.3583ZM7.75467 19.6426L6.65327 18.1251L5.84396 18.7124L6.94536 20.2299L7.75467 19.6426ZM7.43428 22.6875H12.1874V21.6875H7.43428V22.6875ZM12.1874 19.8125H7.43428V20.8125H12.1874V19.8125ZM14.5755 9.6754C16.9901 9.75845 18.9437 11.8439 18.865 14.4084L19.8646 14.4391C19.9594 11.3465 17.5972 8.77875 14.6099 8.676L14.5755 9.6754ZM19.3495 14.9235L21.2236 14.981L21.2543 13.9815L19.3801 13.924L19.3495 14.9235ZM21.7387 14.4966C21.8639 10.4175 18.7391 6.94191 14.6744 6.8021L14.64 7.8015C18.1297 7.92154 20.8482 10.9126 20.7392 14.4659L21.7387 14.4966ZM18.8675 14.358C18.7355 16.3623 19.4698 18.3324 20.8889 19.7423L21.5937 19.0329C20.3828 17.8299 19.7521 16.1437 19.8653 14.4237L18.8675 14.358ZM21.596 19.74L22.9175 18.4098L22.2081 17.705L20.8866 19.0352L21.596 19.74ZM22.9152 17.7026C22.0945 16.8874 21.6581 15.7337 21.7362 14.547L20.7384 14.4813C20.6415 15.9523 21.1816 17.3901 22.2104 18.4121L22.9152 17.7026ZM21.2702 14.0152L19.3993 13.892L19.3336 14.8898L21.2044 15.013L21.2702 14.0152ZM20.9636 19.8114C21.185 20.0022 21.4081 20.1799 21.5363 20.2856L22.1725 19.5141C22.0258 19.3931 21.8273 19.2356 21.6165 19.0539L20.9636 19.8114ZM22.2404 20.2178L23.4325 18.7705L22.6606 18.1347L21.4685 19.582L22.2404 20.2178ZM23.3644 18.0666C23.183 17.9173 23.0309 17.7977 22.8404 17.6336L22.1877 18.3912C22.389 18.5646 22.5662 18.7048 22.7287 18.8386L23.3644 18.0666ZM22.1353 17.686L20.9113 19.1062L21.6688 19.759L22.8928 18.3388L22.1353 17.686ZM21.6056 20.3393C21.5996 20.3349 21.5962 20.3321 21.5956 20.3316C21.5948 20.3309 21.5954 20.3314 21.5974 20.3333C21.6014 20.337 21.6097 20.3449 21.621 20.3576L22.3661 19.6906C22.3034 19.6206 22.2431 19.5662 22.192 19.5292L21.6056 20.3393ZM21.6214 20.3581C21.6447 20.384 21.67 20.4172 21.6923 20.453L22.5418 19.9255C22.4883 19.8393 22.4276 19.7592 22.3657 19.6902L21.6214 20.3581ZM21.6922 20.4528C21.7148 20.4893 21.7264 20.5159 21.7306 20.5274L22.6702 20.1851C22.6392 20.0999 22.5953 20.0117 22.5419 19.9257L21.6922 20.4528ZM21.7305 20.5271C21.7325 20.5324 21.7313 20.5304 21.7293 20.5211C21.7283 20.5165 21.7269 20.5097 21.7256 20.5008C21.725 20.4964 21.7243 20.4909 21.7236 20.4845C21.7232 20.4799 21.722 20.4685 21.7215 20.4535L22.7209 20.4178C22.7183 20.3463 22.6999 20.2667 22.6703 20.1854L21.7305 20.5271ZM21.7229 20.4771C21.723 20.4782 21.7232 20.4809 21.7236 20.4844C21.7236 20.4851 21.7247 20.4969 21.727 20.5116C21.727 20.512 21.7314 20.544 21.7431 20.5821C21.7533 20.6121 21.807 20.7157 21.8605 20.782C22.0887 20.9178 22.5284 20.8302 22.6558 20.6828C22.6817 20.6303 22.7076 20.5516 22.7127 20.5276C22.7149 20.5145 22.7178 20.4933 22.7187 20.4852C22.7202 20.4705 22.7207 20.459 22.7208 20.4554C22.7211 20.4466 22.7212 20.4396 22.7212 20.4383C22.7212 20.4357 22.7212 20.4337 22.7212 20.4329C22.7212 20.4319 22.7212 20.4311 22.7212 20.4307C22.7212 20.4303 22.7212 20.43 22.7212 20.4299C22.7212 20.4298 22.7212 20.4322 22.7212 20.4351C22.7212 20.4408 22.7211 20.4469 22.7208 20.4532C22.7202 20.4656 22.7191 20.4775 22.7174 20.4888C22.714 20.5115 22.7084 20.5311 22.7015 20.5476L21.7783 20.1634C21.7509 20.2292 21.7361 20.2896 21.7284 20.3404C21.7246 20.3658 21.7227 20.3885 21.7218 20.4081C21.7213 20.418 21.7212 20.4268 21.7212 20.4342C21.7212 20.436 21.7212 20.4376 21.7212 20.439C21.7212 20.4402 21.7212 20.4414 21.7212 20.4411C21.7212 20.4411 21.7212 20.4408 21.7212 20.4404C21.7212 20.4401 21.7212 20.4393 21.7212 20.4384C21.7212 20.4375 21.7212 20.4356 21.7212 20.433C21.7212 20.4317 21.7212 20.4247 21.7216 20.4159C21.7217 20.4124 21.7222 20.4008 21.7236 20.3862C21.7245 20.378 21.7274 20.3568 21.7297 20.3438C21.7348 20.3198 21.7606 20.241 21.7865 20.1886C21.914 20.0412 22.3537 19.9536 22.5818 20.0894C22.6354 20.1556 22.689 20.2593 22.6993 20.2893C22.7109 20.3274 22.7153 20.3594 22.7154 20.3598C22.7176 20.3744 22.7187 20.3862 22.7188 20.3869C22.7191 20.3904 22.7194 20.3931 22.7194 20.3941L21.7229 20.4771ZM22.7018 20.5471C22.6943 20.5652 22.6848 20.5807 22.6743 20.5941C22.6649 20.6062 22.6495 20.6233 22.6244 20.6426L22.0155 19.8494C21.9265 19.9177 21.8359 20.0246 21.7781 20.1639L22.7018 20.5471ZM22.6244 20.6426C22.6188 20.6469 22.6127 20.6513 22.6063 20.6557C22.603 20.6579 22.6 20.6599 22.5971 20.6617C22.5959 20.6626 22.5945 20.6634 22.5952 20.663C22.5953 20.6629 22.5961 20.6624 22.5971 20.6618C22.5972 20.6617 22.6009 20.6594 22.6053 20.6564C22.6065 20.6556 22.614 20.6505 22.6233 20.6437C22.6292 20.6393 22.6464 20.6256 22.6575 20.6161C22.6868 20.588 22.8224 20.3061 22.7821 20.0351C22.5614 19.7998 22.1982 19.758 22.1545 19.7718C22.1399 19.7774 22.1183 19.7867 22.1113 19.79C22.1005 19.7951 22.0922 19.7996 22.091 19.8003C22.0839 19.8041 22.0979 19.7964 22.1094 19.7912C22.1279 19.7827 22.1325 19.7828 22.1172 19.7867L22.3639 20.7558C22.4311 20.7387 22.4842 20.7194 22.5263 20.7001C22.5495 20.6894 22.569 20.6786 22.5623 20.6822C22.561 20.6829 22.5527 20.6874 22.5419 20.6925C22.5349 20.6958 22.5134 20.7051 22.4987 20.7107C22.455 20.7245 22.0918 20.6827 21.8711 20.4474C21.8309 20.1764 21.9664 19.8945 21.9957 19.8664C22.0068 19.8569 22.024 19.8432 22.0299 19.8388C22.0392 19.832 22.0467 19.8269 22.0479 19.8261C22.0524 19.8231 22.056 19.8208 22.0561 19.8207C22.0571 19.8201 22.0578 19.8196 22.0579 19.8196C22.0585 19.8192 22.0569 19.8202 22.0554 19.8212C22.052 19.8234 22.0481 19.826 22.0437 19.829C22.035 19.8349 22.0255 19.8417 22.0155 19.8494L22.6244 20.6426ZM22.1169 19.7868C22.0837 19.7952 21.9913 19.8125 21.8168 19.8125V20.8125C22.052 20.8125 22.2309 20.7898 22.3642 20.7557L22.1169 19.7868ZM21.8168 22.6875C22.4826 22.6875 23.1946 22.5668 23.7622 22.1328L23.1549 21.3384C22.8382 21.5805 22.3843 21.6875 21.8168 21.6875V22.6875ZM23.7622 22.1329C24.4116 21.6365 24.6255 20.9263 24.5928 20.3101L23.5943 20.3631C23.6128 20.7129 23.4953 21.0782 23.1549 21.3384L23.7622 22.1329ZM24.5929 20.3102C24.5635 19.7561 24.345 19.2754 24.1351 18.9369L23.2853 19.4641C23.4426 19.7176 23.5768 20.0342 23.5943 20.3631L24.5929 20.3102ZM24.135 18.9369C23.9213 18.5924 23.6305 18.2572 23.2965 18.014L22.7079 18.8225C22.9198 18.9768 23.1271 19.2091 23.2853 19.4641L24.135 18.9369ZM22.5979 18.124L21.4945 19.64L22.3031 20.2285L23.4064 18.7125L22.5979 18.124ZM21.8168 19.8125H17.0624V20.8125H21.8168V19.8125ZM17.0624 22.6875H21.8168V21.6875H17.0624V22.6875ZM16.0624 8.23875V6.25H15.0624V8.23875H16.0624ZM13.1874 6.25V8.23875H14.1874V6.25H13.1874ZM12.1874 22.6875H17.0624V21.6875H12.1874V22.6875ZM17.0624 19.8125H12.1874V20.8125H17.0624V19.8125ZM10.7499 21.25C10.7499 23.3891 12.4497 25.1875 14.6249 25.1875V24.1875C13.0277 24.1875 11.7499 22.8629 11.7499 21.25H10.7499ZM14.6249 22.3125C14.1045 22.3125 13.6249 21.8691 13.6249 21.25H12.6249C12.6249 22.4019 13.5329 23.3125 14.6249 23.3125V22.3125ZM14.6249 25.1875C16.8 25.1875 18.4999 23.3891 18.4999 21.25H17.4999C17.4999 22.8629 16.2221 24.1875 14.6249 24.1875V25.1875ZM15.6249 21.25C15.6249 21.8691 15.1453 22.3125 14.6249 22.3125V23.3125C15.7168 23.3125 16.6249 22.4019 16.6249 21.25H15.6249Z"
            fill="#ECEFF5"
            mask="url(#path-1-inside-1_3156_30623)"
          />
        </g>
      </g>
    </svg>
  );
};

export default NotificationIcon;

NotificationIcon.PropTypes = {
  className: PropTypes.string,
};
