import { useForm } from "react-hook-form";

const PersonalInfo = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  let currDate = yyyy + "-" + mm + "-" + dd;

  const onsubmit = () => {
    console.log("submited");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="font-display flex flex-col">
      <label className="text-xs font-semibold my-2">FIRST NAME</label>
      <input
        type="text"
        className="py-1 px-3 border border-[#d1d1d1] rounded-md shadow-sm focus:outline-none text-sm"
        placeholder="First name"
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">
          First name is required
        </p>
      )}
      <label className="text-xs font-semibold my-2">LAST NAME</label>
      <input
        type="text"
        className="py-1 px-3 border border-[#d1d1d1] rounded-md shadow-sm focus:outline-none text-sm"
        placeholder="Last name"
        {...register("lastName", { required: true })}
      />
      {errors.firstName?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">
          Last Name is required
        </p>
      )}
      <div className="flex justify-between my-6 items-center">
        <div className="flex gap-2">
          <label className="text-xs font-semibold my-2">GENDER</label>
          <select
            className="py-1 px-3 border border-[#0074c3] rounded-md shadow-sm focus:outline-none sm:text-sm"
            {...register("gender")}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label className="text-xs font-semibold my-2">DATE OF BIRTH</label>
          <input
            className="text-sm focus:outline-none"
            type="date"
            max={currDate}
          />
        </div>
      </div>
      <div className="flex flex-col my-5">
        <label className="text-xs font-semibold">PHONE NUMBER</label>
        <input
          className="py-1 px-3 border border-[#d1d1d1] rounded-md shadow-sm focus:outline-none text-sm"
          type="number"
        />
      </div>
      <input
        className="bg-[#0074c3] text-white text-sm rounded-sm py-2"
        type="submit"
      />
    </form>
  );
};

export default PersonalInfo;
