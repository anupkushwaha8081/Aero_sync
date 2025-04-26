


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import TripFirstPage from "./TripFirstPage";
// import TripSecondPage from "./TripSecondPage";
// import TripThirdPage from "./TripThirdPage";

// const CreateTripPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const navigate = useNavigate();
  
//   const [tripData, setTripData] = useState({
//     // Step 1 data
//     tripName: "",
//     client: "",
//     approveExpenses: false,
//     fees: "",
//     percentage: "",
//     description: "",
    
//     // Step 2 data
//     startDate: null,
//     endDate: null,
//     destinationFrom: "",
//     destinationTo: "",
    
//     // Step 3 data
//     aircraft: "",
//     crewMembers: []
//   });

//   const nextStep = () => setCurrentStep(currentStep + 1);
//   const prevStep = () => setCurrentStep(currentStep - 1);
//   const goToStep = (step) => setCurrentStep(step);

//   const updateTripData = (field, value) => {
//     setTripData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = () => {
//     // Save trip data and navigate back to dashboard
//     console.log("Trip created:", tripData);
//     navigate("/");
//   };

//   const steps = [
//     { id: 1, name: "Basic detail" },
//     { id: 2, name: "Date & Route" },
//     { id: 3, name: "Aircraft" },
//     { id: 4, name: "Crew Member" }
//   ];

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       {/* Step Navigation */}
//       <div className="flex space-x-6 border-b mb-6">
//         {steps.map((step) => (
//           <button
//             key={step.id}
//             onClick={() => goToStep(step.id)}
//             className={`pb-2 font-medium ${
//               currentStep === step.id
//                 ? "border-b-2 border-black font-semibold"
//                 : "text-gray-500"
//             }`}
//           >
//             {step.name}
//           </button>
//         ))}
//       </div>

//       {/* Step Content */}
//       {currentStep === 1 && (
//         <TripFirstPage 
//           tripData={tripData} 
//           updateTripData={updateTripData} 
//           nextStep={nextStep} 
//         />
//       )}
      
//       {currentStep === 2 && (
//         <TripSecondPage 
//           tripData={tripData} 
//           updateTripData={updateTripData} 
//           nextStep={nextStep} 
//           prevStep={prevStep} 
//         />
//       )}
      
//       {currentStep === 3 && (
//         <TripThirdPage 
//           tripData={tripData} 
//           updateTripData={updateTripData} 
//           nextStep={handleSubmit}  // On last step, submit instead of next
//           prevStep={prevStep} 
//         />
//       )}
//     </div>  );
// };

// export default CreateTripPage;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TripFirstPage from "./TripFirstPage";
import TripSecondPage from "./TripSecondPage";
import TripThirdPage from "./TripThirdPage";
import TripFourthPage from "./TripFourthPage";
import TripSteps from "./TripSteps";

const CreateTripPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [trips, setTrips] = useState([]); // State for storing trips
  const navigate = useNavigate();
  
  const [tripData, setTripData] = useState({
    tripName: "",
    client: "",
    approveExpenses: false,
    fees: "",
    percentage: "",
    description: "",
    startDate: null,
    endDate: null,
    destinationFrom: "",
    destinationTo: "",
    aircraftType: "",
    aircraftRegistration: "",
    hotelType: "",
    travelClass: "",
    crewMembers: [],
    expenses: []
  });

  // Load trips from localStorage on component mount
  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    setTrips(savedTrips);
  }, []);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(-1);
    }
  };

  const updateTripData = (field, value) => {
    setTripData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    const newTrip = {
      ...tripData,
      id: Date.now(),
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
    
    // Reset form and go back to step 1
    setTripData({
      tripName: "",
      client: "",
      approveExpenses: false,
      fees: "",
      percentage: "",
      description: "",
      startDate: null,
      endDate: null,
      destinationFrom: "",
      destinationTo: "",
      aircraftType: "",
      aircraftRegistration: "",
      hotelType: "",
      travelClass: "",
      crewMembers: [],
      expenses: []
    });
    setCurrentStep(1);
  };

  const deleteTrip = (id) => {
    const updatedTrips = trips.filter(trip => trip.id !== id);
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  const updateTripStatus = (id, status) => {
    const updatedTrips = trips.map(trip => 
      trip.id === id ? { ...trip, status } : trip
    );
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  const steps = [
    { id: 1, name: "Basic Details" },
    { id: 2, name: "Date & Route" },
    { id: 3, name: "Aircraft" },
    { id: 4, name: "Crew Members" }
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Left Column - Form */}
      <div className="w-full lg:w-2/3 p-4 md:p-6">
        <div className="bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Create New Trip</h1>
            <button 
              onClick={() => navigate("/trips")}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>

          {/* Step Navigation */}
          <TripSteps 
            steps={steps} 
            currentStep={currentStep} 
            onStepClick={(step) => setCurrentStep(step)}
          />

          {/* Step Content */}
          <div className="mt-6">
            {currentStep === 1 && (
              <TripFirstPage 
                tripData={tripData} 
                updateTripData={updateTripData} 
                nextStep={nextStep} 
              />
            )}
            
            {currentStep === 2 && (
              <TripSecondPage 
                tripData={tripData} 
                updateTripData={updateTripData} 
                nextStep={nextStep} 
                prevStep={prevStep} 
              />
            )}
            
            {currentStep === 3 && (
              <TripThirdPage 
                tripData={tripData} 
                updateTripData={updateTripData} 
                nextStep={nextStep} 
                prevStep={prevStep} 
              />
            )}

            {currentStep === 4 && (
              <TripFourthPage 
                tripData={tripData} 
                updateTripData={updateTripData} 
                prevStep={prevStep} 
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>

      {/* Right Column - Trip Table */}
      <div className="w-full lg:w-1/3 p-4 md:p-6 bg-gray-100">
        <div className="bg-white rounded-lg shadow p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Recent Trips</h2>
          
          {trips.length >= 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Trip</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {trips.slice(0, 5).map(trip => (
                    <tr key={trip.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {trip.tripName || 'Untitled'}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        {trip.client || '-'}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <select
                          value={trip.status}
                          onChange={(e) => updateTripStatus(trip.id, e.target.value)}
                          className={`text-xs rounded px-2 py-1 ${
                            trip.status === 'Approved' ? 'bg-green-100 text-green-800' :
                            trip.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        <button 
                          onClick={() => deleteTrip(trip.id)}
                          className="text-red-600 hover:text-red-800 text-xs"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {trips.length > 5 && (
                <div className="text-right mt-2">
                  <button 
                    onClick={() => navigate("/trips")}
                    className="text-blue-600 hover:text-blue-800 text-xs"
                  >
                    View All ({trips.length})
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No trips created yet</p>
              <p className="text-sm text-gray-400 mt-2">Your created trips will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTripPage;