"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { CheckCircle, Phone, Wrench, Shield, Clock, Users, Star, Zap } from "lucide-react"

const advantages = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Низкие цены на весь сервисный диапазон услуг",
    description: "Доступные цены благодаря большому количеству клиентов и оптимизированным процессам",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Телефон всегда берет специалист",
    description: "Квалифицированные консультанты, разбирающиеся в данной сфере",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Лучшие мастера с многолетним стажем 7-10 лет",
    description: "Опытные профессионалы с подтвержденной квалификацией",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Современное оборудование по диагностике",
    description: "Высокотехнологичное оборудование для точной диагностики",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Гарантийный срок до 24 месяцев",
    description: "Официальная гарантия на детали и услуги",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Высококвалифицированные электрики",
    description: "Специалисты по бытовой технике с глубокими знаниями",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Налаженные связи с поставщиками",
    description: "Оригинальные запчасти и европейские аналоги любых комплектующих",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Сложный ремонт двигателей",
    description: "Специалисты и оборудование для ремонта современных стиральных машин",
  },
]

const serviceHighlights = [
  {
    title: "Профессиональная диагностика",
    description:
      "Используем современное оборудование для точного определения неисправностей. Наши мастера проводят комплексную проверку всех систем стиральной машины.",
    icon: "🔍",
  },
  {
    title: "Качественный ремонт",
    description:
      "Восстанавливаем все функции техники с использованием оригинальных запчастей. Каждый этап работы контролируется опытными специалистами.",
    icon: "🔧",
  },
  {
    title: "Профилактическое обслуживание",
    description:
      "Проводим чистку и смазку всех узлов для предотвращения будущих поломок. Это продлевает срок службы вашей стиральной машины.",
    icon: "🛡️",
  },
  {
    title: "Гарантия результата",
    description:
      "Предоставляем официальную гарантию до 24 месяцев на все виды работ и установленные детали. Ваше спокойствие - наш приоритет.",
    icon: "✅",
  },
]

export function ServiceAdvantagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <WaterTextAnimation
            text="Чем мы гордимся"
            className="text-3xl md:text-5xl font-cormorant font-semibold mb-6 tracking-wide"
            color="#1B6568"
          />
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
            Мастерские по ремонту стиральных машин в Одессе многочисленны, однако не все могут гордиться нашими
            преимуществами
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50"
            >
              <div className="text-teal-600 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-cormorant font-semibold mb-3 leading-tight" style={{ color: "#1B6568" }}>
                {advantage.title}
              </h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Process - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 rounded-3xl p-8 md:p-16 text-white mb-16 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1B6568 0%, #1B6568 40%, #1a5c5e 100%)" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-cormorant font-bold mb-6 leading-tight">
                Профессиональный сервисный ремонт
              </h3>
              <p className="text-teal-100 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
                Наш сервисный центр предоставляет комплексные услуги по диагностике и ремонту стиральных машин с
                использованием современных технологий и многолетнего опыта
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {serviceHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-4">{highlight.icon}</div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-cormorant font-bold text-white mb-4 leading-tight">
                        {highlight.title}
                      </h4>
                      <p className="text-teal-100 font-light text-base md:text-lg leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl shadow-lg border border-white/10">
                <CheckCircle className="w-6 h-6" />
                <span>Диагностика совершенно БЕСПЛАТНО при оформлении заказа!</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-cormorant font-semibold mb-4" style={{ color: "#1B6568" }}>
            Вызвать мастера по ремонту стиральных машин на дом так просто!
          </h3>
          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Позвоните в наш центр по телефону, напишите нам в WhatsApp или Viber или заполните специальную форму на
            сайте и сервисный ремонт Вашей стиральной машины практически начался!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-200 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors duration-300">
                <Clock className="w-8 h-8 text-teal-600 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-cormorant font-semibold mb-2" style={{ color: "#1B6568" }}>
                Работаем с 9 до 21
              </h4>
              <p className="text-gray-600 font-light text-lg">Срочный ремонт в течении 2-3 часов</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-200 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors duration-300">
                <Zap className="w-8 h-8 text-teal-600 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-cormorant font-semibold mb-2" style={{ color: "#1B6568" }}>
                Выезд БЕСПЛАТНО
              </h4>
              <p className="text-gray-600 font-light text-lg">По Одессе и Одесской области</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-200 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors duration-300">
                <Star className="w-8 h-8 text-teal-600 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-cormorant font-semibold mb-2" style={{ color: "#1B6568" }}>
                Скидка 5%
              </h4>
              <p className="text-gray-600 font-light text-lg">При последующем обращении</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 font-medium mb-4">
              Все ли мастерские по ремонту стиральных машин могут Вам это предложить?
            </p>
            <button
              className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:opacity-90"
              style={{ backgroundColor: "#1B6568" }}
            >
              Вызвать мастера сейчас
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
