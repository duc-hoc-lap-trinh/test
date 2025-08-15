import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Target,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Globe,
} from "lucide-react";
import AnimatedSection from './components/AnimatedSection';
import AnimatedCard from './components/AnimatedCard';

const About = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const team = [
    {
      name: "HUỲNH LUẬN",
      role: "FOUNDER & CEO",
      image: "https://danatech.agency/wp-content/uploads/2025/06/AvataJoe.jpg",
      description:
        "Chuyên gia marketing số với hơn 10 năm kinh nghiệm giúp doanh nghiệp phát triển trực tuyến.",
    },
    {
      name: "THIÊN PHƯỚC",
      role: "CO.FOUNDER & COO",
      image: "https://danatech.agency/wp-content/uploads/2025/06/TPavatar.jpg",
      description:
        "Chuyên gia thiết kế và phát triển web, mang đến những giải pháp sáng tạo và hiệu quả cho khách hàng.",
    },
    {
      name: "HUỲNH MINH THƯ",
      role: "AI INSTRUCTOR",
      image: "https://danatech.agency/wp-content/uploads/2025/06/thw.jpg",      
      description: " Giảng viên AI chuyên nghiệp, giúp các doanh nghiệp tăng hiệu quả và hiệu năng trong việc quản lý nhân sự.",
    },
    {
      name: "LÊ VĂN SANG",
      role: "DEVELOPER",
      image: "https://danatech.agency/wp-content/uploads/2025/06/David.jpg",
      description:
        "Lập trình viên full-stack với chuyên môn trong phát triển ứng dụng web và di động, mang đến trải nghiệm người dùng mượt mà và hiệu quả.",
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Lấy khách hàng làm trung tâm",
      description:
        "Chúng tôi đặt khách hàng lên hàng đầu, đảm bảo mọi giải pháp được thiết kế phù hợp với nhu cầu và mục tiêu riêng của họ.",
    },
    {
      icon: Lightbulb,
      title: "Đổi mới sáng tạo",
      description:
        "Chúng tôi luôn đi đầu trong xu hướng số, không ngừng phát triển chiến lược và công nghệ mới.",
    },
    {
      icon: Shield,
      title: "Chính trực",
      description:
        "Chúng tôi tin vào giao tiếp minh bạch và thực hành kinh doanh trung thực trong mọi hoạt động.",
    },
    {
      icon: Globe,
      title: "Tầm ảnh hưởng toàn cầu",
      description:
        "Chúng tôi giúp các doanh nghiệp ở mọi quy mô phát huy tối đa tiềm năng trên thị trường số toàn cầu.",
    },
  ];

  const stats = [
    { number: "1000+", label: "Dự án hoàn thành" },
    { number: "10+", label: "Năm kinh nghiệm" },
    { number: "70+", label: "Thành viên đội ngũ" },
    { number: "95%", label: "Mức độ hài lòng của khách hàng" },
  ];

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const heroChildVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="bg-gradient-to-br from-red-50 to-white py-20"
        variants={heroVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" variants={heroChildVariants}>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={heroChildVariants}
            >
              Về <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Ali Digital</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={heroChildVariants}
            >
              Chúng tôi là đội ngũ đam mê gồm các chuyên gia marketing số, nhà
              phát triển và chiến lược gia, tận tâm giúp các doanh nghiệp phát
              triển trong thời đại số. Sứ mệnh của chúng tôi là kết nối các
              phương pháp kinh doanh truyền thống với các giải pháp số tiên
              tiến.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-red-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Được thành lập vào năm 2015, Ali Digital khởi đầu là một
                  studio thiết kế web nhỏ với tầm nhìn lớn: dân chủ hóa
                  marketing số và giúp các doanh nghiệp ở mọi quy mô tiếp cận
                  được với nó. Từ một cá nhân khởi nghiệp, chúng tôi đã phát
                  triển thành một công ty cung cấp dịch vụ số toàn diện với đội
                  ngũ hơn 70 chuyên gia.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Nhà sáng lập của chúng tôi, anh Huỳnh Luận, sớm nhận ra rằng
                  bối cảnh số đang phát triển nhanh chóng, khiến nhiều doanh
                  nghiệp bị bỏ lại phía sau. Với nền tảng về cả công nghệ và
                  marketing, anh Hùng đã xây dựng Ali Digital để thu hẹp khoảng
                  cách này bằng cách cung cấp cả dịch vụ và đào tạo.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ngày nay, chúng tôi đã giúp hơn 1000 doanh nghiệp chuyển đổi
                  diện mạo số, đào tạo hàng ngàn học viên qua các khóa học, và
                  tiếp tục đẩy xa giới hạn của những gì có thể đạt được trong
                  marketing số.
                </motion.p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <motion.img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Đội ngũ làm việc"
                  className="rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">2015</p>
                      <p className="text-sm text-gray-600">Thành lập</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedCard className="text-center group" index={0}>
              <motion.div 
                className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-10 h-10 text-red-600 group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Sứ Mệnh Của Chúng Tôi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trao quyền cho các doanh nghiệp trên toàn thế giới với các giải
                pháp marketing số tiên tiến và chương trình đào tạo toàn diện,
                giúp họ đạt được tăng trưởng bền vững và thành công trong nền
                kinh tế số.
              </p>
            </AnimatedCard>
            <AnimatedCard className="text-center group" index={1}>
              <motion.div 
                className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="w-10 h-10 text-red-600 group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Tầm Nhìn Của Chúng Tôi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trở thành công ty dẫn đầu thế giới về giáo dục và dịch vụ
                marketing số, được công nhận nhờ sự đổi mới, chính trực và tác
                động chuyển đổi đối với doanh nghiệp của khách hàng.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những giá trị này định hướng mọi hoạt động của chúng tôi và định
              hình cách chúng tôi tương tác với khách hàng, đối tác và đồng
              nghiệp.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                index={index}
              >
                <motion.div 
                  className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gặp Gỡ Đội Ngũ Chuyên Gia Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi tận tâm mang lại
              kết quả vượt trội cho khách hàng.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedCard
                key={index}
                className="bg-gray-50 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300"
                index={index}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <motion.p 
                  className="text-red-600 font-semibold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.role}
                </motion.p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Sẵn Sàng Hợp Tác Với Chúng Tôi?
            </motion.h2>
            <motion.p 
              className="text-xl text-red-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hãy cùng thảo luận cách chúng tôi có thể giúp chuyển đổi doanh
              nghiệp của bạn và đạt được mục tiêu marketing số.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="border-2 border-white text-red-600 bg-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nhận Tư Vấn Miễn Phí
              </motion.button>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;