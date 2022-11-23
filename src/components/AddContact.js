import React from 'react';
import { useState } from "react";

function AddContact({onSendContact}) {
        const clearData = {
            contName: "",
            contEmail: "",
            contBudget: "",
            contNotes: "",
        };
    
        let [formData, setFormData] = useState(clearData);
    
        function formDataSubmit() {
            const contactInfo = {
                contName: formData.contName,
                contEmail: formData.contEmail,
                contBudget: formData.contBudget,
                contNotes: formData.contNotes,
            };
            console.log(contactInfo);
            onSendContact(contactInfo);
            setFormData(clearData);
        }
  return (
    <div className="Contact_container border border-slate-600 rounded-sm m-16 p-2 shadow-2xl">
        <h1 className=" text-2xl font-bold m-2 ml-9 p-2">
            Get Started</h1>
        <div className="p-4">

            <div className=" float-left p-6">
                <label className="text-lg m-1 text-gray-700">Name*</label>
                    <div>
                        <input
                            onChange={(event) => {
                                setFormData({ ...formData, contName: event.target.value });
                            }}
                            value={formData.contName}
                            className=" p-1 bg-slate-50 border-b border-black placeholder:text-black focus:outline-none focus:ring-1 focus:ring-stone-400"
                            type="text" name="yourname" placeholder="Your name"></input>
                    </div>
            </div>
            
            <div className="p-6">
                <label className="text-lg m-1 text-gray-700">Email*</label>
                    <div>
                        <input
                            onChange={(event) => {
                                setFormData({ ...formData, contEmail: event.target.value });
                            }}
                            value={formData.contEmail}
                            className=" p-1 bg-slate-50 border-b border-black w placeholder:text-black focus:outline-none focus:ring-1 focus:ring-stone-400"
                            type="text" name="email" placeholder="Your email"></input>
                    </div>
            </div>
                
            <div className="p-6">
                <label className="text-lg m-1 text-gray-700">Budget</label>
                    <div>
                        <input
                            onChange={(event) => {
                                setFormData({ ...formData, contBudget: event.target.value });
                            }}
                            value={formData.contBudget}
                            className="Budget_input p-1 bg-slate-50 border-b border-black placeholder:text-black focus:outline-none focus:ring-1 focus:ring-stone-400"
                            type="number" name="budget" placeholder="Choose..." step="2"></input>
                    </div>
            </div>

            <div className="p-6">
                <label className="text-lg m-1 text-gray-700">Message*</label>
                    <div>
                        <textarea 
                            onChange={(event) => {
                                setFormData({ ...formData, contNotes: event.target.value });
                            }}
                            value={formData.contNotes}
                            className=" p-1 bg-slate-50 border-b border-black placeholder:text-black focus:outline-none focus:ring-1 focus:ring-stone-400"
                            type="text" placeholder="Write your message" rows="3"></textarea>
                    </div>
            </div>
            
            <div>
                <div>
                    <button 
                        onClick={formDataSubmit}
                        className=" font-medium text-sm border-none rounded-3xl ml-4 p-4 bg-red-700 hover:bg-red-800 text-white"
                        type="button">
                        SEND MESSAGE
                    </button>
                </div>
            </div>

        </div>
    </div>
  );
}

export default AddContact