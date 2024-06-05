import Polygon1 from "../assets/Polygon1";
import Polygon3 from "../assets/Polygon3";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Polygon1 />
      <Polygon3 />
      <header>
        <Navbar />
      </header>
      <main className="mx-[100px]">
        <div className="flex flex-col justify-center items-center mt-[200px] space-y-[100px]">
          <div className="flex flex-col justify-center items-center space-y-[32px]">
            <div>
            <h1 className="text-white text-[57px] font-medium font-['Roboto']">Privacy Policy</h1>
            <p className="text-white text-center">Effective Date : 31 Oktober 2023 </p></div>
            <p className="text-center text-gray-100 text-xl font-normal font-['Roboto']">
              Welcome to Fintrax! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              [www.fintrax.com] or use our services. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>
          </div>
          <div className="w-[1040px] space-y-[60px]">
          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">1. Information We Collect</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">
              1.1 Personal Data <br /> We may collect personal information that you provide to us, such as:
              <ul className="ml-5 mt-2 mb-2 list-disc list-inside">
                <li>Name</li>
                <li>Email</li>
                <li>Address</li>
                <li>Phone number</li>
                <li>Financial information (e.g., income, expenses, savings goals)</li>
              </ul>
              1.2 Usage Data
              <br /> We automatically collect certain information when you visit, use, or navigate the site. This may include:
              <ul className="ml-5 mt-2 mb-2 list-disc list-inside">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages you visit</li>
                <li>Time and date of your visit</li>
                <li>The time spent on those pages</li>
              </ul>
              1.3 Cookies and Tracking Technologies
              <br /> We use cookies and similar tracking technologies to track the activity on our site and hold certain information. Cookies are files with a small amount of data that are placed on your device. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
            </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">2. How We Use Your Information</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">
              We may use the information we collect for various purposes, including:
              <ul className="ml-5 mt-2 list-disc list-inside">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To improve, personalize, and expand our website and services</li>
                <li>To understand and analyze how you use our website and services</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>
                  To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                </li>
                <li>To process your transactions and manage your accounts</li>
                <li>To find and prevent fraud</li>
              </ul>
            </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">3. Sharing Your Information</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">
              We may share your information in the following situations:
              <ul className="ml-5 mt-2 mb-2 list-disc list-inside">
                <li>
                  With Service Providers: We may share your information with third-party service providers to perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and
                  marketing assistance.
                </li>
                <li>
                  For Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another
                  company.
                </li>
                <li>With Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                <li>With Business Partners: We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                <li>With Your Consent: We may disclose your personal information for any other purpose with your consent.</li>
              </ul>
            </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">4. Data Security</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that
              despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other types of misuse.
            </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">5. Your Data Protection Rights</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">Depending on your location, you may have the following rights regarding your personal data:
            <ul className="ml-5 mt-2 mb-2 list-disc list-inside">
                <li>
                The right to access – You have the right to request copies of your personal data.
                </li>
                <li>
                The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
                </li>
                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our provided contact information.
              </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">7. Contact Us</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">If you have any questions about this Privacy Policy, please contact us:
            <ul className="ml-5 mt-2 mb-2 list-disc list-inside">
                <li>
                By email: privacy@fintrax.com                </li>
                <li>
                By visiting this page on our website: www.fintrax.com/contact                </li>
                <li>By phone number: [Insert Phone Number]</li>
              </ul>
              </p>
          </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PrivacyPolicy;
