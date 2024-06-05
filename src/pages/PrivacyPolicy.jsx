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
            <h1 className="text-white text-[57px] font-medium font-['Roboto']">Privacy Policy</h1>
            <p className="text-center text-gray-100 text-xl font-normal font-['Roboto']">
              Welcome to Fintrax! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              [www.fintrax.com] or use our services. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">1. Information We Collect</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">
              Over the years, we've grown from a small startup to a leading financial management platform, serving thousands of individuals and businesses worldwide. Our journey has been marked by innovation, perseverance, and a commitment
              to delivering exceptional service to our users. We've continuously updated and refined our platform to meet the evolving needs of our users, incorporating cutting-edge technology and expert insights to ensure that our users
              have the best possible experience.
            </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">Our Approach</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">
              At FinTrax, we believe that financial management should be a collaborative process. Our platform is designed to integrate all aspects of financial planning, from budgeting and saving to investing and tracking. We offer a range
              of tools and resources to help our users set and achieve their financial goals, from personalized financial planning to investment advice and portfolio management.
            </p>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">Our Values</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">At FinTrax, we're committed to the following values:</p>
            <ol className="text-gray-100 text-lg font-normal font-['Roboto'] list-decimal list-outside">
              <li className="pl-2">Transparency: We believe that financial management should be transparent and easy to understand. That's why we provide clear, concise information PrivacyPolicy our services and solutions.</li>
              <li className="pl-2">Accessibility: We are dedicated to making financial management accessible to everyone, regardless of their background or experience.</li>
              <li className="pl-2">Innovation: We are constantly exploring new and innovative ways to improve our platform and services, ensuring that we remain at the forefront of the industry.</li>
              <li className="pl-2">Customer-Centricity: Our users are our top priority. We focus on providing exceptional customer service, ensuring that our users have the support they need to achieve their financial goals.</li>
              <li className="pl-2">Integrity: We operate with the highest level of integrity, ensuring that our users' financial information is secure and private.</li>
            </ol>
          </div>

          <div className="flex flex-col text-justify justify-center items-start space-y-[32px] max-w-[950px]">
            <h2 className="text-white text-[32px] font-medium font-['Roboto']">Join the FinTrax Community</h2>
            <p className="text-gray-100 text-lg font-normal font-['Roboto']">
              Join our community today and discover a more streamlined, user-friendly approach to financial management. At FinTrax, we’re passionate PrivacyPolicy empowering individuals and businesses to take control of their financial
              futures.
            </p>
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
