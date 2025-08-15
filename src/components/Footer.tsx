import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Dịch Vụ',
      links: [
        { name: 'Thiết Kế Website', path: '/services/website-design' },
        { name: 'SEO Marketing', path: '/services/seo-marketing' },
        { name: 'Social Media', path: '/services/social-media-marketing' },
        { name: 'Web Hosting', path: '/services/hosting' }
      ]
    },
    {
      title: 'Khóa Học',
      links: [
        { name: 'SEO Website', path: '/courses/seo-website' },
        { name: 'Google Ads', path: '/courses/google-ads' },
        { name: 'Facebook Ads', path: '/courses/facebook-ads' },
        { name: 'AI Video', path: '/courses/ai-video' }
      ]
    },
    {
      title: 'Công Ty',
      links: [
        { name: 'Về Chúng Tôi', path: '/about' },
        { name: 'Đội Ngũ', path: '/team' },
        { name: 'Tin Tức', path: '/news' },
        { name: 'Liên Hệ', path: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">Ali Digital</span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Đối tác tin cậy trong chuyển đổi số, giúp doanh nghiệp phát triển 
                với các giải pháp marketing số tiên tiến và đào tạo chuyên nghiệp.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-300">123 Đường ABC, Quận 1, TP.HCM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-300">+84 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-300">info@alidigital.vn</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Đăng Ký Nhận Tin</h3>
              <p className="text-gray-300">
                Nhận thông tin mới nhất về marketing số và các khóa học từ chúng tôi.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white"
              />
              <motion.button
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Đăng Ký
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Ali Digital. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;