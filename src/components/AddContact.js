import React from 'react';

function AddContact() {
  return (
    <div>
        <h1 className=" text-lg p-5">
            Get Started</h1>
        <div>

            <div>
                <label>Name*</label>
                    <div>
                        <input type="text" name="yourname" placeholder="Your name"></input>
                    </div>
            </div>
            
            <div>
                <label>Email*</label>
                    <div>
                        <input type="text" name="email" placeholder="Your email"></input>
                    </div>
            </div>
                
            <div>
                <label>Budget</label>
                    <div>
                        <input type="number" name="budget" placeholder="Choose..." step="2"></input>
                    </div>
            </div>

            <div>
                <label>Message*</label>
                    <div>
                        <textarea type="text" placeholder="Write your message" rows="3"></textarea>
                    </div>
            </div>
            
            <div>
                <div>
                    <button type="button">
                        SEND MESSAGE
                    </button>
                </div>
            </div>

        </div>
    </div>
  );
}

export default AddContact