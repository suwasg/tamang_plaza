import * as React from "react";
import { useState } from "react";
import { Link, Route, Router, useNavigate } from "@tanstack/react-router";
import { useForm, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import CoverImage from "../../ui/molecules/CoverImage";

const VenueBookingForm: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { register, handleSubmit, control } = useForm();

  const onNext = () => setStep((prev) => prev + 1);
  const onPrev = () => setStep((prev) => prev - 1);

  const onSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
    alert("Booking successful!");
  };

  return (
    <section>
        {/* <img src="https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=612x612&w=0&k=20&c=Fnx06haU4IHYLcRpy9Po_TBknvBqVjicGuUWkGu8e6Y=" alt="" /> */}
        <CoverImage bgImage='https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=612x612&w=0&k=20&c=Fnx06haU4IHYLcRpy9Po_TBknvBqVjicGuUWkGu8e6Y=' heading='Booking Form' textColor='text-gray-50' />

    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Venue Booking</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Event Details */}
        {step === 1 && (
          <div>
            <label className="block">Event Type*</label>
            <select {...register("eventType", { required: true })} className="w-full p-2 border rounded">
              <option value="wedding">Wedding</option>
              <option value="anniversary">Anniversary</option>
              <option value="birthday">Birthday</option>
              <option value="other">Other Celebrations</option>
            </select>

            <label className="block mt-3">Event Date</label>
            <input type="date" {...register("eventDate", { required: true })} className="w-full p-2 border rounded" />

            <label className="block mt-3">Shift</label>
            <select {...register("shift", { required: true })} className="w-full p-2 border rounded">
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="whole_day">Whole Day</option>
              <option value="24_hours">24 Hours</option>
              <option value="48_hours">48 Hours</option>
            </select>

            <label className="block mt-3">Estimated Number of Guests</label>
            <input type="number" {...register("guests", { required: true })} className="w-full p-2 border rounded" />
          </div>
        )}

        {/* Step 2: Select Hall */}
        {step === 2 && (
          <div>
            <label className="block">Select Hall</label>
            <select {...register("hallNo", { required: true })} className="w-full p-2 border rounded">
              <option value="hall_1">Hall 1</option>
              <option value="hall_2">Hall 2</option>
              <option value="hall_3">Hall 3</option>
            </select>
          </div>
        )}

        {/* Step 3: Select Menu */}
        {step === 3 && (
          <div>
            <label className="block">Select Menu</label>
            <select {...register("menu", { required: true })} className="w-full p-2 border rounded">
              <option value="veg">Vegetarian</option>
              <option value="non_veg">Non-Vegetarian</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
        )}

        {/* Step 4: Personal Details + reCAPTCHA */}
        {step === 4 && (
          <div>
            <label className="block">Name</label>
            <input type="text" {...register("name", { required: true })} className="w-full p-2 border rounded" />

            <label className="block mt-3">Email</label>
            <input type="email" {...register("email", { required: true })} className="w-full p-2 border rounded" />

            <label className="block mt-3">Phone</label>
            <input type="text" {...register("phone", { required: true })} className="w-full p-2 border rounded" />

            <label className="block mt-3">Address</label>
            <input type="text" {...register("address", { required: true })} className="w-full p-2 border rounded" />

            <label className="block mt-3">Remarks (Optional)</label>
            <textarea {...register("remarks")} className="w-full p-2 border rounded"></textarea>

            {/* Google reCAPTCHA */}
            <div className="mt-4">
              <Controller
                name="recaptcha"
                control={control}
                render={({ field }) => (
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button type="button" onClick={onPrev} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>
          )}
          {step < 4 ? (
            <button type="button" onClick={onNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
          )}
        </div>
      </form>
    </div>
    </section>

  );
};

export default VenueBookingForm;
