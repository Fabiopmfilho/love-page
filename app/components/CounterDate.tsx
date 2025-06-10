"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function getTimeElapsed(fromDate: Date) {
  const now = new Date();
  const years = now.getFullYear() - fromDate.getFullYear();
  const months = now.getMonth() - fromDate.getMonth();
  const days = now.getDate() - fromDate.getDate();

  let finalYears = years;
  let finalMonths = months;
  let finalDays = days;

  if (finalDays < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    finalDays += previousMonth.getDate();
    finalMonths--;
  }

  if (finalMonths < 0) {
    finalMonths += 12;
    finalYears--;
  }

  return { years: finalYears, months: finalMonths, days: finalDays };
}

const CounterDate = () => {
  const [elapsed, setElapsed] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const fromDate = new Date("2015-06-30"); // ⬅️ Coloque aqui a data de início
    const update = () => setElapsed(getTimeElapsed(fromDate));

    update(); // chama uma vez ao carregar

    const interval = setInterval(update, 1000 * 60 * 60); // atualiza a cada hora

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="text-center mt-6 text-xl sm:text-base font-medium text-white h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Estamos juntos há{" "}
      <motion.span
        className="font-bold text-black/90 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
        key={`${elapsed.years}-${elapsed.months}-${elapsed.days}`}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {elapsed.years} anos, {elapsed.months} meses e {elapsed.days} dias
      </motion.span>
      .
      <motion.p className="text-sm text-white/80 text-center italic">
        E ainda assim, sinto que o melhor está por vir.
      </motion.p>
    </motion.div>
  );
};

export default CounterDate;
