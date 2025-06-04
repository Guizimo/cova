import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Heart, 
  Users, 
  Code, 
  Zap, 
  Globe, 
  Github,
  Mail,
  Star,
  Calendar,
  CheckCircle,
  Circle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const techStack = [
    { name: 'React', version: '19.1.0', description: t('aboutPage.techStack.react') },
    { name: 'TypeScript', version: '5.8.3', description: t('aboutPage.techStack.typescript') },
    { name: 'Vite', version: '6.3.5', description: t('aboutPage.techStack.vite') },
    { name: 'TailwindCSS', version: '4.1.8', description: t('aboutPage.techStack.tailwind') },
    { name: 'Zustand', version: '5.0.5', description: t('aboutPage.techStack.zustand') },
    { name: 'React i18next', version: '25.2.1', description: t('aboutPage.techStack.i18next') }
  ];

  const milestones = [
    { 
      version: 'v1.0.0', 
      title: t('aboutPage.roadmap.v1.title'), 
      status: 'completed',
      date: '2024-01'
    },
    { 
      version: 'v1.1.0', 
      title: t('aboutPage.roadmap.v1_1.title'), 
      status: 'in-progress',
      date: '2024-03'
    },
    { 
      version: 'v1.2.0', 
      title: t('aboutPage.roadmap.v1_2.title'), 
      status: 'planned',
      date: '2024-06'
    },
    { 
      version: 'v1.3.0', 
      title: t('aboutPage.roadmap.v1_3.title'), 
      status: 'planned',
      date: '2024-09'
    },
    { 
      version: 'v2.0.0', 
      title: t('aboutPage.roadmap.v2.title'), 
      status: 'planned',
      date: '2024-12'
    }
  ];

  const team = [
    {
      name: 'Guizimo',
      role: t('aboutPage.team.guizimo.role'),
      description: t('aboutPage.team.guizimo.description'),
      avatar: '/avatars/guizimo.jpg',
      social: {
        github: 'https://github.com/guizimo',
        email: '17680262548@163.com'
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1] mb-6">
              {t('aboutPage.hero.title')}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('aboutPage.hero.description')}
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-30 blur-3xl" />
      </section>

      {/* Mission Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
              {t('aboutPage.mission.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('aboutPage.mission.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">{t('aboutPage.values.performance.title')}</h3>
                <p className="text-white/60 leading-relaxed">{t('aboutPage.values.performance.description')}</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">{t('aboutPage.values.userFirst.title')}</h3>
                <p className="text-white/60 leading-relaxed">{t('aboutPage.values.userFirst.description')}</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">{t('aboutPage.values.openSource.title')}</h3>
                <p className="text-white/60 leading-relaxed">{t('aboutPage.values.openSource.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-24 bg-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
              {t('aboutPage.techStack.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('aboutPage.techStack.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium">{tech.name}</h3>
                  <span className="text-sm text-white/40 bg-white/10 px-2 py-1 rounded">v{tech.version}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
              {t('aboutPage.team.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('aboutPage.team.description')}
            </p>
          </div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative group mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
                  <div className="relative w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-white/10">
                    <Users className="h-16 w-16 text-white/60" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <p className="text-white/60 mb-2">{member.role}</p>
                <p className="text-white/40 text-sm mb-4 max-w-sm">{member.description}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.social.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-white/40 hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative py-24 bg-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
              {t('aboutPage.roadmap.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('aboutPage.roadmap.description')}
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  {milestone.status === 'completed' ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : milestone.status === 'in-progress' ? (
                    <div className="h-6 w-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                  ) : (
                    <Circle className="h-6 w-6 text-white/30" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-medium">{milestone.version}</h3>
                    <span className="text-xs text-white/40 bg-white/10 px-2 py-1 rounded">{milestone.date}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      milestone.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-white/10 text-white/40'
                    }`}>
                      {t(`aboutPage.roadmap.status.${milestone.status}`)}
                    </span>
                  </div>
                  <p className="text-white/60">{milestone.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
            {t('aboutPage.cta.title')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('aboutPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/generator">
              <Button size="lg" className="h-12 px-6 bg-white text-black hover:bg-white/90 rounded-lg">
                {t('aboutPage.cta.getStarted')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://github.com/guizimo/cova" target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-lg"
              >
                <Github className="mr-2 h-4 w-4" />
                {t('aboutPage.cta.viewSource')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 