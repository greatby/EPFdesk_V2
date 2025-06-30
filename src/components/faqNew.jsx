 

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqsEmployee = [
  {
    question: 'How can I check my PF balance?',
    answer: `* Resolution:
   * UMANG App: Download the UMANG app (Unified Mobile Application for New-age Governance) and log in with your UAN and OTP.
   * EPFO Unified Portal: Visit the EPFO Unified Portal (member interface) and log in with your UAN and password. You can then view your passbook.
   * SMS: Send an SMS to 7738299899 from your registered mobile number: EPFOHO UAN ENG (for English). You can replace "ENG" with other language codes like HIN, PUN, GUJ, MAR, KAN, MAL, TAM, TEL, BEN.
   * Missed Call: Give a missed call to 9966044425 from your registered mobile number.`,
  },
  {
    question:
      'How do I withdraw my EPF online? What are the conditions for withdrawal?',
    answer: `* Resolution:
   * Online Process: Log in to the EPFO Unified Portal (member interface) using your UAN and password. Go to 'Online Services' -> 'Claim (Form-31, 19, 10C & 10D)'. Fill in the required details and choose the appropriate claim form (e.g., Form 19 for final PF settlement, Form 10C for pension withdrawal, Form 31 for advance). Your Aadhaar must be linked and verified with your UAN.
   * Conditions for Withdrawal:
   * Full Withdrawal:
   * On retirement after attaining 58 years of age.
   * If unemployed for more than 2 months (you can withdraw the full amount).
   * Partial Withdrawal (Advances): For specific purposes like medical emergencies, marriage, house purchase/construction, education, etc., under certain conditions and after a minimum service period.`,
  },
  {
    question: 'Why was my claim rejected?',
    answer: 'KYC mismatch, wrong bank details, Aadhaar not verified',
  },
  {
    question: 'How can I transfer my PF when I switch jobs?',
    answer: `* Online Transfer: Log in to the EPFO Unified Portal (member interface). Go to 'Online Services' -> 'One Member - One EPF Account (Transfer Request)'. You will need details of both the previous and current employment and can submit the transfer request. The request needs to be attested by either your previous or current employer.
   * Importance of UAN: Your UAN remains the same across all your employments, making transfers much easier.`,
  },
  {
    question: 'What do I do if I have multiple UANs?',
    answer: ' Merge process and the risks of using the wrong UAN',
  },
  {
    question: 'How to update my mobile number or email in UAN portal?',
    answer: '',
  },
  {
    question: 'My PF contributions are missing — what should I do?',
    answer: '',
  },
  {
    question: 'How to check passbook, raise a grievance, and approach employer',
    answer: '',
  },
  {
    question: 'What is EPS and how is it different from EPF?',
    answer: '',
  },
  {
    question: 'How do I file a grievance with EPFO?',
    answer: 'Step-by-step on using EPFiGMS and escalation timelines',
  },
  {
    question: 'Can NRIs or ex-employees withdraw PF from abroad?',
    answer: 'Yes, but with Aadhaar, Indian bank, and e-nomination in place',
  },
]

const faqsEmployer = [
  {
    question: 'Who is eligible/mandatory to register under EPF?',
    answer: `  * Any establishment employing 20 or more employees is mandatorily required to register under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952.
   * Establishments with less than 20 employees can also register voluntarily.
   * Once an establishment is covered, it remains covered even if the employee count falls below 20.`,
  },
  {
    question:
      'What is the contribution percentage for EPF for employees and employers?',
    answer: `  * Employee Contribution: 12% of Basic Wages + Dearness Allowance (DA) + Retaining Allowance.
   * Employer Contribution: 12% of Basic Wages + DA + Retaining Allowance. This 12% is further split as:
     * 3.67% to EPF
     * 8.33% to EPS (Employee Pension Scheme), capped at 8.33% of Rs. 15,000 (i.e., Rs. 1250 per month).
   * Additionally, employers pay administrative charges for EPF (1.1%) and EDLI (0.5%), and EDLI administrative charges (0.01%).`,
  },
  {
    question:
      'What is the deadline for depositing EPF contributions and what are the penalties for delay?',
    answer: `   * Deadline: Contributions must be deposited by the 15th of the following month.
   * Penalties for Delay:
     * Interest at 12% per annum on delayed contributions.
     * Damages under Section 14B of the EPF & MP Act, 1952, which can be up to 100% of the arrears for delayed payments.
     * Administrative charges for delays.`,
  },
  {
    question: 'How do I register an establishment with EPFO?',
    answer: `* Visit the EPFO Unified Portal (employer interface).
   * Navigate to the "Establishment" section and click on "Establishment Registration".
   * Provide all necessary details about the establishment (name, address, type, contact info, PAN, Aadhaar, bank details, etc.).
   * Upload required documents.
   * Generate and submit the registration form.
   * Once verified, EPFO will issue a unique PF code.`,
  },
  {
    question: 'How to submit monthly ECR (Electronic Challan cum Return)?',
    answer: `  * Employers need to log in to the EPFO Unified Portal.
   * Generate the Electronic Challan-cum-Return (ECR) which contains the employee-wise contributions for the month.
   * Submit the ECR and then make the online payment through the portal using internet banking or payment gateways.`,
  },
  {
    question:
      'What are the roles and responsibilities of an employer regarding EPF?',
    answer: `* Timely registration of the establishment.
   * Enrolling eligible employees and allotting UANs.
   * Accurate calculation and deduction of employee and employer contributions.
   * Timely remittance of contributions and administrative charges.
   * Submission of accurate monthly ECRs.
   * Updating employee KYC details upon request and verification.
   * Attesting employee claims (withdrawal, transfer) when required.
   * Maintaining proper records.
   * Adhering to all provisions of the EPF & MP Act, 1952.`,
  },
  {
    question:
      'How to manage EPF for employees whose salary is above Rs. 15,000?',
    answer: `   * For employees whose basic salary + DA is above Rs. 15,000 at the time of joining, EPF contribution is optional. They can choose to contribute or not.
   * However, if an employee's salary was initially below Rs. 15,000 and later increased above this limit, they must continue to contribute to EPF.
   * Employers can contribute on the full basic salary even if it's above Rs. 15,000 if the employee agrees (though the EPS contribution will still be capped at Rs. 1250).`,
  },
  {
    question:
      'What is the process for submitting a Joint Declaration Form for employee detail corrections?',
    answer: `  * The employee needs to fill out the Joint Declaration Form with the correct details.
   * The employer needs to verify and attest the form.
   * The form, along with supporting documents (e.g., Aadhaar, PAN, school leaving certificate for DOB correction), is then submitted to the concerned EPFO regional office.`,
  },
  {
    question: 'Can we outsource PF grievance support for our company?',
    answer: '',
  },
]

export default function Faq() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl">
              Frequently asked questions(Employees)
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10">
              {faqsEmployee.map((faq) => (
                <Disclosure
                  key={faq.question}
                  as="div"
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-open:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel
                    as="dd"
                    className="mt-2 pr-12 whitespace-pre-wrap"
                  >
                    <p className="text-left text-base/7 text-gray-600">
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl">
              Frequently asked questions(Employer)
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10">
              {faqsEmployer.map((faq) => (
                <Disclosure
                  key={faq.question}
                  as="div"
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-open:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12 whitespace-pre-wrap">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
