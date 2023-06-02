import React from 'react';



const CartComponent = (props) => {
  const { music, time, date, description, tutorName } = props;

  return (
    <div className="flex flex-col items-center justify-center shadow-lg">
      <div className="w-full max-w-sm p-8 rounded shadow-md bg-white">
        <div className="flex justify-between mb-4">
          <h4 className="font-semibold">{music}</h4>
          <h4 className="items-center font-semibold">{time}</h4>
          <h4 className="items-end font-semibold">{date}</h4>
        </div>

        <div className="pb-3">
          <h2 className="text-base">{description}</h2>
        </div>

        <div className="flex mb-8">
          <h1 className="text-lg">
            Conducted by:<a className="px-2 font-semibold">{tutorName}</a>
          </h1>
        </div>

        <div className="flex justify-between">
          <a className="text-base">View Details</a>
          <div className="items-end flex">
            <button className="px-4 py-0 items-end mx-auto bg-amber-500 text-white rounded hover:bg-amber-600">
              Attend Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;

