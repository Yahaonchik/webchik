"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import Image from "next/image"

const rules = [
  {
    image: "/images/repairman-stairs.png",
    title: "Соблюдает договора и время прибытия на адрес",
    description: "Наш мастер всегда приезжает вовремя и выполняет все договоренности",
    shape: "clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
    gradient: "bg-gradient-to-br from-red-50 to-red-100",
  },
  {
    image: "/images/repairman-warranty.png",
    title: "Предоставляет гарантию до 24 мес. на работу и запчасти",
    description: "Официальная гарантия на все виды ремонтных работ и установленные детали",
    shape: "clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    gradient: "bg-gradient-to-br from-red-100 to-red-50",
  },
  {
    image: "/images/tools-cleanliness.png",
    title: "Соблюдает чистоту и порядок рабочего места",
    description: "Аккуратная работа без повреждения вашего имущества и интерьера",
    shape: "clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
    gradient: "bg-gradient-to-br from-red-50 to-red-100",
  },
  {
    image: "/images/phone-timer.png",
    title: "Работает быстро и качественно",
    description: "Эффективное решение проблем в кратчайшие сроки с высоким качеством",
    shape: "clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
    gradient: "bg-gradient-to-br from-red-100 to-red-50",
  },
  {
    image: "/images/repairman-portrait.png",
    title: "Опыт мастеров по ремонту стиральных машин не менее 5 лет",
    description: "Только опытные специалисты с подтвержденной квалификацией",
    shape: "clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
    gradient: "bg-gradient-to-br from-red-50 to-red-100",
  },
]

export function RepairRulesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <WaterTextAnimation
            text="Мастер по ремонту стиральных машин соблюдает ряд правил"
            className="text-3xl md:text-5xl font-semibold mb-6 tracking-wide"
            color="#1B6568"
          />
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Наши специалисты работают по строгим стандартам качества и профессионализма
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`overflow-hidden border border-gray-200 ${rule.gradient}`}
              style={{ [rule.shape]: "" }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={rule.image}
                  alt={rule.title}
                  fill
                  className="object-cover object-center transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 leading-tight" style={{ color: "#1B6568" }}>
                  {rule.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">{rule.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}