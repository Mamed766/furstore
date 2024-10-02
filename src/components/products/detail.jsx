import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import { getProductById } from "../../services/api";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    getProductById(`products`, id).then((res) => setData(res));
  }, [id]);

  console.log(data);
  return (
    <div className="mt-[15rem]">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>

      <CustomModal open={open} setOpen={setOpen}>
        <div className="mx-auto h-screen flex justify-center items-center">
          <div className="bg-white flex gap-2  w-[50rem] h-[30rem] overflow-hidden rounded z-30">
            <div className="">
              <img src={data?.image1} className="max-w-[30rem] h-full" alt="" />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h2 className="font-semibold pr-5">{data?.title}</h2>

              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < data?.stars ? "text-yellow-600" : "text-gray-400"
                    }
                  />
                ))}
              </div>
              <div>
                <p className="text-[26px] font-semibold">{data?.price}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center   gap-[5.9rem]">
                  <h2 className="font-semibold">SKU:</h2>
                  <p className="text-[12px]">THJ-1</p>
                </div>
                <div className="flex items-center gap-10">
                  <h2 className="font-semibold">CATEGORY:</h2>
                  <p className="text-[12px]">
                    Armchair, Bathroom, Bookshelf, Clocks, Hanging Light, Home
                    page, Planter, Sofa, Tables
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center   gap-[5.9rem]">
                  <h2 className="font-semibold">SIZE</h2>
                  <p className="text-[12px]">SMALL</p>
                </div>

                <div className="flex gap-2 mt-5">
                  <button className="bg-black w-[5rem] text-white p-3 rounded text-[12px]">
                    SMALL
                  </button>
                  <button className="bg-white w-[5rem] border hover:bg-black hover:text-white duration-300 border-black text-black p-3 rounded text-[12px]">
                    MEDIUM
                  </button>
                  <button className="bg-white w-[5rem] border  hover:bg-black hover:text-white duration-300 border-black text-black p-3 rounded text-[12px]">
                    LARGE
                  </button>
                </div>
              </div>

              <button className="bg-[#0a5d5d] text-white p-2 mr-2 mt-10">
                Buy It Now!
              </button>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default ProductDetail;
