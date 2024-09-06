import React, { Dispatch, SetStateAction } from "react";

type DeviceShowMoreProps = {
  setShowAllDevice: Dispatch<SetStateAction<boolean>>;
  showAllDevice: boolean;
};

const DeviceShowMore = ({
  setShowAllDevice,
  showAllDevice,
}: DeviceShowMoreProps) => {
  const handleShowMore = () => {
    setShowAllDevice(!showAllDevice);
  };

  return (
    <div className="mt-0 mb-10  px-4 w-full sm:w-[316px]">
      {!showAllDevice ? (
        <button
          className="w-full py-2 border-2 border-primary  text-blue-base bg-yellow-light rounded-md"
          onClick={handleShowMore}
        >
          Tampilkan Lebih Banyak
        </button>
      ) : (
        <button
          className="w-full py-2 border-2 border-primary  text-blue-base bg-yellow-light rounded-md"
          onClick={handleShowMore}
        >
          Tampilkan Sedikit
        </button>
      )}
    </div>
  );
};

export default DeviceShowMore;