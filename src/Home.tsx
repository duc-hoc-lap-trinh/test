import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight,
  Globe,
  User,
  Users,
  Zap,
  Star,
  Search,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Quote,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Headphones
} from 'lucide-react';
import AnimatedSection from './components/AnimatedSection';
import AnimatedCard from './components/AnimatedCard';

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: Globe,
      title: 'Thiết Kế Website',
      description: 'Website tùy chỉnh, responsive thu hút khán giả và thúc đẩy chuyển đổi.',
      features: ['Thiết kế ưu tiên di động', 'Tải nhanh', 'Tối ưu SEO'],
      link: '/services/website-design'
    },
    {
      icon: User,
      title: 'Thiết kế Profile',
      description: 'Giải pháp xây dựng thương hiệu chuyên nghiệp và sản phẩm số cho doanh nghiệp.',
      features: ['Xây dựng bản sắc thương hiệu', 'Sản phẩm số', 'Tối ưu portfolio'],
      link: '/services/design-profile'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Chiến dịch chiến lược trên Facebook, TikTok và Google.',
      features: ['Chiến lược đa nền tảng', 'Tạo nội dung', 'Theo dõi phân tích'],
      link: '/services/social-media-karketing'
    },
    {
      icon: Zap,
      title: 'Web Hosting',
      description: 'Hosting nhanh chóng, an toàn với cam kết uptime 99.9%.',
      features: ['Hiệu suất cao', 'Bảo mật SSL', 'Sao lưu hàng ngày'],
      link: '/services/hosting'
    },
    {
      icon: Star,
      title: 'Reviews Maps',
      description: 'Tăng cường sự hiện diện địa phương qua quản lý đánh giá chiến lược.',
      features: ['Theo dõi đánh giá', 'Local SEO', 'Quản lý danh tiếng'],
      link: '/services/reviews-maps'
    },
    {
      icon: Search,
      title: 'SEO Website',
      description: 'Chiến lược SEO nâng cao thúc đẩy lưu lượng hữu cơ và thứ hạng.',
      features: ['Nghiên cứu từ khóa', 'Tối ưu on-page', 'Theo dõi hiệu suất'],
      link: '/services/seo-marketing'
    }
  ];

  const courses = [
    {
      title: 'Khóa học SEO Website',
      description: 'Làm chủ tối ưu hóa công cụ tìm kiếm với các chiến lược đã được chứng minh.',
      price: '7.500.000 VNĐ',
      duration: '8 tuần',
      students: '2.500+',
      link: '/courses/seo-website'
    },
    {
      title: 'Khóa học Google Ads',
      description: 'Tạo chiến dịch Google Ads chuyển đổi cao tối đa hóa ROI.',
      price: '9.500.000 VNĐ',
      duration: '6 tuần',
      students: '1.800+',
      link: '/courses/google-ads'
    },
    {
      title: 'Khóa học Facebook Ads',
      description: 'Thống trị quảng cáo Facebook với chiến lược nhắm mục tiêu nâng cao.',
      price: '8.500.000 VNĐ',
      duration: '7 tuần',
      students: '3.200+',
      link: '/courses/facebook-ads'
    },
    {
      title: 'Khóa học tạo Video Bằng AI',
      description: 'Khai thác AI để tạo nội dung video chuyên nghiệp chuyển đổi.',
      price: '10.500.000 VNĐ',
      duration: '5 tuần',
      students: '1.200+',
      link: '/courses/ai-video'
    }
  ];

  const testimonials = [
    {
      name: 'Trần Thị Lan',
      company: 'TechStart VN',
      image: 'https://danatech.agency/wp-content/uploads/2025/04/6-150x150.png',
      text: 'Ali Digital đã thay đổi hoàn toàn sự hiện diện trực tuyến của chúng tôi. Lưu lượng website tăng 300% chỉ trong 3 tháng!'
    },
    {
      name: 'Nguyễn Văn Minh',
      company: 'E-commerce Plus',
      image: 'https://danatech.agency/wp-content/uploads/2025/04/5-150x150.png',
      text: 'Khóa học SEO tuyệt vời. Tôi áp dụng chiến lược và thấy cải thiện ngay lập tức về thứ hạng tìm kiếm.'
    },
    {
      name: 'Lê Thị Hoa',
      company: 'Doanh Nghiệp Địa Phương',
      image: 'https://danatech.agency/wp-content/uploads/2025/04/8-150x150.png',
      text: 'Dịch vụ quản lý mạng xã hội giúp chúng tôi tiếp cận hàng ngàn khách hàng mới. Rất khuyến nghị!'
    }
  ];

  const faqs = [
    {
      question: 'Điều gì làm Ali Digital khác biệt với các agency khác?',
      answer: 'Chúng tôi kết hợp công nghệ tiên tiến với chiến lược đã được chứng minh, cung cấp cả dịch vụ và đào tạo. Đội ngũ có hơn 10 năm kinh nghiệm và giải pháp cá nhân hóa cho từng khách hàng.'
    },
    {
      question: 'Mất bao lâu để thấy kết quả?',
      answer: 'Kết quả khác nhau tùy dịch vụ, nhưng hầu hết khách hàng thấy cải thiện trong 30-60 ngày. SEO thường mất 3-6 tháng cho kết quả đáng kể, trong khi quảng cáo trả phí có thể thấy kết quả trong vài ngày.'
    },
    {
      question: 'Các bạn có hoàn tiền cho khóa học không?',
      answer: 'Có, chúng tôi cung cấp cam kết hoàn tiền trong 30 ngày cho tất cả khóa học. Nếu bạn không hài lòng với nội dung, chúng tôi sẽ hoàn tiền đầy đủ.'
    },
    {
      question: 'Tôi có nhận hỗ trợ sau khi mua khóa học không?',
      answer: 'Chắc chắn! Tất cả học viên khóa học được truy cập cộng đồng riêng, phiên hỏi đáp hàng tháng và hỗ trợ email trong 6 tháng sau khi mua.'
    },
    {
      question: 'Các bạn có làm việc với doanh nghiệp nhỏ không?',
      answer: 'Có, chúng tôi làm việc với doanh nghiệp ở mọi quy mô, từ startup đến công ty lớn. Chúng tôi có gói linh hoạt phù hợp với ngân sách và nhu cầu khác nhau.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Chuyên Môn Đã Được Chứng Minh',
      description: 'Hơn 10 năm kinh nghiệm với hơn 500 dự án thành công'
    },
    {
      icon: TrendingUp,
      title: 'Hướng Đến Kết Quả',
      description: 'Trung bình tăng ROI 250% cho khách hàng trong 6 tháng'
    },
    {
      icon: Shield,
      title: 'Đối Tác Đáng Tin Cậy',
      description: 'Tỷ lệ hài lòng khách hàng trung bình 99% và quan hệ đối tác lâu dài'
    },
    {
      icon: Headphones,
      title: 'Hỗ Trợ 24/7',
      description: 'Hỗ trợ liên tục cho tất cả khách hàng và học viên'
    }
  ];

  const partners = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Logo Google' },
    { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', alt: 'Logo Facebook' },
    { name: 'TikTok', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', alt: 'Logo TikTok' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'Logo Amazon' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Logo Microsoft' },
    { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg', alt: 'Logo Shopify' }
  ];

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
      {/* Banner Section */}
      <motion.section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-red-50 to-white py-20 overflow-hidden"
        variants={heroVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={heroChildVariants}>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                variants={heroChildVariants}
              >
                Chuyển Đổi <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Tương Lai Số Của Bạn</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                variants={heroChildVariants}
              >
                Khai phá tiềm năng kinh doanh với bộ dịch vụ marketing số toàn diện và khóa học do chuyên gia hướng dẫn của Ali Digital. Từ website ấn tượng đến chiến lược marketing mạnh mẽ, chúng tôi là đối tác thành công số của bạn.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={heroChildVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="border-2 border-white bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transform transition-all duration-200 shadow-lg text-center inline-block"
                  >
                    Nhận Tư Vấn Miễn Phí
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-8 mt-8 text-sm text-gray-600"
                variants={heroChildVariants}
              >
                {['Tư Vấn Miễn Phí', 'Cam Kết 30 Ngày', 'Hỗ Trợ Từ Chuyên Gia'].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  >
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={heroChildVariants}
            >
              <motion.div
                style={{ padding: "56.25% 0 0 0", position: "relative" }}
                className="rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://player.vimeo.com/video/1109738838?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0&badge=0&iv_load_policy=3&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                  title="tvc"
                  className="w-full h-full"
                ></iframe>
              </motion.div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dịch Vụ Của Chúng Tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Các giải pháp toàn diện để nâng tầm sự hiện diện số của bạn. Chúng tôi thiết kế dịch vụ để phù hợp với nhu cầu kinh doanh cụ thể, giúp bạn đạt được mục tiêu nhanh chóng và hiệu quả.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
                index={index}
              >
                <motion.div 
                  className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={service.link}
                    className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center mt-auto"
                  >
                    Tìm Hiểu Thêm <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Khóa Học Nổi Bật</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Các chương trình đào tạo thực tế để làm chủ marketing số. Học từ chuyên gia và áp dụng ngay vào doanh nghiệp của bạn.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <AnimatedCard 
                key={index} 
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col"
                index={index}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="text-red-600 font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {course.price}
                  </motion.div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to={course.link}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center block mt-auto"
                  >
                    Xem Khóa Học
                  </Link>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tại Sao Chọn Ali Digital?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi không chỉ là một agency. Chúng tôi là đối tác chiến lược trong chuyển đổi số của bạn, mang đến giải pháp thực tế và hỗ trợ lâu dài.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedCard key={index} className="text-center group" index={index}>
                <motion.div 
                  className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-10 h-10 text-red-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Danh Mục Khóa Học</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Các chương trình đào tạo toàn diện để làm chủ mọi khía cạnh của marketing số. Từ cơ bản đến nâng cao, phù hợp với mọi cấp độ.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <AnimatedCard 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                index={index}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{course.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="text-2xl font-bold text-red-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    {course.price}
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to={course.link}
                    className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center block mt-auto"
                  >
                    Đăng Ký Ngay
                  </Link>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Đối Tác Của Chúng Tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi tự hào hợp tác với các công ty hàng đầu thế giới để mang đến những giải pháp tốt nhất cho khách hàng của mình.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <AnimatedCard 
                key={index} 
                className="flex items-center justify-center bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                index={index}
              >
                <motion.img 
                  src={partner.logo} 
                  alt={`Logo đối tác ${partner.name}`} 
                  className="h-10 object-contain" 
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Đừng chỉ nghe lời chúng tôi. Hãy nghe ý kiến từ những khách hàng đã trải nghiệm dịch vụ và khóa học của chúng tôi.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard 
                key={index} 
                className="bg-gray-50 p-8 rounded-2xl relative"
                index={index}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Quote className="w-8 h-8 text-red-600 mb-4" />
                </motion.div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <motion.img 
                    src={testimonial.image}
                    alt={`Ảnh đại diện của ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Câu Hỏi Thường Gặp</h2>
            <p className="text-xl text-gray-600">
              Bạn có câu hỏi? Chúng tôi có câu trả lời.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedCard 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                index={index}
                hover={false}
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-red-600" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
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
              Sẵn Sàng Chuyển Đổi Doanh Nghiệp Của Bạn?
            </motion.h2>
            <motion.p 
              className="text-xl text-red-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Tham gia cùng hàng ngàn doanh nghiệp thành công đã thúc đẩy tăng trưởng với chiến lược đã được chứng minh.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact"
                  className="border-2 border-white text-red-600 bg-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-200 inline-block"
                >
                  Liên Hệ Tư Vấn Miễn Phí
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/courses"
                  className="border-2 border-white text-red-600 bg-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-200 inline-block"
                >
                  Xem Tất Cả Khóa Học
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center mt-8 space-x-8 text-red-100 flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {['Không Mất Phí Thiết Lập', 'Cam Kết 30 Ngày', 'Hỗ Trợ Từ Chuyên Gia'].map((item, index) => (
                <motion.div 
                  key={item}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;