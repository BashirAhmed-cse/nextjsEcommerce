"use client";

const Pagination = () => {
  return (
    <div className="mt-12 flex justify-between w-full">
      <button className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200">
        Previous
      </button>
      <button className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200">
        Next
      </button>
    </div>
  );
};

export default Pagination;
