import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  HelpCircle,
  Shield,
  Settings,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface Question {
  question: string;
  answer: string;
}

interface Category {
  title: string;
  questions: Question[];
}

export default function FAQ() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = {
    general: t('faqPage.categories.general', { returnObjects: true }) as Category,
    privacy: t('faqPage.categories.privacy', { returnObjects: true }) as Category,
    features: t('faqPage.categories.features', { returnObjects: true }) as Category,
    technical: t('faqPage.categories.technical', { returnObjects: true }) as Category,
  };

  const categoryIcons = {
    general: HelpCircle,
    privacy: Shield,
    features: Settings,
    technical: MessageCircle,
  };

  const categoryColors = {
    general: 'from-blue-500/20 to-cyan-500/20',
    privacy: 'from-green-500/20 to-emerald-500/20',
    features: 'from-purple-500/20 to-pink-500/20',
    technical: 'from-orange-500/20 to-red-500/20',
  };

  const toggleFaq = (categoryKey: string, questionIndex: number) => {
    const faqId = `${categoryKey}-${questionIndex}`;
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  const filteredCategories = Object.entries(categories).map(([key, category]) => ({
    key,
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1] mb-6">
              {t('faqPage.hero.title')}
            </h1>
            <p className="text-2xl text-white/60 mb-8">
              {t('faqPage.hero.subtitle')}
            </p>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
              {t('faqPage.hero.description')}
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/40" />
              </div>
              <input
                type="text"
                placeholder={t('faqPage.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-30 blur-3xl" />
      </section>

      {/* FAQ Categories */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          {filteredCategories.length > 0 ? (
            <div className="space-y-16">
              {filteredCategories.map((category) => {
                const IconComponent = categoryIcons[category.key as keyof typeof categoryIcons];
                const colorClass = categoryColors[category.key as keyof typeof categoryColors];
                
                return (
                  <div key={category.key} className="relative">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClass} border border-white/[0.1]`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-medium text-white">{category.title}</h2>
                    </div>
                    
                    {/* Questions */}
                    <div className="space-y-4">
                      {category.questions.map((faq, index) => {
                        const faqId = `${category.key}-${index}`;
                        const isOpen = openFaq === faqId;
                        
                        return (
                          <div
                            key={index}
                            className="border border-white/[0.08] rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                          >
                            <button
                              onClick={() => toggleFaq(category.key, index)}
                              className="w-full px-6 py-5 text-left flex items-center justify-between hover:text-white/90 transition-colors"
                            >
                              <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-white/60 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-5">
                                <div className="border-t border-white/[0.08] pt-4">
                                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            searchTerm && (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/[0.05] flex items-center justify-center">
                  <Search className="w-8 h-8 text-white/40" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{t('faqPage.search.noResults')}</h3>
                <p className="text-white/60 mb-6">{t('faqPage.search.noResultsDescription')}</p>
                <Button
                  onClick={() => setSearchTerm('')}
                  variant="outline"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  {t('faqPage.search.clearSearch')}
                </Button>
              </div>
            )
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-24 border-t border-white/[0.08]">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="text-center bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl p-12 border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4">
              {t('faqPage.contact.title')}
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              {t('faqPage.contact.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-lg">
                {t('faqPage.contact.contactUs')}
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