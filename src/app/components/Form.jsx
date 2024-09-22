"use client";
import { useState } from 'react';
import { useFileUpload } from '../libs/useFileUpload/route';
const Form = () => {
  const [formData, setFormData] = useState({
    Name: '',
    LastName: '',
    Email: '',
    Phone: '',
    LookingFor: '',
    Comments: '',
    Attachments: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type === 'file') {
      const file = e.target.files[0];

      // Create a temporary URL for the file
      const attachmentUrl = URL.createObjectURL(file);

      setFormData((prevData) => ({
        ...prevData,
        Attachments: file
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData), "the form data");

    // if(formData.Attachments != null) {
    //   const uploadFile = useFileUpload();
    // const handleFileSelect = async (file) => {
    //   const uploadOk = await uploadFile(formData.Attachments.file.name, formData.Attachments.file)
      
    //   if (uploadOk) {
    //     /// should return the file url, file name and file size
    //   } else {
    //     // show error
    //   }
    //   }
    // }
    try {
      // Check if there is an attachment
      // if (formData.Attachments) {
      //   // Upload the file to Google Cloud Storage
      //   const { fileName, fileSize, fileUrl } = await uploadFile(formData.Attachments);

      //   // Update the form data with the Google Cloud Storage URL
      //   setFormData((prevData) => ({
      //     ...prevData,
      //     Attachments: {
      //       fileName,
      //       fileSize,
      //       url: fileUrl,
      //     },
      //   }));
      // }

      // Convert the form data to JSON
      const jsonData = JSON.stringify(formData);

      // Make the API request to create a record
      const response = await fetch('/api/airtable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      // Log the raw response
      console.log('Raw Response:', await response.text());

      if (response.ok) {
        console.log('Record created successfully!');
        setFormData({
          Name: '',
          LastName: '',
          Email: '',
          Phone: '',
          LookingFor: '',
          Comments: '',
          Attachments: null,
        });
      } else {
        console.error('Failed to create record!!!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  
  return (
    <div className="min-h-screen flex items-center  text-white">
      <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 mb-4 grid grid-cols-2 grid-rows-6 gap-x-2 md:gap-x-4">
        <div className="mb-4">
          <label className={` text-sm  mb-2 ${formData.Name && 'active'}`}>
            First Name
            <input
              className="appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              placeholder=" "
            />
          </label>
        </div>

        <div className="mb-4">
          <label className={` text-sm  mb-2 ${formData.LastName && 'active'}`}>
            Last Name:
            <input
              className="appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              required
              placeholder=" "
            />
          </label>
        </div>

        <div className="mb-4">
          <label className={` text-sm  mb-2 ${formData.Email && 'active'}`}>
            Email:
            <input
              className="appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              placeholder=" "
            />
          </label>
        </div>

        <div className="mb-4">
          <label className={` text-sm  mb-2 ${formData.Phone && 'active'}`}>
            Phone Number:
            <input
              className="appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
              placeholder=" "
            />
          </label>
        </div>

        <div className="mb-4 col-span-2 relative">
            <label className={`text-sm mb-2 ${formData.lookingFor && 'active'}`}>
                Looking For:
                <div className="relative">
                <select
                    className="appearance-none border-b-[1px] border-white bg-transparent w-full py-2 px-3 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                    name="LookingFor"
                    value={formData.LookingFor}
                    onChange={handleChange}
                 
                >
                    <option value="">Select an option</option>
                    <option value="Partnerships & Advisory">Partnerships & Advisory</option>
                    <option value="Technical Activation">Technical Activation</option>
                    <option value="Digital Activation">Digital Activation</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    &darr;
                </div>
                </div>
            </label>
        </div>

        <div className="mb-4 col-span-2 row-start-4">
          <label className={`text-sm  mb-2 ${formData.Comments && 'active'}`}>
            Comment:
            <textarea
              className=" resize-none  appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="Comments"
              value={formData.Comments}
              onChange={handleChange}
            />

          </label>
        </div>
{/* 
        <div className="mb-4 col-span-2 row-start-5">
          <label className="text-sm  mb-2">
            Attach Your Brief
            <input
              className="file:bg-transparent file:shadown-none file:border-solid file:border-[1px] file:px-3 file:py-2 file:text-white file:border-white w-full py-2  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              name="Attachments"
              accept=".pdf"
              placeholder='attachment'
              onChange={handleChange}
            />
          </label>
        </div> */}

        <div className=" justify-between col-span-2 row-start-6">
            <p className='text-xs py-4'>By clicking the submit button you agree to our Terms of Use and Privacy Policy.</p>
          <button
            className="bg-white text-black hover:bg-black hover:text-white transition duration-300  py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
