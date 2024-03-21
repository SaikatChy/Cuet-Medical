import React, { useState } from 'react';
import axios from 'axios';
import { rootUrl } from '../../utils/rootUrl';
import Appointment from './Appointment';

const pageStyle = {
  backgroundColor: '#d4e5f4',
  padding: '20px',
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  
  const [showPrescriptionForm, setShowPrescriptionForm] = useState(false);
  const [medicines, setMedicines] = useState([{}]);
  


  const handleStudentIdClick = (studentId) => {
    setSelectedStudentId(studentId);
    setShowPrescriptionForm(true);
    setDate('');
    setDescription('');
    setMedicines('');
    
  };

  const handleGivePrescriptionClick = () => {
    setShowPrescriptionForm(true);
  };
  const addMedicineRow = () => {
    // Add a new empty medicine object to the medicines array
    setMedicines([...medicines, { name: '', dose: '' }]);
  };

  const handleSavePrescription = async () => {
    // Add logic to save prescription using axios or any other method
    const prescriptionData = {
      studentId: selectedStudentId,
      date,
      description,
      medicines,
    };

    try {
      const response = await axios.post(rootUrl + 'prescription/save', prescriptionData);
      console.log(response.data);

      // Optionally, you can handle success or show a message to the user
    } catch (error) {
      console.error(error.response.data);

      // Optionally, you can handle the error or show a message to the user
    }
  };

  return (
    <div style={pageStyle}>
      <div className='m-12 py-3 bg-[#d4e5f4]'>
        <h1 className='text-center my-[24px]'>Prescription Management</h1>
        <div className='flex flex-wrap'>
          <div className='w-[25%]'>
            <h2 className='text-xl font-semibold mb-4'>Student Id</h2>
            <input
              type='text'
              placeholder='Enter Student ID'
              className='bg-white input input-bordered w-full mb-2'
              onChange={(e) => setSelectedStudentId(e.target.value)}
            />
            <button
              className='btn bg-blue-500 text-white mb-2'
              onClick={() => handleStudentIdClick(selectedStudentId)}
            >
              Give Prescription
            </button>
          </div>

          {showPrescriptionForm && (
            <div className='w-[70%] px-5'>
              <h2 className='text-xl font-semibold mb-4'>Prescription Details</h2>
              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'><b>Date</b></span>
                </label>
                <input
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className='bg-white input input-bordered w-full'
                  required
                />
              </div>

              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'><b>Description</b></span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='bg-white input input-bordered w-full h-[120px]'
                  placeholder='Enter Description'
                  required
                />
              </div>

              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'><b>Medicines</b></span>
                </label>
                <table className='table w-full'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Dose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(medicines).map(([key, medicine]) => (
                      <tr key={key}>
                        <td>
                          <input
                            type='text'
                            value={medicine.name}
                            onChange={(e) => {
                              const updatedMedicines = { ...medicines };
                              updatedMedicines[key].name = e.target.value;
                              setMedicines(updatedMedicines);
                            }}
                            className='bg-white input input-bordered w-full'
                            placeholder='Enter Medicine Name'
                            required
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            value={medicine.dose}
                            onChange={(e) => {
                              const updatedMedicines = { ...medicines };
                              updatedMedicines[key].dose = e.target.value;
                              setMedicines(updatedMedicines);
                            }}
                            className='bg-white input input-bordered w-full'
                            placeholder='Enter Dose'
                            required
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className='btn bg-blue-500 text-white'
                  onClick={addMedicineRow}
                >
                  Add Medicine
                </button>
              </div>

              <button
                className='btn bg-success text-white w-full'
                onClick={handleSavePrescription}
              >
                Save Prescription
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
