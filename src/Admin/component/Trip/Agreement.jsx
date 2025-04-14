// import React, { useState } from "react";

// const DocumentViewer = () => {
//   const [documentType, setDocumentType] = useState("contract");
//   const [recipientType, setRecipientType] = useState("client");
//   const [isRequestSent, setIsRequestSent] = useState(false);

//   const handleSendRequest = () => {
//     setIsRequestSent(true);
//     setTimeout(() => setIsRequestSent(false), 3000);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <h1 className="text-xl font-bold mb-6">Documents</h1>

//       {/* Document Type Selection */}
//       <div className="flex border-b border-gray-200 mb-6">
//         <button
//           onClick={() => setDocumentType("contract")}
//           className={` py-2 w-1/2 font-xl  ${
//             documentType === "contract"
//               ? "text-gray-900 border-b-2 border-gray-900"
//               : "text-gray-500"
//           }`}
//         >
//           Contract
//         </button>
//         <button
//           onClick={() => setDocumentType("invoice")}
//           className={`py-2 w-1/2 font-medium ${
//             documentType === "invoice"
//               ? "text-gray-900 border-b-2 border-gray-900"
//               : "text-gray-500"
//           }`}
//         >
//           Invoice
//         </button>
//       </div>

//       {/* Recipient Type Selection */}
//       <div className="flex mb-6">
//         <button
//           onClick={() => setRecipientType("client")}
//           className={` w-1/2 px-4 py-2  ${
//             recipientType === "client"
//               ? "bg-slate-200 text-gray-900"
//               : "bg-gray-100 text-gray-600"
//           }`}
//         >
//           Client
//         </button>
//         <button
//           onClick={() => setRecipientType("crew")}
//           className={`w-1/2 px-4 py-2  ${
//             recipientType === "crew"
//               ? "bg-slate-200 text-gray-900"
//               : "bg-gray-100 text-gray-600"
//           }`}
//         >
//           Crew Member
//         </button>
//       </div>

//       {/* Document content with scrolling */}
//       <div className="border rounded-lg overflow-hidden mb-6">
//         <div className="bg-gray-200 px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold capitalize">
//             {documentType === "contract" ? "Service Agreement" : "Invoice"}
//           </h2>
//           <p className="text-sm text-gray-600 capitalize">
//             {recipientType === "client" ? "Client" : "Crew Member"} version
//           </p>
//         </div>

//         <div className="h-96 overflow-y-auto p-6">
//           {documentType === "contract" ? (
//             <div className="prose">
//               <h3>SERVICE AGREEMENT</h3>
//               <p>
//                 <strong>
//                   This SERVICE AGREEMENT (hereinafter the "Agreement") is made
//                   and entered into in Dubai United Arab Emirates.
//                 </strong>
//               </p>
//               <p>
//                 <strong>
//                   BETWEEN [COMPANY NAME], (hereinafter referred to as the
//                   "Service Provider") AND [CLIENT NAME] (hereinafter referred to
//                   as the "Client").
//                 </strong>
//               </p>

//               <p>
//                 <strong>
//                   WHEREAS the Client requires certain services and the Service
//                   Provider has agreed to provide such services under the terms
//                   and conditions set forth herein.
//                 </strong>
//               </p>

//               <p>
//                 <strong>
//                   NOW THEREFORE, in consideration of the mutual covenants
//                   contained herein, the parties agree as follows:
//                 </strong>
//               </p>

//               <h4 className="font-semibold underline">1. SERVICES</h4>
//               <p>
//                 The Service Provider shall provide{" "}
//                 {recipientType === "client"
//                   ? "the agreed services"
//                   : "qualified crew members"}{" "}
//                 as defined in Appendix 1 (hereinafter referred to as "Services")
//                 under the following terms and conditions:
//               </p>

//               <h4 className="font-semibold underline">2. TERM</h4>
//               <p>
//                 This Agreement shall commence on [Start Date] and continue until
//                 [End Date] unless earlier terminated as provided herein.
//               </p>

//               <h4 className="font-semibold underline">3. COMPENSATION</h4>
//               <p>
//                 The Client shall pay the Service Provider the sum of [Amount]
//                 for the Services rendered.
//               </p>

//               <h4 className="font-semibold underline">4. CONFIDENTIALITY</h4>
//               <p>
//                 Both parties agree to maintain the confidentiality of all
//                 proprietary information received.
//               </p>

//               <h4 className="font-semibold underline">5. GOVERNING LAW</h4>
//               <p>
//                 This Agreement shall be governed by and construed in accordance
//                 with the laws of the United Arab Emirates.
//               </p>

//               <div className="mt-8">
//                 <h4>APPENDIX 1 - SERVICE DETAILS</h4>
//                 <p>Detailed description of services to be provided...</p>
//               </div>
//             </div>
//           ) : (
//             <div className="prose">
//               <h3>INVOICE</h3>
//               <div className="flex justify-between mb-8">
//                 <div>
//                   <p>
//                     <strong>Invoice To:</strong>
//                   </p>
//                   <p>
//                     {recipientType === "client"
//                       ? "[Client Name]"
//                       : "[Crew Member Name]"}
//                   </p>
//                   <p>[Address]</p>
//                 </div>
//                 <div className="text-right">
//                   <p>
//                     <strong>Invoice #:</strong> INV-2023-001
//                   </p>
//                   <p>
//                     <strong>Date:</strong> {new Date().toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>

//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="p-3 text-left border">Description</th>
//                     <th className="p-3 text-right border">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="p-3 border">
//                       {recipientType === "client"
//                         ? "Service Fee"
//                         : "Crew Payment"}
//                     </td>
//                     <td className="p-3 text-right border">$5,000.00</td>
//                   </tr>
//                   <tr>
//                     <td className="p-3 border">VAT (5%)</td>
//                     <td className="p-3 text-right border">$250.00</td>
//                   </tr>
//                   <tr className="bg-gray-50 font-semibold">
//                     <td className="p-3 border">Total</td>
//                     <td className="p-3 text-right border">$5,250.00</td>
//                   </tr>
//                 </tbody>
//               </table>

//               <div className="mt-8">
//                 <h4>Payment Terms</h4>
//                 <p>Payment due within 15 days of invoice date.</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Status and actions */}
//       <div className="mb-6">
//         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <svg
//                 className="h-5 w-5 text-yellow-400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>
//             <div className="ml-3">
//               <p className="text-sm text-yellow-700">
//                 Trip details pending from{" "}
//                 {recipientType === "client" ? "client" : "crew"} side. After
//                 that {recipientType === "client" ? "client" : "crew member"} can
//                 sign the {documentType}.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-wrap gap-4">
//           <button
//             onClick={handleSendRequest}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
//             disabled={isRequestSent}
//           >
//             {isRequestSent
//               ? "Request Sent"
//               : `SEND REQUEST TO ${
//                   recipientType === "client" ? "CLIENT" : "CREW MEMBER"
//                 } SIGN THE ${documentType.toUpperCase()}`}
//           </button>

//           <div className="flex gap-2">
//             <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
//               SIGN
//             </button>
//             <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
//               DOWNLOAD
//             </button>
//             <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
//               OPEN
//             </button>
//           </div>
//         </div>

//         {documentType === "contract" && (
//           <div className="mt-4">
//             <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
//               UPLOAD MORE CONTRACT
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Appendix section */}
//       {documentType === "contract" && (
//         <div className="border-t pt-4">
//           <h3 className="text-lg font-semibold mb-2">APPENDIX 1</h3>
//           <div className="flex gap-2">
//             <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
//               VIEW
//             </button>
//             <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
//               DOWNLOAD
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentViewer;





import React, { useState } from 'react';

const DocumentViewer = () => {
  const [documentType, setDocumentType] = useState('invoice');
  const [recipientType, setRecipientType] = useState('client');
  const [isRequestSent, setIsRequestSent] = useState(false);

  const handleSendRequest = () => {
    setIsRequestSent(true);
    setTimeout(() => setIsRequestSent(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Documents</h1>
      
      {/* Document Type Selection */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setDocumentType('contract')}
          className={`mr-8 py-2 font-medium ${documentType === 'contract' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}
        >
          Contract
        </button>
        <button
          onClick={() => setDocumentType('invoice')}
          className={`py-2 font-medium ${documentType === 'invoice' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}
        >
          Invoice
        </button>
      </div>

      {/* Recipient Type Selection */}
      <div className="flex mb-6">
        <button
          onClick={() => setRecipientType('client')}
          className={`px-4 py-2 rounded-t-lg mr-2 ${recipientType === 'client' ? 'bg-slate-200 text-gray-900' : 'bg-gray-100 text-gray-600'}`}
        >
          Client
        </button>
        <button
          onClick={() => setRecipientType('crew')}
          className={`px-4 py-2 rounded-t-lg ${recipientType === 'crew' ? 'bg-slate-200 text-gray-900' : 'bg-gray-100 text-gray-600'}`}
        >
          Crew Member
        </button>
      </div>

      {/* Document content */}
      <div className="border rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-50 px-6 py-4 border-b">
          <h2 className="text-xl font-semibold capitalize">{documentType === 'contract' ? 'Service Agreement' : 'Invoice'}</h2>
          <p className="text-sm text-gray-600 capitalize">{recipientType === 'client' ? 'Client' : 'Crew Member'} version</p>
        </div>
        
        <div className="p-6">
          {documentType === 'contract' ? (
            <div className="prose">
            <h3>SERVICE AGREEMENT</h3>
            <p>
              <strong>
                This SERVICE AGREEMENT (hereinafter the "Agreement") is made and entered
                into in Dubai United Arab Emirates.
              </strong>
            </p>
            <p>
              <strong>
                BETWEEN [COMPANY NAME], (hereinafter referred to as the "Service
                Provider") AND [CLIENT NAME] (hereinafter referred to as the "Client").
              </strong>
            </p>
          
            <p>
              <strong>
                WHEREAS the Client requires certain services and the Service Provider has
                agreed to provide such services under the terms and conditions set forth
                herein.
              </strong>
            </p>
          
            <p>
              <strong>
                NOW THEREFORE, in consideration of the mutual covenants contained herein,
                the parties agree as follows:
              </strong>
            </p>
          
            <h4 className="font-semibold underline">1. SERVICES</h4>
            <p>
              The Service Provider shall provide{" "}
              {recipientType === "client"
                ? "the agreed services"
                : "qualified crew members"}{" "}
              as defined in Appendix 1 (hereinafter referred to as "Services") under the
              following terms and conditions:
            </p>
          
            <h4 className="font-semibold underline">2. TERM</h4>
            <p>
              This Agreement shall commence on [Start Date] and continue until [End Date]
              unless earlier terminated as provided herein.
            </p>
          
            <h4 className="font-semibold underline">3. COMPENSATION</h4>
            <p>
              The Client shall pay the Service Provider the sum of [Amount] for the
              Services rendered.
            </p>
          
            <h4 className="font-semibold underline">4. CONFIDENTIALITY</h4>
            <p>
              Both parties agree to maintain the confidentiality of all proprietary
              information received.
            </p>
          
            <h4 className="font-semibold underline">5. GOVERNING LAW</h4>
            <p>
              This Agreement shall be governed by and construed in accordance with the
              laws of the United Arab Emirates.
            </p>
          
            <div className="mt-8">
              <h4>APPENDIX 1 - SERVICE DETAILS</h4>
              <p>Detailed description of services to be provided...</p>
            </div>
          </div>
          ) : (
            <div className="space-y-6">
              {/* Invoice header */}
              <div className="flex justify-between items-center border-b pb-4">
                <div className='flex flex-col'>
                  <p className="text-gray-500">USD ------</p>
                  <p className="text-sm text-gray-700">Due:23/Nov/2022</p>

                </div>
                <div className="text-right ml-2">
                  <button className="bg-gray-100 p-2 rounded-md hover:text-blue-800 mt-1">
                    <p className='text-sm'>Download Pdf</p>
                  </button>
                </div>
              </div>

              {/* Customer info */}
              <div className="grid grid-cols-2 gap-4 border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Customer Number</p>
                  <p className="font-medium">0333342809884754543</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Customer Name</p>
                  <p className="font-medium">Guillaume Agitny</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount Due</p>
                  <p className="font-medium">USD ---</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium text-yellow-600">PENDING</p>
                </div>
              </div>

              {/* Different content based on recipient type */}
              {recipientType === 'client' ? (
                <div className="space-y-4">
                  {/* Client-specific invoice content */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">RECORD NO.</p>
                      <p>9973</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">WITHDRAWAL</p>
                      <p>$60.00</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">FROM CHECKING</p>
                      <p>**********1858</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">U.S. BANK</p>
                      <p></p>
                    </div>
                    <div className="flex justify-between pt-2 border-t mt-4">
                      <p className="font-medium">TOTAL</p>
                      <p className="font-bold">$60.00</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="text-red-700 font-medium">REVOLUTION NOT RECEIVED</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Crew-specific invoice content */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">PAYMENT REFERENCE</p>
                      <p>INV-9973-CRW</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">AMOUNT</p>
                      <p>$1,250.00</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">PAYMENT METHOD</p>
                      <p>Direct Deposit</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">ACCOUNT</p>
                      <p>**********6543</p>
                    </div>
                    <div className="flex justify-between pt-2 border-t mt-4">
                      <p className="font-medium">TOTAL</p>
                      <p className="font-bold">$1,250.00</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-blue-700 font-medium">PAYMENT PROCESSING - EXPECTED CLEARANCE 3 BUSINESS DAYS</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Status and actions */}
      <div className="mb-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                {documentType === 'invoice' 
                  ? `Invoice is ${recipientType === 'client' ? 'pending client payment' : 'being processed for crew payment'}`
                  : `Contract is pending ${recipientType === 'client' ? 'client' : 'crew'} signature`}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleSendRequest}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            disabled={isRequestSent}
          >
            {isRequestSent ? 'Request Sent' : `SEND REMINDER TO ${recipientType === 'client' ? 'CLIENT' : 'CREW MEMBER'}`}
          </button>

          <div className="flex gap-2">
            <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
              VIEW DETAILS
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
