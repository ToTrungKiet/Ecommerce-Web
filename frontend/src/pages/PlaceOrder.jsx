import { useState, useContext } from "react";
import Title from "@/components/Title";
import CartTotal from "@/components/CartTotal";
import { assets } from "@/assets/assets";
import { ShopContext } from "@/context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    phone: "",
  });

  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: Math.round(getCartAmount() + delivery_fee)
      };

      switch (method) {
        // API Calls for COD
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "momo":
          try {
            const momoRes = await axios.post(
              backendUrl + "/api/order/momo",
              orderData,
              { headers: { token } }
            );

            if (momoRes.data.payUrl) {
              window.location.href = momoRes.data.payUrl; // redirect sang trang test MoMo
            } else {
              toast.error("Không nhận được payUrl từ backend MoMo sandbox");
            }
          } catch (err) {
            console.log(err);
            toast.error("Lỗi khi tạo thanh toán MoMo");
          }
          break;

        case "zalopay":
          const zaloRes = await axios.post(
            backendUrl + "/api/order/zalopay",
            orderData,
            { headers: { token } }
          );
          if (zaloRes.data.payUrl) {
            window.location.href = zaloRes.data.payUrl; // redirect sang cổng ZaloPay
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* {Left Side} */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFOMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="phone"
          placeholder="Phone"
        />
      </div>

      {/* {Right Side} */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* {Payment Method Selection} */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("momo")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "momo" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.momo_logo} alt="" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("zalopay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "zalopay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.zalopay_logo} alt="" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-end mt-8">
          <button
            type="submit"
            className="bg-black text-white px-16 py-3 text-sm hover:bg-gray-800 cursor-pointer"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
