import { useForm } from "react-hook-form";

const AddressForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = () => {
    console.log("submited");
    onSubmit(); 
  };

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="font-display flex flex-col"
    >
      <label className="dark:text-white text-xs font-semibold my-2">Address</label>
      <input
        type="text"
        className="py-1 px-3 border border-[#d1d1d1] rounded-md shadow-sm focus:outline-none text-sm"
        placeholder="Address"
        {...register("address", { required: true })}
        aria-invalid={errors.address? "true" : "false"}
      />
      {errors.address?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">
          Address is required
        </p>
      )}
      <label className="dark:text-white text-xs font-semibold my-2">Address (optional)</label>
      <input
        type="text"
        className="py-1 px-3 border border-[#d1d1d1] rounded-md shadow-sm focus:outline-none text-sm"
        placeholder="Last name"
        {...register("address2")}
      />

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label className="dark:text-white text-xs font-semibold my-2">CITY</label>
          <input
            type="text"
            className="py-1 w-32 px-3 border border-[#d1d1d1] rounded-md shadow-sm focus:outline-none text-sm"
            placeholder="City"
            {...register("city", { required: true })}
            aria-invalid={errors.city? "true" : "false"}
          />
          {errors.city?.type === "required" && (
            <p className="text-sm text-red-500" role="alert">
              City is required
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="dark:text-white text-xs font-semibold my-2">STATE</label>
          <input
            type="text"
            className="py-1 px-3 w-32 border border-[#d1d1d1] rounded-md shadow-sm focus:outline-none text-sm"
            placeholder="State"
            {...register("state", { required: true })}
            aria-invalid={errors.state ? "true" : "false"}
          />
          {errors.state?.type === "required" && (
            <p className="text-sm text-red-500" role="alert">
              State is required
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col my-5">
        <label className="dark:text-white text-xs font-semibold my-2">ZIP CODE</label>
        <input
          type="number"
          className="py-1 px-3 border border-[#d1d1d1] rounded-md shadow-sm focus:outline-none text-sm"
          placeholder="zip code"
          {...register("zipCode", { required: true })}
          aria-invalid={errors.zipCode ? "true" : "false"}
        />
        {errors.zipCode?.type === "required" && (
          <p className="text-sm text-red-500" role="alert">
            Zip code required
          </p>
        )}
      </div>
      <input
        className="bg-[#0074c3] text-white text-sm rounded-sm py-2"
        type="submit"
      />
    </form>
  );
};

export default AddressForm;
