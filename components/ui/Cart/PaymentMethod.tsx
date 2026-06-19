"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCreditCard, FiSmartphone } from "react-icons/fi";
import { BsBank } from "react-icons/bs";

const PAYMENT_METHODS = [
  { id: "va", title: "Virtual Account (Bank Transfer)", icon: BsBank },
  { id: "ewallet", title: "E-Wallet (GoPay, OVO, Dana)", icon: FiSmartphone },
  { id: "cc", title: "Credit / Debit Card", icon: FiCreditCard },
];

export default function PaymentMethod({
  totalPrice,
  formatRupiah,
  onSuccess,
}: any) {
  const [selected, setSelected] = useState("va");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="flex-1 overflow-y-auto p-6">
        <h3 className="font-sans font-semibold text-dark-chocolate mb-4">
          Select Method
        </h3>
        <div className="flex flex-col gap-3">
          {PAYMENT_METHODS.map(({ id, title, icon: Icon }) => (
            <label
              key={id}
              className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                selected === id
                  ? "bg-primary/5 border-primary shadow-sm"
                  : "bg-white border-[#EDE4D8] hover:border-primary/50"
              }`}
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-primary bg-white shrink-0">
                {selected === id && (
                  <div className="w-3 h-3 rounded-full bg-primary" />
                )}
              </div>
              <Icon
                className={`text-xl ${selected === id ? "text-primary" : "text-muted-cocoa"}`}
              />
              <span className="font-sans text-sm font-medium text-dark-chocolate">
                {title}
              </span>
              <input
                type="radio"
                name="payment"
                className="hidden"
                checked={selected === id}
                onChange={() => setSelected(id)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-[#EFEAE2] bg-[#FAF6F0] shrink-0 space-y-4">
        <div className="flex items-center justify-between text-dark-chocolate">
          <span className="font-sans font-medium text-sm">Amount to Pay</span>
          <span className="font-sans font-bold text-xl text-[#b8892a] tracking-tight">
            {formatRupiah(totalPrice)}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onSuccess}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-sans font-semibold py-4 rounded-xl cursor-pointer transition-colors shadow-md text-sm outline-none"
        >
          Confirm & Pay
        </motion.button>
      </div>
    </motion.div>
  );
}
