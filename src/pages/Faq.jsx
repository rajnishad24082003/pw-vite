import React from "react";
import Navbar from "../components/Navbar/Navbar";

const FAQPage = () => {
  return (
    <div>
      <main className="faq-page">
        <section id="hero">
          <div className="container">
            <h1>
              <b>F</b>requently <b>A</b>sked <b>Q</b>uestions
            </h1>
          </div>
        </section>
        <section id="faq-hrms-saas">
          <div className="container">
            <div className="row m-0">
              <div className="col-lg-6 col-12">
                <div className="faq-hrms">
                  <h2 className="mb-3">FAQs About HRMS System</h2>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          What does HRMS software do?
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          HRMS software is a suite of software that
                          organizations use to manage internal HR functions.
                          From employee data management to payroll, recruitment,
                          benefits, training, employee engagement, talent
                          management, and employee attendance, HRMS software
                          helps HR professionals manage the modern workforce.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          How does HRMS work?
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A Human Resource Management System or HRMS is a kind
                          of HR software that performs the management of
                          different HR functions through the utilization of
                          information technology. An HRMS focuses to enhance the
                          productivity and efficiency of an organization via the
                          automation of manual and repetitive work.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Is iRique HRMS application cloud-based?
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes. iRique HRMS is a cloud-based application that
                          offers cloud-based solutions.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          Can it generate automated payslips?
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes. iRique HRMS application can generate automated
                          payslips for every employee.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="faq-payroll">
                  <h2 className="mb-3">FAQs About Payroll System</h2>
                  <div className="accordion" id="accordionExample2">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse11"
                          aria-expanded="true"
                          aria-controls="collapse11"
                        >
                          How Does Payroll Software Work?
                        </button>
                      </h2>
                      <div
                        id="collapse11"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          Payroll software automates all the important
                          requirements of accurately running payroll. It
                          calculates the actual amount your employees must be
                          paid each pay period correctly as per the number of
                          hours they've worked. If your company has salaried
                          employees, payroll software pays them accurately by
                          tracking them. It can even compute and account for
                          overtime compensations.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse12"
                          aria-expanded="false"
                          aria-controls="collapse12"
                        >
                          How can iRique payroll software help me with payroll
                          taxes?
                        </button>
                      </h2>
                      <div
                        id="collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          iRique Payroll software automatically calculates and
                          deducts both state and federal taxes from your
                          employee's wages. It also maintains payments to the
                          government and payroll tax support.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse13"
                          aria-expanded="false"
                          aria-controls="collapse13"
                        >
                          Is a free demo of iRique Payroll Software available?
                        </button>
                      </h2>
                      <div
                        id="collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          Of Course! iRique payroll software brings in a free
                          demo for its users as well. This is a nice opportunity
                          to check our payroll software and evaluate what kind
                          of package is suitable for your business and
                          understand iRique payroll specialists.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse14"
                          aria-expanded="false"
                          aria-controls="collapse14"
                        >
                          Can multiple users operate on iRique Payroll Software?
                        </button>
                      </h2>
                      <div
                        id="collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          YES. Client applications can be installed and
                          concurrent usage is possible. For iRique Payroll
                          Software, no software needs to be installed, with an
                          internet connection one can work with a valid login
                          and password as we use Gmail.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="other-faq">
                  <h2 className="mb-3">Other FAQs</h2>
                  <div className="accordion" id="accordionExample3">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse001"
                          aria-expanded="true"
                          aria-controls="collapse001"
                        >
                          Can we import data from Excel?
                        </button>
                      </h2>
                      <div
                        id="collapse001"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          YES. Bulk data such as attendance, advance deduction,
                          or arrears can be easily imported from several Excel
                          files.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse002"
                          aria-expanded="false"
                          aria-controls="collapse002"
                        >
                          Why should I buy software when I can do all the
                          processing in Excel?
                        </button>
                      </h2>
                      <div
                        id="collapse002"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          Excel cannot create e-files and cannot generate all
                          reports. Moreover, it is not error-free and takes a
                          lot of time and effort as well, and all data is not
                          centrally located. Payroll Software takes less time,
                          so HR can do other productive work in the meantime as
                          well.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse003"
                          aria-expanded="false"
                          aria-controls="collapse003"
                        >
                          What is so special about iRique Employee Monitoring
                          Software?
                        </button>
                      </h2>
                      <div
                        id="collapse003"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          iRique PC Watch Software helps you to acquire robust
                          data for a more productive and effective team. The
                          iRique PC Watch Software will take computer
                          screenshots randomly or at intervals as selected by
                          the employer, even if the employees are working
                          remotely. The Software also maintains the task
                          activity log of employees. The whole data and tracking
                          could be checked online, as the information created by
                          PCWatch could be utilized as evidence.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse004"
                          aria-expanded="false"
                          aria-controls="collapse004"
                        >
                          What is fixed asset management software?
                        </button>
                      </h2>
                      <div
                        id="collapse004"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          Fixed Assets management software is a system that
                          automates the financial tracking of assets in
                          different stages of the asset lifecycle. The software
                          helps in the management of the assets, improves
                          efficiency, and helps in financial arrangements by
                          avoiding unnecessary equipment purchases.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse005"
                          aria-expanded="false"
                          aria-controls="collapse005"
                        >
                          How are Updates provided?
                        </button>
                      </h2>
                      <div
                        id="collapse005"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          There is an auto-update facility in the software.
                          Also, we shoot emails to all clients for any new
                          release and provide update facilities wherever
                          required.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse006"
                          aria-expanded="false"
                          aria-controls="collapse006"
                        >
                          What if my company is not based in Mumbai?
                        </button>
                      </h2>
                      <div
                        id="collapse006"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          Not an issue. We have done successful installations in
                          several cities in India including Mumbai, Chennai,
                          Gujarat, and Bengaluru.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse007"
                          aria-expanded="false"
                          aria-controls="collapse007"
                        >
                          Can I work with multiple creditable accounts at the
                          same time?
                        </button>
                      </h2>
                      <div
                        id="collapse007"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          No. You can select only one account at a time or you
                          can pay only one user at a time.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse008"
                          aria-expanded="false"
                          aria-controls="collapse008"
                        >
                          Is iRique an automated system?
                        </button>
                      </h2>
                      <div
                        id="collapse008"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          iRique is a one-roof solution for those who are
                          looking for HRMS quick solutions in a handy more that
                          can reduce human effort and save enough time for the
                          HR to perform other productive work. But currently, it
                          doesn't provide an automated system.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse009"
                          aria-expanded="false"
                          aria-controls="collapse009"
                        >
                          Does the application offer help or tutorials for using
                          the iRique applications?
                        </button>
                      </h2>
                      <div
                        id="collapse009"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          Yes. Our iRique application does offer an inquiry
                          section for enquiring about any questions regarding
                          using the application. We will try to reach out and
                          help you as soon as possible.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse010"
                          aria-expanded="false"
                          aria-controls="collapse010"
                        >
                          Does the iRique software come with an auto backup
                          system?
                        </button>
                      </h2>
                      <div
                        id="collapse010"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          iRique is a cloud-based solution so if any information
                          gets deleted from your system by chance, it will
                          properly remain saved in the cloud database.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse011"
                          aria-expanded="false"
                          aria-controls="collapse011"
                        >
                          Does iRique offer a mobile application?
                        </button>
                      </h2>
                      <div
                        id="collapse011"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          Yes. iRique also comes with an available mobile
                          application offering similar features in hand.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse012"
                          aria-expanded="false"
                          aria-controls="collapse012"
                        >
                          Which is the easiest software to use?
                        </button>
                      </h2>
                      <div
                        id="collapse012"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          iRique Payroll software is the easiest payroll
                          software which is highly recommendable for small
                          businesses as well as for large businesses as it
                          includes complete HR & Payroll management along with
                          tax support.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse013"
                          aria-expanded="false"
                          aria-controls="collapse013"
                        >
                          Why should I choose iRique Technology Services?
                        </button>
                      </h2>
                      <div
                        id="collapse013"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="accordion-body">
                          iRique offers a straightforward user-friendly
                          interface with quick access to common features or
                          commands, along with easy entering, communicating,
                          working, storing, and exiting. It's easy to integrate
                          with third-party applications using API.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="endnote">
                  iRique applications are easily configurable and stand on a
                  Single Source of Truth to ensure that everyone in the
                  organization uses the same data when making decisions.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ask-question">
          <div className="container">
            <div className="row justify-content-around m-0">
              <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-12">
                <h2>Ask Your Question</h2>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-12">
                <h2>Call Us</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQPage;
