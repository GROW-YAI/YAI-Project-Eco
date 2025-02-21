import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, Users } from 'lucide-react';

export default function InnovatorProfile() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-[#1A959C]" />,
      title: "Innovation Awards",
      description: "Recognized for breakthrough technologies"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#1A959C]" />,
      title: "Industry Experience",
      description: "15+ years of technology leadership"
    },
    {
      icon: <Users className="w-8 h-8 text-[#1A959C]" />,
      title: "Team Growth",
      description: "Built and led teams of 100+ innovators"
    }
  ];

  return (
    <section className="py-20" id="innovator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Meet Our Lead Innovator
            </h2>
            <p className="text-lg text-gray-600">
              Dr. Sarah Chen brings over 15 years of experience in technological innovation and leadership. Her vision drives our commitment to pushing the boundaries of what's possible in the digital realm.
            </p>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              alt="Lead Innovator"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}