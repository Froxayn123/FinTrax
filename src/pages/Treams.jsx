import React from 'react'
import Polygon1 from '../assets/Polygon1'
import Polygon3 from '../assets/Polygon3'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Treams = () => {
  return (
    <>
      <Polygon1 />
      <Polygon3 />
      <header>
        <Navbar />
      </header>
      <main className="mx-[20px] md:mx-[100px]">
        <div className="flex flex-col justify-center items-center mt-[50px] md:mt-[200px] space-y-[50px] md:space-y-[100px]">
          <div className="flex flex-col justify-center items-center space-y-[16px] md:space-y-[32px]">
            <h1 className="text-white text-[32px] md:text-[57px] font-medium font-['Roboto']">Terms & Conditions</h1>
          </div>

          <div className="max-w-8xl w-full p-4 md:p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
              <section className="md:col-span-2 border-l-4 border-white pl-4 md:pl-8 mb-12 md:mb-24">
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-white">
                  Disclaimers and Limitation of Liability
                </h3>
                <p className="mt-2 text-gray-300 text-lg md:text-xl font-normal mr-0 md:mr-60">
                  Disclaimer of Warranties: The site is provided on an "as is" and "as available" basis. Fintrax makes no representations or warranties of any kind, express or implied, regarding the operation or availability of the site or the information, content, or materials included on the site.
                </p>
                <p className="mt-4 md:mt-8 text-gray-300 text-lg md:text-xl font-normal mr-0 md:mr-60">
                  Limitation of Liability: To the fullest extent permitted by law, Fintrax shall not be liable for any damages of any kind arising from the use of the site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
                </p>
              </section>

              <section className="border-l-4 border-white pl-4 md:pl-8">
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-white">Terms of Use</h3>
                <p className="mt-2 text-gray-300 text-lg md:text-xl font-normal pr-0 md:pr-40">
                  Acceptance of Terms: By accessing and using our website, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our site.
                </p>
                <p className="mt-4 md:mt-8 text-gray-300 text-lg md:text-xl font-normal pr-0 md:pr-40">
                  Modifications to Terms: We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the site following the posting of changes constitutes your acceptance of such changes.
                </p>
              </section>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <section className="border-l-4 border-white pl-4 md:pl-8">
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-white">Use of the Site</h3>
                <p className="mt-2 text-gray-300 text-lg md:text-xl font-normal mr-0 md:mr-60">
                  User Accounts: To access certain features of the website, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="mt-4 text-gray-300 text-lg md:text-xl font-normal mr-0 md:mr-60">
                  Account Security: You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account or password.
                </p>
              </section>

              <section className="border-l-4 border-white pl-4 md:pl-8">
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-white">Governing Law</h3>
                <p className="mt-2 text-gray-300 text-lg md:text-xl font-normal mr-0 md:mr-60">
                  You agree to indemnify, defend, and hold harmless Fintrax and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of the site, your violation of these terms, or your violation of any rights of another.
                </p>
              </section>

              <section className="border-l-4 border-white pl-4 md:pl-8">
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-white">User Responsibilities</h3>
                <p className="mt-2 text-gray-300 text-lg md:text-xl font-normal pr-0 md:pr-40">
                  Prohibited Activities: You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="mt-2 text-gray-300 text-lg md:text-xl font-normal pr-0 md:pr-40">
                  <li>Using the site for any unlawful purpose</li>
                  <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity</li>
                  <li>Interfering with or disrupting the operation of the site</li>
                  <li>Circumventing or attempting to circumvent any security or authentication measures of the site</li>
                  <li>Uploading or distributing viruses, worms, or any other malicious software</li>
                </ul>
                <p className="mt-4 text-gray-300 text-lg md:text-xl font-normal pr-0 md:pr-40">
                  User Content: You are responsible for any content you post on the site, including its legality, reliability, and appropriateness. By posting content, you grant Fintrax a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, publish, and distribute such content.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Treams
