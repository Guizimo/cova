import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Github, 
  Twitter, 
  ArrowRight, 
  MessageCircle, 
  Book, 
  Users, 
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      title: t('contactPage.contactMethods.email.title'),
      description: t('contactPage.contactMethods.email.description'),
      action: t('contactPage.contactMethods.email.action'),
      address: t('contactPage.contactMethods.email.address'),
      href: `mailto:${t('contactPage.contactMethods.email.address')}`,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Github,
      title: t('contactPage.contactMethods.github.title'),
      description: t('contactPage.contactMethods.github.description'),
      action: t('contactPage.contactMethods.github.action'),
      address: t('contactPage.contactMethods.github.link'),
      href: 'https://github.com/guizimo/cova',
      color: 'from-gray-500/20 to-slate-500/20'
    },
    {
      icon: Twitter,
      title: t('contactPage.contactMethods.twitter.title'),
      description: t('contactPage.contactMethods.twitter.description'),
      action: t('contactPage.contactMethods.twitter.action'),
      address: t('contactPage.contactMethods.twitter.handle'),
      href: 'https://twitter.com/cova_design',
      color: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  const supportChannels = [
    {
      icon: Book,
      title: t('contactPage.support.channels.0.title'),
      description: t('contactPage.support.channels.0.description'),
      link: t('contactPage.support.channels.0.link')
    },
    {
      icon: Users,
      title: t('contactPage.support.channels.1.title'),
      description: t('contactPage.support.channels.1.description'),
      link: t('contactPage.support.channels.1.link')
    },
    {
      icon: Play,
      title: t('contactPage.support.channels.2.title'),
      description: t('contactPage.support.channels.2.description'),
      link: t('contactPage.support.channels.2.link')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1] mb-6">
              {t('contactPage.hero.title')}
            </h1>
            <p className="text-2xl text-white/60 mb-4">
              {t('contactPage.hero.subtitle')}
            </p>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              {t('contactPage.hero.description')}
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-30 blur-3xl" />
      </section>

      {/* Contact Methods */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] transition-all duration-300 p-8 border border-white/[0.08]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors mb-6">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">{method.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{method.description}</p>
                  <div className="mb-6">
                    <p className="text-sm text-white/50 mb-1">Contact:</p>
                    <p className="text-white/90 font-mono text-sm">{method.address}</p>
                  </div>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Link */}
      <section className="w-full py-24 border-y border-white/[0.08]">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="text-center bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl p-12 border border-white/[0.08]">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4">
              {t('contactPage.faqQuickLink.title')}
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              {t('contactPage.faqQuickLink.description')}
            </p>
            <Link to="/faq">
              <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-lg">
                {t('contactPage.faqQuickLink.viewFaq')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4">
              {t('contactPage.support.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {t('contactPage.support.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <Link
                key={index}
                to={channel.link}
                className="group relative p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.08] group-hover:bg-white/[0.12] transition-colors">
                    <channel.icon className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">{channel.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-6">
              {t('contactPage.cta.title')}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              {t('contactPage.cta.description')}
            </p>
            <Link to="/generator">
              <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-lg">
                {t('contactPage.cta.getStarted')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 